import { setupRoutes } from './views/router.js'; // Import the routes
import * as authApi from './api/auth.js';
import { auth } from './api/auth.js';


if (import.meta.env.MODE !== 'production') {
  window.auth = auth;
}


// if (import.meta.env.MODE === 'development') {
//   window.auth = authApi;
// }

setupRoutes();
