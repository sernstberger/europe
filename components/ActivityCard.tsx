import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRightIcon, HotelIcon, MapPinIcon } from "lucide-react";
import React from "react";
interface Activity {
  date: Date;
  location: string[];
  activities?: string[];
  travelPlan?: string;
}

export function ActivityCard({
  activity,
  index,
}: {
  activity: Activity;
  index: number;
}) {
  // every 7th card, add a border-r
  const isLastCard = (index: number) => index % 7 === 6;
  return (
    <div
      className={`border-l border-t ${
        isLastCard(index) ? "border-r" : ""
      } border-black p-2`}
    >
      <div className="text-2xl font-bold">{format(activity.date, "M/dd")}</div>
      <div className="flex flex-row items-center">
        <MapPinIcon className="w-4 h-4 inline" />
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
      {activity.activities && (
        <>
          {activity.activities.map((_activity) => (
            <Card key={_activity} className="border border-gray-300 p-1">
              <p className="text-sm">{_activity}</p>
            </Card>
          ))}
        </>
      )}
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
          <HotelIcon className="w-4 h-4 inline" />
          Find Hotel
        </a>
      )}
    </div>
  );
}
