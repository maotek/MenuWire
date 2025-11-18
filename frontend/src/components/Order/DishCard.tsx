'use client';

import { Dish } from '@/app/lib/types';
import Image from 'next/image';
import { getLocalizedString } from '@/app/lib/utils';


interface DishCardProps {
    dish: Dish;
    locale: string;
    onClick?: () => void;
}

export function DishCard({ dish, locale, onClick }: DishCardProps) {
    const title = getLocalizedString(dish.name, locale);
    return (
        <div
            className="fade-in relative overflow-hidden rounded-md shadow-2xl cursor-pointer border-0 border-[rgb(var(--border-1))]"
            style={{ aspectRatio: '4 / 3' }}
            onClick={onClick}
        >
            <Image
                src={dish.image || "/assets/logo.png"}
                alt={title || "Dish Image"}
                fill
                unoptimized
                priority
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover w-full h-full transition-transform duration-300 ease-out hover:scale-105"
            />

            {/* Bottom-left overlay with name and price */}
            <div className="w-full pointer-events-none absolute inset-x-0 bottom-0">
                <div className="w-full text-left text-white drop-shadow-md bg-gradient-to-t from-black/80 via-black/50 to-transparent p-2 sm:p-3 pt-8 sm:pt-10 rounded-b-md">
                    <h3 className="text-sm sm:text-base font-semibold truncate">{title}</h3>
                    <p className="text-xs sm:text-sm font-medium">€{Number(dish.price).toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
}