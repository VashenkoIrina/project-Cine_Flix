export function backdropClick(event) {
    if (event.currentTarget === event.target) {
        closeModal();
    }
}