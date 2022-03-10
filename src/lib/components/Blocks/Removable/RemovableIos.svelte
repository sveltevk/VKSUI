<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	import Button from '../../Elements/button/button.svelte';
	import Tappable from '../../Service/Tappable/Tappable.svelte';
	import IconButton from '../IconButton/IconButton.svelte';

	export let removePlaceholder = '';

	let removeButtonRef: HTMLElement;
	let disabled = true;
	let removeOffset = 0;

	const onClickWindow = () => {
		if (removeOffset > 0) {
			removeOffset = 0;
		}
	};

	onMount(() => window.addEventListener('click', onClickWindow, { capture: true }));
	onDestroy(() => window.removeEventListener('click', onClickWindow, { capture: true }));

	const onRemoveTransitionEnd = () => {
		if (removeOffset > 0) {
			removeButtonRef?.focus();
		} else {
			disabled = true;
		}
	};

	const onRemoveActivateClick = (e: Event) => {
		e.stopPropagation();
		if (!removeButtonRef) {
			return;
		}
		const { offsetWidth } = removeButtonRef;
		disabled = false;
		removeOffset = offsetWidth;
	};
</script>

<div
	class="Removable__content"
	style:transform={`translateX(-${removeOffset ?? 0}px)`}
	onTransitionEnd={onRemoveTransitionEnd}
>
	<IconButton
		hasActive={false}
		hasHover={false}
		aria-label={removePlaceholder}
		class="Removable__action Removable__toggle"
		on:click={onRemoveActivateClick}
		disabled={removeOffset > 0}
	>
		<i class="Removable__toggle-in" role="presentation" />
	</IconButton>
	<slot />

	<span class="Removable__offset" aria-hidden="true" />

	<Tappable
		component={Button}
		hasActive={false}
		hasHover={false}
		{disabled}
		bind:container={removeButtonRef}
		class="Removable__remove"
		on:click
	>
		<span class="Removable__remove-in">
			<slot name="removePlaceholder">{removePlaceholder}</slot>
		</span>
	</Tappable>
</div>
