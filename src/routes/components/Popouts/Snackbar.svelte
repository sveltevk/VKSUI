<script>
	import Doc from '@sveltevk/vksui/components/Popouts/Snackbar/README.md';
	// @ts-ignore
	import data from '@sveltevk/vksui/components/Popouts/Snackbar/Snackbar.svelte?sveld&raw';

	import ApiDocs from '$site/lib/APIDocs/APIDocs.svelte';
</script>

<Doc />
<ApiDocs {data} />
