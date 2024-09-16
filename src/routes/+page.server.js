import { supabase } from "$lib/supabaseClient";
function getTrackId(url) {
  const parts = url.split('/track/');
  if (parts.length > 1) {
  return parts[1].split('?')[0];
  }
  return null;
 }

export async function load() {
  const { data } = await supabase.from("music-sharing-thing").select();
  data.forEach(element => {
    element.trackId = getTrackId(element.url);
    
  });
  console.log(data);
  return {
    music: data ?? [],
  };
}
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