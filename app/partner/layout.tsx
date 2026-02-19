import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner",
  description: "Halcom partners with the world's leading technology vendors to provide the best IT Infrastructure solutions to our clients.",
  openGraph: {
    title: "Partner | Halcom",
    description: "Halcom partners with the world's leading technology vendors for the best IT Infrastructure solutions.",
  },
};

export default function PartnerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
