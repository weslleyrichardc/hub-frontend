import { config } from "dotenv";

config();

export default {
   "/sanctum": {
     "target": process.env.API_URL || 'http://api.weslleyrichard.dev',
     "secure": false
   },
   "/api": {
     "target": process.env.API_URL || 'http://api.weslleyrichard.dev',
     "secure": false
   }
 }