import { Content } from "../content";
import Link from "next/link";
import { InteractiveHoverButton } from "@/components/shared/interactive-button";

import { FlippingCard } from "@/components/shared/flipping-card";

interface CardData {
  id: string;
  front: {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
  };
  back: {
    description: string;
    buttonText: string;
  };
}

const cardsData: CardData[] = [
  {
    id: "it-infrastructure",
    front: {
      imageSrc: "/assets/images/it.jpg",
      imageAlt: "IT Infrastructure Specialist",
      title: "IT Infrastructure Specialist",
      description: "Halcom focused on main line of business as an IT Infrastructure Specialist.",
    },
    back: {
      description: "We are giving an optimal solution for your needs. We are providing IT hardware and software, also professional services including project management, installation, testing and training.",
      buttonText: "View Portfolio",
    },
  },
  {
    id: "industrial-automation",
    front: {
      imageSrc: "/assets/images/mechanic.jpeg",
      imageAlt: "Industrial Automation",
      title: "Industrial Automation",
      description: "Halcom offers automation solutions for your industry.",
    },
    back: {
      description: "The solution provided by halcom makes it possible to transform from a manual process or semi-automatic process into a complete set of automated processes. 5o you can get efficient results.",
      buttonText: "Learn More",
    },
  },
  {
    id: "mechanical-electrical",
    front: {
      imageSrc: "/assets/images/electrical.jpg",
      imageAlt: "Mechanical & Electrical",
      title: "Mechanical & Electrical",
      description: "Halcom provides design mechanical and electrical needed.",
    },
    back: {
      description: "Halcom provides design, supervise and installation of electrical and mechanical works at various facilities such as office buildings, hotels, airport, and manufacturing.",
      buttonText: "Learn More",
    },
  },
  {
    id: "managed-service",
    front: {
      imageSrc: "/assets/images/service.jpg",
      imageAlt: "Managed Services",
      title: "Managed Services",
      description: "Halcom provides managed services and preventive maintenance of your IT infrastructure.",
    },
    back: {
      description: "Halcom provides managed services and preventive maintenance of your IT infrastructure.",
      buttonText: "Learn More",
    },
  },
];

export function BussinessSection() {
  return (
    <Content>
      <section className="max-w-7xl mx-auto py-20">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="col-span-2">
            <span className="inline-block px-4 py-1.5 text-primary font-semibold tracking-widest text-sm bg-primary/10 border border-primary/20 backdrop-blur-sm rounded-full">• LINE OF BUSSINESS</span>
            <h2 className="text-3xl font-bold leading-tight mt-4">IT Infrastructure Specialist, Managed Services, Mechanical & Electrical and Industrial Automation.</h2>
          </div>

          <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cardsData.map(card => (
              <FlippingCard key={card.id} height={420} frontContent={<GenericCardFront data={card.front} />} backContent={<GenericCardBack data={card.back} />} />
            ))}
          </div>
        </div>
      </section>
    </Content>
  );
}

interface GenericCardFrontProps {
  data: CardData["front"];
}

function GenericCardFront({ data }: GenericCardFrontProps) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl">
      {/* IMAGE */}
      <img src={data.imageSrc} alt={data.imageAlt} className="absolute inset-0 h-full w-full object-cover" />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

      {/* TEXT PROPOSITION */}
      <div className="relative z-10 flex h-full flex-col justify-end p-5">
        <h3 className="text-lg font-semibold text-white">{data.title}</h3>
        <p className="mt-2 text-sm text-white/80 leading-relaxed">{data.description}</p>
      </div>
    </div>
  );
}

interface GenericCardBackProps {
  data: CardData["back"];
}

function GenericCardBack({ data }: GenericCardBackProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-6">
      <p className="text-[18px] mt-2 text-muted-foreground text-center">{data.description}</p>
    </div>
  );
}
