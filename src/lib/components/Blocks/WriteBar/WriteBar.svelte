<script lang="ts">
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';

	import classNames from '@sveltevk/vksui/lib/classNames';
	import { canUseDOM, useDOM } from '@sveltevk/vksui/lib/dom';
	import getClassName from '@sveltevk/vksui/lib/getClassName';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let value = '';
	export let style = '';

	const platform = usePlatform();
	const dom = useDOM();
	let textarea: HTMLTextAreaElement;
	let textareaMinHeight: number | null = null;

	const resize = () => {
		if (!canUseDOM || !textarea) {
			return;
		}

		const { offsetHeight, scrollHeight } = textarea;
		const style = $dom?.window?.getComputedStyle(textarea);
		const paddingTop = parseInt(style.paddingTop);
		const paddingBottom = parseInt(style.paddingBottom);

		let diff = paddingTop + paddingBottom + 10;

		if (textareaMinHeight === null) {
			textareaMinHeight = offsetHeight;
		}

		if (scrollHeight + diff <= offsetHeight) {
			diff = 0;
		}

		textarea.style.height = '0px';

		const height = textarea.scrollHeight - diff / 4;
		textarea.style.height = String(Math.max(height, textareaMinHeight)) + 'px';

		dispatch('heightChange');
	};

	$: {
		resize();
		value, textarea, $dom.window;
	}
</script>

<div class={classNames($$restProps.class, getClassName('WriteBar', $platform))} {style}>
	<form class="WriteBar__form" on:submit={(e) => e.preventDefault()}>
		{#if $$slots.before}
			<div class="WriteBar__before"><slot name="before" /></div>
		{/if}

		<div class="WriteBar__formIn">
			<textarea
				bind:this={textarea}
				{...$$restProps}
				class="WriteBar__textarea"
				on:change
				bind:value
			/>
			{#if $$slots.inlineAfter}
				<div class="WriteBar__inlineAfter"><slot name="inlineAfter" /></div>
			{/if}
		</div>

		{#if $$slots.after}
			<div class="WriteBar__after"><slot name="after" /></div>
		{/if}
	</form>
</div>

<style>
	.WriteBar {
		background: var(--background_content);
	}

	.WriteBar__before,
	.WriteBar__form,
	.WriteBar__after {
		display: flex;
		align-items: flex-end;
	}

	.WriteBar__form {
		min-height: 52px;
		margin-bottom: 0;
	}

	.WriteBar__formIn {
		flex: 1;
		min-width: 0;
		display: flex;
		position: relative;
	}

	.WriteBar__textarea {
		box-sizing: border-box;
		width: 100%;
		flex: 1;
		min-width: 0;
		margin: 0;
		background: transparent;
		border: none;
		resize: none;
		line-height: 20px;
		color: var(--text_primary);
		-webkit-appearance: none;
		max-height: 120px;
	}

	.WriteBar__textarea::placeholder {
		color: var(--text_placeholder);
	}

	.WriteBar__textarea::-moz-placeholder {
		opacity: 1;
		color: var(--text_placeholder);
	}

	.WriteBar__inlineAfter {
		display: flex;
		align-items: flex-end;
	}

	/**
 * iOS
 */

	.WriteBar--ios .WriteBar__before,
	.WriteBar--ios .WriteBar__after {
		padding: 0 4px;
	}

	.WriteBar--ios .WriteBar__formIn {
		box-sizing: border-box;
		background-color: var(--input_background);
		border: 1px solid var(--input_border);
		border-radius: 18px;
		margin: 8px 0;
	}

	.WriteBar--ios .WriteBar__formIn:first-child {
		margin-left: 12px;
	}

	.WriteBar--ios .WriteBar__inlineAfter {
		margin-right: -1px;
		margin-top: -9px;
		margin-bottom: -9px;
	}

	.WriteBar--ios .WriteBar__textarea {
		height: 34px;
		padding: 6px 11px;
		font-size: 17px;
		line-height: 22px;
	}

	/**
 * Android + vkcom
 */

	.WriteBar--android .WriteBar__before,
	.WriteBar--vkcom .WriteBar__before {
		padding-left: 4px;
	}

	.WriteBar--android .WriteBar__after,
	.WriteBar--vkcom .WriteBar__after {
		padding-right: 4px;
	}

	.WriteBar--android .WriteBar__textarea,
	.WriteBar--vkcom .WriteBar__textarea {
		height: 52px;
		padding: 16px 12px;
		font-size: 16px;
		line-height: 20px;
	}
</style>
