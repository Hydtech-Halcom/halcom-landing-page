import { PARTNER_LOGOS } from "@/lib/constants/partner";
import { GradientHeading } from "../../shared/gradient-heading";
import { LogoCarousel } from "@/components/ui/logo-carousel";

const TechnologyPartnerSection = () => {
  return (
    <section className="py-2 md:py-4">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <GradientHeading size="lg" weight="bold">
            Technology Partner
          </GradientHeading>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">We work with various trusted partners to provide the best solutions for our clients.</p>
        </div>

        <div className="flex justify-center">
          <LogoCarousel logos={PARTNER_LOGOS} columnCount={5} />
        </div>
      </div>
    </section>
  );
};

export default TechnologyPartnerSection;
