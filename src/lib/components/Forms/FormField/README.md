# FormField

Компонент-оболочка для элементов форм (`Input`, `Select`, `Textarea` и другие).

```svelte scroll
<script>
	import { FormField, FormItem, FormLayout, Group } from '@sveltevk/vksui';
</script>

<Group>
	<FormLayout
		on:submit={(e) => {
			e.preventDefault();
		}}
	>
		<FormItem>
			<FormField>
				<input type="text" class="CustomInput" placeholder="Кастомный инпут" />
			</FormField>
		</FormItem>
	</FormLayout>
</Group>

<style>
	.CustomInput {
		position: relative;
		display: block;
		width: 100%;
		margin: 0;
		padding: 11px;
		font-size: ;
		line-height: 19px;
		text-overflow: ellipsis;
		color: #000;
		border: none;
		background: transparent;
		z-index: 2;
	}
</style>
```
