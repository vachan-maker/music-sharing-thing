<script>
	import Form from './form.svelte';

	export let data;
</script>

<Form />
<section class="container">
	{#each data.music as m}
		<article>
			<header>
				<h3>{m.title}</h3>
			</header>
			<main>
				<p>{m.description}</p>
				<a href={m.url}>Listen to Song</a>
			</main>
		</article>
	{/each}
</section>
