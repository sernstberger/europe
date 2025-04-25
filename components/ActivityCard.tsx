import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRightIcon } from "lucide-react";
import React from "react";
interface Activity {
  date: Date;
  location: string[];
  activities?: string;
  travelPlan?: string;
}

export function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <Card className="border border-black p-2">
      <div className="text-2xl font-bold">{format(activity.date, "M/dd")}</div>
      <div className="flex flex-row items-center">
        {activity.location.map((location, index) => (
          <span key={location} className="flex flex-row items-center">
            <span className="inline">{location}</span>
            {index < activity.location.length - 1 && (
              <span>
                <ArrowRightIcon className="w-3 h-3 inline" />
              </span>
            )}
          </span>
        ))}
      </div>
      {activity.activities && <p>{activity.activities}</p>}
      {activity.travelPlan ? (
        <p>{activity.travelPlan}</p>
      ) : (
        <a
          // href={`https://www.google.com/travel/hotels/${activity.location[0]}`}
          href={`https://www.hotels.com/Hotel-Search?destination=${
            activity.location[0]
          }&flexibility=0_DAY&d1=${format(
            activity.date,
            "yyyy-MM-dd"
          )}  &startDate=${format(activity.date, "yyyy-MM-dd")}&d2=${format(
            activity.date,
            "yyyy-MM-dd"
          )}&endDate=${format(activity.date, "yyyy-MM-dd")}&adults=2&rooms`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Find Hotel
        </a>
      )}
    </Card>
  );
}
