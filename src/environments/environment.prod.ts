import { createClient } from "@supabase/supabase-js";

export const environment = {
  production: true,
  SupabaseClient : createClient('SupabaseApiUrl','SupabaseApiKey'),
  SupabaseApiUrl: 'https://stfgpujtnwmzjltghsis.supabase.co',
  SupabaseApiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTgwMzQyMywiZXhwIjoxOTU3Mzc5NDIzfQ.Be2xHvLsCGW3W9x_CTRvUoLf6qjvb6J0eAs0ELndNJ8',
};
