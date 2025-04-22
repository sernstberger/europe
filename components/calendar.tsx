"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  addMonths,
  format,
  getDay,
  getDaysInMonth,
  isSameDay,
  isToday,
  subMonths,
} from "date-fns";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CalendarEvent } from "./calendar-event";

// Sample events data
const events = [
  {
    id: 1,
    title: "Team Meeting",
    date: new Date(2025, 3, 23, 10, 0),
    endDate: new Date(2025, 3, 23, 11, 30),
    type: "work",
  },
  {
    id: 2,
    title: "Doctor Appointment",
    date: new Date(2025, 3, 25, 14, 0),
    endDate: new Date(2025, 3, 25, 15, 0),
    type: "personal",
  },
  {
    id: 3,
    title: "Birthday Party",
    date: new Date(2025, 3, 28, 18, 0),
    endDate: new Date(2025, 3, 28, 21, 0),
    type: "social",
  },
  {
    id: 4,
    title: "Project Deadline",
    date: new Date(2025, 3, 30, 17, 0),
    endDate: new Date(2025, 3, 30, 17, 0),
    type: "work",
  },
  {
    id: 5,
    title: "Conference Call",
    date: new Date(2025, 4, 2, 9, 0),
    endDate: new Date(2025, 4, 2, 10, 0),
    type: "work",
  },
  {
    id: 6,
    title: "Gym Session",
    date: new Date(2025, 4, 5, 18, 0),
    endDate: new Date(2025, 4, 5, 19, 30),
    type: "personal",
  },
];

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 8, 1));
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 8, 1));

  const handlePreviousMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const handleToday = () => {
    setCurrentDate(new Date());
    setSelectedDate(new Date());
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const startingDayOfWeek = getDay(firstDayOfMonth);

    const calendarDays = [];

    // Add previous month's days
    const prevMonth = subMonths(currentDate, 1);
    const daysInPrevMonth = getDaysInMonth(prevMonth);
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      const day = daysInPrevMonth - i;
      const date = new Date(prevMonth.getFullYear(), prevMonth.getMonth(), day);
      calendarDays.push({ date, isCurrentMonth: false });
    }

    // Add current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day
      );
      calendarDays.push({ date, isCurrentMonth: true });
    }

    // Add next month's days to fill the remaining cells
    const remainingDays = 42 - calendarDays.length; // 6 rows of 7 days
    for (let day = 1; day <= remainingDays; day++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        day
      );
      calendarDays.push({ date, isCurrentMonth: false });
    }

    return calendarDays;
  };

  const calendarDays = generateCalendarDays();

  // Get events for a specific date
  const getEventsForDate = (date) => {
    return events.filter((event) => isSameDay(event.date, date));
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold">
            {format(currentDate, "MMMM yyyy")}
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={handleToday}>
            Today
          </Button>
          <div className="flex">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePreviousMonth}
              className="rounded-r-none"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNextMonth}
              className="rounded-l-none"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-7 border rounded-t-lg bg-muted/50">
        {DAYS.map((day) => (
          <div key={day} className="py-2 text-center font-medium">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 border-x border-b rounded-b-lg flex-1">
        {calendarDays.map(({ date, isCurrentMonth }, index) => {
          const isSelected = isSameDay(date, selectedDate);
          const isTodayDate = isToday(date);
          const dateEvents = getEventsForDate(date);

          return (
            <div
              key={index}
              className={cn(
                "min-h-[100px] p-2 border-r border-b relative",
                index % 7 === 6 && "border-r-0", // Remove right border for last column
                Math.floor(index / 7) === 5 && "border-b-0", // Remove bottom border for last row
                !isCurrentMonth && "text-muted-foreground bg-muted/20"
              )}
              onClick={() => setSelectedDate(date)}
            >
              <div className="flex justify-between items-start">
                <span
                  className={cn(
                    "inline-flex items-center justify-center w-7 h-7 rounded-full text-sm",
                    isSelected &&
                      !isTodayDate &&
                      "bg-primary text-primary-foreground",
                    isTodayDate && "bg-destructive text-destructive-foreground",
                    !isSelected && !isTodayDate && "hover:bg-muted"
                  )}
                >
                  {format(date, "d")}
                </span>
              </div>

              <div className="mt-1 space-y-1 max-h-[80px] overflow-y-auto">
                {dateEvents.map((event) => (
                  <CalendarEvent key={event.id} event={event} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
