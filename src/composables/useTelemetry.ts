/***
 * Plausible tracker API - 0.3.8: https://github.com/plausible/plausible-tracker/tree/master/src/lib
 */
type Eventprops = Record<string, string>;
type PlausibleInitOptions = {
  readonly hashMode?: boolean;
  readonly trackLocalhost?: boolean;
  readonly domain?: Location["hostname"];
  readonly apiHost?: string;
};
type PlausibleEventData = {
  readonly url?: Location["href"];
  readonly referrer?: Document["referrer"] | null;
  readonly deviceWidth?: Window["innerWidth"];
};
type PlausibleOptions = PlausibleInitOptions & PlausibleEventData;
type TrackEvent = (eventName: string, options?: EventOptions, eventData?: PlausibleOptions) => void;
type TrackPageview = (eventData?: PlausibleOptions, options?: EventOptions) => void;
type Cleanup = () => void;

type EventPayload = {
  readonly n: string;
  readonly u: Location["href"];
  readonly d: Location["hostname"];
  readonly r: Document["referrer"] | null;
  readonly w: Window["innerWidth"];
  readonly h: 1 | 0;
  readonly p?: string;
};

type EventOptions = {
  readonly callback?: () => void;
  readonly props?: { readonly [propName: string]: string | number | boolean };
};

type EnableAutoPageviews = () => Cleanup;
type EnableAutoOutboundTracking = (targetNode?: Node & ParentNode, observerInit?: MutationObserverInit) => Cleanup;

/***
 * FUNC: Plausible API
 */
function sendEvent(eventName: string, data: Required<PlausibleOptions>, options?: EventOptions): void {
  const isLocalhost =
    /^localhost$|^127(?:\.[0-9]+){0,2}\.[0-9]+$|^(?:0*:)*?:?0*1$/.test(location.hostname) ||
    location.protocol === "file:";

  if (!data.trackLocalhost && isLocalhost) {
    return console.warn("[Plausible] Ignoring event because website is running locally");
  }

  try {
    if (window.localStorage.plausible_ignore === "true") {
      return console.warn('[Plausible] Ignoring event because "plausible_ignore" is set to "true" in localStorage');
    }
  } catch (e) {
    null;
  }

  const payload: EventPayload = {
    n: eventName,
    u: data.url,
    d: data.domain,
    r: data.referrer,
    w: data.deviceWidth,
    h: data.hashMode ? 1 : 0,
    p: options && options.props ? JSON.stringify(options.props) : undefined,
  };

  const req = new XMLHttpRequest();
  req.open("POST", `${data.apiHost}/api/event`, true);
  req.setRequestHeader("Content-Type", "text/plain");
  req.send(JSON.stringify(payload));

  req.onreadystatechange = () => {
    if (req.readyState !== 4) return;
    if (options && options.callback) {
      options.callback();
    }
  };
}

function Plausible(defaults?: PlausibleInitOptions): {
  readonly trackEvent: TrackEvent;
  readonly trackPageview: TrackPageview;
  readonly enableAutoPageviews: EnableAutoPageviews;
  readonly enableAutoOutboundTracking: EnableAutoOutboundTracking;
} {
  const getConfig = (): Required<PlausibleOptions> => ({
    hashMode: false,
    trackLocalhost: false,
    url: location.href,
    domain: location.hostname,
    referrer: document.referrer || null,
    deviceWidth: window.innerWidth,
    apiHost: "https://plausible.io",
    ...defaults,
  });

  const trackEvent: TrackEvent = (eventName, options, eventData) => {
    sendEvent(eventName, { ...getConfig(), ...eventData }, options);
  };

  const trackPageview: TrackPageview = (eventData, options) => {
    trackEvent("pageview", options, eventData);
  };

  const enableAutoPageviews: EnableAutoPageviews = () => {
    const page = () => trackPageview();
    // Attach pushState and popState listeners
    const originalPushState = history.pushState;
    if (originalPushState) {
      history.pushState = function (data, title, url) {
        originalPushState.apply(this, [data, title, url]);
        page();
      };
      addEventListener("popstate", page);
    }

    // Attach hashchange listener
    if (defaults && defaults.hashMode) {
      addEventListener("hashchange", page);
    }

    // Trigger first page view
    trackPageview();

    return function cleanup() {
      if (originalPushState) {
        history.pushState = originalPushState;
        removeEventListener("popstate", page);
      }
      if (defaults && defaults.hashMode) {
        removeEventListener("hashchange", page);
      }
    };
  };

  const enableAutoOutboundTracking: EnableAutoOutboundTracking = (
    targetNode: Node & ParentNode = document,
    observerInit: MutationObserverInit = {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ["href"],
    },
  ) => {
    function trackClick(this: HTMLAnchorElement, event: MouseEvent) {
      trackEvent("Outbound Link: Click", { props: { url: this.href } });

      if (!(typeof process !== "undefined" && process && process.env.NODE_ENV === "test")) {
        setTimeout(() => {
          location.href = this.href;
        }, 150);
      }

      event.preventDefault();
    }

    const tracked: Set<HTMLAnchorElement> = new Set();

    function addNode(node: Node | ParentNode) {
      if (node instanceof HTMLAnchorElement) {
        if (node.host !== location.host) {
          node.addEventListener("click", trackClick);
          tracked.add(node);
        }
      } /* istanbul ignore next */ else if ("querySelectorAll" in node) {
        node.querySelectorAll("a").forEach(addNode);
      }
    }

    function removeNode(node: Node | ParentNode) {
      if (node instanceof HTMLAnchorElement) {
        node.removeEventListener("click", trackClick);
        tracked.delete(node);
      } /* istanbul ignore next */ else if ("querySelectorAll" in node) {
        node.querySelectorAll("a").forEach(removeNode);
      }
    }

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes") {
          // Handle changed href
          removeNode(mutation.target);
          addNode(mutation.target);
        } /* istanbul ignore next */ else if (mutation.type === "childList") {
          mutation.addedNodes.forEach(addNode);
          mutation.removedNodes.forEach(removeNode);
        }
      });
    });

    // Track existing nodes
    targetNode.querySelectorAll("a").forEach(addNode);

    // Observe mutations
    observer.observe(targetNode, observerInit);

    return function cleanup() {
      tracked.forEach((a) => {
        a.removeEventListener("click", trackClick);
      });
      tracked.clear();
      observer.disconnect();
    };
  };

  return {
    trackEvent,
    trackPageview,
    enableAutoPageviews,
    enableAutoOutboundTracking,
  };
}

/***
 * COMPOSABLE: Plausible config
 */
const plausible = Plausible({
  domain: "govgen-governance-dapp.netlify.app",
  trackLocalhost: true,
});

/***
 * COMPOSABLE: useTelemetry
 */
const useTelemetry = () => {
  const { trackEvent, enableAutoPageviews, enableAutoOutboundTracking } = plausible;

  const logEvent = (eventName: string, eventOptions?: Eventprops) => {
    trackEvent(eventName, { props: eventOptions });
  };

  const logPageviews = () => enableAutoPageviews();
  const logOutboundlinks = () => enableAutoOutboundTracking();

  return { logEvent, logPageviews, logOutboundlinks };
};

export { useTelemetry };
