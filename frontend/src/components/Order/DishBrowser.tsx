'use client';

import { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import Basket from './Basket';
import { DishCard } from './DishCard';
import { Dish, DishCategory, Option, StringItem, Table, Tag } from '@/app/lib/types';
import Image from 'next/image';
import { Check, MinusIcon, PlusIcon } from 'lucide-react';
import { getLocalizedString } from '@/app/lib/utils';
import OrderNavbar from './OrderNavbar';
import ChatBot from './ChatBot';


export interface DishBrowserProps {
  dishData: DishCategory[];
  code: string;
  table?: Table;
}

export interface CartItem {
  dish: Dish;
  quantity: number;
  options?: Option[];
}

export default function DishBrowser({ dishData, code, table }: DishBrowserProps) {
  const locale = useLocale();
  const t = useTranslations("Order");

  const [selected, setSelected] = useState<DishCategory | null>(dishData[0] || null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const [cart, setCart] = useState<CartItem[]>([]);

  // TODO: Merge modalDish with modalQuantity as CartItem?
  const [modalDish, setModalDish] = useState<Dish | null>(null);
  const [modalQuantity, setModalQuantity] = useState<number>(1);
  const [selectedOpts, setSelectedOpts] = useState<number[]>([]);

  const [badges, setBadges] = useState<{ id: number }[]>([]);

  // open and close modal
  const openModal = (dish: Dish) => {
    setSelectedOpts([]);
    setBadges([]);
    setModalDish(dish);
    setModalQuantity(1);
  }
  const closeModal = () => {
    setSelectedOpts([]);
    setBadges([]);
    setModalDish(null);
    setModalQuantity(1);
  }

  const addToCart = (dish: Dish) => {
    // TODO, simplify the option logic, currently the state consists of ids, but need full objects
    const optionsSelected = dish.options
      .filter(o => selectedOpts.includes(o.id))
      .map(o => ({ id: o.id, name: o.name, description: o.description, price: o.price }));

    setCart(prev => {
      const idx = prev.findIndex(
        item =>
          item.dish.id === dish.id &&
          JSON.stringify(item.options || []) === JSON.stringify(optionsSelected)
      );
      if (idx >= 0) {
        const updated = [...prev];
        updated[idx].quantity += modalQuantity;
        return updated;
      }
      return [...prev, { dish, quantity: modalQuantity, options: optionsSelected }];
    });

    // create badge
    const id = Date.now();
    setBadges((b) => [...b, { id }]);
  };

  // delete the badge after animation
  const handleAnimationEnd = (id: number) => {
    setBadges((b) => b.filter((badge) => badge.id !== id));
  };

  // When locale changes, clear selected tags to avoid mismatch on localized labels
  useEffect(() => {
    setSelectedTags([]);
  }, [locale]);

  // useEffect(() => {
  //   if (dishData.length > 0) {
  //     setSelected(dishData[0]);
  //     setSelectedTags([]);
  //   }
  // }, []);


  const selectCategory = (cat: DishCategory) => {
    setSelected(cat);
    setSelectedTags([]);
  };

  // Aggregate unique tags for the selected category
  const tags: Tag[] = selected
    ? Array.from(
      new Set(
        selected.dishes
          .flatMap((dish: Dish) => dish.tags.map((t) => JSON.stringify(t)))
      )
    ).map((json) => JSON.parse(json))
    : [];

  // Filter dishes by any selected tags (show all if none)
  const filteredDishes: Dish[] = selected
    ? selected.dishes.filter((dish) =>
      selectedTags.length > 0
        ? dish.tags.some((t) =>
          selectedTags.some((st) => st === getLocalizedString(t.name, locale))
        )
        : true
    ) : [];

  // Key used to re-mount the grid and trigger CSS fade-in on category/tag change
  const gridKey = `${selected?.id ?? 'none'}:${selectedTags.join('|')}`;


  const [hideHeader, setHideHeader] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 50) {
        // scrolling down → hide
        setHideHeader(true);
      } else {
        // scrolling up → show
        setHideHeader(false);
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);


  return (
      <div
    className="
    relative w-full h-auto
    before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0
    before:bg-[url('/assets/food5.png')]
    before:bg-top before:bg-repeat
    before:opacity-25 dark:before:opacity-10
    before:-z-10
    before:bg-origin-border before:bg-clip-border
    "
  >
    <div className="flex flex-col pt-40 min-h-screen">
      {/* Outer encapsulating div for category and tag */}
      <div
        className={`fixed top-0 z-10 w-dvw transition-transform duration-300 backdrop-blur-sm bg-body-1
          ${hideHeader ? "-translate-y-full" : "translate-y-0"}`}>
        
        {table ? <OrderNavbar name={table.restaurant.name[locale as keyof StringItem] ?? table.restaurant.name.en} table_number={table.table_number} logo_url={table.restaurant.logo_url} /> : <OrderNavbar name={"MenuWire Demo"}/>}

        {/* Category picker */}
        <div className="px-4">
          <div className="bg-body-3 border-0 border-[rgb(var(--border-1))] overflow-x-auto py-1 flex gap-4 px-4">
            {dishData.map((catData) => {
              const isActive = selected?.id === catData.id;
              return (
                <button
                  key={catData.id}
                  onClick={() => selectCategory(catData)}
                  className={`border-fade flex-none inline-flex items-center justify-center px-2 my-2 text-lg whitespace-nowrap text-heading-1 ${isActive ? 'scale-110 border-b-2 border-[rgb(var(--border-1))]' : 'scale-100 border-[rgb(var(--border-1))]/0'}`}
                >
                  {getLocalizedString(catData.category_name, locale)}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tag filter */}
        {selected && tags.length > 0 && (
          <div className="fade-in overflow-x-auto py-2 px-2 border-b-1 border-[rgb(var(--border-1))] flex gap-2 pl-4">
            <button
              onClick={() => setSelectedTags([])}
              className={`border-fade box-border rounded-md flex-none inline-flex items-center justify-center px-3 py-1 text-sm whitespace-nowrap text-heading-1 ${selectedTags.length === 0 ? 'scale-100 border border-[rgb(var(--border-1))]' : 'scale-100 border-[rgb(var(--border-1))]/0'}`}
            >
              {t("all")}
            </button>
            {tags.map((tag) => {
              const label = getLocalizedString(tag.name, locale);
              const isActive = selectedTags.some((st) => st === label);
              return (
                <button
                  key={tag.id}
                  onClick={() =>
                    setSelectedTags((prev) =>
                      prev.some((st) => st === label)
                        ? prev.filter((st) => st !== label)
                        : [...prev, label]
                    )
                  }
                  className={`border-fade rounded-md flex-none inline-flex items-center justify-center px-3 py-1 text-sm whitespace-nowrap text-heading-1 ${isActive ? 'scale-100 border border-[rgb(var(--border-1))]' : 'scale-100 border-[rgb(var(--border-1))]/0'}`}
                >
                  <div className="flex flex-row">
                    {label}
                    {isActive && <Check className='pl-2 h-auto' />}
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Dishes scrollable list */}
      <div className="flex-1 px-4 pt-3 md:pt-6 overflow-y-auto pb-30">
        {
          <section className="mb-0 relative">
            <h2 className="fade-in text-2xl font-semibold mb-4 text-center text-heading-1">
              {selected ? getLocalizedString(selected.category_name, locale) : null}
            </h2>
            <div key={gridKey} className="fade-in grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredDishes.map((dish: Dish) => (
                <DishCard key={dish.id} dish={dish} locale={locale} onClick={() => openModal(dish)} />
              ))}
            </div>
          </section>
        }
      </div>

      {/* Modal for adding to cart with image, tags, options, and backdrop click */}
      {modalDish && (
        <div
          className={`backdrop-blur-sm fade-in touch-none fixed inset-0 bg-black/75 flex items-center justify-center z-50 transform transition duration-300 ease-in-out ${modalDish ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={closeModal}
        >
          <div
            className="flex flex-col scale-fade-in overscroll-contain transform transition-all duration-300 ease-out border-0 border-[rgb(var(--border-1))] p-4 rounded-md w-80 h-[85dvh] bg-body-1 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={modalDish.image || '/assets/logo.png'}
              alt={getLocalizedString(modalDish.name, locale)}
              width={300}
              height={280}
              unoptimized
              className="mx-auto mb-4 rounded-md object-cover w-auto h-auto"
            />
            <h3 className="text-xl font-semibold mb-2 text-heading-1 text-center">
              {getLocalizedString(modalDish.name, locale)}
            </h3>
            <p className="text-sm pb-2 text-heading-1">
              {getLocalizedString(modalDish.description, locale)}
            </p>
            {/* Tags */}
            {modalDish.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {modalDish.tags.map((tag) => (
                  <span
                    key={tag.id}
                    className="px-2 py-1 bg-body-3 text-xs rounded-md text-heading-1"
                  >
                    {getLocalizedString(tag.name, locale)}
                  </span>
                ))}
              </div>
            )}
            {/* Dynamically calculate price inclusive the options */}
            {(() => {
              const base = parseFloat(modalDish.price);
              const optsSum = modalDish.options
                .filter(o => selectedOpts.includes(o.id))
                .reduce((sum, o) => sum + parseFloat(o.price), 0);
              const total = ((base + optsSum) * modalQuantity).toFixed(2);
              return (
                <div className='border-t-1 box-content border-[rgb(var(--border-1))]'>
                  <p className="text-xl py-2 font-medium text-heading-1 text-center">
                    €{total}
                  </p>
                </div>
              );
            })()}

            {/* Incrementer, Decrementer */}
            <div className='w-full flex items-center justify-center border-t-1 border-[rgb(var(--border-1))] pt-2'>
              <div className="flex space-x-2 bg-body-3 max-w-max rounded-md p-1 text-heading-1">
                <button onClick={() => modalQuantity == 1 ? null : setModalQuantity(modalQuantity - 1)} className='transition-transform duration-100 active:scale-80'>
                  <MinusIcon size={24} />
                </button>
                <span>{modalQuantity}</span>
                <button onClick={() => setModalQuantity(modalQuantity + 1)} className='transition-transform duration-100 active:scale-80'>
                  <PlusIcon size={24} />
                </button>
              </div>
            </div>

            {/* Options as scrollable “chips” list */}
            <p className="font-semibold mb-2 text-heading-1">{modalDish.options.length > 0 && t('options') + ":"}</p>
            <div className="mb-3 relative flex-1">
              <div className="flex flex-col gap-2 overscroll-contain">
                {modalDish.options.map((opt) => {
                  const active = selectedOpts.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setSelectedOpts((prev) =>
                          !prev.includes(opt.id) ? [...prev, opt.id] : prev.filter((id) => id !== opt.id)
                        );
                      }}
                      className={`transition-transform duration-100 active:scale-95 px-3 py-3 rounded-md order-1 border-[rgb(var(--border-1))] ${active ? 'bg-green-500/80 text-heading-1' : 'bg-body-3 text-heading-1'}`}
                    >
                      <p className='flex flex-row justify-between'>
                        {getLocalizedString(opt.name, locale)} (+ €{Number(opt.price).toFixed(2)}) {active && <Check />}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-row justify-end gap-2 relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(modalDish);
                }}
                className="transition-transform duration-100 active:scale-95 w-full px-4 py-2 relative bg-green-500/80 border-0 border-[rgb(var(--border-1))] text-heading-1 rounded-lg"
              >
                {t('addToBasket')}

                {/* Animation for adding item to basket */}
                {badges.map((badge) => (
                  <span
                    onClick={(e) => e.stopPropagation()}
                    key={badge.id}
                    onAnimationEnd={() => handleAnimationEnd(badge.id)}
                    className="absolute right-0 top-0 bg-green-500/80 text-heading-1 px-2 py-1 rounded-md animate-[moveUpFade_1s_ease-out_forwards]"
                  >
                    {t("added")}
                  </span>
                ))}

              </button>
              <button
                onClick={closeModal}
                className="border-0 border-[rgb(var(--border-1))] px-4 py-2 bg-red-500/80 rounded-lg transform transition duration-300 hover:scale-105 text-heading-1"
              >
                {t('close')}
              </button>
            </div>
          </div>
        </div>
      )}
      {/* <ChatBot /> */}
      <Basket cart={cart} setCart={setCart} code={code} />
    </div>
    </div>
  );
}