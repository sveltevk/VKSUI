# Button

## Пример

```svelte mini
<script>
	import { Button, Div, Counter, AdaptivityProvider, FormItem, Checkbox } from '@sveltevk/vksui';
	import Icon12Add from '@sveltevk/icons/dist/12/add';
	import Icon16Add from '@sveltevk/icons/dist/16/add';
	import Icon24Add from '@sveltevk/icons/dist/24/add';
	import Icon12Tag from '@sveltevk/icons/dist/12/tag';
	import Icon24ChevronCompactRight from '@sveltevk/icons/dist/24/chevron_compact_right';

	// state
	let appearance = 'accent';
	let sizeY = 'compact';
	let stretched = false;
	let disabled = false;
	let size = 's';
	let loading = false;
	let addBefore = true;
	let addAfter = true;
	let addText = true;
	let hasLink = false;

	$: buttonLink = hasLink ? '#' : undefined;
	$: buttonText = addText ? 'Button' : '';
</script>

<div style:display="flex" style:flex-direction="row-reverse">
	<AdaptivityProvider {sizeY}>
		<div class="Container" style:background={appearance === 'overlay' ? '#232323' : 'unset'}>
			{#each ['primary', 'secondary', 'tertiary', 'outline'] as mode}
				<Div>
					<Button href={buttonLink} {appearance} {stretched} {mode} {disabled} {size} {loading}>
						<svelte:fragment slot="before">
							{#if size === 's'}
								<Icon12Add />
							{:else if size === 'm'}
								<Icon16Add />
							{:else}
								<Icon24Add />
							{/if}
						</svelte:fragment>
						<svelte:fragment slot="after">
							{#if size === 's'}
								<Icon12Tag />
							{:else if size === 'm'}
								<Icon24ChevronCompactRight />
							{:else}
								<Counter>16</Counter>
							{/if}
						</svelte:fragment>
						{buttonText}
					</Button>
				</Div>
			{/each}
		</div>
	</AdaptivityProvider>
	<div style:min-width="200px">
		<FormItem top="appearance">
			<select bind:value={appearance}>
				{#each ['accent', 'positive', 'negative', 'neutral', 'overlay'] as name}
					<option value={name}>{name}</option>
				{/each}
			</select>
		</FormItem>
		<FormItem top="size">
			<select bind:value={size}>
				{#each ['s', 'm', 'l'] as name}
					<option value={name}>{name}</option>
				{/each}
			</select>
		</FormItem>
		<FormItem top="sizeY">
			<select bind:value={sizeY}>
				{#each ['compact', 'regular'] as name}
					<option value={name}>{name}</option>
				{/each}
			</select>
		</FormItem>
		<FormItem top="props">
			<Checkbox bind:checked={stretched}>stretched</Checkbox>
			<Checkbox bind:checked={loading}>loading</Checkbox>
			<Checkbox bind:checked={disabled}>disabled</Checkbox>
			<!-- <Checkbox disabled={!(addBefore || addAfter)} bind:checked={addText}>add text</Checkbox>
			<Checkbox disabled={!(addText || addAfter)} bind:checked={addBefore}>add before</Checkbox>
			<Checkbox disabled={!(addText || addBefore)} bind:checked={addAfter}>add after</Checkbox> -->
			<Checkbox bind:checked={hasLink}>add href</Checkbox>
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
