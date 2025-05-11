import page from 'page';
import homeView from './homeView.js';
import layoutView from './layoutView.js';
import galleryView from './galleryView.js'
import registerView from './registerView.js'
import logout from './logout.js';
import detailsView from './detailsView.js'
import addObjView from './addobjView.js';
import { authMiddleWare } from '../middlewares/authmiddleware.js';
import loginView from './loginView.js';


export const setupRoutes = () => {
    page(authMiddleWare);
    page(layoutView);
    page('/', homeView);
    page('/gallery', galleryView);
    page('/details/:id', detailsView)
    page('/login', loginView);
    page('/register', registerView);
    page('/logout', logout);
    page('/add-new', addObjView);

  
    page();
  };