const parrrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");
const trashs = document.querySelectorAll(".trash");

parrrafos.forEach(parrafo => {
  parrafo.addEventListener("dragstart", event => {
    parrafo.classList.add("dragging");
    event.dataTransfer.setData("id", parrafo.id);
  });

  parrafo.addEventListener("dragend", () => {
    parrafo.classList.remove("dragging");
  });

});

secciones.forEach(seccion => {
  seccion.addEventListener("dragover", event => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
  });

  seccion.addEventListener("drop", event =>{
    const id_parrafo = event.dataTransfer.getData("id");
    const parrafo = document.getElementById(id_parrafo);
    seccion.appendChild(parrafo);
  });

});

trashs.forEach(trash => {
  trash.addEventListener("dragover", event => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
  });

  trash.addEventListener("drop", event =>{
    const id_parrafo = event.dataTransfer.getData("id");
    const parrafo = document.getElementById(id_parrafo);
    parrafo.remove();
  });

});



