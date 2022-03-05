<script lang="ts">
	import usePlatform from '$lib/hooks/usePlatform';
	import classNames from '$lib/lib/classNames';
	import getClassName from '$lib/lib/getClassName';

	const platform = usePlatform();
</script>

<!-- 
@component
Контейнер для однородных `Cell`.
-->

<div {...$$restProps} class={classNames(getClassName('List', $platform), $$props.class)}>
	<slot />
</div>
