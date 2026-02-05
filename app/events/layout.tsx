import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acara & Kegiatan",
  description:
    "Ikuti seminar, workshop, dan forum eksklusif Halcom untuk tetap update dengan teknologi terkini dan peluang bisnis.",
  openGraph: {
    title: "Acara & Kegiatan | Halcom",
    description:
      "Ikuti seminar, workshop, dan forum eksklusif Halcom untuk teknologi terkini.",
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
