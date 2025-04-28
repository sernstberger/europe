import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRightIcon, HotelIcon, MapPinIcon, PlaneIcon, TrainIcon, TicketIcon } from "lucide-react";
import React from "react";

interface Activity {
  date: Date;
  location: string[];
  activities: string[];
  flightUrl?: string;
  hotelUrl?: string;
  trainUrl?: string;
  activityUrls?: { name: string; url: string }[];
  estimatedCosts: {
    transport: number;
    lodging: number;
    activities: number;
    food: number;
  };
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
        <div className="space-y-1">
          {activity.activities.map((_activity) => (
            <Card key={_activity} className="border border-gray-300 p-1">
              <p className="text-sm">{_activity}</p>
            </Card>
          ))}
        </div>
      )}
      <div className="mt-2 space-y-1">
        {activity.flightUrl && (
          <a href={activity.flightUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-blue-600 hover:underline">
            <PlaneIcon className="w-4 h-4 mr-1" />
            Book Flight
          </a>
        )}
        {activity.hotelUrl && (
          <a href={activity.hotelUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-blue-600 hover:underline">
            <HotelIcon className="w-4 h-4 mr-1" />
            Book Hotel
          </a>
        )}
        {activity.trainUrl && (
          <a href={activity.trainUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-blue-600 hover:underline">
            <TrainIcon className="w-4 h-4 mr-1" />
            Book Train
          </a>
        )}
        {activity.activityUrls?.map(({ name, url }) => (
          <a key={url} href={url} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-blue-600 hover:underline">
            <TicketIcon className="w-4 h-4 mr-1" />
            {name}
          </a>
        ))}
      </div>
      <div className="mt-2 text-sm">
        <p>Transport: ${activity.estimatedCosts.transport}</p>
        <p>Lodging: ${activity.estimatedCosts.lodging}</p>
        <p>Activities: ${activity.estimatedCosts.activities}</p>
        <p>Food: ${activity.estimatedCosts.food}</p>
      </div>
    </div>
  );
}
