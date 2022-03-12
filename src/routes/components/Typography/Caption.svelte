<script>
	import Doc from '@sveltevk/vksui/components/Typography/Caption/README.md';
	// @ts-ignore
	import data from '@sveltevk/vksui/components/Typography/Caption/Caption.svelte?sveld&raw';

	import ApiDocs from '$site/lib/APIDocs/APIDocs.svelte';
</script>

<Doc />
<ApiDocs {data} />
