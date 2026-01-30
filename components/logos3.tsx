"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

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
    <section className="py-16">
      {/* <div className="container flex flex-col items-center text-center">
        <h1 className="my-6 text-2xl font-bold text-pretty lg:text-4xl">{heading}</h1>
      </div> */}
      <div className="">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel opts={{ loop: true }} plugins={[AutoScroll({ playOnInit: true, speed: 0.7 })]}>
            <CarouselContent className="ml-0">
              {logos.map(logo => (
                <CarouselItem key={logo.id} className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6">
                  <div className="mx-10 flex shrink-0 items-center justify-center">
                    <div>
                      <img src={logo.image} alt={logo.description} className={`${logo.className} grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300`} />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-linear-to-r from-background to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-linear-to-l from-background to-transparent"></div>
        </div>
      </div>

      <div className="mt-4">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[
              AutoScroll({
                playOnInit: true,
                speed: 0.7,
                direction: "backward", // Ini yang membuat reverse
              }),
            ]}
          >
            <CarouselContent className="ml-0">
              {secondLogos.map(logo => (
                <CarouselItem key={`${logo.id}-reverse`} className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis/1/5 lg:basis-1/6">
                  <div className="mx-10 flex shrink-0 items-center justify-center">
                    <div>
                      <img src={logo.image} alt={logo.description} className={`${logo.className} grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300`} />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-linear-to-r from-background to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-linear-to-l from-background to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
