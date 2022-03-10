<script lang="ts" context="module">
	const MIN_GRID_LENGTH = 1;
	const MAX_GRID_LENGTH = 4;
</script>

<script lang="ts">
	import classNames from '@sveltevk/vksui/lib/classNames';

	import Avatar, { AVATAR_DEFAULT_SHADOW, AVATAR_DEFAULT_SIZE } from '../Avatar/Avatar.svelte';

	export let src: string[] = [];
	export let size: number = AVATAR_DEFAULT_SIZE;
	export let shadow: boolean = AVATAR_DEFAULT_SHADOW;

	$: count = Math.max(MIN_GRID_LENGTH, Math.min(MAX_GRID_LENGTH, src.length));
</script>

<!-- 
@component
Отображение нескольких аватаров в сетке от 1 до 4 элементов.


```jsx { "props": { "layout": false, "iframe": false } }
<div style={{ display: 'flex', padding: 12, gap: 8, flexFlow: 'row wrap' }}>
  <GridAvatar />
  <GridAvatar src={[getAvatarUrl('user_ji')]} />
  <GridAvatar src={[getAvatarUrl('user_wayshev'), getAvatarUrl('user_mm')]} />
  <GridAvatar src={[getAvatarUrl('user_arthurstam'), getAvatarUrl('user_xyz'), getAvatarUrl('user_ox')]} />
  <GridAvatar src={[getAvatarUrl('user_ilyagrshn'), getAvatarUrl('user_tc'), getAvatarUrl('user_lihachyov'), getAvatarUrl('user_va')]} />
</div>
```
-->

<Avatar
	class={classNames($$props.class, `GridAvatar`, `GridAvatar--images-${count}`)}
	{shadow}
	{size}
>
	<div class="GridAvatar__in">
		{#each src.slice(0, MAX_GRID_LENGTH) as item}
			<div class="GridAvatar__item" style={`background-image: url(${item})`} />
		{/each}
	</div>
</Avatar>

<style>
	.GridAvatar__in {
		display: flex;
		flex-flow: column wrap;
		height: 100%;
		width: 100%;
		overflow: hidden;
		border-radius: inherit;

		--grid-avatar-image-offset: 2px;
	}

	.GridAvatar__item {
		width: calc(50% - var(--grid-avatar-image-offset) / 2);
		height: 100%;
		background-size: cover;
		background-position: center;
	}

	:global(.GridAvatar--images-1) .GridAvatar__item {
		width: 100%;
	}

	:global(.GridAvatar--images-3) .GridAvatar__item:nth-child(1n + 2),
	:global(.GridAvatar--images-4) .GridAvatar__item {
		height: calc(50% - var(--grid-avatar-image-offset) / 2);
	}

	:global(.GridAvatar--images-2) .GridAvatar__item:nth-child(1n + 2),
	:global(.GridAvatar--images-3) .GridAvatar__item:nth-child(1n + 2),
	:global(.GridAvatar--images-4) .GridAvatar__item:nth-child(1n + 3) {
		margin-left: var(--grid-avatar-image-offset);
	}

	:global(.GridAvatar--images-3) .GridAvatar__item:nth-child(2),
	:global(.GridAvatar--images-4) .GridAvatar__item:nth-child(odd) {
		margin-bottom: var(--grid-avatar-image-offset);
	}
</style>
