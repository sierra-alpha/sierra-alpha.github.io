const isScrollable = (container) => {
  return container.scrollHeight - container.clientHeight > 1;
};

const isScrolledToTop = (container) => {
  return container.scrollTop === 0;
};

const isScrolledToBottom = (container) => {
  return (
    container.scrollTop === container.scrollHeight - container.offsetHeight
  );
};

const showButtons = (container) => {
  if (!isScrollable(container)) {
    for (const icon of container.getElementsByTagName("i")) {
      icon.classList.add("invisible");
    }

    return; // Early return if we're not scrollable
  }

  if (!isScrolledToTop(container)) {
    for (const icon of container.getElementsByClassName("up hollow")) {
      icon.classList.remove("invisible");
    }
  } else {
    for (const icon of container.getElementsByClassName("up")) {
      icon.classList.add("invisible");
    }
  }

  if (!isScrolledToBottom(container)) {
    for (const icon of container.getElementsByClassName("down hollow")) {
      icon.classList.remove("invisible");
    }
  } else {
    for (const icon of container.getElementsByClassName("down")) {
      icon.classList.add("invisible");
    }
  }
};

let intervalId;

const buttonDown = (button) => {
  button.nextElementSibling.classList.remove("invisible");
  button.classList.add("invisible");
  intervalId = setInterval(() => {
    button.parentNode.scrollBy(0, button.classList.contains("down") ? 2 : -2);
  });
};

const buttonUp = (button) => {
  clearInterval(intervalId);
  button.classList.remove("invisible");
  button.nextElementSibling.classList.add("invisible");
};

for (const divScroll of document.getElementsByClassName("page-content")) {
  let up = divScroll.getElementsByClassName("up hollow")[0];
  up.onmousedown = (event) => {
    buttonDown(up);
  };
  up.nextElementSibling.onmouseup = (event) => {
    buttonUp(up);
    showButtons(divScroll);
  };

  let down = divScroll.getElementsByClassName("down hollow")[0];
  down.onmousedown = (event) => {
    buttonDown(down);
  };
  down.nextElementSibling.onmouseup = (event) => {
    buttonUp(down);
    showButtons(divScroll);
  };

  showButtons(divScroll);

  const buttonFunction = (event) => {
    showButtons(divScroll);
  };

  document.addEventListener("resize", buttonFunction);
  document.addEventListener("scroll", buttonFunction);
  document.addEventListener("load", buttonFunction);
}
