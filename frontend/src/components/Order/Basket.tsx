'use client';

import { MinusIcon, PlusIcon, ShoppingBasketIcon, TrashIcon } from 'lucide-react';
import { Dispatch, SetStateAction, useState } from 'react';
import { CartItem } from './DishBrowser';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { getLocalizedString } from '@/app/lib/utils';

interface BasketProps {
    cart: CartItem[];
    setCart: Dispatch<SetStateAction<CartItem[]>>;
    code: string;
}

const Basket = ({ cart, setCart, code }: BasketProps) => {
    const [isOpen, setOpen] = useState(false);
    const [isOrdering, setOrdering] = useState(false);
    const locale = useLocale();
    const t = useTranslations('Order');

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    const totalCost = cart.reduce((sum, item) => {
        const basePrice = parseFloat(item.dish.price);
        const optsTotal = item.options?.reduce(
            (optSum, o) => optSum + parseFloat(o.price),
            0
        ) || 0;
        return sum + (basePrice + optsTotal) * item.quantity;
    }, 0);

    const changeQuantity = (idx: number, delta: number) => {
        setCart((prev) =>
            prev.map((item, i) =>
                i === idx
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item
            )
        );
    };

    const deleteItem = (idx: number) => {
        setCart((prev) => prev.filter((_, i) => i !== idx));
    };

    const order = async () => {
        if (!cart || cart.length === 0) {
            alert(t('basketEmpty', { default: 'Your basket is empty.' }));
            return;
        }

        setOrdering(true);

        try {
            // Build payload: for each item send dish id, quantity, and option ids
            const payload = cart.map((item) => ({
                dish: { id: item.dish.id }, // view accepts object with id or id directly
                quantity: item.quantity,
                options: (item.options || []).map((o) => ({ id: o.id })),
            }));

            const body = {
                table: code,     // table code
                items: payload   // items array
            };

            const url = `/api/order/`

            console.log('Ordering with payload:', url);

            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            const data = await res.json().catch(() => ({}));

            if (!res.ok) {
                const msg = data.detail || data.error || 'Order failed';
                throw new Error(msg);
            }

            // success: clear cart, close modal, show confirmation
            setCart([]);
            setOpen(false);
            alert(t('orderSuccess', { default: `Order placed (#${data.id}) — total €${data.total}` }));
        } catch (err: any) {
            console.error('Order error', err);
            alert(t('orderFailed', { default: `Order failed: ${err.message || err}` }));
        } finally {
            setOrdering(false);
        }
    };

    return (
        <>
            <div className="fixed bottom-6 right-6 z-20 rounded-md p-2 backdrop-blur-xl bg-body-3/0.90 border-0 border-[rgb(var(--border-1))] shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                <button
                    onClick={() => setOpen((o) => !o)}
                    className="relative p-2 transition-transform hover:scale-105"
                >
                    <ShoppingBasketIcon size={42} className="dark:invert" />
                    {totalItems > 0 && (
                        <span className="absolute -top-4 -left-4 inline-flex items-center justify-center bg-red-500/80 text-white text-xs font-bold rounded-md w-6 h-6">
                            {totalItems}
                        </span>
                    )}
                    {totalCost > 0 && (
                        <span className="absolute -top-4 -right-4 inline-flex items-center justify-center bg-green-500/80 text-white text-xs font-bold rounded-md px-2 py-1">
                            €{totalCost.toFixed(2)}
                        </span>
                    )}
                </button>
            </div>

            {/* Modal */}
            {isOpen && <div
                className={`
                    fixed inset-0 
                    bg-black/75 
                    flex items-center justify-center 
                    z-50
                    fade-in
                    ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
                `}
                onClick={() => setOpen(false)}
            >
                <div
                    className={`
                        scale-fade-in
                        border-0 border-[rgb(var(--border-1))]
                        bg-body-1
                        rounded-lg shadow-lg 
                        w-80 h-[85vh] 
                        flex flex-col text-heading-1
                        ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
                    `}
                    onClick={(e) => e.stopPropagation()}
                >
                    {cart.length === 0 ? (
                        <p className='flex-1 flex justify-center items-center'>{t('basketEmpty', { default: 'Your basket is empty.' })}</p>
                    ) : (
                        <>
                            {/* Scrollable list */}
                            <div className="flex-1 divide-y overflow-y-auto p-4 dark:divide-gray-600">
                                {cart.map((item, idx) => {
                                    // calculate line total
                                    const basePrice = parseFloat(item.dish.price);
                                    const optsTotal = item.options?.reduce(
                                        (sum, o) => sum + parseFloat(o.price),
                                        0
                                    ) || 0;
                                    const lineTotal = ((basePrice + optsTotal) * item.quantity).toFixed(2);

                                    return (
                                        <div key={idx} className="flex items-start gap-2 py-4 first:pt-0">
                                            <Image
                                                src={item.dish.image || '/assets/logo.png'}
                                                alt={getLocalizedString(item.dish.name, locale)}
                                                width={64}
                                                height={64}
                                                unoptimized
                                                className="rounded object-cover w-16 h-16"
                                            />

                                            <div className="flex-1 flex flex-col">
                                                <div className="flex justify-between gap-2">
                                                    <p className="font-semibold text-sm">{getLocalizedString(item.dish.name, locale)}</p>
                                                    <p className="font-medium text-sm">€{lineTotal}</p>
                                                </div>
                                                {item.options && item.options.length > 0 && (
                                                    <ul className="pl-1 list-disc list-inside text-xs text-heading-1">
                                                        {item.options.map((opt) => (
                                                            <li key={opt.id}>
                                                                {getLocalizedString(opt.name, locale)} (+ €{Number(opt.price).toFixed(2)})
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                                <div className="flex items-center space-x-3 mt-2 bg-body-3 max-w-max rounded-md p-1">
                                                    <button onClick={() => changeQuantity(idx, -1)}>
                                                        <MinusIcon size={24} />
                                                    </button>
                                                    <span>{item.quantity}</span>
                                                    <button onClick={() => changeQuantity(idx, +1)}>
                                                        <PlusIcon size={24} />
                                                    </button>
                                                </div>
                                            </div>

                                            <button onClick={() => deleteItem(idx)}>
                                                <TrashIcon size={20} className="text-red-500/80" />
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className='border-t-1 mt-2 mx-2 text-center text-heading-1 pt-2 border-[rgb(var(--border-1))]'>
                                {t('totalPrice', { default: 'Total price:' })} €{totalCost.toFixed(2)}
                            </div>

                        </>
                    )}
                    {/* Order button */}
                    <div className='p-3'>
                        <button
                            onClick={order}
                            className="py-3 bg-green-500/80 text-white rounded-lg w-full"
                        >
                            {isOrdering ? (t('ordering', { default: 'Ordering...' })) : (t('orderNow', { default: 'Order Now' }))}
                        </button>
                    </div>
                </div>
            </div>
            }
        </>
    );
};

export default Basket;
