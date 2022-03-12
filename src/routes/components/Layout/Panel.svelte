<script>
	import Doc from '@sveltevk/vksui/components/Layout/Panel/README.md';
	// @ts-ignore
	import data from '@sveltevk/vksui/components/Layout/Panel/Panel.svelte?sveld&raw';

	import ApiDocs from '$site/lib/APIDocs/APIDocs.svelte';
</script>

<Doc />
<ApiDocs {data} />
