<script>
	export let data;
</script>

<main class="container form-container">
	<form method="POST">
		<label for="name-of-song">Enter name of song(label)</label>
		<input type="text" name="name-of-song" id="name-of-song" />
		<label for="url-spotify">Enter Spotify URL</label>
		<input type="url" id="url-spotify" name="url-spotify" required />
		<label for="description-field">Write something about the song</label>
		<input
			type="text"
			id="description-field"
			placeholder="Tell us why you love/hate the song..hehe"
			name="description"
			required
		/>
		<button>Submit</button>
	</form>
</main>

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

<style>
	.form-container {
		padding-bottom: 2rem;
	}
</style>
