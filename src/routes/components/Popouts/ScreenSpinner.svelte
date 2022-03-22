<script>
	import Doc from '@sveltevk/vksui/components/Popouts/ScreenSpinner/README.md';
	// @ts-ignore
	import data from '@sveltevk/vksui/components/Popouts/ScreenSpinner/ScreenSpinner.svelte?sveld&raw';

	import ApiDocs from '$site/lib/APIDocs/APIDocs.svelte';
</script>

<Doc />
<ApiDocs {data} />
