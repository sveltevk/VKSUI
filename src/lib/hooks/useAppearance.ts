import { getContext } from 'svelte';
import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import { ContextKey } from '../lib/config';
import type { AppearanceType } from '@vkontakte/vk-bridge';

export function useAppearance(): Writable<AppearanceType> {
	const wAppearance = getContext(ContextKey.appearance) as Writable<AppearanceType>;

	return wAppearance || writable('light');
}
