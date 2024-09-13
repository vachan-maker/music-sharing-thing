<script>
	import Form from './form.svelte';

	export let data;
</script>

<Form />
<section class="container flex-col">
	{#each data.music as m}
		<article>
			<header>
				<h3>{m.title}</h3>
                <p>Posted on: {m.created_at}</p>
			</header>
			<main>
				<p>{m.description}</p>
				<a href={m.url}>Listen to Song</a>
			</main>
		</article>
	{/each}
</section>
<style>
    .flex-col {
        display:flex;
        flex-direction: column-reverse;
    }
</style>
