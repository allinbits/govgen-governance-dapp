import { usePlausible } from "v-plausible/vue";

type Eventprops = Record<string, string>;

const useTelemetry = () => {
  const { trackEvent } = usePlausible();

  const logEvent = (eventName: string, eventOptions?: Eventprops) => {
    trackEvent(eventName, { props: eventOptions });
  };

  return { logEvent };
};

export { useTelemetry };
