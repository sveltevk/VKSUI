<script>
	import Doc from '@sveltevk/vksui/components/Layout/TabbarItem/README.md';
	// @ts-ignore
	import data from '@sveltevk/vksui/components/Layout/TabbarItem/TabbarItem.svelte?sveld&raw';

	import ApiDocs from '$site/lib/APIDocs/APIDocs.svelte';
</script>

<Doc />
<ApiDocs {data} />
