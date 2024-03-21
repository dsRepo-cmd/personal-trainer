import { HeadingI } from "../lib/types";

interface TrainingScheduleTimeSlot {
  id: number;
  time: string;
  oddWeek: boolean;
  evenWeek: boolean;
}

interface TrainingSchedulePlan {
  id: number;
  day: string;
  timeSlots: TrainingScheduleTimeSlot[];
}
interface TrainingScheduleInfo {
  id: number;
  text: string;
  asterisks: string;
}

export interface TrainingSchedule {
  heading: HeadingI;
  schedule: TrainingSchedulePlan[];
  info?: TrainingScheduleInfo[];
}

export const trainingSchedule: TrainingSchedule = {
  heading: {
    title: "MY TRAINING SCHEDULE",
    paragraphs: [
      {
        id: 1,
        text: "All my class courses are being held weekly in the following days & hours:",
      },
    ],
  },

  info: [
    { id: 1, text: "Odd Week ", asterisks: "* " },
    { id: 2, text: "Even Week ", asterisks: "** " },
  ],

  schedule: [
    {
      id: 1,
      day: "MONDAY",
      timeSlots: [
        { id: 1, time: "10:00 - 13:00", oddWeek: false, evenWeek: false },
        { id: 2, time: "14:00", oddWeek: false, evenWeek: true },
      ],
    },
    {
      id: 2,
      day: "TUESDAY",
      timeSlots: [
        { id: 4, time: "10:00 - 12:00", oddWeek: false, evenWeek: true },
        { id: 5, time: "15:00 - 16:00", oddWeek: true, evenWeek: false },
      ],
    },
    {
      id: 3,
      day: "WEDNESDAY",
      timeSlots: [
        { id: 6, time: "10:00 - 14:00", oddWeek: true, evenWeek: false },
        { id: 7, time: "15:00", oddWeek: false, evenWeek: true },
      ],
    },
    {
      id: 4,
      day: "THURSDAY",
      timeSlots: [
        { id: 8, time: "10:00 - 12:00", oddWeek: false, evenWeek: false },
        { id: 9, time: "14:00 - 16:00", oddWeek: true, evenWeek: false },
      ],
    },
    {
      id: 5,
      day: "FRIDAY",
      timeSlots: [
        { id: 11, time: "10:00 - 14:00", oddWeek: false, evenWeek: false },
        { id: 5, time: "15:00 - 16:00", oddWeek: true, evenWeek: false },
      ],
    },
  ],
};
