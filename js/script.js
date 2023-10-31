const minWidth = 390; // Ancho mínimo
const maxWidth = 767; // Ancho máximo

const mediaQuery = window.matchMedia(
  `(min-width: ${minWidth}px) and (max-width: ${maxWidth}px)`
);

if (mediaQuery.matches) {
  document.addEventListener("DOMContentLoaded", function () {
    //esto no es necesario hacerlo siempre. Es para recargar el codigo hmtl
    const responsiveButton = document.getElementById("responsive-button");
    const responsiveUl = document.querySelector(".nav__responsive-ul");

    responsiveButton.addEventListener("click", function () {
      if (responsiveUl.style.display === "block") {
        responsiveUl.style.display = "none";
      } else {
        responsiveUl.style.display = "block";
      }
    });
  });
}
