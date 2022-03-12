<script>
	import Doc from '@sveltevk/vksui/components/Layout/PanelHeaderBack/README.md';
	// @ts-ignore
	import data from '@sveltevk/vksui/components/Layout/PanelHeaderBack/PanelHeaderBack.svelte?sveld&raw';

	import ApiDocs from '$site/lib/APIDocs/APIDocs.svelte';
</script>

<Doc />
<ApiDocs {data} />
