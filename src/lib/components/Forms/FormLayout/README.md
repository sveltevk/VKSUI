# FormLayout

Компонент для создания form. Содержит скрытый `<input type="submit" />`, обеспечивающий отправку формы по enter.

Чтобы избежать перезагрузки страницы, необходимо вызвать `e.preventDefault()`

```svelte
<FormLayout on:submit={(e) => e.preventDefault()}>...</FormLayout>
```
