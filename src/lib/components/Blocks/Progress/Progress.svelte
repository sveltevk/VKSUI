<script context="module" lang="ts">
	const PROGRESS_MIN_VALUE = 0;
	const PROGRESS_MAX_VALUE = 100;
</script>

<script lang="ts">
	import { usePlatform } from '$lib/hooks/usePlatform';
	import classNames from '$lib/lib/classNames';
	import getClassName from '$lib/lib/getClassName';

	export let value = 0;

	$: progress = Math.max(PROGRESS_MIN_VALUE, Math.min(value, PROGRESS_MAX_VALUE));

	const platform = usePlatform();
</script>

<div
	aria-valuenow={value}
	{...$$restProps}
	class={classNames(getClassName('Progress', $platform), $$props.class)}
	role="progressbar"
	aria-valuemin={PROGRESS_MIN_VALUE}
	aria-valuemax={PROGRESS_MAX_VALUE}
>
	<div class="Progress__bg" aria-hidden="true" />
	<div class="Progress__in" style:width="{progress}%" aria-hidden="true" />
</div>

<style>
	.Progress {
		border-radius: 1px;
		background: var(--loader_track_fill);
		height: 2px;
	}

	.Progress__in {
		height: 100%;
		border-radius: inherit;
		transition: width 0.2s ease;
		background: var(--accent);
	}
</style>
