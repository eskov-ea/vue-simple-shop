import {Modal} from "bootstrap";

export const closeModal = (id) => {
    Modal.getOrCreateInstance(document.getElementById(id)).hide();
}
export const openModal = (id) => {
    Modal.getOrCreateInstance(document.getElementById(id)).toggle();
}