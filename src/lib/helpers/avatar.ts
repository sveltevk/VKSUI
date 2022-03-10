import type { InitialsAvatarNumberGradients } from '@sveltevk/vksui/components/Blocks/InitialsAvatar/InitialsAvatar.svelte';

/**
 * Вычисляет цвет InitialsAvatar на основании переданного идентификатора объекта
 */
export function calcInitialsAvatarColor(objectId: number): InitialsAvatarNumberGradients {
	return ((objectId % 6) + 1) as InitialsAvatarNumberGradients;
}
