<script>
	import Doc from '@sveltevk/vksui/components/Blocks/Button/README.md';
	// @ts-ignore
	import data from '@sveltevk/vksui/components/Blocks/Button/Button.svelte?sveld&raw';

	import ApiDocs from '$site/lib/APIDocs/APIDocs.svelte';
</script>

<Doc />
<ApiDocs {data} />
