<script>
	import Doc from '@sveltevk/vksui/components/Forms/FormItem/README.md';
	// @ts-ignore
	import data from '@sveltevk/vksui/components/Forms/FormItem/FormItem.svelte?sveld&raw';

	import ApiDocs from '$site/lib/APIDocs/APIDocs.svelte';
</script>

<Doc />
<ApiDocs {data} />
