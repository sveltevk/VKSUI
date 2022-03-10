<script lang="ts">
	import classNames from '@sveltevk/vksui/lib/classNames';
	// import getClassName from '@sveltevk/vksui/lib/getClassName';
	// import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';

	export let mode: 'new' | 'prominent' = 'new';

	// const platform = usePlatform();

	$: $$restProps.class = classNames(
		$$props.class,
		// getClassName('Badge', $platform),
		'Badge',
		`Badge--${mode}`
	);
</script>

<span {...$$restProps} />

<style>
	.Badge {
		display: block;
		flex-grow: 0;
		flex-shrink: 0;
		width: 6px;
		height: 6px;
		border-radius: 50%;
	}

	.Badge--new {
		background-color: var(--blue_200);
	}

	.Badge--prominent {
		background-color: var(--counter_prominent_background);
	}

	:global(.TabsItem__after) .Badge {
		transform: translateY(-2px);
		margin-left: 6px;
	}
</style>
