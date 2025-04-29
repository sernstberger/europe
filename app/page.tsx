import { format } from "date-fns";
import { ActivityCard } from "@/components/ActivityCard";
import WeekdayHeader from "@/components/WeekdayHeader";
import CalendarDayCard from "@/components/CalendarDayCard";

const activities = [
  {
    date: new Date("8-29-2025"),
    location: ["Indianapolis", "Amsterdam"],
    activities: [
      {
        name: "Flight to Amsterdam",
        url: "https://www.google.com/flights?hl=en#flt=IND.AMS.2025-08-29",
        cost: 2050
      }
    ],
    hotelUrl: "https://www.hotels.com/Hotel-Search?destination=Amsterdam%2C%20Netherlands&startDate=2025-08-30&endDate=2025-09-03&adults=2&rooms=1",
    dailyCosts: { lodging: 244, food: 165 }
  },
  {
    date: new Date("8-30-2025"),
    location: ["Amsterdam"],
    activities: [
      {
        name: "Canal cruise",
        url: "https://www.viator.com/tours/Amsterdam/Amsterdam-Canal-Cruise/d57-3501P10",
        cost: 35
      },
      {
        name: "Rijksmuseum",
        url: "https://www.rijksmuseum.nl/en/tickets",
        cost: 24
      },
      {
        name: "Explore Jordaan",
        cost: 0
      },
      {
        name: "Vondelpark",
        cost: 0
      }
    ],
    hotelUrl: "https://www.hotels.com/Hotel-Search?destination=Amsterdam%2C%20Netherlands&startDate=2025-08-30&endDate=2025-09-03&adults=2&rooms=1",
    dailyCosts: { lodging: 244, food: 165 }
  },
  {
    date: new Date("8-31-2025"),
    location: ["Amsterdam"],
    activities: [
      {
        name: "Anne Frank House",
        url: "https://www.annefrank.org/en/museum/tickets/",
        cost: 16
      },
      {
        name: "Van Gogh Museum",
        url: "https://www.vangoghmuseum.nl/en/tickets",
        cost: 20
      }
    ],
    dailyCosts: { lodging: 244, food: 165 }
  },
  {
    date: new Date("9-1-2025"),
    location: ["Amsterdam"],
    activities: [
      {
        name: "Day trip to Zaanse Schans windmills",
        url: "https://www.viator.com/tours/Amsterdam/Zaanse-Schans-Tour/d57-41703P19",
        cost: 68
      }
    ],
    dailyCosts: { lodging: 244, food: 165 }
  },
  {
    date: new Date("9-2-2025"),
    location: ["Amsterdam"],
    activities: [
      {
        name: "The Hague: Peace Palace; Ridderzaal",
        url: "https://www.ridderzaal.nl/en/visit/",
        cost: 33
      }
    ],
    trainUrl: "https://www.nsinternational.com/en",
    dailyCosts: { transport: 49, lodging: 244, food: 165 }
  },
  {
    date: new Date("9-3-2025"),
    location: ["Amsterdam", "London"],
    activities: [
      {
        name: "Morning train Amsterdam to London",
        url: "https://www.eurostar.com/uk-en",
        cost: 104
      },
      {
        name: "Work 2-10 pm",
        cost: 0
      }
    ],
    hotelUrl: "https://www.hotels.com/Hotel-Search?destination=London%2C%20United%20Kingdom&startDate=2025-09-03&endDate=2025-09-08&adults=2&rooms=1",
    dailyCosts: { lodging: 355, food: 165 }
  },
  {
    date: new Date("9-4-2025"),
    location: ["London"],
    activities: [
      {
        name: "Tower of London (opens 9 am)",
        url: "https://www.hrp.org.uk/tower-of-london/visit/tickets/",
        cost: 33
      },
      {
        name: "Work 2-10 pm",
        cost: 0
      }
    ],
    dailyCosts: { lodging: 355, food: 165 }
  },
  {
    date: new Date("9-5-2025"),
    location: ["London"],
    activities: [
      {
        name: "British Museum (opens 10 am)",
        url: "https://www.britishmuseum.org/visit/tickets",
        cost: 0
      },
      {
        name: "Work 2-10 pm",
        cost: 0
      }
    ],
    dailyCosts: { lodging: 355, food: 165 }
  },
  {
    date: new Date("9-6-2025"),
    location: ["London"],
    activities: [
      {
        name: "Westminster Abbey",
        url: "https://www.westminster-abbey.org/visit-us/tickets",
        cost: 27
      },
      {
        name: "Buckingham Palace",
        url: "https://www.rct.uk/visit/the-state-rooms-buckingham-palace",
        cost: 30
      },
      {
        name: "London Eye",
        url: "https://www.londoneye.com/tickets",
        cost: 35
      }
    ],
    dailyCosts: { lodging: 355, food: 165 }
  },
  {
    date: new Date("9-7-2025"),
    location: ["London"],
    activities: [
      {
        name: "Full-day tour: Windsor Castle, Stonehenge & Bath",
        url: "https://www.getyourguide.com/london-l57/windsor-castle-stonehenge-and-bath-full-day-tour-from-london-t165301/",
        cost: 230
      }
    ],
    dailyCosts: { lodging: 355, food: 165 }
  },
  {
    date: new Date("9-8-2025"),
    location: ["London", "Rome"],
    activities: [
      {
        name: "Flight to Rome",
        url: "https://www.google.com/flights?hl=en#flt=LON.FCO.2025-09-08",
        cost: 200
      }
    ],
    hotelUrl: "https://www.hotels.com/Hotel-Search?destination=Rome%2C%20Italy&startDate=2025-09-08&endDate=2025-09-12&adults=2&rooms=1",
    dailyCosts: { lodging: 184, food: 165 }
  },
  {
    date: new Date("9-9-2025"),
    location: ["Rome"],
    activities: [
      {
        name: "Colosseum",
        url: "https://www.coopculture.it/en/ticket_office.cfm",
        cost: 16
      },
      {
        name: "Roman Forum",
        cost: 0
      },
      {
        name: "Palatine Hill",
        cost: 0
      }
    ],
    dailyCosts: { lodging: 184, food: 165 }
  },
  {
    date: new Date("9-10-2025"),
    location: ["Rome"],
    activities: [
      {
        name: "Vatican Museums",
        url: "https://tickets.museivaticani.va/",
        cost: 17
      },
      {
        name: "Sistine Chapel",
        cost: 0
      },
      {
        name: "St. Peter's Basilica",
        cost: 0
      }
    ],
    dailyCosts: { lodging: 184, food: 165 }
  },
  {
    date: new Date("9-11-2025"),
    location: ["Rome"],
    activities: [
      {
        name: "Pantheon",
        cost: 0
      },
      {
        name: "Trevi Fountain",
        cost: 0
      },
      {
        name: "Spanish Steps",
        cost: 0
      },
      {
        name: "Piazza Navona",
        cost: 0
      }
    ],
    dailyCosts: { lodging: 184, food: 165 }
  },
  {
    date: new Date("9-12-2025"),
    location: ["Rome", "Florence"],
    activities: [
      {
        name: "Train to Florence",
        url: "https://www.trenitalia.com/en.html",
        cost: 32
      },
      {
        name: "Statue of David",
        url: "https://www.galleriaaccademiafirenze.beniculturali.it/en/tickets",
        cost: 12
      },
      {
        name: "Uffizi Gallery",
        url: "https://www.uffizi.it/en/tickets",
        cost: 20
      },
      {
        name: "Ponte Vecchio",
        cost: 0
      },
      {
        name: "Boboli Gardens",
        cost: 0
      }
    ],
    hotelUrl: "https://www.hotels.com/Hotel-Search?destination=Florence%2C%20Italy&startDate=2025-09-12&endDate=2025-09-15&adults=2&rooms=1",
    dailyCosts: { lodging: 221, food: 165 }
  },
  {
    date: new Date("9-13-2025"),
    location: ["Florence"],
    activities: [
      {
        name: "Day trip to Pisa and Cinque Terre",
        url: "https://www.getyourguide.com/s/?q=Pisa%20Cinque%20Terre",
        cost: 110
      }
    ],
    dailyCosts: { lodging: 221, food: 165 }
  },
  {
    date: new Date("9-14-2025"),
    location: ["Florence"],
    activities: [
      {
        name: "Tuscany wine tour",
        url: "https://www.getyourguide.com/tuscany-l47/tuscany-small-group-wine-tour-and-cheese-tasting-from-florence-t129986/",
        cost: 300
      }
    ],
    dailyCosts: { lodging: 221, food: 165 }
  },
  {
    date: new Date("9-15-2025"),
    location: ["Florence", "Venice"],
    activities: [
      {
        name: "Train to Venice",
        url: "https://www.trenitalia.com/en.html",
        cost: 50
      }
    ],
    hotelUrl: "https://www.hotels.com/Hotel-Search?destination=Venice%2C%20Italy&startDate=2025-09-15&endDate=2025-09-17&adults=2&rooms=1",
    dailyCosts: { lodging: 253, food: 165 }
  },
  {
    date: new Date("9-16-2025"),
    location: ["Venice"],
    activities: [
      {
        name: "St. Mark's Square",
        cost: 0
      },
      {
        name: "Doge's Palace",
        url: "https://www.palazzoducale.visitmuve.it/en/home/",
        cost: 30
      },
      {
        name: "Gondola ride",
        url: "https://www.venicegondola.com/booking",
        cost: 80
      },
      {
        name: "Burano island",
        url: "https://www.actv.it/en/moving-around/transportation/ferries",
        cost: 15
      }
    ],
    dailyCosts: { lodging: 253, food: 165 }
  },
  {
    date: new Date("9-17-2025"),
    location: ["Venice", "Berlin"],
    activities: [
      {
        name: "Flight to Berlin",
        url: "https://www.google.com/flights?hl=en#flt=VCE.BER.2025-09-17",
        cost: 200
      }
    ],
    hotelUrl: "https://www.hotels.com/Hotel-Search?destination=Berlin%2C%20Germany&startDate=2025-09-17&endDate=2025-09-19&adults=2&rooms=1",
    dailyCosts: { lodging: 171, food: 165 }
  },
  {
    date: new Date("9-18-2025"),
    location: ["Berlin"],
    activities: [
      {
        name: "Brandenburg Gate",
        cost: 0
      },
      {
        name: "Reichstag Building",
        cost: 0
      },
      {
        name: "Berlin Wall Memorial",
        cost: 0
      },
      {
        name: "Museum Island",
        url: "https://tickets.visitberlin.de/",
        cost: 40
      }
    ],
    dailyCosts: { lodging: 171, food: 165 }
  },
  {
    date: new Date("9-19-2025"),
    location: ["Berlin", "Munich"],
    activities: [
      {
        name: "Train to Munich",
        url: "https://www.bahn.com/en",
        cost: 43
      }
    ],
    hotelUrl: "https://www.hotels.com/Hotel-Search?destination=Munich%2C%20Germany&startDate=2025-09-19&endDate=2025-09-21&adults=2&rooms=1",
    dailyCosts: { lodging: 152, food: 165 }
  },
  {
    date: new Date("9-20-2025"),
    location: ["Munich", "Neuschwanstein"],
    activities: [
      {
        name: "Neuschwanstein day trip",
        url: "https://www.getyourguide.com/fussen-l47/neuschwanstein-castle-and-linderhof-tour-from-munich-t75339/",
        cost: 86
      },
      {
        name: "Oktoberfest in the evening",
        cost: 100
      }
    ],
    dailyCosts: { lodging: 152, food: 165 }
  },
  {
    date: new Date("9-21-2025"),
    location: ["Munich", "St. Moritz"],
    activities: [
      {
        name: "Train to St. Moritz",
        url: "https://www.sbb.ch/en",
        cost: 242
      },
      {
        name: "Dinner in St. Moritz",
        cost: 0
      }
    ],
    hotelUrl: "https://www.hotels.com/Hotel-Search?destination=St.%20Moritz%2C%20Switzerland&startDate=2025-09-21&endDate=2025-09-22&adults=2&rooms=1",
    dailyCosts: { lodging: 342, food: 165 }
  },
  {
    date: new Date("9-22-2025"),
    location: ["St. Moritz", "Zermatt"],
    activities: [
      {
        name: "Glacier Express (~8 hrs)",
        url: "https://www.glacierexpress.ch/en/book/",
        cost: 206
      },
      {
        name: "Dinner in Zermatt",
        cost: 0
      }
    ],
    hotelUrl: "https://www.hotels.com/Hotel-Search?destination=Zermatt%2C%20Switzerland&startDate=2025-09-22&endDate=2025-09-23&adults=2&rooms=1",
    dailyCosts: { lodging: 351, food: 165 }
  },
  {
    date: new Date("9-23-2025"),
    location: ["Zermatt", "Paris"],
    activities: [
      {
        name: "Train to Geneva",
        url: "https://www.sbb.ch/en",
        cost: 33
      },
      {
        name: "Lunch in Geneva",
        cost: 0
      },
      {
        name: "High speed train to Paris",
        url: "https://www.sncf-connect.com/",
        cost: 33
      }
    ],
    hotelUrl: "https://www.hotels.com/Hotel-Search?destination=Paris%2C%20France&startDate=2025-09-23&endDate=2025-09-27&adults=2&rooms=1",
    dailyCosts: { lodging: 200, food: 165 }
  },
  {
    date: new Date("9-24-2025"),
    location: ["Paris"],
    activities: [
      {
        name: "Eiffel Tower",
        url: "https://www.toureiffel.paris/en/tickets",
        cost: 30
      },
      {
        name: "Arc de Triomphe",
        url: "https://www.paris-arc-de-triomphe.fr/en/ticketing",
        cost: 13
      },
      {
        name: "Champs-Élysées",
        cost: 0
      }
    ],
    dailyCosts: { lodging: 200, food: 165 }
  },
  {
    date: new Date("9-25-2025"),
    location: ["Paris"],
    activities: [
      {
        name: "Louvre Museum",
        url: "https://www.ticketlouvre.fr/",
        cost: 17
      },
      {
        name: "Seine River cruise",
        url: "https://www.bateauxparisiens.com/en",
        cost: 15
      },
      {
        name: "Tuileries Garden",
        cost: 0
      }
    ],
    dailyCosts: { lodging: 200, food: 165 }
  },
  {
    date: new Date("9-26-2025"),
    location: ["Paris"],
    activities: [
      {
        name: "Montmartre",
        cost: 0
      },
      {
        name: "Sacré-Cœur",
        cost: 0
      },
      {
        name: "Day trip to Versailles",
        url: "https://en.chateauversailles.fr/plan-your-visit/tickets",
        cost: 20
      }
    ],
    dailyCosts: { lodging: 200, food: 165 }
  },
  {
    date: new Date("9-27-2025"),
    location: ["Paris", "Indianapolis"],
    activities: [
      {
        name: "Flight back to Indianapolis",
        url: "https://www.google.com/flights?hl=en#flt=PAR.IND.2025-09-27",
        cost: 0
      }
    ],
    dailyCosts: { food: 165 }
  }
];

export default function CalendarPage() {
  const totalCosts = activities.reduce((acc, activity) => {
    const activityCosts = activity.activities.reduce((sum, act) => sum + act.cost, 0);
    const transportCost = activity.dailyCosts.transport || 0;
    const lodgingCost = activity.dailyCosts.lodging || 0;
    const foodCost = activity.dailyCosts.food;
    return acc + activityCosts + transportCost + lodgingCost + foodCost;
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
          {activities.map((activity, index) => (
            <ActivityCard
              key={format(activity.date, "yyyy-MM-dd")}
              activity={activity}
              index={index}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
