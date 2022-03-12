<script>
	import Doc from '@sveltevk/vksui/components/Forms/FormLayout/README.md';
	// @ts-ignore
	import data from '@sveltevk/vksui/components/Forms/FormLayout/FormLayout.svelte?sveld&raw';

	import ApiDocs from '$site/lib/APIDocs/APIDocs.svelte';
</script>

<Doc />
<ApiDocs {data} />
