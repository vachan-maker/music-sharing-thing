<script>
	export let data;
</script>

<main class="container form-container">
    <form method="POST" action="/submit">
        <label for="url-spotify">Enter Spotify URL</label>
	<input type="url" pattern="^https:\/\/open\.spotify\.com\/(track|album|playlist|artist|show)\/[a-zA-Z0-9]{22}$" id="url-spotify"/>
    <label for="description">Write something about the song</label>
	<input type="text" id="description" placeholder="Tell us why you love/hate the song..hehe"/>
	<button>Submit</button>
    </form>
</main>
<section class="container">
{#each data.music as m}
	<article>
        <header></header>
        <main>
            <p>{m.description}</p>
            <a href="{m.url}">Listen to Song</a>
        </main>
	</article>
{/each}
</section>
<style>
.form-container {
    padding-bottom: 2rem;
}
</style>