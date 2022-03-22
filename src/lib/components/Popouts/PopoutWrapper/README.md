# PopoutWrapper

Компонент-обертка для отрисовки всплывающих окон с затемнением фона. Используется внутри `Alert`, `ActionSheet` и `ScreenSpinner`. Свойства `alignY` и `alignX` служат для удобного позиционирования контента. Пример:

```svelte
<script>
	import { PopoutWrapper } from '@sveltevk/vksui';
</script>

<PopoutWrapper alignY="center" alignX="center">Some content</PopoutWrapper>
```

Все всплывающие окна передаются в слот `popout` компонентов `View` или `Root`.
