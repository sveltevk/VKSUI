<script lang="ts">
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import classNames from '@sveltevk/vksui/lib/classNames';
	import getClassName from '@sveltevk/vksui/lib/getClassName';
	import Caption from '../../Typography/Caption/Caption.svelte';
	import HeaderAside from './HeaderAside.svelte';
	import HeaderContent from './HeaderContent.svelte';
	import HeaderSubtitle from './HeaderSubtitle.svelte';

	export let mode: 'primary' | 'secondary' | 'tertiary' = 'primary';
	export let subtitle = '';
	export let indicator: string | number = undefined;
	export let multiline = false;

	const platform = usePlatform();
</script>

<header
	{...$$restProps}
	class={classNames(
		getClassName('Header', $platform),
		{
			'Header--pi': typeof indicator === 'string' || typeof indicator === 'number'
		},
		`Header--mode-${mode}`,
		$$props.class
	)}
>
	<div class="Header__main">
		<HeaderContent class="Header__content" component="span" {mode} platform={$platform}>
			<span
				class={classNames('Header__content-in', {
					'Header__content-in--multiline': multiline
				})}
			>
				<slot />
			</span>
			{#if $$slots.indicator || typeof indicator !== 'undefined'}
				<Caption
					class="Header__indicator"
					weight={mode === 'primary' || mode === 'secondary' ? '2' : '3'}
					level="1"
				>
					<slot name="indicator">
						{indicator}
					</slot>
				</Caption>
			{/if}
		</HeaderContent>
		{#if $$slots.subtitle || subtitle !== ''}
			<HeaderSubtitle class="Header__subtitle" component="span" {mode}>
				<slot name="subtitle">{subtitle}</slot>
			</HeaderSubtitle>
		{/if}
	</div>

	{#if $$slots.aside}
		<HeaderAside class="Header__aside" component="span" platform={$platform}>
			<slot name="aside" />
		</HeaderAside>
	{/if}
</header>

<style>
	.Header {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		padding: 0 16px;
		user-select: text;
	}

	.Header__main {
		min-width: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		color: var(--text_primary);
	}

	:global(.Header__content) {
		display: flex;
		align-items: baseline;
	}

	.Header__content-in {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}

	.Header__content-in--multiline {
		white-space: initial;
		word-break: break-word;
	}

	.Header--multiline {
		white-space: normal;
	}

	:global(.Header__subtitle) {
		color: var(--text_secondary);
	}

	.Header--mode-primary :global(.Header__content:not(:last-child)) {
		margin-top: -1px;
	}

	.Header--mode-secondary .Header__main,
	.Header--mode-tertiary .Header__main {
		color: var(--text_secondary);
	}

	.Header--pi .Header__main {
		color: var(--text_primary);
	}

	:global(.Header__indicator) {
		color: var(--text_secondary);
		margin-left: 6px;
		flex-shrink: 0;
	}

	.Header--mode-primary :global(.Header__indicator) {
		color: var(--text_subhead);
	}

	.Header:not(.Header--pi) :global(.Header__indicator) {
		align-self: center;
	}

	.Header--mode-secondary :global(.Header__indicator) {
		margin-left: 8px;
	}

	:global(.Header__aside) {
		white-space: nowrap;
		margin-left: 12px;
	}

	:global(.Header__aside) > :global(.Icon) {
		position: relative;
		color: var(--icon_secondary);
	}

	:global(.Header__aside) > :global(.Icon--24) {
		top: 3px;
	}

	:global(.Header__aside) > :global(.Icon--16) {
		top: 1px;
	}

	/**
 * ANDROID
 */
	.Header--android .Header__main {
		margin: 15px 0 9px;
	}

	.Header--android.Header--mode-tertiary .Header__main {
		margin-top: 11px;
	}

	/**
 * iOS
 */
	.Header--ios {
		padding: 0 12px;
	}

	.Header--ios .Header__main {
		margin: 13px 0 9px;
	}

	.Header--ios.Header--mode-secondary .Header__main {
		margin: 14px 0 10px;
	}

	.Header--ios.Header--mode-tertiary .Header__main {
		margin-top: 9px;
	}

	/**
 * VKCOM
 */
	.Header--vkcom {
		height: 64px;
		align-items: center;
	}

	.Header--vkcom .Header__main {
		color: var(--text_primary);
	}

	.Header--vkcom.Header--mode-primary .Header__content:not(:last-child) {
		margin-top: 0;
	}

	.Header--vkcom.Header--mode-secondary {
		height: 56px;
	}

	.Header--vkcom.Header--mode-tertiary {
		height: 40px;
	}

	/**
 * .Group
 */
	:global(.Group--plain:not(:first-of-type) .Group__inner) > .Header:first-child {
		margin-top: -16px;
	}

	:global(.Group--card > .Group__inner) > .Header:not(.Header--mode-tertiary):first-child {
		margin-top: -4px;
	}
</style>
