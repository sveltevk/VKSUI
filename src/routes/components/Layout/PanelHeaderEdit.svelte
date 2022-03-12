<script>
	import Doc from '@sveltevk/vksui/components/Layout/PanelHeaderEdit/README.md';
	// @ts-ignore
	import data from '@sveltevk/vksui/components/Layout/PanelHeaderEdit/PanelHeaderEdit.svelte?sveld&raw';

	import ApiDocs from '$site/lib/APIDocs/APIDocs.svelte';
</script>

<Doc />
<ApiDocs {data} />
