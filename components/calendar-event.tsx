import { format } from "date-fns"
import { cn } from "@/lib/utils"

interface CalendarEventProps {
  event: {
    id: number
    title: string
    date: Date
    endDate: Date
    type: "work" | "personal" | "social"
  }
}

export function CalendarEvent({ event }: CalendarEventProps) {
  const getEventTypeStyles = (type: string) => {
    switch (type) {
      case "work":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "personal":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "social":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div
      className={cn("px-2 py-1 text-xs rounded border truncate", getEventTypeStyles(event.type))}
      title={`${event.title} - ${format(event.date, "h:mm a")} to ${format(event.endDate, "h:mm a")}`}
    >
      {format(event.date, "h:mm a")} {event.title}
    </div>
  )
}
