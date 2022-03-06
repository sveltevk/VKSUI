<script context="module" lang="ts">
	export type StatsType = 'playbackStarted' | 'click';

	export type BannerData = {
		title?: string;
		url_types?: string; // eslint-disable-line camelcase
		bannerID?: string;
		imageWidth?: number;
		imageHeight?: number;
		imageLink?: string;
		trackingLink?: string;
		type?: string;
		iconWidth?: number;
		domain?: string;
		ctaText?: string;
		advertisingLabel?: string;
		iconLink?: string;
		statistics?: Array<{ type: StatsType; url: string }>;
		openInBrowser?: boolean;
		iconHeight?: number;
		directLink?: boolean;
		navigationType?: string;
		description?: string;
		ageRestrictions?: string;
		/** @deprecated */
		ageRestriction?: number;
	};
</script>

<script lang="ts">
	import { usePlatform } from '$lib/hooks/usePlatform';
	import classNames from '$lib/lib/classNames';
	import getClassName from '$lib/lib/getClassName';
	import Icon24Dismiss from '@sveltevk/icons/dist/24/dismiss';
	import Button from '$lib/components/Blocks/Button/Button.svelte';
	import SimpleCell from '$lib/components/Blocks/SimpleCell/SimpleCell.svelte';
	import Avatar from '$lib/components/Blocks/Avatar/Avatar.svelte';
	import Caption from '$lib/components/Typography/Caption/Caption.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	/** Данные рекламного баннера, полученные из VKWebAppGetAds */
	export let bannerData: BannerData;

	/** Флаг скрытия кнопки закрытия рекламы */
	export let isCloseButtonHidden: boolean = false;

	export let currentPixel: string = '';

	const ageRestrictions =
		bannerData.ageRestrictions != null
			? parseInt(bannerData.ageRestrictions)
			: bannerData.ageRestriction;

	const platform = usePlatform();
</script>

<div class={classNames(getClassName('PromoBanner', $platform), $$props.class)}>
	<div class="PromoBanner__head">
		<Caption weight="regular" level="1" class="PromoBanner__label">
			{bannerData.advertisingLabel || 'Advertisement'}
		</Caption>
		{#if ageRestrictions != null}
			<Caption weight="regular" level="1" class="PromoBanner__age">
				{ageRestrictions}+
			</Caption>
		{/if}

		{#if !isCloseButtonHidden}
			<div class="PromoBanner__close" on:click={() => dispatch('close')}>
				<Icon24Dismiss />
			</div>
		{/if}
	</div>
	<SimpleCell
		href={bannerData.trackingLink}
		on:click
		rel="nofollow noopener noreferrer"
		target="_blank"
		description={bannerData.domain}
	>
		<svelte:fragment slot="before">
			<Avatar mode="image" size={48} src={bannerData.iconLink} alt={bannerData.title} />
		</svelte:fragment>
		<svelte:fragment slot="after">
			<Button mode="outline">{bannerData.ctaText}</Button>
		</svelte:fragment>
		{bannerData.title}
	</SimpleCell>

	{#if currentPixel.length > 0}
		<div class="PromoBanner__pixels"><img src={currentPixel} alt="" /></div>
	{/if}
</div>

<style>
	.PromoBanner {
		width: 100%;
		box-sizing: border-box;
		outline: 1px solid var(--separator_alpha);
		color: var(--text_primary);
		background: var(--background_content);
		padding-bottom: 10px;
		position: relative;
	}

	.PromoBanner__head {
		display: flex;
		padding-top: 14px;
		padding-bottom: 10px;
		color: var(--text_secondary);
	}

	:global(.PromoBanner__age) {
		margin-left: 6px;
	}

	.PromoBanner__close {
		position: absolute;
		top: 0;
		right: 0;
		width: 48px;
		height: 48px;
		color: var(--placeholder_icon_foreground_primary);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.PromoBanner__close:active {
		opacity: 0.7;
	}

	.PromoBanner__pixels {
		display: none;
	}

	/* iOS */

	.PromoBanner--ios .PromoBanner__head {
		padding-left: 12px;
		padding-right: 12px;
	}

	/* Android */

	.PromoBanner--android .PromoBanner__head {
		padding-left: 16px;
		padding-right: 16px;
	}
</style>
