import { loadSelectedTrandingPage } from '../js-partials/tranding-gallery';
import { galleryContainer } from '../utils/references';

export async function transmitToRenderNextPage(page) {
    if (galleryContainer.getAttribute('data-set') === 'tranding') {
        await loadSelectedTrandingPage(page);
    }
}