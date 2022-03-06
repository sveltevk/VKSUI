<script lang="ts">
	import { fade } from 'svelte/transition';
	import { ANDROID } from '$lib/lib/platform';
	import { usePlatform } from '$lib/hooks/usePlatform';
	import classNames from '$lib/lib/classNames';
	import getClassName from '$lib/lib/getClassName';

	export let hasMask: boolean = true;
	export let alignY: 'top' | 'center' | 'bottom' = 'center';
	export let alignX: 'left' | 'center' | 'right' = 'center';
	export let closing: boolean = false;

	let opened = false;

	const platform = usePlatform();
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
		getClassName('PopoutWrapper', $platform),
		`PopoutWrapper--v-${alignY}`,
		`PopoutWrapper--h-${alignX}`,
		{ 'PopoutWrapper--closing': closing, 'PopoutWrapper--opened': opened },
		$$props.class
	)}
	transition:fade={{ duration: $platform === ANDROID ? 200 : 300 }}
	on:introend={() => (opened = true)}
>
	{#if hasMask}
		<div class="PopoutWrapper__mask" />
	{/if}
	<div class="PopoutWrapper__container">
		<slot />
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

	.PopoutWrapper--closing .PopoutWrapper__mask {
		opacity: 0;
	}

	.PopoutWrapper__mask {
		opacity: 1;
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		background: rgba(0, 0, 0, 0.4);
	}

	.PopoutWrapper__container {
		width: 100%;
		height: 100%;
		position: relative;
		display: flex;
		box-sizing: border-box;
		z-index: 2;
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

	.PopoutWrapper--ios .PopoutWrapper__mask {
		animation: animation-full-fade-in 0.3s ease;
	}

	.PopoutWrapper--ios.PopoutWrapper--closing .PopoutWrapper__mask {
		transition: opacity 0.3s var(--ios-easing);
	}

	/**
 * Android version
 */

	.PopoutWrapper--android .PopoutWrapper__mask {
		animation: animation-full-fade-in 0.2s ease;
	}

	.PopoutWrapper--android.PopoutWrapper--closing .PopoutWrapper__mask {
		transition: opacity 0.2s var(--android-easing);
	}

	@keyframes animation-full-fade-in {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}
</style>
