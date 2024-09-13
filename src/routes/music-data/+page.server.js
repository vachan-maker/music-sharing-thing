import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from("music").select();
  return {
    music: data ?? [],
  };
}