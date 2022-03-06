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
		<svelte:fragment slot="before">
			<Avatar src={getAvatarUrl('user_arthurstam')} />
		</svelte:fragment>
		Артур Стамбульцян
	</SimpleCell>
</Group>
<Group>
	<Header mode="secondary">RichCell</Header>
	<RichCell disabled caption="Команда ВКонтакте, Санкт-Петербург">
		<svelte:fragment slot="before">
			<Avatar size={72} src={getAvatarUrl('user_ilyagrshn')} />
		</svelte:fragment>
		<svelte:fragment slot="bottom">
			<UsersStack
				photos={[
					getAvatarUrl('user_ox'),
					getAvatarUrl('user_vitalyavolyn'),
					getAvatarUrl('user_eee')
				]}
			>
				73 общих друга
			</UsersStack>
		</svelte:fragment>
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
		<svelte:fragment slot="before">
			<Avatar style="background: var(--accent);" size={28} shadow={false}>
				<Icon16Add fill="var(--white)" />
			</Avatar>
		</svelte:fragment>
		Заявки в друзья
	</SimpleCell>
	<SimpleCell description="Только важные">
		<svelte:fragment slot="before">
			<Avatar style="background: var(--destructive);" size={28} shadow={false}>
				<Icon16Like fill="var(--white)" />
			</Avatar>
		</svelte:fragment>
		Отметки «Мне нравится»
	</SimpleCell>
</Group>
<Group description="Дефолтный стиль аватарки. Используется для юзеров, групп.">
	<Header mode="secondary">Дефолтный тип</Header>
	<SimpleCell>
		<svelte:fragment slot="before">
			<Avatar src={getAvatarUrl('user_evg')} />
		</svelte:fragment>
		Евгений Авсиевич
	</SimpleCell>
	<SimpleCell>
		<svelte:fragment slot="before">
			<Avatar src={getAvatarUrl('user_id34')} />
		</svelte:fragment>
		Татьяна Плуталова
	</SimpleCell>
	<SimpleCell>
		<svelte:fragment slot="before">
			<Avatar src={getAvatarUrl('user_illarionov')} />
		</svelte:fragment>
		Олег Илларианов
	</SimpleCell>
</Group>

<Group description="Значок аватарки. Используется для юзеров, групп.">
	<Header mode="secondary">Значок</Header>
	<div class="Avatars">
		{#each sizes as size}
			<Avatar src={getAvatarUrl('user_evg')} {size}>
				<svelte:fragment slot="badge">
					<Icon20GiftCircleFillRed width={getBadgeSize(size)} height={getBadgeSize(size)} />
				</svelte:fragment>
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
				<svelte:fragment slot="overlayIcon">
					<Icon28AddOutline
						width={getOverlaySize(size)}
						height={getOverlaySize(size)}
						style="color: #3F8AE0;"
					/>
				</svelte:fragment>
				<svelte:fragment slot="badge">
					<Icon20GiftCircleFillRed width={getBadgeSize(size)} height={getBadgeSize(size)} />
				</svelte:fragment>
			</Avatar>
		{/each}
	</div>
	<Header mode="secondary">Overlay, показывается при наведении</Header>
	<div class="Avatars">
		{#each sizes as size}
			<Avatar overlayAction="hover" overlayMode="dark" src={getAvatarUrl('user_illarionov')} {size}>
				<svelte:fragment slot="overlayIcon">
					<Icon28AddOutline
						width={getOverlaySize(size)}
						height={getOverlaySize(size)}
						style="color: #FFF;"
					/>
				</svelte:fragment>
				<svelte:fragment slot="badge">
					<Icon20GiftCircleFillRed width={getBadgeSize(size)} height={getBadgeSize(size)} />
				</svelte:fragment>
			</Avatar>
		{/each}
	</div>
</Group>

<Group description="Аватарки для приложений. Радиус скургления зависит от значения свойства size.">
	<Header mode="secondary">Приложения</Header>
	<SimpleCell description="Ролевая">
		<svelte:fragment slot="before">
			<Avatar mode="app" src={getAvatarUrl('app_shorm_online')} />
		</svelte:fragment>
		Шторм онлайн
	</SimpleCell>
	<SimpleCell description="Настольная" multiline={false}>
		<svelte:fragment slot="before">
			<Avatar mode="app" src={getAvatarUrl('app_shashki')} />
		</svelte:fragment>
		Шашки - 3 вида: шашки, уголки, поддавки
	</SimpleCell>
	<SimpleCell description="Головоломка">
		<svelte:fragment slot="before">
			<Avatar mode="app" src={getAvatarUrl('app_vega_mix')} />
		</svelte:fragment>
		Вега Микс на даче
	</SimpleCell>
</Group>
<Group description="Используется для остальных случаев. Например, для музыки и плейлистов.">
	<Header mode="secondary">Обложки</Header>
	<SimpleCell description="Arctic Monkeys">
		<svelte:fragment slot="before">
			<Avatar mode="image" src={getAvatarUrl('audio_arctic_monkeys')} />
		</svelte:fragment>
		<svelte:fragment slot="after">
			<Icon24MoreHorizontal fill="var(--accent)" />
		</svelte:fragment>
		I Wanna Be Yours
	</SimpleCell>
	<SimpleCell description="Лето (звери)">
		<svelte:fragment slot="before">
			<Avatar mode="image" src={getAvatarUrl('audio_leto_zveri')} />
		</svelte:fragment>
		<svelte:fragment slot="after">
			<Icon24MoreHorizontal fill="var(--accent)" />
		</svelte:fragment>
		6 утра
	</SimpleCell>
	<SimpleCell description="Depeche Mode">
		<svelte:fragment slot="before">
			<Avatar mode="image" src={getAvatarUrl('audio_depeche_mode')} />
		</svelte:fragment>
		<svelte:fragment slot="after">
			<Icon24MoreHorizontal fill="var(--accent)" />
		</svelte:fragment>
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
