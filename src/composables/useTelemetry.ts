// import { usePlausible } from "v-plausible/vue";
import Plausible from "plausible-tracker";

type Eventprops = Record<string, string>;

const plausible = Plausible({
  domain: "govgen-governance-dapp.netlify.app",
  trackLocalhost: true,
});

const useTelemetry = () => {
  const { trackEvent, enableAutoPageviews } = plausible;

  const logEvent = (eventName: string, eventOptions?: Eventprops) => {
    trackEvent(eventName, { props: eventOptions });
  };

  const logPageviews = () => enableAutoPageviews();

  return { logEvent, logPageviews };
};

export { useTelemetry };
