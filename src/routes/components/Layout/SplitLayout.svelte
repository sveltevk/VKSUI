<script>
	import Doc from '@sveltevk/vksui/components/Layout/SplitLayout/README.md';
	// @ts-ignore
	import data from '@sveltevk/vksui/components/Layout/SplitLayout/SplitLayout.svelte?sveld&raw';

	import ApiDocs from '$site/lib/APIDocs/APIDocs.svelte';
</script>

<Doc />
<ApiDocs {data} />
