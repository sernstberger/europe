import { format } from "date-fns";
import { ActivityCard } from "@/components/ActivityCard";
import WeekdayHeader from "@/components/WeekdayHeader";
import CalendarDayCard from "@/components/CalendarDayCard";

const activities = [
  {
    date: new Date("8-29-2025"),
    location: ["Indianapolis", "Amsterdam"],
    activities: ["Flight to Amsterdam"],
    flightUrl: "https://www.google.com/flights?hl=en#flt=IND.AMS.2025-08-29",
    estimatedCosts: { transport: 2050, lodging: 0, activities: 0, food: 165 },
    // no train; flight link above
  },
  {
    date: new Date("8-30-2025"),
    location: ["Amsterdam"],
    activities: [
      "Canal cruise",
      "Rijksmuseum",
      "Explore Jordaan",
      "Vondelpark",
    ],
    hotelUrl:
      "https://www.hotels.com/Hotel-Search?destination=Amsterdam%2C%20Netherlands&startDate=2025-08-30&endDate=2025-09-03&adults=2&rooms=1",
    estimatedCosts: { transport: 0, lodging: 244, activities: 89, food: 165 },
    activityUrls: [
      {
        name: "Canal Cruise",
        url: "https://www.viator.com/tours/Amsterdam/Amsterdam-Canal-Cruise/d57-3501P10",
      },
      {
        name: "Rijksmuseum Tickets",
        url: "https://www.rijksmuseum.nl/en/tickets",
      },
    ],
  },
  {
    date: new Date("8-31-2025"),
    location: ["Amsterdam"],
    activities: ["Anne Frank House", "Van Gogh Museum"],
    estimatedCosts: { transport: 0, lodging: 244, activities: 97, food: 165 },
    activityUrls: [
      {
        name: "Anne Frank House",
        url: "https://www.annefrank.org/en/museum/tickets/",
      },
      {
        name: "Van Gogh Museum",
        url: "https://www.vangoghmuseum.nl/en/tickets",
      },
    ],
  },
  {
    date: new Date("9-1-2025"),
    location: ["Amsterdam"],
    activities: ["Day trip to Zaanse Schans windmills"],
    estimatedCosts: { transport: 0, lodging: 244, activities: 68, food: 165 },
    activityUrls: [
      {
        name: "Zaanse Schans Tour",
        url: "https://www.viator.com/tours/Amsterdam/Zaanse-Schans-Tour/d57-41703P19",
      },
    ],
  },
  {
    date: new Date("9-2-2025"),
    location: ["Amsterdam"],
    activities: ["The Hague: Peace Palace; Ridderzaal"],
    estimatedCosts: { transport: 49, lodging: 244, activities: 33, food: 165 },
    trainUrl: "https://www.nsinternational.com/en",
    activityUrls: [
      {
        name: "Peace Palace & Ridderzaal",
        url: "https://www.ridderzaal.nl/en/visit/",
      },
    ],
  },
  {
    date: new Date("9-3-2025"),
    location: ["Amsterdam", "London"],
    activities: ["Morning train Amsterdam to London", "Work 2-10 pm"],
    hotelUrl:
      "https://www.hotels.com/Hotel-Search?destination=London%2C%20United%20Kingdom&startDate=2025-09-03&endDate=2025-09-08&adults=2&rooms=1",
    estimatedCosts: { transport: 104, lodging: 355, activities: 0, food: 165 },
    trainUrl: "https://www.eurostar.com/uk-en",
  },
  {
    date: new Date("9-4-2025"),
    location: ["London"],
    activities: ["Tower of London (opens 9 am)", "Work 2-10 pm"],
    estimatedCosts: { transport: 0, lodging: 355, activities: 97, food: 165 },
    activityUrls: [
      {
        name: "Tower of London Tickets",
        url: "https://www.hrp.org.uk/tower-of-london/visit/tickets/",
      },
    ],
  },
  {
    date: new Date("9-5-2025"),
    location: ["London"],
    activities: ["British Museum (opens 10 am)", "Work 2-10 pm"],
    estimatedCosts: { transport: 0, lodging: 355, activities: 0, food: 165 },
    activityUrls: [
      {
        name: "British Museum Visit (free, reserve slot)",
        url: "https://www.britishmuseum.org/visit/tickets",
      },
    ],
  },
  {
    date: new Date("9-6-2025"),
    location: ["London"],
    activities: ["Westminster Abbey", "Buckingham Palace", "London Eye"],
    estimatedCosts: { transport: 0, lodging: 355, activities: 200, food: 165 },
    activityUrls: [
      {
        name: "Westminster Abbey Tickets",
        url: "https://www.westminster-abbey.org/visit-us/tickets",
      },
      {
        name: "Buckingham Palace Tickets",
        url: "https://www.rct.uk/visit/the-state-rooms-buckingham-palace",
      },
      { name: "London Eye Tickets", url: "https://www.londoneye.com/tickets" },
    ],
  },
  {
    date: new Date("9-7-2025"),
    location: ["London"],
    activities: ["Full-day tour: Windsor Castle, Stonehenge & Bath"],
    estimatedCosts: { transport: 0, lodging: 355, activities: 230, food: 165 },
    activityUrls: [
      {
        name: "Windsor/Stonehenge/Bath Tour",
        url: "https://www.getyourguide.com/london-l57/windsor-castle-stonehenge-and-bath-full-day-tour-from-london-t165301/",
      },
    ],
  },
  {
    date: new Date("9-8-2025"),
    location: ["London", "Rome"],
    activities: ["Flight to Rome"],
    hotelUrl:
      "https://www.hotels.com/Hotel-Search?destination=Rome%2C%20Italy&startDate=2025-09-08&endDate=2025-09-12&adults=2&rooms=1",
    flightUrl: "https://www.google.com/flights?hl=en#flt=LON.FCO.2025-09-08",
    estimatedCosts: { transport: 200, lodging: 184, activities: 40, food: 165 },
  },
  {
    date: new Date("9-9-2025"),
    location: ["Rome"],
    activities: ["Colosseum", "Roman Forum", "Palatine Hill"],
    estimatedCosts: { transport: 0, lodging: 184, activities: 40, food: 165 },
    activityUrls: [
      {
        name: "Colosseum & Forum Tickets",
        url: "https://www.coopculture.it/en/ticket_office.cfm",
      },
    ],
  },
  {
    date: new Date("9-10-2025"),
    location: ["Rome"],
    activities: ["Vatican Museums", "Sistine Chapel", "St. Peter's Basilica"],
    estimatedCosts: { transport: 0, lodging: 184, activities: 38, food: 165 },
    activityUrls: [
      {
        name: "Vatican Museums Tickets",
        url: "https://tickets.museivaticani.va/",
      },
    ],
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
    estimatedCosts: { transport: 0, lodging: 184, activities: 0, food: 165 },
    // all free, no booking needed
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
    trainUrl: "https://www.trenitalia.com/en.html",
    estimatedCosts: { transport: 32, lodging: 221, activities: 44, food: 165 },
    activityUrls: [
      {
        name: "Galleria dell'Accademia (David)",
        url: "https://www.galleriaaccademiafirenze.beniculturali.it/en/tickets",
      },
      {
        name: "Uffizi Gallery Tickets",
        url: "https://www.uffizi.it/en/tickets",
      },
    ],
  },
  {
    date: new Date("9-13-2025"),
    location: ["Florence"],
    activities: ["Day trip to Pisa and Cinque Terre"],
    estimatedCosts: { transport: 0, lodging: 221, activities: 110, food: 165 },
    activityUrls: [
      {
        name: "Pisa & Cinque Terre Tour",
        url: "https://www.getyourguide.com/s/?q=Pisa%20Cinque%20Terre",
      },
    ],
  },
  {
    date: new Date("9-14-2025"),
    location: ["Florence"],
    activities: ["Tuscany wine tour"],
    estimatedCosts: { transport: 0, lodging: 221, activities: 300, food: 165 },
    activityUrls: [
      {
        name: "Tuscany Wine Tour",
        url: "https://www.getyourguide.com/tuscany-l47/tuscany-small-group-wine-tour-and-cheese-tasting-from-florence-t129986/",
      },
    ],
  },
  {
    date: new Date("9-15-2025"),
    location: ["Florence", "Venice"],
    activities: ["Train to Venice"],
    hotelUrl:
      "https://www.hotels.com/Hotel-Search?destination=Venice%2C%20Italy&startDate=2025-09-15&endDate=2025-09-17&adults=2&rooms=1",
    trainUrl: "https://www.trenitalia.com/en.html",
    estimatedCosts: { transport: 50, lodging: 253, activities: 0, food: 165 },
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
    estimatedCosts: { transport: 0, lodging: 253, activities: 125, food: 165 },
    activityUrls: [
      {
        name: "Doge's Palace Tickets",
        url: "https://www.palazzoducale.visitmuve.it/en/home/",
      },
      {
        name: "Gondola Ride Booking",
        url: "https://www.venicegondola.com/booking",
      },
      {
        name: "ACTV Ferry to Burano",
        url: "https://www.actv.it/en/moving-around/transportation/ferries",
      },
    ],
  },
  {
    date: new Date("9-17-2025"),
    location: ["Venice", "Berlin"],
    activities: ["Flight to Berlin"],
    hotelUrl:
      "https://www.hotels.com/Hotel-Search?destination=Berlin%2C%20Germany&startDate=2025-09-17&endDate=2025-09-19&adults=2&rooms=1",
    flightUrl: "https://www.google.com/flights?hl=en#flt=VCE.BER.2025-09-17",
    estimatedCosts: { transport: 200, lodging: 171, activities: 0, food: 165 },
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
    estimatedCosts: { transport: 0, lodging: 171, activities: 40, food: 165 },
    activityUrls: [
      { name: "Museum Island Pass", url: "https://tickets.visitberlin.de/" },
    ],
  },
  {
    date: new Date("9-19-2025"),
    location: ["Berlin", "Munich"],
    activities: ["Train to Munich"],
    hotelUrl:
      "https://www.hotels.com/Hotel-Search?destination=Munich%2C%20Germany&startDate=2025-09-19&endDate=2025-09-21&adults=2&rooms=1",
    trainUrl: "https://www.bahn.com/en",
    estimatedCosts: { transport: 43, lodging: 152, activities: 0, food: 165 },
  },
  {
    date: new Date("9-20-2025"),
    location: ["Munich", "Neuschwanstein"],
    activities: ["Neuschwanstein day trip", "Oktoberfest in the evening"],
    estimatedCosts: { transport: 0, lodging: 152, activities: 186, food: 165 },
    activityUrls: [
      {
        name: "Neuschwanstein & Oktoberfest Tour",
        url: "https://www.getyourguide.com/fussen-l47/neuschwanstein-castle-and-linderhof-tour-from-munich-t75339/",
      },
    ],
  },
  {
    date: new Date("9-21-2025"),
    location: ["Munich", "St. Moritz"],
    activities: ["Train to St. Moritz", "Dinner in St. Moritz?"],
    hotelUrl:
      "https://www.hotels.com/Hotel-Search?destination=St.%20Moritz%2C%20Switzerland&startDate=2025-09-21&endDate=2025-09-22&adults=2&rooms=1",
    trainUrl: "https://www.sbb.ch/en",
    estimatedCosts: { transport: 242, lodging: 342, activities: 0, food: 165 },
  },
  {
    date: new Date("9-22-2025"),
    location: ["St. Moritz", "Zermatt"],
    activities: ["Glacier Express (~8 hrs)", "Dinner in Zermatt"],
    hotelUrl:
      "https://www.hotels.com/Hotel-Search?destination=Zermatt%2C%20Switzerland&startDate=2025-09-22&endDate=2025-09-23&adults=2&rooms=1",
    trainUrl: "https://www.glacierexpress.ch/en/book/",
    estimatedCosts: { transport: 206, lodging: 351, activities: 0, food: 165 },
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
    trainUrl: "https://www.sncf-connect.com/",
    estimatedCosts: { transport: 66, lodging: 200, activities: 0, food: 165 },
  },
  {
    date: new Date("9-24-2025"),
    location: ["Paris"],
    activities: ["Eiffel Tower", "Arc de Triomphe", "Champs-Élysées"],
    estimatedCosts: { transport: 0, lodging: 200, activities: 86, food: 165 },
    activityUrls: [
      {
        name: "Eiffel Tower Tickets",
        url: "https://www.toureiffel.paris/en/tickets",
      },
      {
        name: "Arc de Triomphe Tickets",
        url: "https://www.paris-arc-de-triomphe.fr/en/ticketing",
      },
    ],
  },
  {
    date: new Date("9-25-2025"),
    location: ["Paris"],
    activities: ["Louvre Museum", "Seine River cruise", "Tuileries Garden"],
    estimatedCosts: { transport: 0, lodging: 200, activities: 81, food: 165 },
    activityUrls: [
      { name: "Louvre Tickets", url: "https://www.ticketlouvre.fr/" },
      {
        name: "Seine River Cruise",
        url: "https://www.bateauxparisiens.com/en",
      },
    ],
  },
  {
    date: new Date("9-26-2025"),
    location: ["Paris"],
    activities: ["Montmartre", "Sacré-Cœur", "Day trip to Versailles"],
    estimatedCosts: { transport: 0, lodging: 200, activities: 60, food: 165 },
    activityUrls: [
      {
        name: "Versailles Tickets",
        url: "https://en.chateauversailles.fr/plan-your-visit/tickets",
      },
    ],
  },
  {
    date: new Date("9-27-2025"),
    location: ["Paris", "Indianapolis"],
    activities: ["Flight back to Indianapolis"],
    flightUrl: "https://www.google.com/flights?hl=en#flt=PAR.IND.2025-09-27",
    estimatedCosts: { transport: 0, lodging: 0, activities: 0, food: 165 },
  },
];

export default function CalendarPage() {
  const totalCosts = activities.reduce((acc, activity) => {
    const { transport, lodging, activities: activityCosts, food } = activity.estimatedCosts;
    return acc + transport + lodging + activityCosts + food;
  }, 0);

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto py-6 px-4">
        <p>Trip estimated costs: ${totalCosts.toLocaleString()}</p>
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
