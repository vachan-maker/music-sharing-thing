import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://fcxbseidtltebsdzbiie.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjeGJzZWlkdGx0ZWJzZHpiaWllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYxOTcwNTksImV4cCI6MjA0MTc3MzA1OX0.kLtYpUte01es2WF9qGdzzlsbilYeOlFhkbGAYJ-zwCY')