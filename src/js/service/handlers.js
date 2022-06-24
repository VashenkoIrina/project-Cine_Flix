import { loadTrandingPage } from '../js-partials/tranding-gallery.js';
import {
  paginationList,
  navHome,
  headerTitle,
  headerLogo,
  navLibrary,
  leftBtn,
  rightBtn,
} from '../utils/references';
import { onPaginationBtnClick } from '../js-partials/pagination-btn-click';
import { onClickHomePage } from '../js-partials/tranding-gallery';

import { onResize } from '../utils/pagination-resize';

import { setMyLibraryStyles } from '../markup/header-library';
import { onLeftButtonClick } from '../js-partials/pagination-arrows';
import { onRightButtonClick } from '../js-partials/pagination-arrows';

addEventListener('DOMContentLoaded', () => {
  loadTrandingPage();
});

paginationList.addEventListener('click', onPaginationBtnClick);

navHome.addEventListener('click', onClickHomePage);
headerTitle.addEventListener('click', onClickHomePage);
headerLogo.addEventListener('click', onClickHomePage);

window.addEventListener('resize', onResize);

navLibrary.addEventListener('click', setMyLibraryStyles);
leftBtn.addEventListener('click', onLeftButtonClick);
rightBtn.addEventListener('click', onRightButtonClick);

