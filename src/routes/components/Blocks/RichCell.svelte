<script>
	import Doc from '@sveltevk/vksui/components/Blocks/RichCell/README.md';
	// @ts-ignore
	import data from '@sveltevk/vksui/components/Blocks/RichCell/RichCell.svelte?sveld&raw';

	import ApiDocs from '$site/lib/APIDocs/APIDocs.svelte';
</script>

<Doc />
<ApiDocs {data} />
