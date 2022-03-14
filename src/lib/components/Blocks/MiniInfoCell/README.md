# MiniInfoCell

## Пример

```svelte scroll
<script>
	import { Group, MiniInfoCell, UsersStack, Avatar, Link } from '@sveltevk/vksui';
	import Icon20ArticleOutline from '@sveltevk/icons/dist/20/article_outline';
	import Icon20FollowersOutline from '@sveltevk/icons/dist/20/followers_outline';
	import Icon20GlobeOutline from '@sveltevk/icons/dist/20/globe_outline';
	import Icon20WorkOutline from '@sveltevk/icons/dist/20/work_outline';
	import Icon20Info from '@sveltevk/icons/dist/20/info';

	import { getAvatarUrl } from '$site/data/utils';
</script>

<Group>
	<MiniInfoCell textWrap="short">
		<Icon20ArticleOutline slot="before" />
		ВКонтакте начинался как сайт для выпускников вузов, а сейчас это огромная экосистема с
		безграничными возможностями и миллионами пользователей.
	</MiniInfoCell>

	<MiniInfoCell>
		<Icon20FollowersOutline slot="before" />
		<UsersStack
			slot="after"
			photos={[getAvatarUrl('user_mm'), getAvatarUrl('user_arthurstam'), getAvatarUrl('user_xyz')]}
		/>
		514,7K подписчиков · 77 друзей
	</MiniInfoCell>

	<MiniInfoCell>
		<Icon20GlobeOutline slot="before" />
		<Link href="https://vk.com/team">vk.com/team</Link>
	</MiniInfoCell>

	<MiniInfoCell>
		<Icon20WorkOutline slot="before" />
		<Avatar
			slot="after"
			size={24}
			src="https://sun9-29.userapi.com/c623616/v623616034/1c184/MnbEYczHxSY.jpg?ava=1"
		/>
		Место работы: Команда ВКонтакте
	</MiniInfoCell>

	<MiniInfoCell mode="add" on:click={() => console.log('Указать место учёбы')}>
		<Icon20WorkOutline slot="before" />
		Укажите место учёбы
	</MiniInfoCell>

	<MiniInfoCell mode="more" on:click={() => console.log('Подробная информация')}>
		<Icon20Info slot="before" />
		Подробная информация
	</MiniInfoCell>
</Group>
```
