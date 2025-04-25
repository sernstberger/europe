import { format } from "date-fns";
import { ActivityCard } from "@/components/ActivityCard";
import WeekdayHeader from "@/components/WeekdayHeader";
import CalendarDayCard from "@/components/CalendarDayCard";

const activities = [
  {
    date: new Date("8-29-2025"),
    location: ["Indianapolis", "Amsterdam"],
    activities: ["Flight to Amsterdam"],
  },
  {
    date: new Date("8-30-2025"),
    location: ["Amsterdam"],
    activities: ["Canal cruise", "Rijksmuseum", "Explore Jordaan neighborhood"],
  },
  {
    date: new Date("8-31-2025"),
    location: ["Amsterdam"],
    activities: ["Anne Frank House", "Van Gogh Museum"],
  },
  {
    date: new Date("9-1-2025"),
    location: ["Amsterdam"],
    activities: [
      "Day trip to Zaanse Schans windmills",
      "Visit Volendam fishing village",
    ],
  },
  {
    date: new Date("9-2-2025"),
    location: ["Amsterdam"],
    activities: [
      "Vondelpark",
      "Albert Cuyp Market",
      "NDSM Wharf artsy district",
    ],
  },
  {
    date: new Date("9-3-2025"),
    location: ["Amsterdam", "London"],
    activities: ["Morning train Amsterdam to London", "Work 2-10pm"],
  },
  {
    date: new Date("9-4-2025"),
    location: ["London"],
    activities: ["Work 2-10pm"],
  },
  {
    date: new Date("9-5-2025"),
    location: ["London"],
    activities: ["Work 2-10pm"],
  },
  {
    date: new Date("9-6-2025"),
    location: ["London"],
    activities: ["Tower of London", "British Museum", "Hyde Park walk"],
  },
  {
    date: new Date("9-7-2025"),
    location: ["London"],
    activities: ["Westminster Abbey", "Buckingham Palace", "London Eye"],
  },
  {
    date: new Date("9-8-2025"),
    location: ["London", "Rome"],
    activities: ["Flight to Rome"],
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
    activities: ["Train to Florence", "Statue of David"],
  },
  {
    date: new Date("9-13-2025"),
    location: ["Florence"],
    activities: ["Day trip to Pisa and Cinque Terre"],
  },
  {
    date: new Date("9-14-2025"),
    location: ["Florence"],
    activities: ["Uffizi Gallery", "Ponte Vecchio", "Boboli Gardens"],
  },
  {
    date: new Date("9-15-2025"),
    location: ["Florence", "Venice"],
    activities: ["Train to Venice"],
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
  },
  {
    date: new Date("9-22-2025"),
    location: ["St. Moritz", "Zermatt"],
    activities: ["Glacier Express (~8 hrs)", "Dinner in Zermatt"],
  },
  {
    date: new Date("9-23-2025"),
    location: ["Zermatt", "Paris"],
    activities: [
      "Train to Geneva",
      "Lunch in Geneva?",
      "High speed train to Paris",
    ],
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
