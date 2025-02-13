import { createClient } from '@supabase/supabase-js';

const supabase = createClient("https://jgmjotovreaippwkocjb.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpnbWpvdG92cmVhaXBwd2tvY2piIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU5Mzk5NDgsImV4cCI6MjA1MTUxNTk0OH0.RdXyOWAwefG2ScSeEQU6B10TTQelLazWkrqYFZNDHBo");

export { supabase as s };
