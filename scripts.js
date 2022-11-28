
const onClick = (event) => {
  if (event.target.nodeName === "BUTTON") {
    console.log(event.target.id);
  }
}

window.addEventListener('click', onClick);