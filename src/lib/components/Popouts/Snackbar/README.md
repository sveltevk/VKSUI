# Snackbar

`Snackbar` – компонент для показа кратких сообщений в нижней части экрана. Его можно использовать, чтобы информировать пользователя о каких-то процессах в приложении, например, "Статья добавлена в закладки".

Плашка с уведомлением автоматически исчезает после какого-то времени (свойств `duration` в миллисекундах), либо же её можно скрыть смахиванием вправо.

Не нужно показывать это уведомление, если в приложении каким-то другим образом видно, что действие совершено. Например, когда заменяется текст в кнопке, или в список на странице добавился элемент.

После закрытия компонент вызывает обязательное событие `on:close`, и вам необходимо убрать `Snackbar` со страницы.

```svelte frame
<script>
	import {
		Panel,
		PanelHeader,
		Group,
		CellButton,
		Div,
		Snackbar,
		Avatar,
		AppearanceProvider
	} from '@sveltevk/vksui';
	import Icon16Done from '@sveltevk/icons/dist/16/done';

	let text = '';
	let snackbar = null;

	const open = (name) => {
		snackbar = snackbar || name;
	};
</script>

<Panel id="example">
	<PanelHeader>Snackbar</PanelHeader>
	<Group>
		<CellButton on:click={() => open('BaseWithAction')}>Уведомление с иконкой и кнопкой</CellButton>
		<CellButton on:click={() => open('Vertical')}>Вертикальное расположение</CellButton>
		<CellButton on:click={() => open('WithAvatar')}>Уведомление с аватаркой</CellButton>
		<CellButton on:click={() => open('Dark')}>Уведомление с темной темой</CellButton>
	</Group>

	{#if text}
		<Group>
			<Div>{text}</Div>
		</Group>
	{/if}

	{#if snackbar === 'BaseWithAction'}
		<Snackbar
			on:close={() => (snackbar = null)}
			action="Поделиться"
			on:actionClick={() => (text = 'Добавляем метку.')}
		>
			<Avatar slot="before" size={24} style="background: var(--accent)">
				<Icon16Done fill="#fff" width={14} height={14} />
			</Avatar>
			Ссылка скопирована
		</Snackbar>
	{:else if snackbar === 'Vertical'}
		<Snackbar
			layout="vertical"
			on:close={() => (snackbar = null)}
			action="Перейти в раздел «Понравилось»"
			on:actionClick={() => (text = 'Открыта подробная информация.')}
		>
			<Avatar slot="before" size={24} style="background: var(--accent)">
				<Icon16Done fill="#fff" width={14} height={14} />
			</Avatar>
			Ссылка сохранена в закладки
		</Snackbar>
	{:else if snackbar === 'WithAvatar'}
		<Snackbar
			on:close={() => (snackbar = null)}
			on:actionClick={() => (text = 'Сообщение Ивану было отменено.')}
		>
			<Avatar slot="after" src={getAvatarUrl('user_wayshev')} size={32} />
			Отправлено Ивану Барышеву
		</Snackbar>
	{:else if snackbar === 'Dark'}
		<AppearanceProvider appearance="dark" let:class={className}>
			<Snackbar
				class={className}
				on:close={() => (snackbar = null)}
				action="Поделиться"
				on:actionClick={() => (text = 'Добавляем метку.')}
			>
				<Avatar slot="before" size={24} style="background: var(--accent)">
					<Icon16Done fill="#fff" width={14} height={14} />
				</Avatar>
				Ссылка скопирована
			</Snackbar>
		</AppearanceProvider>
	{/if}
</Panel>
```
