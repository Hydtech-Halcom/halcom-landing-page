"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, ArrowRight, Clock, Filter, Search } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, containerVariants, itemVariants } from "@/lib/animations";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { events } from "@/lib/constants/events";

const categories = ["Semua", "Forum & Business Matching", "Seminar & Technology Showcase", "Product Knowledge Session", "Conference", "Workshop"];

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = events.filter(event => {
    const categoryMatch = selectedCategory === "Semua" || event.category === selectedCategory;
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
    return date.toLocaleDateString("id-ID", options);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 sm:py-28 lg:py-32 overflow-hidden bg-linear-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-77.5 w-77.5 rounded-full bg-primary/10 blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-4xl mx-auto text-center" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div className="space-y-6" variants={fadeInUp}>
              <Badge variant="outline" className="px-4 py-1.5 text-sm font-medium">
                Events & Kegiatan
              </Badge>

              <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight" variants={itemVariants}>
                Acara & <span className="text-primary">Kegiatan</span> Kami
              </motion.h1>

              <motion.p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed" variants={itemVariants}>
                Ikuti seminar, workshop, dan forum eksklusif kami untuk tetap update dengan teknologi terkini dan peluang bisnis
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* All Events Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Semua Acara</h2>

            {/* Filters and Search */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="Cari acara, lokasi, atau topik..." className="pl-10" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
              </div>

              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium">Kategori:</span>
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

          {/* Events Grid */}
          {filteredEvents.length === 0 ? (
            <div className="text-center py-12">
              <div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Tidak ada acara ditemukan</h3>
              <p className="text-muted-foreground">Coba gunakan kata kunci pencarian yang berbeda atau pilih kategori lain</p>
            </div>
          ) : (
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={containerVariants} initial="hidden" animate="visible">
              {filteredEvents.map(event => (
                <motion.div key={event.id} variants={itemVariants}>
                  <Link href={`/events/${event.slug}`}>
                    <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 border hover:border-primary/30">
                      <div className="relative h-48">
                        <Image src={event.image} alt={event.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                      </div>
                      <CardHeader className="pb-3">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Badge variant="secondary" className="text-xs">
                              {event.category}
                            </Badge>
                          </div>
                          <CardTitle className="text-lg line-clamp-2">{event.title}</CardTitle>
                          <p className="text-sm text-muted-foreground line-clamp-2">{event.shortDescription}</p>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <Calendar className="w-4 h-4 shrink-0" />
                            <span className="truncate">{formatDate(event.date)}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Clock className="w-4 h-4 shrink-0" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-start gap-2 text-sm">
                            <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                            <span className="line-clamp-2">{event.location}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="ghost" className="w-full group justify-between">
                          <span>Selengkapnya</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
