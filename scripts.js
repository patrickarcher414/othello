const tileElement = document.getElementById(".tile");
tileElement.addEventListener("click", handleClick);

function handleClick() {
  tileElement.classList.add("white");
}
