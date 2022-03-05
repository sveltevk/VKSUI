<script lang="ts">
	import classNames from '$lib/lib/classNames';
</script>

<!-- 
@component
Компонент для отрисовки "длинного" содержимого, которое можно скроллить по горизонтали.
-->

<div {...$$restProps} class={classNames('HorizontalScroll', $$props.class)}>
	<div class="HorizontalScroll__in">
		<slot />
	</div>
</div>

<style>
	.HorizontalScroll {
		position: relative;
		overflow: hidden;
	}

	.HorizontalScroll__in {
		overflow-x: auto;
		-webkit-overflow-scrolling: touch;
		padding-bottom: 20px;
		margin-bottom: -20px;
	}

	.HorizontalScroll__in::-webkit-scrollbar {
		display: none;
	}
</style>
