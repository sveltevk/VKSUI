<script lang="ts">
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import classNames from '@sveltevk/vksui/lib/classNames';
	import getClassName from '@sveltevk/vksui/lib/getClassName';

	const platform = usePlatform();
</script>

<!-- 
@component
Контейнер для однородных `Cell`.
-->

<div {...$$restProps} class={classNames(getClassName('List', $platform), $$props.class)}>
	<slot />
</div>
