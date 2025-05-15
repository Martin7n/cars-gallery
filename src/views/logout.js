import page from 'page';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase.js';


export default async function (ctx) {
    try {
        await signOut(auth);
        
        page.redirect('/');
    } catch (err) {
        console.log(err.message);
    }
    page.redirect("/")
}