<script>
	import Doc from '@sveltevk/vksui/components/Layout/Tabbar/README.md';
	// @ts-ignore
	import data from '@sveltevk/vksui/components/Layout/Tabbar/Tabbar.svelte?sveld&raw';

	import ApiDocs from '$site/lib/APIDocs/APIDocs.svelte';
</script>

<Doc />
<ApiDocs {data} />
