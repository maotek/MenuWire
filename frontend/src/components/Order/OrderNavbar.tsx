"use client";

import Image from 'next/image';
import Link from 'next/link';
import { locales } from "@/i18n/config";
import { Options } from "./Options";


interface OrderNavbarProps {
    logo_url?: string | null;
    name?: string | null;
    table_number?: number | null;
}


const OrderNavbar = ({ table_number, logo_url, name }: OrderNavbarProps) => {
    return (
        <header className="flex w-full px-4 py-2 h-14 z-50 backdrop-blur-md bg-body-1">
            <nav className='flex flex-1 flex-row justify-between'>
                <div className='flex items-center'>
                    <Link href="/" className="flex flex-row items-center pr-3">
                        <Image className="h-[38] w-auto rounded"
                            src={logo_url as string || '/assets/logo.png'}
                            width={38}
                            height={38}
                            alt={name as string || 'MenuWire Logo'}
                            unoptimized
                        />
                        <div className='flex flex-row gap-2 items-center pl-3 font-bold text-heading-1'>
                            <h1 className="text-heading-1">
                                {name}
                            </h1>

                            {table_number &&
                                <>
                                    <h1>
                                        {table_number}
                                    </h1>
                                </>
                            }
                        </div>
                    </Link>
                </div>

                <div className='flex items-center'>
                    <Options supportedLocales={locales} />
                </div>
            </nav>
        </header>
    )
}

export default OrderNavbar;