import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// Use ONLY the Anon Key as the second argument
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY; 

export const supabase = createClient(supabaseUrl, supabaseAnonKey);