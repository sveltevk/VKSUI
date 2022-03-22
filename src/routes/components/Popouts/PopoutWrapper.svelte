<script>
	import Doc from '@sveltevk/vksui/components/Popouts/PopoutWrapper/README.md';
	// @ts-ignore
	import data from '@sveltevk/vksui/components/Popouts/PopoutWrapper/PopoutWrapper.svelte?sveld&raw';

	import ApiDocs from '$site/lib/APIDocs/APIDocs.svelte';
</script>

<Doc />
<ApiDocs {data} />
