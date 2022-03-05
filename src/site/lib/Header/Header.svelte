<script lang="ts">
	import { Link, Title } from '$lib/index';
	// import pkg from '../../../../package.json';
	const version: string = __version__ || '0.0.0';

	export let base: string;
	export let repositoryURL: string;
</script>

<header>
	<div class="Header__in">
		<div class="Logo">
			<Title><a href={base}>@sveltevk/vksui</a></Title>
		</div>
		<div class="Links">
			<Link
				href="https://www.npmjs.com/package/@sveltevk/vksui"
				target="_blank"
				rel="noopener noreferrer"
				>{version}
			</Link>
			<Link href={repositoryURL} target="_blank" rel="noopener noreferrer">GitHub</Link>
			<Link href="{repositoryURL}/releases" target="_blank" rel="noopener noreferrer">Релизы</Link>
		</div>
		<div />
	</div>
</header>

<style>
	.Logo {
		width: 340px;
		box-sizing: border-box;
		padding: 0 32px;
	}
	.Logo a {
		color: var(--text_primary);
		text-decoration: none;
	}
	.Links {
		padding: 0 40px;
	}
	.Links > :global(*) {
		margin-right: 16px;
	}
	header {
		width: 100%;
		background: var(--background_content);
		box-shadow: inset 0 0 0 1px var(--image_border);
		position: fixed;
		z-index: 1;
	}
	.Header__in {
		max-width: 1700px;
		margin: auto;
		display: flex;
		/* justify-content: space-between; */
		align-items: center;
		padding: 16px 0;
		box-sizing: border-box;
	}
</style>
