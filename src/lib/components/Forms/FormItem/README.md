# FormItem

Базовый компонент формы. В него нужно оборачивать все поля, из которых конструируется форма. Исключения составляют поля-ячейки (`Radio`, `Checkbox`, etc.), если в дизайне для них не предусмотрены `top` и `bottom`. Такие поля можно располагать в форме без оборачивания в `FormItem`.

```svelte scroll
<script>
	import {
		Input,
		FormItem,
		FormLayoutGroup,
		FormLayout,
		Group,
		CellButton,
		Checkbox,
		Link,
		Button
	} from '@sveltevk/vksui';

	let email = '';
	let showPatronymic = true;
</script>

<Group>
	<FormLayout
		on:submit={(e) => {
			e.preventDefault();
		}}
	>
		<FormItem
			top="E-mail"
			status={email ? 'valid' : 'error'}
			bottom={email ? 'Электронная почта введена верно!' : 'Пожалуйста, введите электронную почту'}
		>
			<Input type="email" name="email" bind:value={email} />
		</FormItem>

		<FormItem top="Пароль">
			<Input type="password" placeholder="Введите пароль" />
		</FormItem>

		<FormItem bottom="Пароль может содержать только латинские буквы и цифры.">
			<Input type="password" placeholder="Повторите пароль" />
		</FormItem>

		<FormLayoutGroup mode="horizontal">
			<FormItem top="Имя">
				<Input />
			</FormItem>
			<FormItem top="Фамилия">
				<Input />
			</FormItem>
		</FormLayoutGroup>

		{#if showPatronymic}
			<FormItem
				removable
				on:remove={() => (showPatronymic = false)}
				top="Отчество"
				bottom="Если у вас нет отчества — удалите этот пункт."
			>
				<Input />
			</FormItem>
		{:else}
			<CellButton on:click={() => (showPatronymic = true)}>Указать отчество</CellButton>
		{/if}
		<Checkbox>
			Согласен со всем <Link>этим</Link>
		</Checkbox>
		<FormItem>
			<Button size="l" stretched>Зарегистрироваться</Button>
		</FormItem>
	</FormLayout>
</Group>
```
