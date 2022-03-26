<script>
	import Doc from '@sveltevk/vksui/components/Blocks/List/README.md';
	// @ts-ignore
	import data from '@sveltevk/vksui/components/Blocks/List/List.svelte?sveld&raw';

	import ApiDocs from '$site/lib/APIDocs/APIDocs.svelte';
</script>

<Doc />
<ApiDocs {data} />
