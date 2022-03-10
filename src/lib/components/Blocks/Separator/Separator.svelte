<script lang="ts">
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import classNames from '@sveltevk/vksui/lib/classNames';
	import getClassName from '@sveltevk/vksui/lib/getClassName';

	/**
	 * С этим свойством компонент не будет иметь отступы слева и справа
	 */
	export let wide = false;
	export let expanded = false;

	const platform = usePlatform();
</script>

<!-- 
@component
Используется для разделения какого-либо контента. Отступы справа и слева контролируются свойством `wide`.
-->

<div
	{...$$restProps}
	aria-hidden="true"
	class={classNames(getClassName('Separator', $platform), $$props.class, {
		'Separator--wide': wide
	})}
>
	<div class="Separator__in" class:Separator__in--expanded={expanded} />
</div>

<style>
	.Separator {
		color: var(--separator_common);
	}

	.Separator__in:not(.Separator__in--expanded) {
		height: 1px;
		background: currentColor;
		transform-origin: center top;
	}

	@media (min-resolution: 2dppx) {
		.Separator__in:not(.Separator__in--expanded) {
			transform: scaleY(0.5);
		}
	}

	@media (min-resolution: 3dppx) {
		.Separator__in:not(.Separator__in--expanded) {
			transform: scaleY(0.32);
		}
	}

	.Separator__in--expanded {
		height: 16px;
		background: transparent;
	}

	.Separator:not(.Separator--wide) .Separator__in {
		margin-left: 16px;
		margin-right: 16px;
	}

	/**
 * iOS
 */
	.Separator:not(.Separator--wide).Separator--ios .Separator__in {
		margin-left: 12px;
		margin-right: 12px;
	}

	/*
 * CMP:
 * ModalPage
 */
	:global(.ModalPage--sizeX-regular) .Separator:not(.Separator--wide) {
		padding-left: 8px;
		padding-right: 8px;
	}
</style>
