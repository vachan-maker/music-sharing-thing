<script>
	import Form from "./form.svelte";

	export let data;
	export let form;
</script>
<Form/>
<section class="container flex-col">
	{#each data.music as m}
		<article>
			<header>
				<p><strong>Posted by {m.title}</strong> on {m.created_at}</p>
				<p>{m.description}</p>
			</header>
			<main>
				<iframe title = "spotify" style="border-radius:12px" src="https://open.spotify.com/embed/track/{m.trackId}?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
			</main>
		</article>
	{/each}
</section>

<style>
	.flex-col {
		display: flex;
		flex-direction: column-reverse;
	}
</style>
