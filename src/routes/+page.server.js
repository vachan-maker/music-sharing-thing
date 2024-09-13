import { supabase } from "$lib/supabaseClient";

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const { data, error } = await supabase
  .from('music')
  .insert([
    { url: formData.get('url-spotify'), description: formData.get('description') },
  ])
  .select()
	}
};