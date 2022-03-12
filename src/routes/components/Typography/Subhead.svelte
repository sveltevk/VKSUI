<script>
	import Doc from '@sveltevk/vksui/components/Typography/Subhead/README.md';
	// @ts-ignore
	import data from '@sveltevk/vksui/components/Typography/Subhead/Subhead.svelte?sveld&raw';

	import ApiDocs from '$site/lib/APIDocs/APIDocs.svelte';
</script>

<Doc />
<ApiDocs {data} />
