import { Metadata } from "next";
import CustomerSection from "@/components/sections/customers/customer-section";

export const metadata: Metadata = {
  title: "Customers",
  description: "Halcom has been trusted by various leading companies in Indonesia to provide reliable IT Infrastructure solutions.",
  openGraph: {
    title: "Customers | Halcom",
    description: "Halcom has been trusted by various leading companies in Indonesia.",
  },
};

export default function CustomerPage() {
  return (
    <section className="min-h-screen py-2 md:pt-12">
      <div className=" mx-auto px-4">
        <CustomerSection />
      </div>
    </section>
  );
}
