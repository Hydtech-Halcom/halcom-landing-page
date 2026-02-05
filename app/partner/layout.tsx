import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner",
  description:
    "Halcom bermitra dengan vendor teknologi terkemuka dunia untuk menyediakan solusi IT Infrastructure terbaik kepada klien kami.",
  openGraph: {
    title: "Partner | Halcom",
    description:
      "Halcom bermitra dengan vendor teknologi terkemuka dunia untuk solusi IT Infrastructure terbaik.",
  },
};

export default function PartnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
