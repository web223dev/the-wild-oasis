import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xyzswyptgqkqaqxaujwu.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5enN3eXB0Z3FrcWFxeGF1and1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUyNDYwNzAsImV4cCI6MjA0MDgyMjA3MH0.ueFu1ayrxBvvB4E7hvAgjweZmZdkFVbPJgUQETxvDMs';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
