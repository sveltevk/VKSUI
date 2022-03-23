<script lang="ts">
	import { useAdaptivity } from '@sveltevk/vksui/hooks/useAdaptivity';
	import { ViewHeight, ViewWidth } from '@sveltevk/vksui/lib/adaptivity';
	import classNames from '@sveltevk/vksui/lib/classNames';
	import { portal } from '@sveltevk/vksui/lib/portal';
	import { noop } from 'svelte/internal';
	import { useAppRoot } from '../../Layout/AppRoot/AppRootContext.svelte';

	export let isPopout = Boolean($$slots.popout);
	export let isModal = Boolean($$slots.modal);

	const adaptivity = useAdaptivity();
	$: isDesktop =
		$adaptivity.viewWidth >= ViewWidth.SMALL_TABLET &&
		($adaptivity.hasMouse || $adaptivity.viewHeight >= ViewHeight.MEDIUM);

	const appPortal = (el: HTMLElement, target: HTMLElement) => {
		if ($appRoot.portalRoot && $appRoot.mode !== 'full') {
			return { ...portal(el, target) };
		}

		el.hidden = false;
		async function update(newTarget: HTMLElement | null) {
			newTarget.hidden = false;
		}

		update(target);
		return {
			update,
			noop
		};
	};

	const appRoot = useAppRoot();
</script>

<div {...$$restProps} class={classNames($$restProps.class, 'PopoutRoot')}>
	<slot />
	{#if isPopout}
		<div
			use:appPortal={$appRoot.portalRoot}
			hidden
			class:PopoutRoot--absolute={isDesktop}
			class:PopoutRoot__popout={!isDesktop}
		>
			<slot name="popout" />
		</div>
	{/if}
	{#if isModal}
		<div use:portal={$appRoot.portalRoot} hidden class="PopoutRoot__modal">
			<slot name="modal" />
		</div>
	{/if}
</div>

<style>
	.PopoutRoot {
		width: 100%;
		height: 100%;
		position: relative;
	}

	.PopoutRoot__popout {
		position: fixed;
		left: 0;
		top: 0;
		z-index: 100;
		width: 100%;
		height: 100%;
	}

	.PopoutRoot--absolute {
		position: absolute;
		left: 0;
		top: 0;
		z-index: 100;
		width: 100%;
		height: 100%;
	}

	.PopoutRoot__modal {
		position: fixed;
		left: 0;
		top: 0;
		z-index: 99;
		width: 100%;
		height: 100%;
	}

	.PopoutRoot__modal:empty {
		display: none;
	}
</style>
