
export interface ChecklistItem {
  id: string;
  text: string;
  checked: boolean;
}

export interface LocationDetail {
  name: string;
  jp?: string;
  en?: string;
  mapLink?: string;
}

export interface ItineraryItem {
  time: string;
  activity: string;
  jp?: string;
  en?: string;
  note?: string;
  mapLink?: string;
}

// Added optional note property to DailyPlan to support day-level notes (like Plan B) used in constants.ts and App.tsx
export interface DailyPlan {
  date: string;
  title: string;
  spots?: LocationDetail[];
  itinerary: ItineraryItem[];
  todo?: string[];
  note?: string;
}

export interface FoodCategory {
  location: string;
  items: string[];
}

export interface UsefulLink {
  title: string;
  url: string;
  description: string;
  icon?: string;
}