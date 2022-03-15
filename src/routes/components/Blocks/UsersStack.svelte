<script>
	import Doc from '@sveltevk/vksui/components/Blocks/UsersStack/README.md';
	// @ts-ignore
	import data from '@sveltevk/vksui/components/Blocks/UsersStack/UsersStack.svelte?sveld&raw';

	import ApiDocs from '$site/lib/APIDocs/APIDocs.svelte';
</script>

<Doc />
<ApiDocs {data} />
