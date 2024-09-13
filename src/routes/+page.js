import { supabase } from "$lib/supabaseClient";
import spotifyUrlInfo from 'spotify-url-info';

export async function load() {
  const { data } = await supabase.from("music").select();
  console.log({data});
  return {
    music: data ?? [],
  };
}