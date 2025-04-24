import { Calendar } from "@/components/calendar";

export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto py-6 px-4">
        <ul>
          <li>Amsterdam</li>
          <li>London</li>
          <li>Paris</li>
          <li>Switzerland</li>
          <li>Glacier Express (Zermatt - St. Moritz)</li>
          <li>Munich (sept 20)</li>
          <li>Neuschwanstein (sept 21)</li>
          <li>Italy (sept 22)</li>
          <li>Rome</li>
        </ul>

        <p>ideas</p>
        <ul>
          <li>Santorini</li>
          <li>Athens</li>
          <li>France wine country</li>
          <li>Italy wine country</li>
          <li>Tuscany</li>
          <li>Florence</li>
          <li>Venice</li>
          <li>Milan</li>
          <li>Pisa</li>
          <li>Switzerland</li>
        </ul>
        <Calendar />
      </main>
    </div>
  );
}
