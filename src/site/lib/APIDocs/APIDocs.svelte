<script lang="ts">
	import type { ParsedComponent } from './ParsedComponent';

	export let data: ParsedComponent;
</script>

{#if data.props.length > 0}
	<h2>Свойства</h2>

	<div class="Table">
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Type</th>
					<th>Default</th>
					<th>Description</th>
				</tr>
			</thead>
			<tbody>
				{#each data.props as prop}
					<tr>
						<td class="token attr-name">{prop.name}</td>
						<td class="token attr-value"
							>{#if prop.value}{prop.type}{/if}</td
						>
						<td
							>{#if prop.value}<code>{prop.value}</code>{/if}</td
						>
						<td
							>{#if prop.description}{@html prop.description}{/if}</td
						>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/if}

{#if data.rest_props}
	<blockquote>
		<p>
			<b>Этот компонент использует <code>$$restProps</code></b>
		</p>
		<p>
			Все прочие свойства будут переданы базовому элементу <code>{data.rest_props.name}</code>
		</p>
		<p>
			<a
				href="https://svelte.dev/docs#template-syntax-attributes-and-props"
				target="_blank"
				rel="noopener noreferrer">Подробнее</a
			>
		</p>
	</blockquote>
{/if}

{#if data.slots.length > 0}
	<h2>Слоты</h2>

	<div class="Table">
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Default</th>
				</tr>
			</thead>
			<tbody>
				{#each data.slots as slot}
					<tr>
						<td class="token attr-value">{slot.name === '__default__' ? 'default' : slot.name}</td>
						<td
							>{#if slot.fallback}<code>{slot.fallback}</code>{/if}</td
						>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/if}

{#if data.events.length > 0}
	<h2>События</h2>

	<div class="Table">
		<table>
			<thead>
				<tr>
					<th>Name</th>
				</tr>
			</thead>
			<tbody>
				{#each data.events as event}
					<tr>
						<td class="token attr-name">on:{event.name}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/if}

<style>
	.Table {
		width: 100%;
		overflow-x: auto;
		border: 1px solid var(--vkui--color_separator_secondary);
		border-radius: 8px;
	}

	.Table table {
		border-collapse: collapse;
		width: 100%;
	}

	.Table th {
		background: var(--vkui--color_background_tertiary);
		text-align: left;
		padding: 16px;
		white-space: nowrap;
		color: var(--vkui--color_text_subhead);
		font-weight: 400;
		margin: 0;
		font-size: 15px;
		line-height: 20px;
	}

	.Table td:not([colspan]) {
		padding: 20px 16px;
	}

	.Table td {
		border-top: 1px solid var(--vkui--color_separator_secondary);
		margin: 0;
		font-size: 16px;
		line-height: 24px;
	}
</style>
