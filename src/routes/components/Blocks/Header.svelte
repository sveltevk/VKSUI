<script>
	import Doc from '@sveltevk/vksui/components/Blocks/Header/README.md';
	// @ts-ignore
	import data from '@sveltevk/vksui/components/Blocks/Header/Header.svelte?sveld&raw';

	import ApiDocs from '$site/lib/APIDocs/APIDocs.svelte';
</script>

<Doc />
<ApiDocs {data} />
