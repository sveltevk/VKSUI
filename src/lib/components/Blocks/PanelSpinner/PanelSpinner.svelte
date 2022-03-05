<script lang="ts">
	import Spinner from '../Spinner/Spinner.svelte';

	export let height = 96;
</script>

<!-- 
@component
Этот компонент - обёртка над `<Spinner />` с заданными отступами и размером. Удобно использовать его во время загрузки данных.
-->

<Spinner size="small" {...$$restProps} style={`height: ${height}px`} />
