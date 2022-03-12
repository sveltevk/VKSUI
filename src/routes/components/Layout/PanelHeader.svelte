<script>
	import Doc from '@sveltevk/vksui/components/Layout/PanelHeader/README.md';
	// @ts-ignore
	import data from '@sveltevk/vksui/components/Layout/PanelHeader/PanelHeader.svelte?sveld&raw';

	import ApiDocs from '$site/lib/APIDocs/APIDocs.svelte';
</script>

<Doc />
<ApiDocs {data} />
