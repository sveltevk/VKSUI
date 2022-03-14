<script lang="ts">
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import classNames from '@sveltevk/vksui/lib/classNames';
	import getClassName from '@sveltevk/vksui/lib/getClassName';

	const platform = usePlatform();
</script>

<!-- 
@component
Компонент с установленными паддингами, которые отличаются в зависимости от платформы. Необходим, когда есть какой-то
кастомный блок, у которого должны быть стандартные отступы.
-->

<div {...$$restProps} class={classNames($$restProps.class, getClassName('Div', $platform))}>
	<slot />
</div>

<style>
	.Div {
		padding: 12px 16px;
	}

	.Div--ios {
		padding: 12px;
	}
</style>
