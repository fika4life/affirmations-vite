import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database'

const supabaseUrl = 'https://cjshywqrdvtkbpskuaxk.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqc2h5d3FyZHZ0a2Jwc2t1YXhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc5NTkxMTUsImV4cCI6MTk5MzUzNTExNX0.ajhAnEWzLZbvAqPgKXdzVcW4y2D-BhIc7OL2WAxsPj4';

export const supabase = createClient(supabaseUrl, supabaseKey);
