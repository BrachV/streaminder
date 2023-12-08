document.querySelectorAll("[data-locale]").forEach((elem) => {
  elem.innerText = chrome.i18n.getMessage(elem.dataset.locale);
});
document.querySelectorAll("[data-locale-placeholder]").forEach((input) => {
	input.placeholder = chrome.i18n.getMessage(input.dataset.localePlaceholder);
  });