<script>
	import Doc from '@sveltevk/vksui/components/Layout/FixedLayout/README.md';
	// @ts-ignore
	import data from '@sveltevk/vksui/components/Layout/FixedLayout/FixedLayout.svelte?sveld&raw';

	import ApiDocs from '$site/lib/APIDocs/APIDocs.svelte';
</script>

<Doc />
<ApiDocs {data} />
