import { usePlausible } from "v-plausible/vue";

type Eventprops = Record<string, string>;

const { trackEvent } = usePlausible();
const useTelemetry = () => {
  function logEvent(eventName: string, eventOptions?: Eventprops) {
    trackEvent(eventName, eventOptions ? { props: eventOptions } : undefined);
  }

  return { logEvent };
};

export { useTelemetry };
