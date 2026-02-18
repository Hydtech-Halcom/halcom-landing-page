import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events & Activities",
  description:
    "Join Halcom's exclusive seminars, workshops, and forums to stay up to date with the latest technology and business opportunities.",
  openGraph: {
    title: "Events & Activities | Halcom",
    description:
      "Join Halcom's exclusive seminars, workshops, and forums on the latest technology.",
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
