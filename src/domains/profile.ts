import type { MonthYear } from "domains/timeline";

export interface Profile {
  description: string;
  lastWorked: {
    position: string;
    at: string;
    start: MonthYear;
    end: MonthYear;
  };
  studied: {
    major: string;
    at: string;
    start: MonthYear;
    end: MonthYear;
  };
}
