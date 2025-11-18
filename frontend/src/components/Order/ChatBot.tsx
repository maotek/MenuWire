"use client";

import { BotIcon } from 'lucide-react';
import { useState } from 'react'
import { useTranslations } from 'next-intl';

const ChatBot = () => {
    const [isOpen, setOpen] = useState(false);
    const t = useTranslations('Chatbot');

    return (
        <>
            <div className="fixed bottom-6 right-26 z-20 rounded-md p-2 backdrop-blur-xl bg-body-3/0.90 border-0 border-[rgb(var(--border-1))] shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                <button
                    aria-label={isOpen ? t('close') : t('open')}
                    onClick={() => setOpen(o => !o)}
                    className='relative p-2 transition-transform hover:scale-105'
                >
                    <BotIcon size={42} className='dark:invert' />
                </button>
            </div>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div
                        className="absolute inset-0 opacity-75 bg-body-2"
                        onClick={() => setOpen(false)}
                    />

                    <div className="relative w-[75vw] h-[75vh] bg-body-1 rounded-lg shadow-lg overflow-auto text-heading-1 p-2">
                        {t('greeting')}
                    </div>
                </div>
            )}
        </>
    )
}

export default ChatBot