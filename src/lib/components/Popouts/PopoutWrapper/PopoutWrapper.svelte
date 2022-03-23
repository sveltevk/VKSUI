<script lang="ts">
	import { fade } from 'svelte/transition';
	import { IOS } from '@sveltevk/vksui/lib/platform';
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import classNames from '@sveltevk/vksui/lib/classNames';
	import getClassName from '@sveltevk/vksui/lib/getClassName';
	import { onMount } from 'svelte';
	import { useDOM } from '@sveltevk/vksui/lib/dom';

	export let hasMask = true;
	export let fixed = true;
	export let alignY: 'top' | 'center' | 'bottom' = 'center';
	export let alignX: 'left' | 'center' | 'right' = 'center';
	export let closing = false;

	let opened = !hasMask;

	const platform = usePlatform();

	const dom = useDOM();
	onMount(() => {
		const options = {
			passive: false
		};
		const listener = (e: TouchEvent) => e.preventDefault();

		$dom.window?.addEventListener('touchmove', listener, options);
		return () => $dom.window?.removeEventListener('touchmove', listener);
	});
</script>

<!-- 
@component
Компонент-обертка для отрисовки всплывающих окон с затемнением фона. Используется внутри `Alert`, `ActionSheet`
и `ScreenSpinner`. Свойства `alignY` и `alignX` служат для удобного позиционирования контента. Пример:

```jsx static
<PopoutWrapper alignY="center" alignX="center">
  Some content
</PopoutWrapper>
```

Все всплывающие окна передаются в свойство `popout` компонентов `View` или `Root`.
-->

<div
	{...$$restProps}
	class={classNames(
		$$props.class,
		getClassName('PopoutWrapper', $platform),
		`PopoutWrapper--v-${alignY}`,
		`PopoutWrapper--h-${alignX}`,
		{
			'PopoutWrapper--closing': closing,
			'PopoutWrapper--opened': opened,
			'PopoutWrapper--fixed': fixed,
			'PopoutWrapper--masked': hasMask
		}
	)}
	transition:fade={{ duration: $platform === IOS ? 300 : 200 }}
	on:introend={() => (opened = true)}
>
	<div class="PopoutWrapper__container">
		<div class="PopoutWrapper__overlay" on:click />
		<div class="PopoutWrapper__content"><slot /></div>
	</div>
</div>

<style>
	.PopoutWrapper {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		left: 0;
		top: 0;
		pointer-events: none;
	}

	.PopoutWrapper--opened {
		pointer-events: initial;
	}

	.PopoutWrapper--closing {
		pointer-events: none;
	}

	.PopoutWrapper--fixed {
		position: fixed;
	}

	.PopoutWrapper__overlay {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		opacity: 1;
		animation: vkui-animation-full-fade-in 0.2s ease;
	}

	.PopoutWrapper--closing .PopoutWrapper__overlay {
		opacity: 0;
		transition: opacity 0.2s var(--android-easing);
	}

	.PopoutWrapper--masked .PopoutWrapper__overlay {
		background: rgba(0, 0, 0, 0.4);
	}

	.PopoutWrapper--fixed .PopoutWrapper__overlay {
		position: absolute;
	}

	.PopoutWrapper__container {
		width: 100%;
		height: 100%;
		position: relative;
		display: flex;
		box-sizing: border-box;
	}

	.PopoutWrapper__content {
		display: flex;
		justify-content: center;
		width: 100%;
		z-index: 2;
		pointer-events: none;
	}

	.PopoutWrapper__content > :global(*) {
		pointer-events: auto;
	}

	.PopoutWrapper--v-center .PopoutWrapper__container {
		align-items: center;
	}

	.PopoutWrapper--v-bottom .PopoutWrapper__container {
		align-items: flex-end;
	}

	.PopoutWrapper--v-top .PopoutWrapper__container {
		align-items: flex-start;
	}

	.PopoutWrapper--h-center .PopoutWrapper__container {
		justify-content: center;
	}

	.PopoutWrapper--h-left .PopoutWrapper__container {
		justify-content: flex-start;
	}

	.PopoutWrapper--h-right .PopoutWrapper__container {
		justify-content: flex-end;
	}

	/**
 * iOS version
 */

	.PopoutWrapper--ios .PopoutWrapper__overlay {
		animation-duration: 0.3s;
	}

	.PopoutWrapper--ios.PopoutWrapper--closing .PopoutWrapper__overlay {
		transition: opacity 0.3s var(--ios-easing);
	}

	@keyframes vkui-animation-full-fade-in {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}
</style>
