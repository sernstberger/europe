import { format } from "date-fns";
import { Card } from "@/components/ui/card";
import { ArrowRightIcon } from "lucide-react";
const activities = [
  {
    date: new Date("8-29-2025"),
    location: ["Indianapolis", "Amsterdam"],
  },
  {
    date: new Date("8-30-2025"),
    location: ["Amsterdam"],
  },
  {
    date: new Date("8-31-2025"),
    location: ["Amsterdam"],
    activities: "Anne Frank House",
  },
  {
    date: new Date("9-1-2025"),
    location: ["Amsterdam"],
  },
  {
    date: new Date("9-2-2025"),
    location: ["Amsterdam"],
  },
  {
    date: new Date("9-3-2025"),
    location: ["Amsterdam", "London"],
    activities: "Work 2–10pm",
  },
  {
    date: new Date("9-4-2025"),
    location: ["London"],
    activities: "Work 2–10pm",
  },
  {
    date: new Date("9-5-2025"),
    location: ["London"],
    activities: "Work 2–10pm",
  },
  {
    date: new Date("9-6-2025"),
    location: ["London"],
  },
  {
    date: new Date("9-7-2025"),
    location: ["London"],
  },
  {
    date: new Date("9-8-2025"),
    location: ["London", "Rome"],
  },
  {
    date: new Date("9-9-2025"),
    location: ["Rome"],
  },
  {
    date: new Date("9-10-2025"),
    location: ["Rome"],
  },
  {
    date: new Date("9-11-2025"),
    location: ["Rome"],
  },
  {
    date: new Date("9-12-2025"),
    location: ["Rome", "Florence/Tuscany/Pisa"],
  },
  {
    date: new Date("9-13-2025"),
    location: ["Florence/Tuscany/Pisa"],
  },
  {
    date: new Date("9-14-2025"),
    location: ["Florence/Tuscany/Pisa"],
  },
  {
    date: new Date("9-15-2025"),
    location: ["Florence/Tuscany/Pisa", "Venice"],
  },
  {
    date: new Date("9-16-2025"),
    location: ["Venice"],
  },
  {
    date: new Date("9-17-2025"),
    location: ["Venice", "Berlin"],
  },
  {
    date: new Date("9-18-2025"),
    location: ["Berlin"],
  },
  {
    date: new Date("9-19-2025"),
    location: ["Berlin", "Munich"],
  },
  {
    date: new Date("9-20-2025"),
    location: ["Munich", "Neuschwanstein"],
    activities: "Neuschwanstein day trip; Oktoberfest in the evening",
  },
  {
    date: new Date("9-21-2025"),
    location: ["Munich", "St. Moritz"],
  },
  {
    date: new Date("9-22-2025"),
    location: ["St. Moritz", "Zermatt"],
    activities: "Glacier Express (~8 hrs)",
  },
  {
    date: new Date("9-23-2025"),
    location: ["Zermatt", "Paris"],
  },
  {
    date: new Date("9-24-2025"),
    location: ["Paris"],
  },
  {
    date: new Date("9-25-2025"),
    location: ["Paris"],
  },
  {
    date: new Date("9-26-2025"),
    location: ["Paris"],
  },
  {
    date: new Date("9-27-2025"),
    location: ["Paris", "Indianapolis"],
  },
];

export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto py-6 px-4">
        <div className="grid grid-cols-7 gap-4">
          <Card className="border border-gray p-1">Sunday</Card>
          <Card className="border border-gray p-1">Monday</Card>
          <Card className="border border-gray p-1">Tuesday</Card>
          <Card className="border border-gray p-1">Wednesday</Card>
          <Card className="border border-gray p-1">Thursday</Card>
          <Card className="border border-gray p-1">Friday</Card>
          <Card className="border border-gray p-1">Saturday</Card>

          <Card className="border border-black p-1">
            {format(new Date("8-24-2025"), "d")}
          </Card>
          <Card className="border border-black p-1">
            {format(new Date("8-25-2025"), "d")}
          </Card>
          <Card className="border border-black p-1">
            {format(new Date("8-26-2025"), "d")}
          </Card>
          <Card className="border border-black p-1">
            {format(new Date("8-27-2025"), "d")}
          </Card>
          <Card className="border border-black p-1">
            {format(new Date("8-28-2025"), "d")}
          </Card>

          {activities.map((activity) => (
            <Card
              key={format(activity.date, "yyyy-MM-dd")}
              className="border border-black p-2"
            >
              <div className="text-2xl font-bold">
                {format(activity.date, "M/dd")}
              </div>
              <div className="flex flex-row items-center">
                {activity.location.map((location, index) => {
                  return (
                    <span key={location} className="flex flex-row items-center">
                      <span className="inline">{location}</span>
                      {index < activity.location.length - 1 && (
                        <span>
                          <ArrowRightIcon className="w-3 h-3 inline" />
                        </span>
                      )}
                    </span>
                  );
                })}
              </div>
              <p>{activity.activities}</p>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
