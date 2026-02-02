import { notFound } from "next/navigation";
import Image from "next/image";
import { Calendar, MapPin, Clock, ArrowLeft } from "lucide-react";
import { events } from "@/lib/constants/events";

interface EventDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const { slug } = await params;
  const event = events.find(e => e.slug === slug);

  if (!event) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    return date.toLocaleDateString("id-ID", options);
  };

  return (
    <div className="min-h-screen">
      {/* Event Header */}
      <div className="relative h-64 sm:h-80 lg:h-96">
        <Image src={event.image} alt={event.title} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">{event.title}</h1>
            <p className="text-lg text-gray-800 max-w-3xl">{event.shortDescription}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Event Details */}
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4">Deskripsi Acara</h2>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{event.description}</p>
            </section>
          </div>

          {/* Event Info Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card border rounded-lg p-6 space-y-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Informasi Acara</h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium">Tanggal</p>
                      <p className="text-muted-foreground">{formatDate(event.date)}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium">Waktu</p>
                      <p className="text-muted-foreground">{event.time}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium">Lokasi</p>
                      <p className="text-muted-foreground">{event.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
