"use client";

type EventType = "work" | "personal" | "social";

export const events = [
  {
    id: 1,
    title: "Flight from IND to AMS",
    date: new Date(2025, 7, 29, 18, 0), // Aug 29, 2025 6:00pm
    endDate: new Date(2025, 7, 30, 19, 30), // Aug 30, 2025 7:30am
    type: "work",
  },
  {
    id: 2,
    title: "Flight from Rome to IND",
    date: new Date(2025, 8, 28, 9, 0), // Sep 28, 2025 9:00 am
    endDate: new Date(2025, 8, 28, 18, 0), // Sep 28, 2025 6:00pm
    type: "work",
  },
  {
    id: 3,
    title: "Amsterdam",
    date: new Date(2025, 7, 30, 9), // Aug 30, 2025 7:00pm
    endDate: new Date(2025, 7, 30, 23), // Aug 30, 2025 7:00pm
    type: "personal",
  },
  {
    id: 4,
    title: "Amsterdam",
    date: new Date(2025, 7, 31, 9), // Aug 31, 2025 7:00am
    endDate: new Date(2025, 7, 31, 23), // Aug 31, 2025 7:00pm
    type: "personal",
  },
  {
    id: 5,
    title: "Amsterdam",
    date: new Date(2025, 8, 1, 9), // Sep 1, 2025 7:00am
    endDate: new Date(2025, 8, 1, 23), // Sep 1, 2025 7:00pm
    type: "personal",
  },
  {
    id: 6,
    title: "Amsterdam",
    date: new Date(2025, 8, 2, 9), // Sep 2, 2025 7:00am
    endDate: new Date(2025, 8, 2, 23), // Sep 2, 2025 7:00pm
    type: "personal",
  },
  {
    id: 7,
    title: "London",
    date: new Date(2025, 8, 3, 9), // Sep 3, 2025 7:00am
    endDate: new Date(2025, 8, 3, 23), // Sep 3, 2025 7:00pm
    type: "personal",
  },
  {
    id: 72,
    title: "Work Remotely",
    date: new Date(2025, 8, 3, 14), // Sep 3, 2025 2:00pm
    endDate: new Date(2025, 8, 3, 22), // Sep 3, 2025 10:00pm
    type: "work",
  },
  {
    id: 8,
    title: "London",
    date: new Date(2025, 8, 4, 9), // Sep 4, 2025 7:00am
    endDate: new Date(2025, 8, 4, 23), // Sep 4, 2025 7:00pm
    type: "personal",
  },
  {
    id: 82,
    title: "Work Remotely",
    date: new Date(2025, 8, 4, 14), // Sep 4, 2025 2:00pm
    endDate: new Date(2025, 8, 4, 22), // Sep 4, 2025 10:00pm
    type: "work",
  },
  {
    id: 9,
    title: "London",
    date: new Date(2025, 8, 5, 9), // Sep 5, 2025 7:00am
    endDate: new Date(2025, 8, 5, 23), // Sep 5, 2025 7:00pm
    type: "personal",
  },
  {
    id: 92,
    title: "Work Remotely",
    date: new Date(2025, 8, 5, 14), // Sep 5, 2025 2:00pm
    endDate: new Date(2025, 8, 5, 22), // Sep 5, 2025 10:00pm
    type: "work",
  },
  {
    id: 10,
    title: "London",
    date: new Date(2025, 8, 6, 9), // Sep 6, 2025 7:00am
    endDate: new Date(2025, 8, 6, 23), // Sep 6, 2025 7:00pm
    type: "personal",
  },
  {
    id: 11,
    title: "London",
    date: new Date(2025, 8, 7, 9), // Sep 7, 2025 7:00am
    endDate: new Date(2025, 8, 7, 23), // Sep 7, 2025 7:00pm
    type: "personal",
  },
  {
    id: 12,
    title: "Paris",
    date: new Date(2025, 8, 8, 9), // Sep 8, 2025 7:00am
    endDate: new Date(2025, 8, 8, 23), // Sep 8, 2025 7:00pm
    type: "personal",
  },
  {
    id: 13,
    title: "Paris",
    date: new Date(2025, 8, 9, 9), // Sep 9, 2025 7:00am
    endDate: new Date(2025, 8, 9, 23), // Sep 9, 2025 7:00pm
    type: "personal",
  },
  {
    id: 14,
    title: "Paris",
    date: new Date(2025, 8, 10, 9), // Sep 10, 2025 7:00am
    endDate: new Date(2025, 8, 10, 23), // Sep 10, 2025 7:00pm
    type: "personal",
  },
  {
    id: 15,
    title: "Paris",
    date: new Date(2025, 8, 11, 9), // Sep 11, 2025 7:00am
    endDate: new Date(2025, 8, 11, 23), // Sep 11, 2025 7:00pm
    type: "personal",
  },
  {
    id: 16,
    title: "Paris",
    date: new Date(2025, 8, 12, 9), // Sep 12, 2025 7:00am
    endDate: new Date(2025, 8, 12, 23), // Sep 12, 2025 7:00pm
    type: "personal",
  },
  {
    id: 17,
    title: "Paris",
    date: new Date(2025, 8, 13, 9), // Sep 13, 2025 7:00am
    endDate: new Date(2025, 8, 13, 23), // Sep 13, 2025 7:00pm
    type: "personal",
  },
  {
    id: 18,
    title: "Germany",
    date: new Date(2025, 8, 14, 9), // Sep 14, 2025 7:00am
    endDate: new Date(2025, 8, 14, 23), // Sep 14, 2025 7:00pm
    type: "personal",
  },
  {
    id: 19,
    title: "Germany",
    date: new Date(2025, 8, 15, 9), // Sep 15, 2025 7:00am
    endDate: new Date(2025, 8, 15, 23), // Sep 15, 2025 7:00pm
    type: "personal",
  },
  {
    id: 20,
    title: "Germany",
    date: new Date(2025, 8, 16, 9), // Sep 16, 2025 7:00am
    endDate: new Date(2025, 8, 16, 23), // Sep 16, 2025 7:00pm
    type: "personal",
  },
  {
    id: 21,
    title: "Germany",
    date: new Date(2025, 8, 17, 9), // Sep 17, 2025 7:00am
    endDate: new Date(2025, 8, 17, 23), // Sep 17, 2025 7:00pm
    type: "personal",
  },
  {
    id: 22,
    title: "Germany",
    date: new Date(2025, 8, 18, 9), // Sep 18, 2025 7:00am
    endDate: new Date(2025, 8, 18, 23), // Sep 18, 2025 7:00pm
    type: "personal",
  },
  {
    id: 23,
    title: "Glacier Express",
    date: new Date(2025, 8, 19, 9), // Sep 19, 2025 7:00am
    endDate: new Date(2025, 8, 19, 23), // Sep 19, 2025 7:00pm
    type: "personal",
  },
  {
    id: 24,
    title: "Munich for Oktoberfest",
    date: new Date(2025, 8, 20, 9), // Sep 20, 2025 7:00am
    endDate: new Date(2025, 8, 20, 23), // Sep 20, 2025 7:00pm
    type: "personal",
  },
  {
    id: 25,
    title: "Neuschwanstein",
    date: new Date(2025, 8, 21, 9), // Sep 21, 2025 7:00am
    endDate: new Date(2025, 8, 21, 23), // Sep 21, 2025 7:00pm
    type: "personal",
  },
  {
    id: 26,
    title: "Germany",
    date: new Date(2025, 8, 22, 9), // Sep 22, 2025 7:00am
    endDate: new Date(2025, 8, 22, 23), // Sep 22, 2025 7:00pm
    type: "personal",
  },
  {
    id: 27,
    title: "Rome",
    date: new Date(2025, 8, 23, 9), // Sep 23, 2025 7:00am
    endDate: new Date(2025, 8, 23, 23), // Sep 23, 2025 7:00pm
    type: "personal",
  },
  {
    id: 28,
    title: "Rome",
    date: new Date(2025, 8, 24, 9), // Sep 24, 2025 7:00am
    endDate: new Date(2025, 8, 24, 23), // Sep 24, 2025 7:00pm
    type: "personal",
  },
  {
    id: 29,
    title: "Rome",
    date: new Date(2025, 8, 25, 9), // Sep 25, 2025 7:00am
    endDate: new Date(2025, 8, 25, 23), // Sep 25, 2025 7:00pm
    type: "personal",
  },
  {
    id: 30,
    title: "Rome",
    date: new Date(2025, 8, 26, 9), // Sep 26, 2025 7:00am
    endDate: new Date(2025, 8, 26, 23), // Sep 26, 2025 7:00pm
    type: "personal",
  },
  {
    id: 31,
    title: "Rome",
    date: new Date(2025, 8, 27, 9), // Sep 27, 2025 7:00am
    endDate: new Date(2025, 8, 27, 23), // Sep 27, 2025 7:00pm
    type: "personal",
  },
];
