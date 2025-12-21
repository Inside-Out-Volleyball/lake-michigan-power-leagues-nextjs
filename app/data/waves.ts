export type Wave = {
  division: string;
  start: string;
  location?: string;
};

export const wavesDecided = true; // Set to true when waves are finalized

export const waveTimes = [
  { wave: "AM", time: "8:00 AM", color: "green" },
  { wave: "PM", time: "3:00 PM", color: "blue" },
];

export const waves: Wave[] = [
  { division: "11 Club", start: "PM" },
  { division: "12 Classic", start: "PM" },
  { division: "12 Club", start: "PM" },
  { division: "12 Premier/Open", start: "PM", location: "DeVos Place" },
  { division: "13 Classic", start: "AM" },
  { division: "13 Aspire", start: "AM" },
  { division: "13 Club", start: "AM" },
  { division: "13 Premier/Open", start: "AM", location: "DeVos Place" },
  { division: "14 Classic", start: "AM" },
  { division: "14 Aspire", start: "AM" },
  { division: "14 Club", start: "AM" },
  { division: "14 Premier", start: "AM", location: "DeVos Place" },
  { division: "14 Open", start: "AM", location: "DeVos Place" },
  { division: "15 Classic", start: "AM" },
  { division: "15 Aspire", start: "AM" },
  { division: "15 Club", start: "AM" },
  { division: "15 Premier", start: "AM", location: "DeVos Place" },
  { division: "15 Open", start: "AM", location: "DeVos Place" },
  { division: "16 Classic", start: "PM" },
  { division: "16 Aspire", start: "PM" },
  { division: "16 Club", start: "PM" },
  { division: "16 Premier", start: "PM", location: "DeVos Place" },
  { division: "16 Open", start: "PM", location: "DeVos Place" },
  { division: "17 Classic", start: "PM" },
  { division: "17 Aspire", start: "PM" },
  { division: "17 Club", start: "PM" },
  { division: "17 Premier", start: "PM", location: "DeVos Place" },
  { division: "17 Open", start: "PM", location: "DeVos Place" },
  { division: "18 Club", start: "PM" },
  { division: "18 Premier", start: "PM", location: "DeVos Place" },
  { division: "18 Open", start: "PM", location: "DeVos Place" },
];
