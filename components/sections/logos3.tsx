"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

// Type definition for AutoScroll plugin options
interface AutoScrollOptions {
  playOnInit?: boolean;
  speed?: number;
  direction?: "forward" | "backward";
  active?: boolean;
  breakpoints?: Record<string, Partial<AutoScrollOptions>>;
}

// Define plugin type locally based on embla-carousel usage
type CarouselPlugin = any;

// Type-safe helper function for AutoScroll plugin
const createAutoScrollPlugin = (options: AutoScrollOptions): CarouselPlugin => {
  return AutoScroll(options);
};

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Trusted by these companies",
  logos = [
    {
      id: "logo-1",
      description: "Logo 1",
      image: "/assets/partners/Cisco-logo.png",
      className: "h-7 w-auto",
    },
    {
      id: "logo-2",
      description: "Logo 2",
      image: "/assets/partners/huawei-logo.png",
      className: "h-10 w-auto",
    },
    {
      id: "logo-3",
      description: "Logo 3",
      image: "/assets/partners/Samsung-Logo.jpg",
      className: "h-10 w-auto",
    },
    {
      id: "logo-4",
      description: "Logo 4",
      image: "/assets/partners/toa-logo.jpg",
      className: "h-10 w-auto",
    },
    {
      id: "logo-5",
      description: "Logo 5",
      image: "/assets/partners/pelco-logo.png",
      className: "h-5 w-auto",
    },
    {
      id: "logo-6",
      description: "Logo 6",
      image: "/assets/partners/Dell-Logo.png",
      className: "h-7 w-auto",
    },
    {
      id: "logo-7",
      description: "Logo 7",
      image: "/assets/partners/oracle-logo.png",
      className: "h-7 w-auto",
    },
    {
      id: "logo-8",
      description: "Logo 8",
      image: "/assets/partners/epson-logo.png",
      className: "h-10 w-auto",
    },
  ],
}: Logos3Props) => {
  const secondLogos = [
    {
      id: "second-logo-1",
      description: "Apple",
      image: "/assets/partners/apple-logo.jpg",
      className: "h-12 w-auto",
    },
    {
      id: "second-logo-2",
      description: "Bosch",
      image: "/assets/partners/bosch-logo.png",
      className: "h-7 w-auto",
    },
    {
      id: "second-logo-3",
      description: "Draka",
      image: "/assets/partners/draka-logo.png",
      className: "h-10 w-auto",
    },
    {
      id: "second-logo-4",
      description: "Emerson",
      image: "/assets/partners/emerson-logo.png",
      className: "h-10 w-auto",
    },
    {
      id: "second-logo-5",
      description: "VMware",
      image: "/assets/partners/vmware-logo.png",
      className: "h-10 w-auto",
    },
    {
      id: "second-logo-6",
      description: "Microsoft",
      image: "/assets/partners/microsoft-logo.png",
      className: "h-6 w-auto",
    },
    {
      id: "second-logo-7",
      description: "Paloalto",
      image: "/assets/partners/paloalto-logo.png",
      className: "h-6 w-auto",
    },
    {
      id: "second-logo-8",
      description: "Honeywell",
      image: "/assets/partners/honeywell-logo.png",
      className: "h-6 w-auto",
    },
  ];
  return (
    <section className="py-6 sm:py-8">
      <div className="px-4 sm:px-0">
        <div className="relative mx-auto flex items-center justify-center max-w-5xl">
          <Carousel opts={{ loop: true }} plugins={[createAutoScrollPlugin({ playOnInit: true, speed: 0.7 })]}>
            <CarouselContent className="ml-0">
              {logos.map(logo => (
                <CarouselItem key={logo.id} className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
                  <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 flex shrink-0 items-center justify-center">
                    <div className="flex items-center justify-center w-full">
                      <img
                        src={logo.image}
                        alt={logo.description}
                        className={`${logo.className} max-h-8 sm:max-h-10 md:max-h-10 lg:max-h-12 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 object-contain`}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-8 sm:w-12 bg-linear-to-r from-background via-background/80 to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-8 sm:w-12 bg-linear-to-l from-background via-background/80 to-transparent pointer-events-none"></div>
        </div>
      </div>

      <div className="mt-3 sm:mt-4 px-4 sm:px-0">
        <div className="relative mx-auto flex items-center justify-center max-w-5xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[
              createAutoScrollPlugin({
                playOnInit: true,
                speed: 0.7,
                direction: "backward", // Ini yang membuat reverse
              }),
            ]}
          >
            <CarouselContent className="ml-0">
              {secondLogos.map(logo => (
                <CarouselItem key={`${logo.id}-reverse`} className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
                  <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 flex shrink-0 items-center justify-center">
                    <div className="flex items-center justify-center w-full">
                      <img
                        src={logo.image}
                        alt={logo.description}
                        className={`${logo.className} max-h-8 sm:max-h-10 md:max-h-10 lg:max-h-12 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 object-contain`}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-8 sm:w-12 bg-linear-to-r from-background via-background/80 to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-8 sm:w-12 bg-linear-to-l from-background via-background/80 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
