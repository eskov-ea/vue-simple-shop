export const  lockBodyScroll = () => {
    let body = document.querySelector('body');
    body.style.overflowY = 'hidden';
}
export const unlockBodyScroll = () => {
    let body = document.querySelector('body');
    body.style.overflowY = 'auto';
}