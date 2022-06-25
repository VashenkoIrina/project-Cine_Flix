import { navLibrary, header, navHome, inputForm, libraryBtns } from '../utils/references'
import { logIn } from '../service/login';
import { userId } from '../service/init-firebase';
// import { clearGalleryContainer } from "../utils/clear-gallery-container"

export async function setMyLibraryStyles(e) {
    try {
        if (!userId) {
            const logged = await logIn();
        }
        e.preventDefault();
        libraryBtns.classList.remove('visually-hidden');
        navLibrary.classList.add('current');
        header.classList.add('header__my-library');
        navHome.classList.remove('current');
        inputForm.classList.add('visually-hidden');
    } catch (error) {
        // console.log('Sorry, you are non logged in');
        console.log(error.message);
    }
} 
