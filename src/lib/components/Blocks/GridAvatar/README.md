# GridAvatar

Отображение нескольких аватаров в сетке от 1 до 4 элементов.

```svelte mini
<script>
	import { GridAvatar } from '@sveltevk/vksui';
	import { getAvatarUrl } from '$site/data/utils';
</script>

<div class="Avatars">
	<GridAvatar />
	<GridAvatar src={[getAvatarUrl('user_ji')]} />
	<GridAvatar src={[getAvatarUrl('user_wayshev'), getAvatarUrl('user_mm')]} />
	<GridAvatar
		src={[getAvatarUrl('user_arthurstam'), getAvatarUrl('user_xyz'), getAvatarUrl('user_ox')]}
	/>
	<GridAvatar
		src={[
			getAvatarUrl('user_ilyagrshn'),
			getAvatarUrl('user_tc'),
			getAvatarUrl('user_lihachyov'),
			getAvatarUrl('user_va')
		]}
	/>
</div>

<style>
	.Avatars {
		display: flex;
		padding: 12px;
		gap: 8px;
		flex-flow: row wrap;
	}
</style>
```
