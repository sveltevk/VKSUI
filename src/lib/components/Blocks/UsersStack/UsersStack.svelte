<script lang="ts" context="module">
	import { canUseDOM, useDOM } from '@sveltevk/vksui/lib/dom';

	const masksCreated: Document[] = [];

	const createMasks = (contentDocument: Document | undefined) => {
		if (!canUseDOM || !document || masksCreated.includes(document)) {
			return;
		}

		const svgElement = contentDocument.createElementNS('http://www.w3.org/2000/svg', 'svg');
		svgElement.setAttributeNS(null, 'id', '__SVG_MASKS_NODE__');
		svgElement.setAttributeNS(null, 'width', '0');
		svgElement.setAttributeNS(null, 'height', '0');
		svgElement.style.position = 'absolute';
		svgElement.style.width = '0px';
		svgElement.style.height = '0px';

		svgElement.innerHTML = `<defs>
	<clipPath id="users_stack_mask_16_left">
    <path transform="translate(1.5 0)" d="M1.20772 8C1.20772 6.32671 0.768742 4.75626 0 3.39821C1.44342 1.34278 3.8277 0 6.52463 0C10.9293 0 14.5 3.58172 14.5 8C14.5 12.4183 10.9293 16 6.52463 16C3.8277 16 1.44342 14.6572 0 12.6018C0.768742 11.2437 1.20772 9.6733 1.20772 8Z"></path>
  </clipPath>
  <clipPath id="users_stack_mask_24_left">
    <path d="M3.9971785,12 C3.9971785,9.49005736 3.33667467,7.13438366 2.18,5.09731189 C4.35181237,2.01417617 7.93927741,0 11.9971785,0 C18.6245955,0 23.9971785,5.372583 23.9971785,12 C23.9971785,18.627417 18.6245955,24 11.9971785,24 C7.93927741,24 4.35181237,21.9858238 2.18,18.9026881 C3.33667467,16.8656163 3.9971785,14.5099426 3.9971785,12 Z"></path>
  </clipPath>
  <clipPath id="users_stack_mask_24_right">
    <path d="M21.8171785,5.09731189 C20.6605038,7.13438366 20,9.49005736 20,12 C20,14.5099426 20.6605038,16.8656163 21.8171785,18.9026881 C19.6453661,21.9858238 16.0579011,24 12,24 C5.372583,24 3.90798505e-14,18.627417 3.90798505e-14,12 C3.90798505e-14,5.372583 5.372583,0 12,0 C16.0579011,0 19.6453661,2.01417617 21.8171785,5.09731189 Z"></path>
  </clipPath>
  <clipPath id="users_stack_mask_32_left">
    <path d="M2.13430019,23.9892466 C3.32858917,21.5820026 4,18.8694095 4,16 C4,13.1305905 3.32858917,10.4179974 2.13430019,8.0107534 C4.89924175,3.22241289 10.0733034,-2.30926389e-14 16,-2.30926389e-14 C24.836556,-2.30926389e-14 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 C10.0733034,32 4.89924175,28.7775871 2.13430019,23.9892466 L2.13430019,23.9892466 Z"></path>
  </clipPath>
  <clipPath id="users_stack_mask_32_right">
    <path d="M29.8656998,8.0107534 C28.6714108,10.4179974 28,13.1305905 28,16 C28,18.8694095 28.6714108,21.5820026 29.8656998,23.9892466 C27.1007583,28.7775871 21.9266966,32 16,32 C7.163444,32 3.90798505e-14,24.836556 3.90798505e-14,16 C3.90798505e-14,7.163444 7.163444,0 16,0 C21.9266966,0 27.1007583,3.22241289 29.8656998,8.0107534 Z"></path>
  </clipPath>
</defs>`;

		contentDocument.body.appendChild(svgElement);
		masksCreated.push(contentDocument);
	};
</script>

