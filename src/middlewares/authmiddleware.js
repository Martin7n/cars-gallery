// import { getCurrentUser } from '../api/auth.js';
// import auth from '../firebase.js'
import { getAuth, onAuthStateChanged }  from 'firebase/auth';
import app from "../firebase.js"

// export  function authMiddleWare(ctx, next){

//     // const usr = await getCurrentUser()
//     // console.log(usr.email)
//     console.log(ctx);
//     ctx.user =  auth.currentUser;
//     ctx.authenticated = !!auth.currentUser
//     console.log(auth.currentUser)


//     //this is genius!
//     next();
// };



export function authMiddleWare(ctx, next) {
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
        ctx.user = user;
        ctx.authenticated = !!user;
        console.log("Middleware user:", user);
        next();  // Call next only after user state is resolved
    });
    next()
}