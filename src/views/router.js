import page from 'page';
import homeRender from './home.js';
import renderNav from './navigation.js';
import galleryRender from './gallery.js'
import loginRender from './login.js'
import register from './register.js'
import logout from './logout.js';



export const setupRoutes = () => {
    page(renderNav);
    page('/', homeRender);
    page('/gallery', galleryRender);
    page('/login', loginRender);
    page('/register', register)
    page('/logout', logout)

  
    page();
  };