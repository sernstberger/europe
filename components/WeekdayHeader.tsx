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
        <Card key={day} className="border border-gray p-1">
          {day}
        </Card>
      ))}
    </>
  );
}
