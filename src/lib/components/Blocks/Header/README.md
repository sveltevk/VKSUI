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
		<svelte:fragment slot="aside">
			<Link>
				Показать все{#if platform === VKCOM}<Icon12ChevronOutline />{/if}
			</Link>
		</svelte:fragment>
		Плейлисты
	</Header>
	<Header mode="primary" subtitle="SOHN — Conrad">
		<svelte:fragment slot="aside">
			<Link>
				Показать все{#if platform === VKCOM}<Icon12ChevronOutline />{/if}
			</Link>
		</svelte:fragment>
		Плейлисты
	</Header>
	<Header mode="primary" indicator="12">
		<svelte:fragment slot="aside">
			<Link>
				Показать все{#if platform === VKCOM}<Icon12ChevronOutline />{/if}
			</Link>
		</svelte:fragment>
		Плейлисты
	</Header>
	<Header mode="primary">
		<svelte:fragment slot="aside">
			<Link>
				Показать все{#if platform === VKCOM}<Icon12ChevronOutline />{/if}
			</Link>
		</svelte:fragment>
		<svelte:fragment slot="indicator">
			<Counter size="s" mode="prominent">3</Counter>
		</svelte:fragment>
		Заявки в друзья
	</Header>
</Group>
<Group>
	<Header mode="secondary">
		<svelte:fragment slot="aside">
			<Link>
				Показать все{#if platform === VKCOM}<Icon12ChevronOutline />{/if}
			</Link>
		</svelte:fragment>
		Приглашения
	</Header>
	<Header mode="secondary" indicator="667">
		<svelte:fragment slot="aside">
			<Link>
				Показать все{#if platform === VKCOM}<Icon12ChevronOutline />{/if}
			</Link>
		</svelte:fragment>
		Фотографии
	</Header>
	<Header mode="secondary">
		<svelte:fragment slot="aside">
			<Link>
				Показать все{#if platform === VKCOM}<Icon12ChevronOutline />{/if}
			</Link>
		</svelte:fragment>
		<svelte:fragment slot="indicator">
			<Counter size="s" mode="prominent">3</Counter>
		</svelte:fragment>
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
