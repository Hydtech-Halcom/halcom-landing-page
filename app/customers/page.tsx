import { Metadata } from "next";
import CustomerSection from "@/components/sections/customers/customer-section";

export const metadata: Metadata = {
  title: "Pelanggan",
  description:
    "Halcom telah dipercaya oleh berbagai perusahaan terkemuka di Indonesia untuk menyediakan solusi IT Infrastructure yang handal.",
  openGraph: {
    title: "Pelanggan | Halcom",
    description:
      "Halcom telah dipercaya oleh berbagai perusahaan terkemuka di Indonesia.",
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
