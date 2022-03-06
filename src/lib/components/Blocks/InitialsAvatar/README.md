# InitialsAvatar

Компонент для отображения текстовых аватаров на фоне градиента (например, когда у пользователя нет установленного изображения). Для лучшего отображения, рекомендуется использовать длину текста **не более 2 символов**.

ВКонтакте использует формулу `user_id % 6 + 1` (см. функцию [`calcInitialsAvatarColor`](/VKSUI/utils)) для определения градиента пользователя. Например, у пользователя c id 106 будет 5-й (`l-blue`) цвет градиента.

```svelte mini
<script>
	import { InitialsAvatar, calcInitialsAvatarColor } from '@sveltevk/vksui';
	import { getRandomUser } from '$site/data/utils';

	const sizes = [16, 20, 24, 28, 32, 36, 40, 44, 48, 56, 64, 72, 80, 88, 96];
</script>

<div class="Avatars">
	{#each sizes as size}
		{@const user = getRandomUser()}
		<InitialsAvatar {size} gradientColor={calcInitialsAvatarColor(user.id)}>
			{user.initials}
		</InitialsAvatar>
	{/each}
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
