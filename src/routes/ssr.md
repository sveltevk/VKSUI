# Серверный рендеринг

Библиотека полностью поддерживает SSR и [Svelte Kit](https://kit.svelte.dev/). Для корректного рендеринга компонентов на сервере, достаточно обернуть ваше приложение в `SSRWrapper`, передав туда значение заголовка `userAgent`. Это нужно для определения платформы пользователя (iOS или Android) на стороне сервера.

```svelte
<SSRWrapper userAgent={req.useragent.source}>
	<Button>Hello</Button>
</SSRWrapper>
```
