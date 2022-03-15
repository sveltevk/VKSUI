<script lang="ts">
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import classNames from '@sveltevk/vksui/lib/classNames';
	import getClassName from '@sveltevk/vksui/lib/getClassName';

	/**
	 * Высота спэйсинга
	 */
	export let size = 8;
	/**
	 * Настройка положения сепаратора:
	 *
	 * - separator=false (default) - без сепаратора
	 * - separator=true | separator='center' - сепаратор располагается по середине
	 * - separator='top'
	 * - separator='bottom'
	 */
	export let separator: boolean | 'top' | 'bottom' | 'center' = false;

	const platform = usePlatform();
</script>

<div
	{...$$restProps}
	aria-hidden="true"
	class={classNames(getClassName('Spacing', $platform), {
		'Spacing--separator': !!separator,
		'Spacing--separator-center': separator === true || separator === 'center',
		'Spacing--separator-top': separator === 'top',
		'Spacing--separator-bottom': separator === 'bottom'
	})}
	style:height={size + 'px'}
/>

<style>
	.Spacing {
		color: var(--separator_common);
		position: relative;
		box-sizing: border-box;
		display: flex;
		flex-flow: column;
	}

	.Spacing--separator-center {
		justify-content: center;
	}

	.Spacing--separator-bottom {
		flex-direction: column-reverse;
	}

	.Spacing--separator::after {
		content: '';
		display: block;
		height: 1px;
		background: currentColor;
		transform-origin: center top;
	}

	@media (min-resolution: 2dppx) {
		.Spacing--separator::after {
			transform: scaleY(0.5);
		}
	}

	@media (min-resolution: 3dppx) {
		.Spacing--separator::after {
			transform: scaleY(0.32);
		}
	}

	.Spacing--ios {
		padding-left: 12px;
		padding-right: 12px;
	}

	.Spacing--android,
	.Spacing--vkcom {
		padding-left: 16px;
		padding-right: 16px;
	}
</style>
