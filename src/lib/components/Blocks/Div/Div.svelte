<script lang="ts">
	import { usePlatform } from '$lib/hooks/usePlatform';
	import classNames from '$lib/lib/classNames';
	import getClassName from '$lib/lib/getClassName';

	const platform = usePlatform();
</script>

<!-- 
@component
Компонент с установленными паддингами, которые отличаются в зависимости от платформы. Необходим, когда есть какой-то
кастомный блок, у которого должны быть стандартные отступы.
-->

<div {...$$restProps} class={classNames(getClassName('Div', $platform), $$props.class)}>
	<slot />
</div>

<style>
	.Div--ios {
		padding: 12px;
	}

	.Div--android {
		padding: 12px 16px;
	}

	.Div--vkcom {
		padding: 12px 16px;
	}
</style>
