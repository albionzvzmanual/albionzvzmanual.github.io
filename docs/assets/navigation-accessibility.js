(() => {
  const drawer = document.getElementById("__drawer");
  const search = document.getElementById("__search");
  const sidebar = document.querySelector(".md-sidebar--primary");
  const searchField = document.querySelector(".md-search__input");
  const controls = new Map();
  let keyboardActivation = false;

  for (const label of document.querySelectorAll("header label[for], .md-nav label.md-nav__link[for]")) {
    const toggle = document.getElementById(label.htmlFor);
    if (!(toggle instanceof HTMLInputElement) || toggle.type !== "checkbox") continue;
    label.tabIndex = 0;
    label.setAttribute("role", "button");
    if (toggle === drawer) label.setAttribute("aria-label", "Open navigation");
    if (toggle === search) label.setAttribute("aria-label", "Open search");
    const reflect = () => label.setAttribute("aria-expanded", String(toggle.checked));
    reflect();
    toggle.addEventListener("change", reflect);
    label.addEventListener("keydown", event => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      keyboardActivation = true;
      label.click();
      keyboardActivation = false;
    });
    controls.set(toggle, label);
  }

  drawer?.addEventListener("change", () => {
    if (drawer.checked && keyboardActivation) {
      sidebar?.querySelector("a[href]")?.focus();
    }
  });
  search?.addEventListener("change", () => {
    if (search.checked && keyboardActivation) searchField?.focus();
  });

  document.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;
    const toggle = search?.checked ? search : drawer?.checked ? drawer : null;
    const button = controls.get(toggle);
    if (!button || !button.getClientRects().length) return;
    event.preventDefault();
    event.stopPropagation();
    button.click();
    button.focus();
  }, true);
})();
