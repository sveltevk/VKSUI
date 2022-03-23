<script lang="ts">
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import classNames from '@sveltevk/vksui/lib/classNames';
	import getClassName from '@sveltevk/vksui/lib/getClassName';
	import Tappable from '@sveltevk/vksui/components/Service/Tappable/Tappable.svelte';
	import Div from '@sveltevk/vksui/components/Elements/div/div.svelte';
	import a from '@sveltevk/vksui/components/Elements/a/a.svelte';
	import Text from '@sveltevk/vksui/components/Typography/Text/Text.svelte';
	import Subhead from '@sveltevk/vksui/components/Typography/Subhead/Subhead.svelte';
	import { useAdaptivity } from '@sveltevk/vksui/hooks/useAdaptivity';

	/**
	 * Контейнер для текста под `children`.
	 */
	export let text = '';

	/**
	 * Контейнер для текста под `text`.
	 */
	export let caption = '';

	/**
	 * Контейнер для контента под `caption`. Например `<UsersStack size="s" />`
	 */
	export let bottom = '';

	/**
	 * Кнопка или набор кнопок `<Button size="m" />`. Располагается под `bottom`.
	 */
	// export let actions = '';

	/**
	 * `<Avatar size={48|72} />`
	 */
	// export let before = '';

	/**
	 * Иконка 28 или текст
	 */
	export let after = '';
	// export let disabled = false;
	export let multiline = false;

	const platform = usePlatform();
	const adaptivity = useAdaptivity();

	$: $$restProps.class = classNames(
		$$props.class,
		getClassName('RichCell', $platform),
		{
			'RichCell--mult': multiline
		},
		`RichCell--sizeY-${$adaptivity.sizeY}`
	);
</script>

<Tappable {...$$restProps} on:click component={$$restProps.href ? a : Div}>
	<slot name="before" />
	<div class="RichCell__in">
		<!-- Этот after будет скрыт из верстки. Он нужен для CSS -->
		<slot name="after">{after ?? ''}</slot>
		<Text weight="medium" class="RichCell__content">
			<div class="RichCell__children">
				<slot />
			</div>
			{#if $$slots.after || after}
				<div class="RichCell__after">
					<slot name="after">{after}</slot>
				</div>
			{/if}
		</Text>

		{#if $$slots.text || text}
			<Text weight="regular" class="RichCell__text">
				<slot name="text">{text}</slot>
			</Text>
		{/if}
		{#if $$slots.caption || caption}
			<Subhead component="span" class="RichCell__caption">
				<slot name="caption">{caption}</slot>
			</Subhead>
		{/if}
		{#if $$slots.bottom || bottom || $$slots.actions}
			<div class="RichCell__bottom">
				<slot name="bottom">{bottom ?? ''}</slot>
				{#if $$slots.actions}
					<div class="RichCell__actions">
						<slot name="actions" />
					</div>
				{/if}
			</div>
		{/if}
	</div>
</Tappable>

<style>
	:global(.RichCell) {
		display: flex;
		min-height: 64px;
		padding-right: 16px;
		padding-left: 16px;
		box-sizing: border-box;
		white-space: nowrap;
		text-decoration: none;
		color: var(--text_primary);
	}

	:global(.FormItem .RichCell) {
		width: 100%;
		box-sizing: content-box;
		margin: 0 calc(-1 * var(--formitem_padding));
	}

	:global(.RichCell--mult) {
		white-space: normal;
	}

	.RichCell__in {
		flex-grow: 1;
		max-width: 100%;
		min-width: 0;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: relative;
		padding-top: 8px;
		padding-bottom: 8px;
		font-size: 0;
		line-height: 0;
	}

	.RichCell__in > :global(:first-child:not(.RichCell__content)) {
		display: none;
		pointer-events: none;
	}

	.RichCell__in > :global(.Icon--28:first-child ~ *) {
		margin-right: 32px;
	}

	:global(.RichCell__content) {
		display: flex;
	}

	:global(.RichCell__after) {
		flex-shrink: 0;
		padding-left: 4px;
		white-space: nowrap;
	}

	:global(.RichCell__after) :global(.Icon--28) {
		position: absolute;
		right: 0;
		color: var(--accent);
	}

	:global(.RichCell) > :global(.Avatar--sz-72 + .RichCell__in .RichCell__after .Icon--28) {
		top: 22px;
	}

	:global(.RichCell) > :global(.Avatar--sz-48 + .RichCell__in .RichCell__after .Icon--28) {
		top: 10px;
	}

	.RichCell__children {
		flex-grow: 1;
		max-width: 100%;
		min-width: 0;
	}

	:global(.RichCell__caption) {
		display: block;
		margin-top: 1px;
		color: var(--text_secondary);
	}

	.RichCell__children,
	:global(.RichCell__text),
	:global(.RichCell__caption) {
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.RichCell__actions {
		display: flex;
		margin-top: 8px;
	}

	/**
 * iOS
 */
	:global(.RichCell--ios) {
		padding-right: 12px;
		padding-left: 12px;
	}

	/**
 * sizeY === 'compact'
 */
	:global(.RichCell--sizeY-compact) {
		min-height: 60px;
	}

	:global(.RichCell--sizeY-compact) .RichCell__actions {
		margin-top: 11px;
	}

	:global(.RichCell--sizeY-compact) :global(.UsersStack + .RichCell__actions) {
		margin-top: 12px;
	}
</style>
