<script>
	import Doc from '@sveltevk/vksui/components/Blocks/CardGrid/README.md';
	// @ts-ignore
	import data from '@sveltevk/vksui/components/Blocks/CardGrid/CardGrid.svelte?sveld&raw';

	import ApiDocs from '$site/lib/APIDocs/APIDocs.svelte';
</script>

<Doc />
<ApiDocs {data} />
