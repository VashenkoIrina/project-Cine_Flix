import { loadSelectedTrandingPage } from '../js-partials/tranding-gallery';
import { loadSelectedSearchPage } from '../js-partials/search';
import { galleryContainer } from '../utils/references';

export async function transmitToRenderNextPage(page) {
    if (galleryContainer.getAttribute('data-set') === 'tranding') {
        await loadSelectedTrandingPage(page);
    }
    if (galleryContainer.getAttribute('data-set') === 'search') {
        await loadSelectedSearchPage(page);
    }
}