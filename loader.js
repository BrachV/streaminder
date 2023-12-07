/**
 * Crée et ajoute un loader de chargement à un élément parent spécifié.
 *
 * @param {Document} document - L'objet Document HTML pour créer des éléments.
 * @param {HTMLElement} parent - L'élément parent auquel le loader sera ajouté.
 *
 * @returns {void}
 */
export default function CreateLoader(document, parent) {
  // Create a new div element
  let loaderDiv = document.createElement("div");
  let loaderSpan = document.createElement("span");

  // Add class to the div
  loaderDiv.classList.add("loader");
  loaderDiv.appendChild(loaderSpan);

  // Append the loader div to the balise element
  parent.appendChild(loaderDiv);
}
