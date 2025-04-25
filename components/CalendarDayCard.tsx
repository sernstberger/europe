import { Card } from "@/components/ui/card";
import { format } from "date-fns";
import React from "react";

export default function CalendarDayCard({ date }: { date: Date }) {
  return (
    <div className="border-l border-t border-gray-300 p-1 flex">
      {format(date, "d")}
    </div>
  );
}
