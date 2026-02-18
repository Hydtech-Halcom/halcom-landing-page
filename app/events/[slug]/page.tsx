import { notFound } from "next/navigation";
import Image from "next/image";
import { Calendar, MapPin, Clock, ArrowLeft, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { events } from "@/lib/constants/events";
import { ThumbnailsCarousel } from "@/components/thumbnails-carousel";

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
    return date.toLocaleDateString("en-US", options);
  };

  // Siapkan data gambar untuk carousel
  const carouselImages = event.image.map(imgPath => ({
    full: imgPath,
    thumb: imgPath,
  }));

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="pt-15">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/events">
            <Button variant="link" size="sm" className="gap-2">
              <ChevronLeft className="me-1 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
              Go Back
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Grid layout hanya untuk konten utama */}
        <div className="space-y-8">
          {/* Event Header */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">{event.title}</h1>
            <p className="text-xl text-muted-foreground">{event.shortDescription}</p>
          </div>

          {/* Image Gallery dengan Carousel */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Event Gallery</h2>
            <ThumbnailsCarousel images={carouselImages} />
          </section>

          {/* Event Description dan Info dalam satu baris */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Deskripsi */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-2xl font-semibold">Full Description</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{event.description}</p>
              </div>
            </div>

            {/* Event Info - Di sebelah deskripsi */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Event Details</h2>
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Calendar className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Date</p>
                        <p className="text-muted-foreground">{formatDate(event.date)}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Time</p>
                        <p className="text-muted-foreground">{event.time}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-muted-foreground">{event.location}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
