// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


import { createClient } from "@supabase/supabase-js";

export const environment = {
  production: true,
  SupabaseApiUrl: 'https://stfgpujtnwmzjltghsis.supabase.co',
  SupabaseApiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTgwMzQyMywiZXhwIjoxOTU3Mzc5NDIzfQ.Be2xHvLsCGW3W9x_CTRvUoLf6qjvb6J0eAs0ELndNJ8',
  SupabaseClient : createClient('SupabaseApiUrl','SupabaseApiKey')
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
