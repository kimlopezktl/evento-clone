import H1 from "@/components/H1";

interface EventsPageProps {
  params: {
    city: string;
  };
}
export default function EventsPage({ params }: EventsPageProps) {
  const { city } = params;

  return (
    <main className="flex h-auto min-h-[85vh] flex-col items-center px-3 pt-36 text-center">
      <H1>
        {city === "all"
          ? "All Events"
          : `Events page in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>
    </main>
  );
}
