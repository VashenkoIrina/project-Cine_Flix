import { loadTrandingPage } from '../js-partials/tranding-gallery.js';
import {
  navHome,
  headerTitle,
  headerLogo,
  navLibrary,
} from '../utils/references';
import { onClickHomePage } from '../js-partials/tranding-gallery';

import { setMyLibraryStyles } from '../markup/header-library';

addEventListener('DOMContentLoaded', () => {
  loadTrandingPage();
});


// inputForm.addEventListener('submit', searchSubmit);

navHome.addEventListener('click', onClickHomePage);
headerTitle.addEventListener('click', onClickHomePage);
headerLogo.addEventListener('click', onClickHomePage);

// arrowBtn.addEventListener('click', onArrowBtnClick);

navLibrary.addEventListener('click', setMyLibraryStyles);

