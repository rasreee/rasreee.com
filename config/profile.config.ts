import type { MonthYear } from "lib/utility-types/timeline";

export type ProfileConfig = {
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
};

export const profileConfig = {
  description:
    "Product-focused engineer. Helping teams build core software from the ground up.",
  lastWorked: {
    position: "Product Engineer",
    at: "Ampersand",
    start: {
      month: "February",
      year: 2021,
    },
    end: {
      month: "February",
      year: 2022,
    },
  },
  studied: {
    major: "Data Science",
    at: "UC Berkeley",
    start: {
      month: "August",
      year: 2016,
    },
    end: {
      month: "May",
      year: 2020,
    },
  },
};
