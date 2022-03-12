<script>
	import Doc from '@sveltevk/vksui/components/Layout/PanelHeaderClose/README.md';
	// @ts-ignore
	import data from '@sveltevk/vksui/components/Layout/PanelHeaderClose/PanelHeaderClose.svelte?sveld&raw';

	import ApiDocs from '$site/lib/APIDocs/APIDocs.svelte';
</script>

<Doc />
<ApiDocs {data} />
