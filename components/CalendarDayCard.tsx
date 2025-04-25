import { Card } from "@/components/ui/card";
import { format } from "date-fns";
import React from "react";

export default function CalendarDayCard({ date }: { date: Date }) {
  return <Card className="border border-black p-1">{format(date, "d")}</Card>;
}
