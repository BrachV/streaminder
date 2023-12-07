export default function LoginPage(document) {
  // Créer une section
  const sectionHeader = document.createElement("section");

  // Créer une div avec la classe "select-locale"
  const selectLocaleDiv = document.createElement("div");
  selectLocaleDiv.className = "select-locale";

  // Créer une balise select avec l'id "locale"
  const localeSelect = document.createElement("select");
  localeSelect.name = "locale";
  localeSelect.id = "locale";

  // Créer une option pour le français
  const optionFr = document.createElement("option");
  optionFr.value = "fr";
  optionFr.selected = true;
  optionFr.textContent = "Français";

  // Créer une option pour l'anglais
  const optionEn = document.createElement("option");
  optionEn.value = "en";
  optionEn.textContent = "English";

  // Ajouter les options au select
  localeSelect.appendChild(optionFr);
  localeSelect.appendChild(optionEn);

  // Ajouter le select à la div
  selectLocaleDiv.appendChild(localeSelect);

  // Créer une balise img avec la classe "streaminder-logo"
  const streaminderLogo = document.createElement("img");
  streaminderLogo.className = "streaminder-logo";
  streaminderLogo.src = "img/white-logo.svg";
  streaminderLogo.alt = "Streaminder Logo";

  // Créer un paragraphe avec la classe "subtitle" et l'attribut data-locale="login_desc"
  const subtitleParagraph = document.createElement("p");
  subtitleParagraph.className = "subtitle";
  subtitleParagraph.setAttribute("data-locale", "login_desc");

  // Ajouter les éléments créés à la première section
  sectionHeader.appendChild(selectLocaleDiv);
  sectionHeader.appendChild(streaminderLogo);
  sectionHeader.appendChild(subtitleParagraph);

  // Créer une deuxième section
  const sectionLogin = document.createElement("section");

  // Créer un bouton avec le type "button" et la classe "login-btn"
  const loginButton = document.createElement("button");
  loginButton.type = "button";
  loginButton.className = "login-btn";

  // Créer une balise img avec la classe "twitch-logo"
  const twitchLogo = document.createElement("img");
  twitchLogo.className = "twitch-logo";
  twitchLogo.src = "/img/twitch-logo.svg";
  twitchLogo.alt = "Twitch Logo";

  // Créer un span avec l'attribut data-locale="login_button"
  const loginButtonSpan = document.createElement("span");
  loginButtonSpan.setAttribute("data-locale", "login_button");

  // Ajouter l'image et le span au bouton
  loginButton.appendChild(twitchLogo);
  loginButton.appendChild(loginButtonSpan);

  // Créer un paragraphe avec la classe "warning" et l'attribut data-locale="login_warning"
  const warningParagraph = document.createElement("p");
  warningParagraph.className = "warning";
  warningParagraph.setAttribute("data-locale", "login_warning");

  // Créer un lien avec l'attribut data-locale="tos", l'attribut href="#" et la classe "tos"
  const tosLink = document.createElement("a");
  tosLink.setAttribute("data-locale", "tos");
  tosLink.href = "#";
  tosLink.className = "tos";

  // Ajouter le bouton, le paragraphe et le lien à la deuxième section
  sectionLogin.appendChild(loginButton);
  sectionLogin.appendChild(warningParagraph);
  sectionLogin.appendChild(tosLink);

  const container = document.getElementById("container");

  // Ajouter les sections au document (par exemple, au body)
 container.appendChild(sectionHeader);
 container.appendChild(sectionLogin);
}
