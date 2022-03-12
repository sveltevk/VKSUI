<script lang="ts">
	import { useAdaptivity } from '@sveltevk/vksui/hooks/useAdaptivity';
	import classNames from '@sveltevk/vksui/lib/classNames';
	import Caption from '../../Typography/Caption/Caption.svelte';
	import Text from '../../Typography/Text/Text.svelte';
	import Icon16Done from '@sveltevk/icons/dist/16/done';

	export let selected = false;
	export let hovered = false;
	export let title = '';
	export let description = '';
	export let disabled = false;

	const adaptivity = useAdaptivity();
</script>

<Text
	{...$$restProps}
	Component="div"
	weight="regular"
	role="option"
	{title}
	aria-disabled={disabled}
	aria-selected={selected}
	class={classNames(
		$$restProps.class,
		'CustomSelectOption',
		`CustomSelectOption--sizeY-${$adaptivity.sizeY}`,
		{
			'CustomSelectOption--hover': hovered && !disabled,
			'CustomSelectOption--selected': selected,
			'CustomSelectOption--disabled': disabled
		}
	)}
>
	{#if $$slots.before}
		<div class="CustomSelectOption__before"><slot name="before" /></div>
	{/if}
	<div class="CustomSelectOption__main">
		<div class="CustomSelectOption__children"><slot /></div>
		{#if description}
			<Caption level="1" weight="regular" class="CustomSelectOption__description">
				{description}
			</Caption>
		{/if}
	</div>
	<div class="CustomSelectOption__after">
		{#if $$slots.after}
			<div class="CustomSelectOption__afterIn"><slot name="after" /></div>
		{/if}
		{#if selected}
			<Icon16Done class="CustomSelectOption__selectedIcon" />
		{/if}
	</div>
</Text>

<style>
	:global(.CustomSelectOption) {
		width: 100%;
		display: flex;
		align-items: center;
		position: relative;
		box-sizing: border-box;
		padding: 8px 12px;
		white-space: nowrap;
		user-select: none;
		cursor: pointer;
		color: var(--text_primary);
	}

	:global(.CustomSelectOption--sizeY-regular) {
		min-height: 44px;
	}

	:global(.CustomSelectOption--disabled) {
		cursor: default;
		opacity: 0.4;
	}

	:global(.CustomSelectOption--hover) {
		background-color: var(--button_muted_background);
	}

	.CustomSelectOption__before {
		flex-shrink: 0;
		margin-right: 7px;
	}

	.CustomSelectOption__main {
		flex-grow: 1;
		max-width: 100%;
		min-width: 0;
	}

	.CustomSelectOption__children {
		min-width: 0;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.CustomSelectOption__after {
		margin-left: 8px;
		flex-shrink: 0;
		display: flex;
		align-items: center;
	}

	:global(.CustomSelectOption__description) {
		color: var(--text_secondary);
		text-overflow: ellipsis;
		overflow: hidden;
	}

	:global(.CustomSelectOption__selectedIcon) {
		color: var(--accent);
	}

	:global(.CustomSelectOption__selectedIcon:not(:first-child)) {
		margin-left: 8px;
	}
</style>
