export function trackEvent(view_properties?: {
  website: string;
  [key: string]: string;
}): void;

export function trackEvent(event_name: string, event_data?: EventData): void;

export function trackEvent(...args: any[]) {
  if (isUmami(window.umami)) {
    window.umami.track(...args);
  }
}

function isUmami(value: unknown): value is umami.umami {
  return (
    typeof value === "object" &&
    value !== null &&
    "track" in value &&
    typeof value.track === "function"
  );
}

const EVENT_TYPE = ["link", "navigate", "recommend"] as const;

type EventType = (typeof EVENT_TYPE)[number];

type Dict<TValue = any> = { [key: string]: TValue };

type EventData = { type?: EventType } & Dict<string | number>;
