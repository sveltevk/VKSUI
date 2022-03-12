<script>
	import Doc from '@sveltevk/vksui/components/Typography/Title/README.md';
	// @ts-ignore
	import data from '@sveltevk/vksui/components/Typography/Title/Title.svelte?sveld&raw';

	import ApiDocs from '$site/lib/APIDocs/APIDocs.svelte';
</script>

<Doc />
<ApiDocs {data} />
