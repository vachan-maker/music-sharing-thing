import { supabase } from "$lib/supabaseClient";
export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		console.log(formData);
		const {data, error} = await supabase.from('music-sharing-thing')
		.insert([
			{url: formData.get('url-spotify'),description:formData.get('description'),title:formData.get('name-of-user')},
		])
		.select()
	}
};