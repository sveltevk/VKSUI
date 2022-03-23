# RichCell

## Пример

```svelte scroll
<script>
	import { Group, RichCell, UsersStack, ButtonGroup, Button, Avatar } from '@sveltevk/vksui';
	import Icon28UserAddOutline from '@sveltevk/icons/dist/28/user_add_outline';

	import { getAvatarUrl } from '$site/data/utils';
</script>

<Group>
	<RichCell disabled multiline text="Держи за обед в EZO" caption="Вчера в 20:30" after="+ 1 500 ₽">
		<Avatar slot="before" size={72} src={getAvatarUrl('user_ti')} />
		<ButtonGroup slot="actions" mode="horizontal" gap="s">
			<Button>Принять</Button>
			<Button mode="secondary">Отклонить</Button>
		</ButtonGroup>
		Тарас Иванов
	</RichCell>
	<RichCell disabled caption="Команда ВКонтакте, Санкт-Петербург">
		<Icon28UserAddOutline slot="after" />
		<Avatar slot="before" size={72} src={getAvatarUrl('user_ilyagrshn')} />
		<UsersStack
			slot="bottom"
			photos={[
				getAvatarUrl('user_ox'),
				getAvatarUrl('user_vitalyavolyn'),
				getAvatarUrl('user_eee')
			]}
		>
			73 общих друга
		</UsersStack>
		<ButtonGroup slot="actions" mode="horizontal" gap="s">
			<Button>Добавить</Button>
			<Button mode="secondary">Скрыть</Button>
		</ButtonGroup>
		Илья Гришин
	</RichCell>
	<RichCell text="Поездка в Лиссабон" caption="Вчера в 20:30" after="+ 1 500 ₽">
		<Avatar slot="before" size={48} src={getAvatarUrl('user_lihachyov')} />
		Михаил Лихачев
	</RichCell>
	<RichCell caption="Вчера в 20:30" after="- 700 ₽">
		<Avatar slot="before" size={48} src={getAvatarUrl('user_tc')} />
		Тимофей Чаптыков
	</RichCell>
</Group>
```
