<script lang="ts">
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import { ANDROID, VKCOM } from '@sveltevk/vksui/lib/platform';
	import PanelHeaderButton from '../PanelHeaderButton/PanelHeaderButton.svelte';
	import Icon28DoneOutline from '@sveltevk/icons/dist/28/done_outline';
	import Icon28EditOutline from '@sveltevk/icons/dist/28/edit_outline';

	/**
	 * Включен ли режим редактирования
	 */
	export let isActive = false;
	/**
	 * iOS only. Текст кнопки, когда режим редактирования не активен
	 */
	export let editLabel = 'Редактировать';
	/**
	 * iOS only. Текст кнопки при активном режиме редактирования для выхода из него
	 */
	export let doneLabel = 'Готово';

	$: iOSText = isActive ? doneLabel : editLabel;

	const platform = usePlatform();
</script>

<PanelHeaderButton
	{...$$restProps}
	on:click
	text={$platform === ANDROID || $platform === VKCOM ? '' : iOSText}
	aria-label={iOSText}
>
	{#if isActive}
		<Icon28DoneOutline />
	{:else}
		<Icon28EditOutline />
	{/if}
</PanelHeaderButton>
