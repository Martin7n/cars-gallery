import page from 'page';
import { signOut } from 'firebase/auth';



export default async function (ctx) {
    try {
        await signOut(auth);
        
        page.redirect('/');
    } catch (err) {
        console.log(err.message);
    }
    page.redirect("/")
}