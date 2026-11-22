(() => {
  const drawer = document.getElementById("__drawer");
  const search = document.getElementById("__search");
  const sidebar = document.querySelector(".md-sidebar--primary");
  const searchField = document.querySelector(".md-search__input");
  const controls = new Map();
  let keyboardActivation = false;
  if (sidebar) sidebar.id = "field-navigation";

  for (const label of document.querySelectorAll("header label[for], .md-nav label.md-nav__link[for]")) {
    const toggle = document.getElementById(label.htmlFor);
    if (!(toggle instanceof HTMLInputElement) || toggle.type !== "checkbox") continue;
    label.tabIndex = 0;
    label.setAttribute("role", "button");
    if (toggle === drawer) {
      label.setAttribute("aria-label", "Open navigation");
      if (sidebar) label.setAttribute("aria-controls", sidebar.id);
    }
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
    if (event.key === "Tab" && drawer?.checked && !search?.checked && sidebar) {
      const candidates = [...sidebar.querySelectorAll('a[href], [tabindex="0"]')]
        .filter(element => element.getClientRects().length && getComputedStyle(element).visibility === "visible");
      const first = candidates[0];
      const last = candidates.at(-1);
      const active = document.activeElement;
      const boundary = event.shiftKey ? first : last;
      if (first && (!sidebar.contains(active) || active === boundary)) {
        event.preventDefault();
        (event.shiftKey ? last : first).focus();
      }
    }
    if (event.key !== "Escape") return;
    const toggle = search?.checked ? search : drawer?.checked ? drawer : null;
    const button = controls.get(toggle);
    if (!button || !button.getClientRects().length) return;
    event.preventDefault();
    event.stopPropagation();
    button.click();
    button.focus();
  }, true);

  // Wide reference tables scroll independently of the article.
  const markScrollableTables = () => {
    for (const wrapper of document.querySelectorAll(".md-typeset__scrollwrap")) {
      const scrolls = wrapper.scrollWidth > wrapper.clientWidth + 1;
      if (scrolls) {
        wrapper.tabIndex = 0;
        wrapper.setAttribute("role", "region");
        wrapper.setAttribute("aria-label", "Scrollable reference table");
      } else {
        wrapper.removeAttribute("tabindex");
        wrapper.removeAttribute("role");
        wrapper.removeAttribute("aria-label");
      }
    }
  };
  window.addEventListener("load", markScrollableTables, {once: true});
  window.addEventListener("resize", markScrollableTables);
})();
