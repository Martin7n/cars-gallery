import { getCurrentUser } from '../api/auth.js';
import auth from '../firebase.js'

export function authMiddleWare(ctx, next){
    ctx.user = auth.currentUser;
    ctx.authenticated = !!auth.currentUser
    console.log(auth.currentUser)

    console.log(ctx.authenticated)

    //this is genius!
    next();
};