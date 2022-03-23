<script>
	import Doc from '@sveltevk/vksui/components/Popouts/Alert/README.md';
	// @ts-ignore
	import data from '@sveltevk/vksui/components/Popouts/Alert/Alert.svelte?sveld&raw';

	import ApiDocs from '$site/lib/APIDocs/APIDocs.svelte';
</script>

<Doc />
<ApiDocs {data} />
