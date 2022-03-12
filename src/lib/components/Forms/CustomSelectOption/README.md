# CustomSelectOption

Универсальный компонент для отрисовки option в кастомных селектах. Используется внутри CustomSelect, ChipsSelect.

## Пример

```svelte mini
<script>
	import { CustomSelectOption, Header, Avatar } from '@sveltevk/vksui';
</script>

<div style="margin: 50px; width: 320px; background: var(--background_page)">
	<CustomSelectOption style="background: var(--background_content)">
		Дмитрий Безуглый
	</CustomSelectOption>
	<Header>description</Header>
	<CustomSelectOption
		style="background: var(--background_content)"
		description="Россия, Санкт-Петербург"
	>
		Вадим Дорохов
	</CustomSelectOption>
	<Header>before</Header>
	<CustomSelectOption style="background: var(--background_content)">
		<Avatar slot="before" size={20} />
		Иван Барышев
	</CustomSelectOption>
	<Header>selected</Header>
	<CustomSelectOption style="background: var(--background_content)" selected>
		Владимир Клепов
	</CustomSelectOption>
	<Header>hovered</Header>
	<CustomSelectOption hovered>Игорь Федоров</CustomSelectOption>
</div>
```
