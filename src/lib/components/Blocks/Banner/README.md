# Banner

## Пример

```svelte scroll
<script>
	import { Button, Avatar, Group, Header, Link, Banner } from '@sveltevk/vksui';
	import Icon24Play from '@sveltevk/icons/dist/24/play';
	import Icon28MusicOutline from '@sveltevk/icons/dist/28/music_outline';

	import { getAvatarUrl } from '$site/data/utils';

	const musicGradient =
		'linear-gradient(135deg, #ADE6FF 0%, #ABE3FF 1%, #A7DCFF 3%, #A0CFFF 7%, #97BCFF 12%, #8DA4FF 19%, #8285FF 26%, #8B76FF 34%, #9C6AFF 43%, #B05FFF 52%, #C655FF 62%, #DB4CFF 71%, #EE45FF 81%, #FA41FF 91%, #FF3FFF 100%)';
	const warningGradient = 'linear-gradient(90deg, #ffb73d 0%, #ffa000 100%)';
</script>

<Group>
	<Header>Content: tint, size: regular</Header>
	<Banner header="Баста в Ледовом" subheader="Большой концерт" asideMode="dismiss">
		<Avatar
			size={96}
			slot="before"
			mode="image"
			src="https://sun9-63.userapi.com/yOEQYPHrNHjZEoanbqPb65HPl5iojmiLgLzfGA/W3geVMMt8TI.jpg"
		/>
		<Button slot="actions">Подробнее</Button>
	</Banner>

	<Banner header="Для Вас" subheader="Обновлено сегодня">
		<Button slot="actions">
			<Icon24Play slot="before" />
			Слушать
		</Button>
		<Avatar
			size={96}
			slot="before"
			mode="image"
			src="https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg"
		/>
	</Banner>

	<Banner
		header="Подписка за рубль!"
		subheader="Предложение действует только до конца февраля"
		asideMode="dismiss"
	>
		<Avatar slot="before" mode="image" style={`background-image:` + musicGradient}>
			<Icon28MusicOutline fill="#fff" />
		</Avatar>

		<svelte:fragment slot="actions">
			<Button mode="primary">Подробнее</Button>
			<Button mode="tertiary" hasHover={false}>Напомнить позже</Button>
		</svelte:fragment>
	</Banner>

	<Banner
		header="Сегодня день рождения Михаила Лихачёва"
		subheader="Подарите подарок"
		asideMode="dismiss"
	>
		<Avatar slot="before" size={48} src={getAvatarUrl('user_lihachyov')} />
		<Button slot="actions" mode="primary">Подарить</Button>
	</Banner>

	<Banner header="Телефон ожидает подтверждения">
		<Avatar slot="before" size={28} style={`background-image:` + warningGradient}>
			<span style:color="#fff">!</span>
		</Avatar>
		<svelte:fragment slot="subheader">
			Новый номер +7 ••• ••• •• 96 будет сохранён через семь дней.
			<br />
			<Link>Ускорьте процесс</Link>, если у Вас есть
			<br />
			доступ к старому номеру.
		</svelte:fragment>
		<Button slot="actions" mode="tertiary" hasHover={false}>Отменить заявку</Button>
	</Banner>

	<Banner text="Хотите, чтобы вам меньше мешали? Включите режим «невидимка»!">
		<Avatar
			slot="before"
			src="https://sun9-7.userapi.com/q9qBUh4kGND1pTUytY4LwljtRLWoCXaIzN7C2A/52lM85R5kus.jpg"
		/>
		<svelte:fragment slot="actions">
			<Button>Включить</Button>
			<Button mode="tertiary" hasHover={false}>Подробнее</Button>
		</svelte:fragment>
	</Banner>

	<Banner
		header="Больше интересных подкастов в каталоге"
		subheader="Найдите интересующие именно Вас подкасты!"
		asideMode="expand"
		onClick={() => console.log('[Podcast banner] onClick')}
	/>
</Group>

<Group>
	<Header>Mode: image, size: regular</Header>
	<Banner mode="image" header="Мои достижения" subheader="Разблокировано 9 из 36">
		<div slot="background" class="BannerAchievementsBackground" />
		<Button slot="actions" mode="overlay_primary">Подробнее</Button>
	</Banner>
</Group>
<Group>
	<Header>Content: tint, size: medium</Header>
	<Banner size="m" header="Реклама сообщества" asideMode="dismiss">
		<span slot="subheader">
			Привлекайте больше людей
			<br />в Ваше сообщество
		</span>
		<Button slot="actions" mode="primary" size="m">Подробнее</Button>
	</Banner>
</Group>

<Group>
	<Header>Content: image, size: medium</Header>
	<Banner mode="image" size="m" header="Реклама в сообществе" asideMode="dismiss">
		<span slot="subheader">
			Привлекайте больше людей
			<br />в Ваше сообщество
		</span>

		<div slot="background" class="BannerAdsBackground" />
		<Button slot="actions" mode="overlay_primary" size="m">Подробнее</Button>
	</Banner>

	<Banner mode="image" size="m" subheader="Москва · 12 декабря" asideMode="dismiss">
		<span slot="header">
			Баста в Ледовом,
			<br />
			большой концерт
		</span>
		<div slot="background" class="BannerBastaBackground" />
		<Button slot="actions" mode="overlay_primary" size="m">Подробнее</Button>
	</Banner>
</Group>
```

<style>
	.BannerAchievementsBackground {
		background-color: #65c063;
		background-image: url(https://sun9-59.userapi.com/7J6qHkTa_P8VKRTO5gkh6MizcCEefz04Y0gDmA/y6dSjdtPU4U.jpg);
		background-position: right bottom;
		background-size: 320px;
		background-repeat: no-repeat;
	}

	.BannerAdsBackground {
		background-color: #5b9be6;
		background-image: url(https://sun9-31.userapi.com/PQ4UCzqE_jue9hAINefBMorYCdfGXvcuV5nSjA/eYugcFYzdW8.jpg);
		background-position: right bottom;
		background-size: 102%;
		background-repeat: no-repeat;
	}

	.BannerBastaBackground {
		background-color: #000;
		background-image: url(https://sun9-53.userapi.com/m-ygfKiLKLkEMAQVTToO2l9LyC6GgqWoGXpw8A/-zm6_XLECTU.jpg);
		background-position: right bottom;
		background-size: 340px;
		background-repeat: no-repeat;
	}
</style>

```

```
