# ModalCardBase

Низкоуровневый компонент для отрисовки карточки со сложным содержимым. Используется внутри ModalCard.

**Кнопка для закрытия**

Согласно дизайн-гайдам, в Android-версии специальной кнопки для закрытия не предусмотрено.

## Пример

```svelte mini
<script>
	import {
		Text,
		ModalCardBase,
		Button,
		AdaptivityProvider,
		Avatar,
		ViewWidth
	} from '@sveltevk/vksui';
	import Icon56MoneyTransferOutline from '@sveltevk/icons/dist/56/money_transfer_outline';
	import { getAvatarUrl } from '$site/data/utils';
</script>

<div style:margin="20px">
	<Text style="margin-bottom: 10px">Десктопная и планшетная версии</Text>
	<ModalCardBase
		style="width: 450px; margin-bottom: 20px"
		header="Отправляйте деньги друзьям, используя банковскую карту"
		subheader="Номер карты получателя не нужен — он сам решит, куда зачислить средства."
	>
		<Button slot="actions" size="l" mode="primary" key="button">Попробовать</Button>
		<Icon56MoneyTransferOutline slot="icon" key="icon" />
	</ModalCardBase>
	<Text style="margin-bottom: 10px">Мобильная версия</Text>
	<AdaptivityProvider viewWidth={ViewWidth.MOBILE}>
		<ModalCardBase
			style="width: 320px"
			header="Добавить игру «Загадки детства» в меню?"
			subheader="Игра появится под списком разделов на экране меню и будет всегда под рукой."
		>
			<Avatar slot="icon" mode="app" src={getAvatarUrl('app_zagadki', 200)} size={72} />
			<Button slot="actions" size="l" mode="primary">Добавить в меню</Button>
		</ModalCardBase>
	</AdaptivityProvider>
</div>
```
