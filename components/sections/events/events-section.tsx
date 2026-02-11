"use client";

import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, ChevronRight, Clock, Filter, MapPin, Search } from "lucide-react";
import { useState } from "react";
import { events } from "@/lib/constants/events";
import { containerVariants, fadeInUp, itemVariants } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import PageHero from "@/components/shared/PageHero";

const categories = ["All", "Forum & Business Matching", "Seminar & Technology Showcase", "Product Knowledge Session", "Conference", "Workshop"];

export default function EventsPageSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = events.filter(event => {
    const categoryMatch = selectedCategory === "All" || event.category === selectedCategory;
    const searchMatch =
      searchQuery === "" || event.title.toLowerCase().includes(searchQuery.toLowerCase()) || event.description.toLowerCase().includes(searchQuery.toLowerCase()) || event.location.toLowerCase().includes(searchQuery.toLowerCase());

    return categoryMatch && searchMatch;
  });

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

  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section */}
        <PageHero
          badge="Events & Activities"
          title="Our Events & Activities"
          description="Join our exclusive seminars, workshops, and forums to stay updated with the latest technology and business opportunities"
          backgroundImage="/assets/events/events-bg.jpg"
        />

        {/* All Events Section */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">All Events</h2>

              {/* Filters and Search */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input placeholder="Search events, locations, or topics..." className="pl-10" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
                </div>

                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Category:</span>
                </div>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2 mb-8">
                {categories.map(category => (
                  <Button key={category} variant={selectedCategory === category ? "default" : "outline"} size="sm" onClick={() => setSelectedCategory(category)} className="rounded-full">
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Events List - Column Layout with image on left */}
            {filteredEvents.length === 0 ? (
              <div className="text-center py-12">
                <div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
                  <Calendar className="w-12 h-12 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">No events found</h3>
                <p className="text-muted-foreground">Try using different search keywords or select another category</p>
              </div>
            ) : (
              <motion.div className="space-y-6" variants={containerVariants} initial="hidden" animate="visible">
                {filteredEvents.map(event => (
                  <motion.div key={event.id} variants={itemVariants}>
                    <Link href={`/events/${event.slug}`}>
                      <div className="group relative overflow-hidden rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg bg-card p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                        {/* Image on the left */}
                        <div className="relative w-full md:w-64 lg:w-80 h-48 md:h-40 shrink-0 overflow-hidden rounded-lg">
                          <Image
                            src={event.image[0]}
                            alt={event.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, 320px"
                            priority={filteredEvents.indexOf(event) < 3}
                          />
                          {/* Category badge */}
                          <div className="absolute top-2 left-2">
                            <Badge variant="secondary" className="backdrop-blur-sm bg-white/90 dark:bg-gray-900/90">
                              {event.category.split(" & ")[0]}
                            </Badge>
                          </div>
                        </div>

                        {/* Content on the right */}
                        <div className="flex-1 min-w-0">
                          <div className="space-y-3">
                            {/* Title */}
                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">{event.title}</h3>

                            {/* Short description */}
                            <p className="text-muted-foreground line-clamp-2">{event.shortDescription}</p>

                            {/* Event details */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
                              <div className="flex items-center gap-2 text-sm">
                                <Calendar className="w-4 h-4 shrink-0 text-muted-foreground" />
                                <span className="truncate">{formatDate(event.date)}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <Clock className="w-4 h-4 shrink-0 text-muted-foreground" />
                                <span>{event.time}</span>
                              </div>
                              <div className="flex items-start gap-2 text-sm">
                                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-muted-foreground" />
                                <span className="line-clamp-1">{event.location}</span>
                              </div>
                            </div>

                            {/* Action button */}
                            <div className="pt-2">
                              <Button variant="link" className="p-0 h-auto group/link text-primary hover:text-primary/80">
                                <span>Read More</span>
                                <ChevronRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
