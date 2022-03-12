<script lang="ts">
	import Icon20Dropdown from '@sveltevk/icons/dist/20/dropdown';
	import Icon24ChevronDown from '@sveltevk/icons/dist/24/chevron_down';

	import { useAdaptivity } from '@sveltevk/vksui/hooks/useAdaptivity';

	import { SizeType } from '@sveltevk/vksui/lib/adaptivity';
	import classNames from '@sveltevk/vksui/lib/classNames';

	const adaptivity = useAdaptivity();

	$: $$restProps.class = classNames($$restProps.class, 'DropdownIcon');
</script>

{#if $adaptivity.sizeY === SizeType.COMPACT}
	<Icon20Dropdown {...$$restProps} />
{:else}
	<Icon24ChevronDown {...$$restProps} />
{/if}

<style>
	:global(.DropdownIcon) {
		cursor: pointer;
	}
</style>
