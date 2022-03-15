# UsersStack

Используется для отображения аватарок пользователей с каким-то сопроводительным текстом.

У компонента есть вертикальный режим – когда текст располагается под аватарками. В таком режиме рекомендуется использовать размер `m`.

## Пример реализации

```svelte scroll
<script>
	import { Group, Header, Div, UsersStack } from '@sveltevk/vksui';

	import { getAvatarUrl } from '$site/data/utils';
</script>

<Group>
	<Div>
		<UsersStack photos={[getAvatarUrl('user_lihachyov')]}>Понравилось Муртолу Левзачеву</UsersStack>
	</Div>
</Group>

<Group>
	<Div>
		<UsersStack photos={[getAvatarUrl('user_manzuk'), getAvatarUrl('user_ji')]} size="m">
			Настя и Jean пойдут на это мероприятие
		</UsersStack>
	</Div>
</Group>

<Group>
	<Div>
		<UsersStack
			photos={[
				getAvatarUrl('user_ox'),
				getAvatarUrl('user_vitalyavolyn'),
				getAvatarUrl('user_eee')
			]}
			size="xs"
		>
			Иван и ещё 2 ваших друга подписаны
		</UsersStack>
	</Div>
</Group>

<Group>
	<Header mode="secondary">Вертикальный режим</Header>
	<Div>
		<UsersStack
			photos={[
				getAvatarUrl('user_mm'),
				getAvatarUrl('user_ilyagrshn'),
				getAvatarUrl('user_lihachyov'),
				getAvatarUrl('user_wayshev'),
				getAvatarUrl('user_arthurstam'),
				getAvatarUrl('user_xyz')
			]}
			size="m"
			count={3}
			layout="vertical"
		>
			Алексей, Илья, Михаил
			<br />и ещё 3 человека
		</UsersStack>
	</Div>
</Group>

<Group>
	<Div>
		<div class="Background">
			<UsersStack
				photos={[getAvatarUrl('user_xyz'), getAvatarUrl('user_va'), getAvatarUrl('user_tc')]}
				style="color: #fff; padding: 8px 16px;"
			>
				Проголосовали 2 176 человек
			</UsersStack>
		</div>
	</Div>
</Group>

<style>
	.Background {
		background-image: linear-gradient(135deg, #f24973 0%, #3948e6 100%);
		height: 200px;
		display: flex;
		align-items: flex-end;
		justify-content: center;
		padding-bottom: 6px;
		border-radius: 12px;
	}
</style>
```
