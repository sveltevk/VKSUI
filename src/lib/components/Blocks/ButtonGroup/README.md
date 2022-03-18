# ButtonGroup

Группирует компонент [Button](Button). Позволяет вкладывать внутрь себя же.

## Что следует знать?

1. ButtonGroup не отвечает за параметры [Button](Button) и вложенных ButtonGroup.
2. Параметр stretched растягивает тот ButtonGroup, который имеет это свойство. Для компонента [Button](Button) и вложенных ButtonGroup его следует определять самостоятельно, где это необходимо.

## Пример реализации

```svelte mini
<script>
	import {
		AdaptivityProvider,
		Div,
		ButtonGroup,
		Button,
		Title,
		FormItem,
		Separator,
		Checkbox,
		Caption
	} from '@sveltevk/vksui';
	import Icon24Attach from '@sveltevk/icons/dist/24/attach';
	import Icon20AddCircle from '@sveltevk/icons/dist/20/add_circle';
	import Icon16ArrowTriangleDown from '@sveltevk/icons/dist/16/arrow_triangle_down';
	import Icon24Send from '@sveltevk/icons/dist/24/send';
	import Icon24Add from '@sveltevk/icons/dist/24/add';

	const buttonText = 'Button';
	const stretchedButtonText = 'Button (stretched)';

	let sizeY = 'compact';
	let stretched = false;
	let mode = 'vertical';
	let gap = 's';
</script>

<div style:display="flex" style:flex-direction="row-reverse">
	<AdaptivityProvider {sizeY}>
		<div class="Container">
			<Div>
				<Title level="3">Примеры использования</Title>
			</Div>
			<Div>
				<ButtonGroup mode="vertical" gap="m" style="min-width: 328px">
					<Button size="l" appearance="accent" stretched>Разрешить</Button>
					<Button size="l" appearance="accent" stretched>Завершить</Button>
					<ButtonGroup mode="horizontal" gap="m" stretched>
						<Button size="l" appearance="negative" stretched>Не сейчас</Button>
						<Button size="l" appearance="positive" stretched>Продолжить</Button>
					</ButtonGroup>
				</ButtonGroup>
			</Div>
			<br />
			<Div>
				<ButtonGroup mode="vertical" gap="m" style="min-width: 328px">
					<Button size="l" appearance="accent" stretched>Разрешить</Button>
					<Button size="l" appearance="accent" mode="secondary" stretched>Завершить</Button>
					<Button size="l" appearance="accent" mode="tertiary" stretched>Не сейчас</Button>
				</ButtonGroup>
			</Div>
			<br />
			<Div>
				<ButtonGroup mode="horizontal" gap="space" stretched>
					<Button size="l" appearance="accent" mode="tertiary">
						<Icon24Attach slot="before" />
						Прикрепить файл
					</Button>
					<Button size="l" appearance="accent" mode="tertiary">
						<Icon16ArrowTriangleDown slot="after" />
						<Icon20AddCircle slot="before" />
						Создать
					</Button>
					<Button size="l" appearance="accent" mode="tertiary">
						<Icon24Send slot="before" />
						Отправить
					</Button>
				</ButtonGroup>
			</Div>

			<Separator />

			<FormItem top="mode">
				<select bind:value={mode}>
					{#each ['vertical', 'horizontal'] as name}
						<option value={name}>{name}</option>
					{/each}
				</select>
			</FormItem>
			<FormItem top="gap">
				<select bind:value={gap}>
					{#each ['none', 'space', 's', 'm'] as name}
						<option value={name}>{name}</option>
					{/each}
				</select>
			</FormItem>
			<Checkbox bind:checked={stretched}>stretched</Checkbox>
			<FormItem>
				<Caption level="1">(параметры передаются корневому элементу)</Caption>
			</FormItem>

			<Div>
				<Title level="3">Пример без вложенного ButtonGroup</Title>
			</Div>
			<Div>
				<ButtonGroup {mode} {gap} {stretched}>
					<Button size="l" appearance="accent">
						{buttonText}
					</Button>
					<Button size="l" appearance="accent" stretched>
						{stretchedButtonText}
					</Button>
					<Button size="l" appearance="accent">
						<Icon24Add slot="before" />
					</Button>
					<Button size="l" appearance="accent" stretched><Icon24Add slot="before" /></Button>
				</ButtonGroup>
			</Div>
			<Div>
				<Title level="3">Пример с вложенным ButtonGroup</Title>
			</Div>

			<Div>
				<ButtonGroup {mode} {gap} {stretched}>
					<ButtonGroup mode="horizontal" gap="m" stretched style="border:2px dotted tomato">
						<Button size="l" appearance="accent" stretched>
							{stretchedButtonText}
						</Button>
						<Button size="l" appearance="accent">
							<Icon24Add slot="before" />
						</Button>
					</ButtonGroup>

					<ButtonGroup mode="horizontal" gap="m" stretched style="border:2px dotted tomato">
						<Button size="l" appearance="accent">
							{buttonText}
						</Button>
						<Button size="l" appearance="accent">
							<Icon24Add slot="before" />
						</Button>
					</ButtonGroup>

					<ButtonGroup mode="horizontal" gap="m" stretched={false} style="border:2px dotted tomato">
						<Button size="l" appearance="accent">
							{buttonText}
						</Button>
						<Button size="l" appearance="accent">
							<Icon24Add slot="before" />
						</Button>
					</ButtonGroup>

					<ButtonGroup mode="horizontal" gap="m" stretched style="border:2px dotted tomato">
						<Button size="l" appearance="accent">
							{buttonText}
						</Button>
						<Button size="l" appearance="accent" stretched>
							{stretchedButtonText}
						</Button>
						<Button size="l" appearance="accent">
							{buttonText}
						</Button>
					</ButtonGroup>
					<ButtonGroup mode="vertical" gap="m" stretched={false} style="border:2px dotted tomato">
						<Button size="l" appearance="accent" stretched>
							{stretchedButtonText}
						</Button>
						<Button size="l" appearance="accent" stretched>
							<Icon24Add slot="before" />
						</Button>
						<ButtonGroup mode="horizontal" stretched style="border:2px dotted tomato">
							<Button size="l" appearance="accent">
								<Icon24Add slot="before" />
							</Button>
							<Button size="l" appearance="accent" stretched>
								{stretchedButtonText}
							</Button>
						</ButtonGroup>
					</ButtonGroup>
				</ButtonGroup>
			</Div>
		</div>
	</AdaptivityProvider>
	<div style:min-width="200px">
		<FormItem top="sizeY">
			<select bind:value={sizeY}>
				{#each ['compact', 'regular'] as name}
					<option value={name}>{name}</option>
				{/each}
			</select>
		</FormItem>
	</div>
</div>

<style>
	.Container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
	}
</style>
```
