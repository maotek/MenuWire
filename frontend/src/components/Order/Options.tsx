"use client";

import { useEffect, useState, useTransition } from "react";
import { setUserLocale } from "@/services/locale";
import { Locale, useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, Moon, Sun, Loader } from "lucide-react";

interface OptionsProps {
    supportedLocales: string[];
}

export const Options = ({ supportedLocales }: OptionsProps) => {
    const locale = useLocale();
    const t = useTranslations("locales");
    const { theme, setTheme } = useTheme();
    const [isPending, startTransition] = useTransition();

    // Avoid hydration mismatch for theme icon
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    const onChangeLocale = (value: string) => {
        startTransition(() => setUserLocale(value as Locale));
    };

    return (
        <div className="flex items-center gap-2 h-10">
            {/* Theme toggle */}
            <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
                className="!border-[rgb(var(--border-1))] border-0 bg-body-3 duration-0 text-heading-1 hover:bg-inherit hover:text-heading-1 focus:outline-none focus:ring-0 focus-visible:ring-0 active:outline-none"
            >
                {mounted ? (
                    theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />
                ) : (
                    // placeholder to prevent hydration warning
                    <Sun className="h-5 w-5" />
                )}
            </Button>

            {/* Locale dropdown */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        type="button"
                        variant="outline"
                        className="justify-between !border-[rgb(var(--border-1))] border-0 bg-body-3 duration-0 text-heading-1 hover:bg-inherit hover:text-heading-1"
                        disabled={isPending}
                    >
                        <span className="truncate">{locale.toUpperCase()}</span>
                        {isPending ? (
                            <Loader className="ml-2 h-4 w-4 animate-spin" />
                        ) : (
                            <Globe className="ml-2 h-4 w-4 opacity-70" />
                        )}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-body-3 text-heading-1 border-[rgb(var(--border-1))] border-0">
                    {/* <DropdownMenuLabel>Language</DropdownMenuLabel> */}
                    {/* <DropdownMenuSeparator className="border-t border-[0.5px] border-[rgb(var(--border-1))]" /> */}
                    <DropdownMenuRadioGroup value={locale} onValueChange={onChangeLocale} className="border-[rgb(var(--border-1))]">
                        {supportedLocales.map((code) => (
                            <DropdownMenuRadioItem key={code} value={code} className="hover:!text-[rgb(var(--heading-1))] focus:!text-[rgb(var(--heading-1))] data-[highlighted]:bg-[rgb(var(--body-2))] data-[state=checked]:font-bold"
                            >
                                {t(code)}
                            </DropdownMenuRadioItem>
                        ))}
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};
