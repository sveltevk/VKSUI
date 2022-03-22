<script lang="ts">
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import classNames from '@sveltevk/vksui/lib/classNames';
	import getClassName from '@sveltevk/vksui/lib/getClassName';
	import Spinner from '@sveltevk/vksui/components/Blocks/Spinner/Spinner.svelte';
	import PopoutWrapper from '../PopoutWrapper/PopoutWrapper.svelte';

	const platform = usePlatform();

	export let style = '';
	$: $$restProps.class = '';
</script>

<!-- 
@component
Компонент-обертка над `Spinner`.
Рекомендуется использовать в случаях, когда требуется заблокировать интерфейс до завершения асинхронного процесса.
-->

<PopoutWrapper
	hasMask={false}
	class={classNames($$props.class, getClassName('ScreenSpinner', $platform))}
	{style}
>
	<div class="ScreenSpinner__container">
		<Spinner size="large" class="ScreenSpinner__spinner" {...$$restProps} />
	</div>
</PopoutWrapper>

<style>
	:global(.ScreenSpinner) {
		animation: vkui-screen-spinner-intro 0.3s ease;
	}

	.ScreenSpinner__container {
		width: 88px;
		height: 88px;
		background: var(--tabbar_background);
		box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.08), 0 0 8px 0 rgba(0, 0, 0, 0.08);
		border-radius: 8px;
	}

	:global(.ScreenSpinner--ios) .ScreenSpinner__container {
		background: var(--modal_card_background);
		box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.12), 0 0 96px 0 rgba(0, 0, 0, 0.16);
		border-radius: 10px;
	}

	:global(.ScreenSpinner--ios .ScreenSpinner__spinner) {
		color: var(--overlay_status_icon);
	}

	@keyframes vkui-screen-spinner-intro {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}
</style>
