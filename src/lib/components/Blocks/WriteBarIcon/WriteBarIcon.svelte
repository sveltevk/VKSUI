<script lang="ts">
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';

	import classNames from '@sveltevk/vksui/lib/classNames';
	import getClassName from '@sveltevk/vksui/lib/getClassName';
	import { IOS } from '@sveltevk/vksui/lib/platform';

	import Tappable from '../../Service/Tappable/Tappable.svelte';

	import Icon28AddCircleOutline from '@sveltevk/icons/dist/28/add_circle_outline';
	import Icon28AttachOutline from '@sveltevk/icons/dist/28/attach_outline';
	import Icon48WritebarSend from '@sveltevk/icons/dist/48/writebar_send';
	import Icon48WritebarDone from '@sveltevk/icons/dist/48/writebar_done';
	import Icon24Send from '@sveltevk/icons/dist/24/send';
	import Icon28CheckCircleOutline from '@sveltevk/icons/dist/28/check_circle_outline';
	import Counter from '../Counter/Counter.svelte';

	/**
	 * Предустановленные типы кнопок в WriteBar для отрисовки иконки в зависимости от платформы.
	 * Если передать валидное значение для этого свойства, `children` игнорируется.
	 *
	 * - `attach` – иконка прикрепления.
	 * - `send` – иконка отправки.
	 * - `done` – иконка отправки в режиме редактирования.
	 */
	export let mode: 'attach' | 'send' | 'done' | undefined = undefined;
	/**
	 * Значение счётчика для кнопки. Например, для количества прикреплённых файлов.
	 */
	export let count: number = undefined;

	const platform = usePlatform();

	let icon: typeof Icon28AddCircleOutline;
	let ariaLabel: string | undefined = undefined;

	$: {
		switch (mode) {
			case 'attach':
				icon = $platform === IOS ? Icon28AddCircleOutline : Icon28AttachOutline;
				ariaLabel = 'Прикрепить файл';
				break;

			case 'send':
				icon = $platform === IOS ? Icon48WritebarSend : Icon24Send;
				ariaLabel = 'Отправить';
				break;

			case 'done':
				icon = $platform === IOS ? Icon48WritebarDone : Icon28CheckCircleOutline;
				ariaLabel = 'Готово';
				break;

			default:
				break;
		}
	}
</script>

<Tappable
	aria-label={ariaLabel}
	{...$$restProps}
	on:click
	Element={'button'}
	hasHover={false}
	activeMode="WriteBarIcon__active"
	class={classNames($$restProps.class, getClassName('WriteBarIcon', $platform), {
		[`WriteBarIcon--${mode}`]: !!mode
	})}
>
	<span class="WriteBarIcon__in">
		{#if icon}
			<svelte:component this={icon} />
		{:else}
			<slot />
		{/if}
		{#if count}
			<Counter class="WriteBarIcon__counter" size="s">
				{count}
			</Counter>
		{/if}
	</span>
</Tappable>

<style>
	:global(.WriteBarIcon) {
		background: none;
		border: 0;
		position: relative;
		color: var(--icon_secondary);
		height: 52px;
		width: 44px;
		cursor: pointer;
		border-radius: 8px;
	}

	.WriteBarIcon__in {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	:global(.WriteBarIcon:disabled) {
		opacity: 0.4;
		pointer-events: none;
	}

	:global(.WriteBarIcon__active) {
		opacity: 0.6;
	}

	:global(.WriteBarIcon__counter) {
		position: absolute;
		top: 6px;
		right: 2px;
		box-shadow: 0 0 0 2px var(--background_content);
	}

	:global(.WriteBarIcon.WriteBarIcon--send),
	:global(.WriteBarIcon.WriteBarIcon--done) {
		color: var(--accent);
	}

	/**
 * iOS
 */
	:global(.WriteBarIcon--ios) {
		color: var(--writebar_icon);
		border-radius: 10px;
	}

	:global(.WriteBarIcon--ios.WriteBarIcon--send),
	:global(.WriteBarIcon--ios.WriteBarIcon--done) {
		width: 48px;
		color: var(--writebar_icon);
	}

	:global(.WriteBarIcon--ios.WriteBarIcon--send:not(:disabled)) {
		color: var(--accent);
	}

	:global(.WriteBarIcon--ios.WriteBarIcon--send:first-child),
	:global(.WriteBarIcon--ios.WriteBarIcon--done:first-child) {
		margin-left: -4px;
	}

	:global(.WriteBarIcon--ios.WriteBarIcon--send:last-child),
	:global(.WriteBarIcon--ios.WriteBarIcon--done:last-child) {
		margin-right: -4px;
	}

	/**
 * VKCOM
 */
	:global(.WriteBarIcon--vkcom) {
		color: var(--icon_secondary);
		border-radius: 10px;
	}
</style>
