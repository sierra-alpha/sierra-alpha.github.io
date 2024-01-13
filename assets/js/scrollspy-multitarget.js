// Make this function do whatever logic you need it to do, I'm lucky that I just
// want to copy the exact same classes from #navbar's children to
// #navbar-small's children.
//
const duplicateScrollSpyNavActive = function () {
  let navbarSmallLinks = document
    .getElementById("navbar-small")
    .getElementsByClassName("nav-link");

  for (let link of navbarSmallLinks) {
    link.setAttribute(
      "class",
      document
        .getElementById(link.getAttribute("id").replace("small-", ""))
        .getAttribute("class"),
    );
  }
};

// This is the mostly generic part, just make duplicateScrollSpyNavActive above
// do whatever you want for your use-case.
window.addEventListener("load", function (event) {
  //
  // Make target be the element id that is the same as `data-bs-target` in your
  // HTML
  //
  const targetNode = document.getElementById("navbar");

  // We only really care about the active class being added or removed so we
  // can just filter for "class" but we need subtree to be true so we can
  // detect changes on the children (the actual links that get highlighted).
  //
  const options = { subtree: true, attributeFilter: ["class"] };
  const observer = new MutationObserver(duplicateScrollSpyNavActive);

  observer.observe(targetNode, options);
});
