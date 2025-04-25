import { Card } from "@/components/ui/card";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default function WeekdayHeader() {
  return (
    <>
      {days.map((day) => (
        <div key={day} className="flex items-center justify-center text-sm">
          {day}
        </div>
      ))}
    </>
  );
}
