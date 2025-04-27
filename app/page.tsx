import { format } from "date-fns";
import { ActivityCard } from "@/components/ActivityCard";
import WeekdayHeader from "@/components/WeekdayHeader";
import CalendarDayCard from "@/components/CalendarDayCard";

const activities = [
  {
    date: new Date("8-29-2025"),
    location: ["Indianapolis", "Amsterdam"],
    activities: ["Flight to Amsterdam"],
    flightUrl:
      "https://www.google.com/flights?hl=en#flt=IND.AMS.2025-08-29*PAR.IND.2025-09-27",
  },
  {
    date: new Date("8-30-2025"),
    location: ["Amsterdam"],
    activities: [
      "Canal cruise",
      "Rijksmuseum",
      "Explore Jordaan neighborhood",
      "Vondelpark",
      "Rijksmuseum",
    ],
    hotelUrl:
      "https://www.hotels.com/Hotel-Search?destination=Amsterdam%2C%20Netherlands&startDate=2025-08-30&endDate=2025-09-03&adults=2&rooms=1",
  },
  {
    date: new Date("8-31-2025"),
    location: ["Amsterdam"],
    activities: ["Anne Frank House", "Van Gogh Museum"],
  },
  {
    date: new Date("9-1-2025"),
    location: ["Amsterdam"],
    activities: ["Day trip to Zaanse Schans windmills"],
  },
  {
    date: new Date("9-2-2025"),
    location: ["Amsterdam"],
    activities: ["The Hague: Peace Palace; Ridderzaal;"],
  },
  {
    date: new Date("9-3-2025"),
    location: ["Amsterdam", "London"],
    activities: ["Morning train Amsterdam to London", "Work 2-10pm"],
    hotelUrl:
      "https://www.hotels.com/Hotel-Search?destination=London%2C%20United%20Kingdom&startDate=2025-09-03&endDate=2025-09-08&adults=2&rooms=1",
  },
  {
    date: new Date("9-4-2025"),
    location: ["London"],
    activities: ["Morning: Tower of London (opens 9am)", "Work 2-10pm"],
  },
  {
    date: new Date("9-5-2025"),
    location: ["London"],
    activities: ["Morning: British Museum (opens 10am)", "Work 2-10pm"],
  },
  {
    date: new Date("9-6-2025"),
    location: ["London"],
    activities: ["Westminster Abbey", "Buckingham Palace", "London Eye"],
  },
  {
    date: new Date("9-7-2025"),
    location: ["London"],
    activities: ["Full-day tour: Windsor Castle, Stonehenge & Bath"],
  },
  {
    date: new Date("9-8-2025"),
    location: ["London", "Rome"],
    activities: ["Flight to Rome"],
    hotelUrl:
      "https://www.hotels.com/Hotel-Search?destination=Rome%2C%20Italy&startDate=2025-09-08&endDate=2025-09-12&adults=2&rooms=1",
  },
  {
    date: new Date("9-9-2025"),
    location: ["Rome"],
    activities: ["Colosseum", "Roman Forum", "Palatine Hill"],
  },
  {
    date: new Date("9-10-2025"),
    location: ["Rome"],
    activities: ["Vatican Museums", "Sistine Chapel", "St. Peter's Basilica"],
  },
  {
    date: new Date("9-11-2025"),
    location: ["Rome"],
    activities: [
      "Pantheon",
      "Trevi Fountain",
      "Spanish Steps",
      "Piazza Navona",
    ],
  },
  {
    date: new Date("9-12-2025"),
    location: ["Rome", "Florence"],
    activities: [
      "Train to Florence",
      "Statue of David",
      "Uffizi Gallery",
      "Ponte Vecchio",
      "Boboli Gardens",
    ],
    hotelUrl:
      "https://www.hotels.com/Hotel-Search?destination=Florence%2C%20Italy&startDate=2025-09-12&endDate=2025-09-15&adults=2&rooms=1",
  },
  {
    date: new Date("9-13-2025"),
    location: ["Florence"],
    activities: ["Day trip to Pisa and Cinque Terre"],
  },
  {
    date: new Date("9-14-2025"),
    location: ["Florence"],
    activities: ["Tuscany wine tour"],
  },
  {
    date: new Date("9-15-2025"),
    location: ["Florence", "Venice"],
    activities: ["Train to Venice"],
    hotelUrl:
      "https://www.hotels.com/Hotel-Search?destination=Venice%2C%20Italy&startDate=2025-09-15&endDate=2025-09-17&adults=2&rooms=1",
  },
  {
    date: new Date("9-16-2025"),
    location: ["Venice"],
    activities: [
      "St. Mark's Square",
      "Doge's Palace",
      "Gondola ride",
      "Burano island",
    ],
  },
  {
    date: new Date("9-17-2025"),
    location: ["Venice", "Berlin"],
    activities: ["Flight to Berlin"],
    hotelUrl:
      "https://www.hotels.com/Hotel-Search?destination=Berlin%2C%20Germany&startDate=2025-09-17&endDate=2025-09-19&adults=2&rooms=1",
  },
  {
    date: new Date("9-18-2025"),
    location: ["Berlin"],
    activities: [
      "Brandenburg Gate",
      "Reichstag Building",
      "Berlin Wall Memorial",
      "Museum Island",
    ],
  },
  {
    date: new Date("9-19-2025"),
    location: ["Berlin", "Munich"],
    activities: ["Train to Munich"],
    hotelUrl:
      "https://www.hotels.com/Hotel-Search?destination=Munich%2C%20Germany&startDate=2025-09-19&endDate=2025-09-21&adults=2&rooms=1",
  },
  {
    date: new Date("9-20-2025"),
    location: ["Munich", "Neuschwanstein"],
    activities: ["Neuschwanstein day trip", "Oktoberfest in the evening"],
  },
  {
    date: new Date("9-21-2025"),
    location: ["Munich", "St. Moritz"],
    activities: ["Train to St. Moritz", "Dinner in St. Moritz?"],
    hotelUrl:
      "https://www.hotels.com/Hotel-Search?destination=St.%20Moritz%2C%20Switzerland&startDate=2025-09-21&endDate=2025-09-22&adults=2&rooms=1",
  },
  {
    date: new Date("9-22-2025"),
    location: ["St. Moritz", "Zermatt"],
    activities: ["Glacier Express (~8 hrs)", "Dinner in Zermatt"],
    hotelUrl:
      "https://www.hotels.com/Hotel-Search?destination=Zermatt%2C%20Switzerland&startDate=2025-09-22&endDate=2025-09-23&adults=2&rooms=1",
  },
  {
    date: new Date("9-23-2025"),
    location: ["Zermatt", "Paris"],
    activities: [
      "Train to Geneva",
      "Lunch in Geneva?",
      "High speed train to Paris",
    ],
    hotelUrl:
      "https://www.hotels.com/Hotel-Search?destination=Paris%2C%20France&startDate=2025-09-23&endDate=2025-09-27&adults=2&rooms=1",
  },
  {
    date: new Date("9-24-2025"),
    location: ["Paris"],
    activities: ["Eiffel Tower", "Arc de Triomphe", "Champs-Élysées"],
  },
  {
    date: new Date("9-25-2025"),
    location: ["Paris"],
    activities: ["Louvre Museum", "Seine River cruise", "Tuileries Garden"],
  },
  {
    date: new Date("9-26-2025"),
    location: ["Paris"],
    activities: ["Montmartre", "Sacré-Cœur", "Day trip to Versailles"],
  },
  {
    date: new Date("9-27-2025"),
    location: ["Paris", "Indianapolis"],
    activities: ["Flight back to Indianapolis"],
    flightUrl:
      "https://www.google.com/flights?hl=en#flt=IND.AMS.2025-08-29*PAR.IND.2025-09-27",
  },
];

export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto py-6 px-4">
        <div className="grid grid-cols-7">
          <WeekdayHeader />
          <CalendarDayCard date={new Date("8-24-2025")} />
          <CalendarDayCard date={new Date("8-25-2025")} />
          <CalendarDayCard date={new Date("8-26-2025")} />
          <CalendarDayCard date={new Date("8-27-2025")} />
          <CalendarDayCard date={new Date("8-28-2025")} />
          {activities.map((activity) => (
            <ActivityCard
              key={format(activity.date, "yyyy-MM-dd")}
              activity={activity}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
