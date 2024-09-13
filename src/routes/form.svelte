<main class="container form-container">
	<form method="POST">
		<label for="name-of-song">Enter name of song(label)</label>
		<input type="text" name="name-of-song" id="name-of-song" />
		<label for="url-spotify">Enter Spotify URL</label>
		<input type="url" id="url-spotify" name="url-spotify" required />
		<label for="description">Write something about the song</label>
		<input
			type="text"
			id="description"
			placeholder="Tell us why you love/hate the song..hehe"
			name="description"
			required
		/>
		<button>Submit</button>
	</form>
</main>

<style>
	.form-container {
		padding-bottom: 2rem;
	}
</style>
