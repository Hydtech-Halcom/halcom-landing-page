import { cn } from "@/lib/utils";
import { GradientHeading } from "../../shared/gradient-heading";
import { ImageAutoSlider } from "@/components/image-auto-slider";

export default function StrategicPartnershipSection() {
  return (
    <div className="w-full py-16 relative overflow-hidden">
      <div
        aria-hidden="true"
        className={cn(
          "-z-10 -top-1/2 -translate-x-1/2 pointer-events-none absolute left-1/2 h-[120vmin] w-[120vmin] rounded-b-full",
          "bg-[radial-gradient(ellipse_at_center,--theme(--color-foreground/.1),transparent_50%)]",
          "blur-[30px]",
        )}
      />

      {/* Header Section */}
      <section className="container mx-auto px-4 mb-8">
        {/* Title with blue banner style */}
        <div className="text-center">
          <GradientHeading size="lg" weight="bold">
            Strategic Partnership
          </GradientHeading>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            <span className="font-semibold text-foreground">Halcom</span> has
            reached various levels of strategic partnership with leading
            technology principals, reflecting our strong commitment to
            collaboration and excellence.
          </p>
        </div>
      </section>

      {/* Image Auto Slider */}
      <ImageAutoSlider />
    </div>
  );
}
