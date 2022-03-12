<script lang="ts">
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';

	import { useDOM } from '@sveltevk/vksui/lib/dom';
	import getClassName from '@sveltevk/vksui/lib/getClassName';
	import { classNames } from '@vkontakte/vkjs';
	import { onMount } from 'svelte';
	import { useSplitCol } from '../SplitCol/SplitColContext.svelte';

	export let vertical: 'top' | 'bottom' = undefined;
	export let filled = false;

	export let style = '';

	const dom = useDOM();
	const splitCol = useSplitCol();

	let width = '';
	const doResize = () => {
		width = $splitCol.colRef ? `${$splitCol.colRef.offsetWidth}px` : '';
	};

	splitCol.subscribe(doResize);

	let oldEvent: () => void;

	const resizeEvent = (contentWindow: Window) => {
		if (oldEvent) {
			oldEvent();
		}

		contentWindow?.addEventListener('resize', doResize, false);
		doResize();

		return () => contentWindow?.removeEventListener('resize', doResize, false);
	};

	$: {
		resizeEvent($dom.window);
	}

	onMount(() => {
		return oldEvent;
	});

	const platform = usePlatform();

	$: $$restProps.class = classNames(
		getClassName('FixedLayout', $platform),
		{
			'FixedLayout--filled': filled
		},
		`FixedLayout--${vertical}`,
		$$props.class
	);
</script>

<div data-tooltip-container="fixed" {...$$restProps} {style} style:width>
	<div class="FixedLayout__in">
		<slot />
	</div>
</div>

<style>
	.FixedLayout {
		position: fixed;
		box-sizing: border-box;
		left: auto;
		z-index: 3;
		padding-left: var(--safe-area-inset-left);
		padding-right: var(--safe-area-inset-right);
	}

	.FixedLayout--filled {
		background: var(--background_content);
	}

	.FixedLayout--top {
		width: 100%;
		top: 0;
	}

	.FixedLayout--bottom {
		width: 100%;
		bottom: 0;
		padding-bottom: var(--safe-area-inset-bottom);
	}

	:global(.Epic) .FixedLayout--bottom {
		padding-bottom: calc(var(--tabbar_height) + var(--safe-area-inset-bottom));
	}
</style>
