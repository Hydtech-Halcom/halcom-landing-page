import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CalendarX } from "lucide-react";

export default function EventNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md px-4">
        <div className="mx-auto w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-6">
          <CalendarX className="w-10 h-10 text-muted-foreground" />
        </div>
        <h1 className="text-2xl font-bold mb-3">Acara Tidak Ditemukan</h1>
        <p className="text-muted-foreground mb-6">Acara yang Anda cari mungkin telah berakhir atau tautannya tidak valid.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/events">
            <Button className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Semua Acara
            </Button>
          </Link>
          <Link href="/">
            <Button variant="outline">Beranda</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
