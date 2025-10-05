import { config } from "dotenv";

config();

export default {
   "/sanctum": {
     "target": process.env.API_URL || 'http://localhost:8000',
     "secure": false
   },
   "/api": {
     "target": process.env.API_URL || 'http://localhost:8000',
     "secure": false
   }
 }