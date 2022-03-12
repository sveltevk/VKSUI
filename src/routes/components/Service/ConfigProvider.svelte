<script>
	import Doc from '@sveltevk/vksui/components/Service/ConfigProvider/README.md';
	// @ts-ignore
	import data from '@sveltevk/vksui/components/Service/ConfigProvider/ConfigProvider.svelte?sveld&raw';

	import ApiDocs from '$site/lib/APIDocs/APIDocs.svelte';
</script>

<Doc />
<ApiDocs {data} />