<script lang="ts">
	import classNames from '@sveltevk/vksui/lib/classNames';
	import getClassName from '@sveltevk/vksui/lib/getClassName';
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import { onMount } from 'svelte';
	import Caption from '../../Typography/Caption/Caption.svelte';
	import Subhead from '../../Typography/Subhead/Subhead.svelte';

	/**
	 * Массив ссылок на фотографии
	 */
	export let photos: string[] = [];
	/**
	 * Размер аватарок
	 */
	export let size: 'xs' | 's' | 'm' = 's';
	/**
	 * Вертикальный режим рекомендуется использовать с размером `m`
	 */
	export let layout: 'vertical' | 'horizontal' = 'horizontal';
	/**
	 * Количество аватарок, которые будут показаны.
	 * Если в массиве `photos` больше элементов и используется размер `m`, то будет показано количество остальных элементов
	 */
	export let visibleCount = 3;

	const platform = usePlatform();
	const dom = useDOM();
	onMount(() => createMasks($dom.document));

	const othersCount = Math.max(0, photos.length - visibleCount);
	const canShowOthers = othersCount > 0 && size === 'm';

	const photosShown = photos.slice(0, visibleCount);
</script>

<!-- 
@component
Используется для отображения аватарок пользователей с каким-то сопроводительным текстом.

У компонента есть вертикальный режим – когда текст располагается под аватарками. В таком режиме рекомендуется использовать размер `m`.
-->

<div
	{...$$restProps}
	class={classNames(
		$$restProps.class,
		getClassName('UsersStack', $platform),
		`UsersStack--size-${size}`,
		`UsersStack--l-${layout}`,
		{
			'UsersStack--others': canShowOthers
		}
	)}
>
	<div class="UsersStack__photos" role="presentation">
		{#each photosShown as photo}
			<div class="UsersStack__photo" style={`background-image: url(${photo})`} />
		{/each}
		{#if canShowOthers}
			<Caption
				weight="medium"
				level="1"
				class="UsersStack__photo UsersStack__photo--others"
				aria-hidden="true"
			>
				<span>+{othersCount}</span>
			</Caption>
		{/if}
	</div>
	{#if $$slots.default}
		<Subhead component="span" class="UsersStack__text">
			<slot />
		</Subhead>
	{/if}
</div>

<style>
	.UsersStack {
		display: flex;
		align-items: center;
		color: var(--text_secondary);
	}

	.UsersStack__photos {
		display: flex;
	}

	:global(.UsersStack__photo) {
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		border-radius: 50%;
		background-color: var(--placeholder_icon_background);
	}

	:global(.UsersStack__photo--others) {
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		background: var(--content_placeholder_icon);
	}

	.UsersStack--size-xs :global(.UsersStack__photo) {
		width: 16px;
		height: 16px;
	}

	.UsersStack--size-s :global(.UsersStack__photo) {
		width: 24px;
		height: 24px;
	}

	.UsersStack--size-m :global(.UsersStack__photo) {
		width: 32px;
		height: 32px;
	}

	:global(.UsersStack__photo + .UsersStack__photo) {
		margin-left: -2px;
	}

	.UsersStack--size-xs :global(.UsersStack__photo + .UsersStack__photo) {
		margin-left: -1px;
		clip-path: url(#users_stack_mask_16_left);
	}

	.UsersStack--size-s :global(.UsersStack__photo + .UsersStack__photo) {
		clip-path: url(#users_stack_mask_24_left);
	}

	.UsersStack--size-m :global(.UsersStack__photo + .UsersStack__photo) {
		clip-path: url(#users_stack_mask_32_left);
	}

	.UsersStack--size-m.UsersStack--others :global(.UsersStack__photo) {
		clip-path: url(#users_stack_mask_32_right);
	}

	.UsersStack--size-m.UsersStack--others :global(.UsersStack__photo:last-child) {
		clip-path: none;
	}

	:global(.UsersStack__text) {
		min-width: 0;
		flex: 1;
		margin: 0 0 0 8px !important;
	}

	/* Vertical layout */

	.UsersStack--l-vertical {
		flex-direction: column;
		justify-content: center;
	}

	.UsersStack--l-vertical :global(.UsersStack__text) {
		margin: 8px 0 0 !important;
		text-align: center;
	}

	/**
 * CMP:
 * ModalCardBase
 */
	:global(.ModalCardBase) .UsersStack {
		margin-top: 20px;
	}

	/**
 * CMP:
 * RichCell
 */
	:global(.RichCell__bottom) .UsersStack {
		padding: 5px 0 0;
	}
</style>
