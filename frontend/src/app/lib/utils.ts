import type { StringItem } from "@/app/lib/types"
import { locales } from "@/i18n/config"

// Keys available on StringItem
export type StringItemKey = keyof StringItem // 'en' | 'zh' | 'nl'

// Normalize an incoming locale to one of the supported base locales from i18n/config
export function normalizeToSupportedLocale(input?: string | null): string {
	const raw = (input ?? "").toLowerCase()
	// extract base like 'en' from 'en-US'
	const base = raw.split("-")[0]
	return locales.includes(base) ? base : "en"
}

// Map a supported i18n locale directly to the StringItem key
export function toStringItemKey(locale: string): StringItemKey {
	if (locale === "en" || locale === "nl" || locale === "zh") return locale
	return "en"
}

/**
 * Safely pick a localized string from a StringItem using the app's supported locales.
 * - Uses the locales list from i18n/config to validate the input
 * - Falls back to .en if missing
 */
export function getLocalizedString(
	value: StringItem,
	locale?: string | null,
): string {
	const supported = normalizeToSupportedLocale(locale)
	const key = toStringItemKey(supported)
	const picked = value[key]
	return picked ?? value.en
}

