<script>
	import Doc from '@sveltevk/vksui/components/Service/Touch/README.md';
	// @ts-ignore
	import data from '@sveltevk/vksui/components/Service/Touch/Touch.svelte?sveld&raw';

	import ApiDocs from '$site/lib/APIDocs/APIDocs.svelte';
</script>

<Doc />
<ApiDocs {data} />
