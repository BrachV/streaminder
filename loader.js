/**
 * Crée et ajoute un loader de chargement à un élément parent spécifié.
 *
 * @param {Document} document - L'objet Document HTML pour créer des éléments.
 * @param {HTMLElement} parent - L'élément parent auquel le loader sera ajouté.
 *
 * @returns {void}
 */
export default function CreateLoader(document, parent) {
// Créer l'élément div
var loaderCtn = document.createElement('div');
loaderCtn.classList.add('loader-ctn');

// Créer l'élément img
var imgElement = document.createElement('img');
imgElement.src = 'img/play-logo.svg';

// Créer l'élément span
var spanElement = document.createElement('span');
spanElement.classList.add('loader');

// Ajouter l'élément img à loaderCtn
loaderCtn.appendChild(imgElement);

// Ajouter l'élément span à loaderCtn
loaderCtn.appendChild(spanElement);

// Ajouter loaderCtn au DOM (par exemple, à la fin du body)
parent.appendChild(loaderCtn);
}
