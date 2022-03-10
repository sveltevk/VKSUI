<script lang="ts">
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import classNames from '@sveltevk/vksui/lib/classNames';
	import getClassName from '@sveltevk/vksui/lib/getClassName';
	import CounterTypography from './CounterTypography.svelte';

	export let mode: 'secondary' | 'primary' | 'prominent' = 'secondary';
	export let size: 's' | 'm' = 'm';

	const platform = usePlatform();
</script>

<!-- 
@component
Компонент для отрисовки счетчика в ячейках и кнопках.
Принимает в качестве слота число или строку с отформатированным числом по разрядам.
-->

<span
	{...$$restProps}
	class={classNames(
		getClassName('Counter', $platform),
		$$props.class,
		`Counter--${mode}`,
		`Counter--s-${size}`
	)}
>
	<CounterTypography class="Counter__in" {size} platform={$platform}>
		<slot />
	</CounterTypography>
</span>

<style>
	.Counter {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	:global(.Counter__in) {
		display: block;
		width: 100%;
		padding-left: 5px;
		padding-right: 5px;
		text-align: center;
		box-sizing: border-box;
	}

	.Counter--primary {
		background: var(--counter_primary_background);
		color: var(--counter_primary_text);
	}

	.Counter--secondary {
		background: var(--counter_secondary_background);
		color: var(--counter_secondary_text);
	}

	.Counter--prominent {
		background: var(--counter_prominent_background);
		color: var(--counter_prominent_text);
	}

	.Counter--s-m {
		height: 24px;
		min-width: 24px;
		border-radius: 12px;
	}

	.Counter--s-s {
		height: 18px;
		min-width: 18px;
		border-radius: 9px;
	}

	.Counter--vkcom.Counter--s-m :global(.Counter__in) {
		padding-left: 6px;
		padding-right: 6px;
	}

	/**
 * CMP:
 * Button
 */
	:global(.Button--lvl-primary.Button--clr-accent) .Counter,
	:global(.Button--lvl-secondary.Button--clr-neutral) .Counter,
	:global(.Button--lvl-tertiary.Button--clr-neutral) .Counter {
		background-color: var(--button_primary_foreground, var(--vkui--color_background_contrast));
		color: var(--button_primary_background, var(--vkui--color_text_contrast));
	}

	:global(.Button--lvl-secondary.Button--clr-accent) .Counter {
		background-color: var(--button_secondary_foreground, var(--vkui--color_background_accent));
		color: var(--background_content, var(--vkui--color_text_contrast_themed));
	}

	:global(.Button--lvl-tertiary.Button--clr-accent) .Counter {
		background-color: var(--button_tertiary_foreground, var(--vkui--color_background_accent));
		color: var(--background_content, var(--vkui--color_text_contrast_themed));
	}

	:global(.Button--lvl-outline.Button--clr-accent) .Counter {
		background-color: var(--button_outline_foreground, var(--vkui--color_background_accent));
		color: var(--background_content, var(--vkui--color_text_contrast_themed));
	}

	:global(.Button--lvl-primary.Button--clr-positive) .Counter {
		background-color: var(--button_commerce_foreground, var(--vkui--color_background_contrast));
		color: var(--button_commerce_background, var(--vkui--color_text_positive));
	}

	:global(.Button--lvl-secondary.Button--clr-positive) .Counter,
	:global(.Button--lvl-tertiary.Button--clr-positive) .Counter,
	:global(.Button--lvl-outline.Button--clr-positive) .Counter {
		background-color: var(--button_commerce_background, var(--vkui--color_background_positive));
		color: var(--button_commerce_foreground, var(--vkui--color_text_contrast));
	}

	:global(.Button--lvl-primary.Button--clr-negative) .Counter {
		background-color: var(--white, var(--vkui--color_background_contrast));
		color: var(--destructive, var(--vkui--color_text_negative));
	}

	:global(.Button--lvl-secondary.Button--clr-negative) .Counter,
	:global(.Button--lvl-tertiary.Button--clr-negative) .Counter,
	:global(.Button--lvl-outline.Button--clr-negative) .Counter {
		background-color: var(--destructive, var(--vkui--color_background_negative));
		color: var(--white, var(--vkui--color_text_contrast));
	}

	:global(.Button--lvl-primary.Button--clr-neutral) .Counter {
		background-color: var(
			--media_overlay_button_background,
			var(--vkui--color_background_contrast)
		);
		color: var(--text_primary, var(--vkui--color_text_primary));
	}

	:global(.Button--lvl-primary.Button--clr-overlay) .Counter {
		background-color: var(
			--media_overlay_button_foreground,
			var(--vkui--color_icon_primary_invariably)
		);
		color: var(--media_overlay_button_background, var(--vkui--color_text_contrast));
	}

	:global(.Button--lvl-secondary.Button--clr-overlay) .Counter,
	:global(.Button--lvl-tertiary.Button--clr-overlay) .Counter,
	:global(.Button--lvl-outline.Button--clr-overlay) .Counter {
		background-color: var(
			--media_overlay_button_background,
			var(--vkui--color_background_contrast)
		);
		color: var(--media_overlay_button_foreground, var(--vkui--color_text_primary_invariably));
	}

	:global(.Button--lvl-secondary.Button--clr-accent) .Counter--vkcom,
	:global(.Button--lvl-tertiary.Button--clr-accent) .Counter--vkcom,
	:global(.Button--lvl-outline.Button--clr-accent) .Counter--vkcom {
		opacity: 0.72;
	}

	/**
 * CMP:
 * WriteBarIcon
 */
	:global(.WriteBarIcon) .Counter {
		color: var(--button_commerce_foreground);
		background: var(--button_commerce_background);
	}
</style>
