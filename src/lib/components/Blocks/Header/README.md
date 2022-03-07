# Header

## Пример

```svelte scroll
<script>
	import { Group, Counter, Link, Header, Button, usePlatform, VKCOM } from '@sveltevk/vksui';
	import Icon12ChevronOutline from '@sveltevk/icons/dist/12/chevron_outline';

	const platform = usePlatform();
</script>

<Group>
	<Header mode="primary">
		<Link slot="aside">
			Показать все{#if platform === VKCOM}<Icon12ChevronOutline />{/if}
		</Link>
		Плейлисты
	</Header>
	<Header mode="primary" subtitle="SOHN — Conrad">
		<Link slot="aside">
			Показать все{#if platform === VKCOM}<Icon12ChevronOutline />{/if}
		</Link>
		Плейлисты
	</Header>
	<Header mode="primary" indicator="12">
		<Link slot="aside">
			Показать все{#if platform === VKCOM}<Icon12ChevronOutline />{/if}
		</Link>
		Плейлисты
	</Header>
	<Header mode="primary">
		<Link slot="aside">
			Показать все{#if platform === VKCOM}<Icon12ChevronOutline />{/if}
		</Link>
		<Counter slot="indicator" size="s" mode="prominent">3</Counter>
		Заявки в друзья
	</Header>
</Group>
<Group>
	<Header mode="secondary">
		<Link slot="aside">
			Показать все{#if platform === VKCOM}<Icon12ChevronOutline />{/if}
		</Link>
		Приглашения
	</Header>
	<Header mode="secondary" indicator="667">
		<Link slot="aside">
			Показать все{#if platform === VKCOM}<Icon12ChevronOutline />{/if}
		</Link>
		Фотографии
	</Header>
	<Header mode="secondary">
		<Link slot="aside">
			Показать все{#if platform === VKCOM}<Icon12ChevronOutline />{/if}
		</Link>
		<Counter slot="indicator" size="s" mode="prominent">3</Counter>
		Приглашения
	</Header>
</Group>
<Group>
	<Header mode="tertiary">Важные</Header>
</Group>
<Group>
	<Header mode="primary" multiline>Кто может писать мне личные сообщения</Header>
	<Header mode="tertiary" multiline>Кто может комментировать мои записи</Header>
	<Header mode="secondary" multiline>Кто может оставлять записи на моей странице</Header>
</Group>
```
