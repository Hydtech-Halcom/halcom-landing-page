// components/thumbnails-carousel.tsx
import { Carousel } from "@ark-ui/react/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface ThumbnailsCarouselProps {
  images: Array<{
    full: string;
    thumb: string;
  }>;
}

export function ThumbnailsCarousel({ images }: ThumbnailsCarouselProps) {
  if (!images || images.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-8 text-center border border-dashed rounded-xl">
        <p className="text-gray-400 dark:text-gray-600">Tidak ada gambar tersedia</p>
      </div>
    );
  }

  return (
    <Carousel.Root defaultPage={0} slideCount={images.length} className="max-w-4xl p-4 mx-auto">
      {/* Main Carousel */}
      <Carousel.ItemGroup className="overflow-hidden rounded-xl shadow-xl mb-6 bg-gray-100 dark:bg-gray-900">
        {images.map((image, index) => (
          <Carousel.Item key={index} index={index} className="relative">
            <div className="relative aspect-video w-full">
              <Image
                src={image.full}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                quality={index === 0 ? 90 : 75} // Kurangi quality untuk gambar selanjutnya
                priority={index < 2} // Prioritaskan 2 gambar pertama
                loading={index < 2 ? "eager" : "lazy"}
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PC9zdmc+"
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>

      {/* Thumbnails Navigation */}
      <div className="flex items-center gap-4">
        <Carousel.PrevTrigger className="p-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors shrink-0">
          <ChevronLeft></ChevronLeft>
        </Carousel.PrevTrigger>

        <div className="flex gap-2 overflow-x-auto scrollbar-hide flex-1 px-2">
          {images.map((image, index) => (
            <Carousel.Indicator
              key={index}
              index={index}
              className="shrink-0 border-2 border-transparent data-current:border-blue-500 rounded-md overflow-hidden cursor-pointer transition-all hover:border-gray-300 hover:scale-105 bg-gray-100 dark:bg-gray-800"
            >
              <div className="relative w-20 h-14">
                <Image
                  src={image.thumb}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="80px"
                  quality={50} // Quality rendah untuk thumbnail
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmMGYwZjAiLz48L3N2Zz4="
                />
              </div>
            </Carousel.Indicator>
          ))}
        </div>

        <Carousel.NextTrigger className="p-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors shrink-0">
          <ChevronRight></ChevronRight>
        </Carousel.NextTrigger>
      </div>
    </Carousel.Root>
  );
}
