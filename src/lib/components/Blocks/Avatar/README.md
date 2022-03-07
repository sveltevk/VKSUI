# Avatar

Надстройка над `<img />`. Компонент принимает все валидные для этого элемента свойства.

```svelte scroll
<script>
	import { Group, Header, SimpleCell, RichCell, UsersStack, Button, Avatar } from '@sveltevk/vksui';
	import Icon16Add from '@sveltevk/icons/dist/16/add';
	import Icon16Like from '@sveltevk/icons/dist/16/like';
	import Icon20GiftCircleFillRed from '@sveltevk/icons/dist/20/gift_circle_fill_red';
	import Icon24MoreHorizontal from '@sveltevk/icons/dist/24/more_horizontal';
	import Icon28AddOutline from '@sveltevk/icons/dist/28/add_outline';

	import { getAvatarUrl } from '$site/data/utils';

	const sizes = [24, 28, 32, 36, 40, 44, 48, 56, 64, 72, 80, 88, 96];
	const getBadgeSize = (s) => (s < 40 ? 12 : s < 56 ? 16 : s < 72 ? 20 : 24);
	const getOverlaySize = (s) =>
		s < 28 ? 16 : s < 32 ? 18 : s < 44 ? 20 : s < 56 ? 24 : s < 96 ? 28 : 32;
</script>

<Group>
	<Header mode="secondary">Дефолтный размер</Header>
	<SimpleCell description="VKontakte">
		<Avatar slot="before" src={getAvatarUrl('user_arthurstam')} />
		Артур Стамбульцян
	</SimpleCell>
</Group>
<Group>
	<Header mode="secondary">RichCell</Header>
	<RichCell disabled caption="Команда ВКонтакте, Санкт-Петербург">
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
		<svelte:fragment slot="actions">
			<Button>Добавить</Button>
			<Button mode="secondary">Скрыть</Button>
		</svelte:fragment>
		Илья Гришин
	</RichCell>
</Group>
<Group>
	<Header mode="secondary">Placeholder</Header>
	<SimpleCell description="Только от друзей друзей">
		<Avatar slot="before" style="background: var(--accent);" size={28} shadow={false}>
			<Icon16Add fill="var(--white)" />
		</Avatar>
		Заявки в друзья
	</SimpleCell>
	<SimpleCell description="Только важные">
		<Avatar slot="before" style="background: var(--destructive);" size={28} shadow={false}>
			<Icon16Like fill="var(--white)" />
		</Avatar>
		Отметки «Мне нравится»
	</SimpleCell>
</Group>
<Group description="Дефолтный стиль аватарки. Используется для юзеров, групп.">
	<Header mode="secondary">Дефолтный тип</Header>
	<SimpleCell>
		<Avatar slot="before" src={getAvatarUrl('user_evg')} />
		Евгений Авсиевич
	</SimpleCell>
	<SimpleCell>
		<Avatar slot="before" src={getAvatarUrl('user_id34')} />
		Татьяна Плуталова
	</SimpleCell>
	<SimpleCell>
		<Avatar slot="before" src={getAvatarUrl('user_illarionov')} />
		Олег Илларианов
	</SimpleCell>
</Group>

<Group description="Значок аватарки. Используется для юзеров, групп.">
	<Header mode="secondary">Значок</Header>
	<div class="Avatars">
		{#each sizes as size}
			<Avatar src={getAvatarUrl('user_evg')} {size}>
				<Icon20GiftCircleFillRed
					slot="badge"
					width={getBadgeSize(size)}
					height={getBadgeSize(size)}
				/>
			</Avatar>
		{/each}
	</div>
	<div class="Avatars">
		{#each sizes as size}
			<Avatar src={getAvatarUrl('user_id34')} badge="online" {size} />
		{/each}
	</div>
	<div class="Avatars">
		{#each sizes as size}
			<Avatar src={getAvatarUrl('user_illarionov')} badge="online-mobile" {size} />
		{/each}
	</div>
</Group>
<Group>
	<Header mode="secondary">Overlay, показывается всегда</Header>
	<div class="Avatars">
		{#each sizes as size}
			<Avatar
				overlayAction="always"
				overlayMode={size > 48 ? 'dark' : 'light'}
				src={getAvatarUrl('user_id34')}
				{size}
			>
				<Icon28AddOutline
					slot="overlayIcon"
					width={getOverlaySize(size)}
					height={getOverlaySize(size)}
					style="color: #3F8AE0;"
				/>
				<Icon20GiftCircleFillRed
					slot="badge"
					width={getBadgeSize(size)}
					height={getBadgeSize(size)}
				/>
			</Avatar>
		{/each}
	</div>
	<Header mode="secondary">Overlay, показывается при наведении</Header>
	<div class="Avatars">
		{#each sizes as size}
			<Avatar overlayAction="hover" overlayMode="dark" src={getAvatarUrl('user_illarionov')} {size}>
				<Icon28AddOutline
					slot="overlayIcon"
					width={getOverlaySize(size)}
					height={getOverlaySize(size)}
					style="color: #FFF;"
				/>
				<Icon20GiftCircleFillRed
					slot="badge"
					width={getBadgeSize(size)}
					height={getBadgeSize(size)}
				/>
			</Avatar>
		{/each}
	</div>
</Group>

<Group description="Аватарки для приложений. Радиус скургления зависит от значения свойства size.">
	<Header mode="secondary">Приложения</Header>
	<SimpleCell description="Ролевая">
		<Avatar slot="before" mode="app" src={getAvatarUrl('app_shorm_online')} />
		Шторм онлайн
	</SimpleCell>
	<SimpleCell description="Настольная" multiline={false}>
		<Avatar slot="before" mode="app" src={getAvatarUrl('app_shashki')} />
		Шашки - 3 вида: шашки, уголки, поддавки
	</SimpleCell>
	<SimpleCell description="Головоломка">
		<Avatar slot="before" mode="app" src={getAvatarUrl('app_vega_mix')} />
		Вега Микс на даче
	</SimpleCell>
</Group>
<Group description="Используется для остальных случаев. Например, для музыки и плейлистов.">
	<Header mode="secondary">Обложки</Header>
	<SimpleCell description="Arctic Monkeys">
		<Avatar slot="before" mode="image" src={getAvatarUrl('audio_arctic_monkeys')} />
		<Icon24MoreHorizontal slot="after" fill="var(--accent)" />
		I Wanna Be Yours
	</SimpleCell>
	<SimpleCell description="Лето (звери)">
		<Avatar slot="before" mode="image" src={getAvatarUrl('audio_leto_zveri')} />
		<Icon24MoreHorizontal slot="after" fill="var(--accent)" />
		6 утра
	</SimpleCell>
	<SimpleCell description="Depeche Mode">
		<Avatar slot="before" mode="image" src={getAvatarUrl('audio_depeche_mode')} />
		<Icon24MoreHorizontal slot="after" fill="var(--accent)" />
		Enjoy the Silence
	</SimpleCell>
</Group>

<style>
	.Avatars {
		display: flex;
		padding: 12px;
		gap: 8px;
		flex-flow: row wrap;
	}
</style>
```
