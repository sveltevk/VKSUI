# Div

Компонент с установленными паддингами, которые отличаются в зависимости от платформы. Необходим, когда есть какой-то кастомный блок, у которого должны быть стандартные отступы.

## Пример

```svelte scroll
<script>
	import { Div, Button } from '@sveltevk/vksui';
</script>

<Div>
	<Button stretched mode="secondary" size="m">Edit Info</Button>
</Div>
```
