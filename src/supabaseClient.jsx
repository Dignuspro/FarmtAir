import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iotjrggjfizytryrgbkm.supabase.co';
const supabaseKey = 'YOUR_SUPABASE_KEY'; // Replace with your actual Supabase Key
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
