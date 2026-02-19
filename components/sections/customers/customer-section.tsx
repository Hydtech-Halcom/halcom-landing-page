import { CUSTOMER_LOGOS } from "@/lib/constants/customers";
import { GradientHeading } from "../../shared/gradient-heading";
import { LogoCarousel } from "@/components/ui/logo-carousel";

const CustomerSection = () => {
  // Split logos into 3 rows
  const row1Logos = CUSTOMER_LOGOS.slice(0, 10);
  const row2Logos = CUSTOMER_LOGOS.slice(10, 20);
  const row3Logos = CUSTOMER_LOGOS.slice(20, 30);

  return (
    <section className="py-2 md:py-4">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <GradientHeading size="lg" weight="bold">
            Our Valued Customers
          </GradientHeading>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Trusted by leading organizations across industries — from multinational corporations and government institutions to growing enterprises throughout Indonesia.</p>
        </div>

        <div className="flex flex-col items-center gap-8 overflow-x-hidden">
          <LogoCarousel logos={row1Logos} columnCount={5} />
          <LogoCarousel logos={row2Logos} columnCount={5} />
          <LogoCarousel logos={row3Logos} columnCount={5} />
        </div>
      </div>
    </section>
  );
};

export default CustomerSection;
