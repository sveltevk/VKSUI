<script lang="ts">
	import Icon20Cancel from '@sveltevk/icons/dist/20/cancel';
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import classNames from '@sveltevk/vksui/lib/classNames';
	import getClassName from '@sveltevk/vksui/lib/getClassName';
	import Tappable from '../../Service/Tappable/Tappable.svelte';

	const platform = usePlatform();
</script>

<Tappable
	{...$$restProps}
	on:click
	class={classNames($$restProps.class, getClassName('ModalDismissButton', $platform))}
	activeMode="ModalDismissButton--active"
	hoverMode="ModalDismissButton--hover"
>
	<Icon20Cancel />
</Tappable>

<style>
	:global(.ModalDismissButton) {
		position: absolute;
		justify-content: center;
		top: 0;
		right: -56px;
		width: 56px;
		height: 56px;
		padding: 18px;
		box-sizing: border-box;
		color: var(--white);
		transition: opacity 0.15s ease-out;
	}

	:global(.ModalDismissButton::before) {
		display: block;
		content: '';
		top: 14px;
		right: 14px;
		bottom: 14px;
		left: 14px;
		background-color: rgba(0, 0, 0, 0.35);
		border-radius: 50%;
		position: absolute;
	}

	/* fixes icon misplacement on Safari in some cases */
	:global(.ModalDismissButton .Icon) {
		transform: translateX(0);
	}

	:global(.ModalDismissButton--hover) {
		opacity: 0.6;
	}

	:global(.ModalDismissButton--active) {
		opacity: 1;
	}
</style>
