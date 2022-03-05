<script lang="ts">
	import usePlatform from '$lib/hooks/usePlatform';
	import classNames from '$lib/lib/classNames';
	import getClassName from '$lib/lib/getClassName';

	export let indicator: any = undefined;
	export let subtitle: string = '';
	export let mode: 'primary' | 'secondary' = 'primary';

	const platform = usePlatform();
</script>

<div
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
	<div class="Header__in">
		<div class="Header__content">
			<slot />
			{#if $$slots.subtitle || subtitle !== ''}
				<div class="Header__subtitle">
					<slot name="subtitle">{subtitle}</slot>
				</div>
			{/if}
		</div>
		{#if $$slots.indicator || typeof indicator !== 'undefined'}
			<div class="Header__indicator">
				<slot name="indicator">{indicator}</slot>
			</div>
		{/if}
		{#if $$slots.aside}
			<div class="Header__aside">
				<slot name="aside" />
			</div>
		{/if}
	</div>
</div>

<style>
	.Header {
		user-select: text;
	}

	.Header__in {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
	}

	.Header__content {
		min-width: 0;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-weight: 600;
	}

	.Header__subtitle {
		color: var(--text_secondary);
		font-weight: normal;
		font-size: 13px;
		line-height: 16px;
	}

	.Header--mode-primary .Header__content {
		color: var(--text_primary);
	}

	.Header--mode-secondary .Header__content {
		color: var(--text_secondary);
		text-transform: uppercase;
	}

	.Header--pi .Header__content {
		color: var(--text_primary);
	}

	.Header__indicator {
		margin-right: auto;
		color: var(--text_secondary);
		font-size: 13px;
		line-height: 16px;
		margin-left: 8px;
	}

	.Header__aside {
		white-space: nowrap;
		font-size: 15px;
		line-height: 20px;
		margin-left: 12px;
	}

	.Header__aside > .Icon {
		position: relative;
		color: var(--icon_secondary);
	}

	.Header__aside > .Icon--24 {
		top: 3px;
	}

	.Header__aside > .Icon--16 {
		top: 1px;
	}

	.Header--ios {
		padding: 0 12px;
	}

	.Header--ios.Header--mode-primary .Header__content {
		font-size: 17px;
		line-height: 22px;
		padding: 13px 0 9px;
	}

	.Header--ios.Header--mode-secondary .Header__content {
		padding: 14px 0 10px;
		font-size: 13px;
		line-height: 16px;
	}

	.Header--android {
		padding: 0 16px;
	}

	.Header--android.Header--mode-primary .Header__content {
		padding: 15px 0 9px;
		font-size: 16px;
		line-height: 20px;
	}

	.Header--android.Header--mode-secondary .Header__content {
		padding: 15px 0 9px;
		font-size: 13px;
		line-height: 16px;
	}
</style>
