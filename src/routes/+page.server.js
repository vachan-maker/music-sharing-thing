import { supabase } from "$lib/supabaseClient";
import { generateFromEmail, generateUsername } from "unique-username-generator";

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		if(formData.get('username' == NULL))
		{
			
		}
		const { data, error } = await supabase
  .from('music')
  .insert([
    { url: formData.get('url-spotify'), description: formData.get('description'), title:formData.get('name-of-song')},
  ])
  .select()
	}
};
