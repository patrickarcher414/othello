
let turn = "white";

const onClick = (event) => {
  if (event.target.nodeName != "BUTTON") {
    return
  }

  if (turn === "white") {
    event.target.classList.remove('black')
    event.target.classList.add('white')
    turn = "black"
  } else {
    event.target.classList.remove('white')
    event.target.classList.add('black')
    turn = "white"
  }

  console.log(event.target.id)
}

window.addEventListener('click', onClick);