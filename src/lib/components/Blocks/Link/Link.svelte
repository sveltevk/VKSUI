<script lang="ts">
	import usePlatform from '$lib/hooks/usePlatform';
	import classNames from '$lib/lib/classNames';
	import getClassName from '$lib/lib/getClassName';

	export let href = '';

	const platform = usePlatform();
	// TODO: как кнопка
</script>

<!-- 
@component
Надстройка над `<a />`.

```jsx
<Link href="https://google.com" target="_blank">Google</Link>
<Link href="/profile">Profile</Link>
```
-->

<a {href} {...$$restProps} class={classNames(getClassName('Link', $platform), $$props.class)}>
	<slot />
</a>

<style>
	.Link {
		color: var(--accent);
		text-decoration: none;
		border: 0;
		background: none;
		margin: 0;
		padding: 0;
		cursor: pointer;
		font-size: inherit;
		display: inline;
		border-radius: 0;
	}

	.Link :global(.Icon) {
		margin-left: 4px;
		display: inline-block;
		vertical-align: middle;
	}
</style>
