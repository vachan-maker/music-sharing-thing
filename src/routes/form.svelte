<main class="container form-container">
	<form method="POST">
		<label for="name-of-user">Your name (nickname or anything)</label>
		<input type="text" name="name-of-user" id="name-of-user" />
		<label for="url-spotify">Enter <strong>Spotify</strong> URL</label>
		<input type="url" id="url-spotify" name="url-spotify" pattern=".*spotify.*" required />
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

<style>
	.form-container {
		padding-bottom: 2rem;
	}
</style>
