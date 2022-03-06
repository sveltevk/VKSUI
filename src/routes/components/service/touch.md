# Touch

Touch – это компонент для удобной работы с pointer событиями, такими как клик, тап, перетаскивание и т.д. Он инкапсулирует в себе логику обработки вышеперечисленных событий, дает возможность отдельно реагировать на движение пальца (или мышки) по осям X и Y, а так же предоставляет данные о геометрии жеста.

Компонент используется во многих других компонентах библиотеки (Cell, Slider, Gallery, Tappable).

```svelte scroll
<script lang="ts">
	import { getContext, onMount } from 'svelte';
	import { Touch, Header } from '@sveltevk/vksui';

	let container;
	let block;

	let shiftX = 0;
	let shiftY = 0;

	let startX = 0;
	let startY = 0;
	let limitX = 0;
	let limitY = 0;

	const resize = () => {
		if (container) {
			limitX = container.offsetLeft;
			limitY = container.offsetTop;
			shiftX = shiftX > limitX ? limitX : shiftX < -limitX ? -limitX : shiftX;
			shiftY = shiftY > limitY ? limitY : shiftY < -limitY ? -limitY : shiftY;
			onEnd();
		}
	};

	onMount(() => {
		window.addEventListener('resize', resize);

		if (document.readyState === 'complete') {
			resize();
		} else {
			window.addEventListener('load', resize);
		}
	});

	const onMove = (e) => {
		let newShiftX = startX + e.detail.shiftX;
		let newShiftY = startY + e.detail.shiftY;

		shiftX = newShiftX > limitX ? limitX : newShiftX < -limitX ? -limitX : newShiftX;
		shiftY = newShiftY > limitY ? limitY : newShiftY < -limitY ? -limitY : newShiftY;
	};

	const onEnd = () => {
		startX = shiftX;
		startY = shiftY;
	};

	$: limitExceeded = Math.abs(shiftX) >= limitX || Math.abs(shiftY) >= limitY;
</script>

<Header mode="secondary">Перетащите кружок</Header>
<div bind:this={block} class="container" class:limitExceeded>
	<Touch
		bind:container
		on:end={onEnd}
		on:move={onMove}
		class="circle"
		style={`transform: translate(${shiftX}px, ${shiftY}px)`}
	/>
</div>

<style>
	.container {
		height: 200px;
		border: 8px solid var(--icon_secondary);
		position: relative;
		border-color: var(--icon_secondary);
	}
	.limitExceeded {
		border-color: var(--destructive);
	}

	.circle {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background: var(--accent);
		position: absolute;
		left: 50%;
		top: 50%;
		margin-left: -20px;
		margin-top: -20px;
	}
</style>
```
