// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const supabaseUrl = "https://dgdxsqrcawghvbfplvih.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRnZHhzcXJjYXdnaHZiZnBsdmloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM0Mjc5OTMsImV4cCI6MjA0OTAwMzk5M30.ohdprGi_btS69vf7Zw_P1ziQkQhvDaST6XWeiBmY0V0";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);