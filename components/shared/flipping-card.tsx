import React from "react";
import { cn } from "@/lib/utils";

interface FlippingCardProps {
    className?: string;
    height?: number;
    width?: number;
    frontContent?: React.ReactNode;
    backContent?: React.ReactNode;
}

export function FlippingCard({
    className,
    frontContent,
    backContent,
    height = 400,
    width,
}: FlippingCardProps) {
    return (
        <div
            className="group/flipping-card"
            style={
                {
                    "--height": `${height}px`,
                } as React.CSSProperties
            }
        >
            <div
                className={cn(
                    "rounded-xl border border-neutral-200 bg-white shadow-lg transition-all duration-700 transform-3d group-hover/flipping-card:transform-[rotateY(180deg)] dark:border-neutral-800 dark:bg-neutral-950",
                    "h-(--height) w-full",
                    className
                )}
            >
                {/* Front Face */}
                <div className="absolute inset-0 h-full w-full rounded-[inherit] bg-white text-neutral-950 transform-3d backface-hidden transform-[rotateY(0deg)] dark:bg-zinc-950 dark:text-neutral-50">
                    <div className="transform-[translateZ(70px)_scale(.93)] h-full w-full">
                        {frontContent}
                    </div>
                </div>
                {/* Back Face */}
                <div className="absolute inset-0 h-full w-full rounded-[inherit] bg-white text-neutral-950 transform-3d backface-hidden transform-[rotateY(180deg)] dark:bg-zinc-950 dark:text-neutral-50">
                    <div className="transform-[translateZ(70px)_scale(.93)] h-full w-full">
                        {backContent}
                    </div>
                </div>
            </div>
        </div>
    );
}
