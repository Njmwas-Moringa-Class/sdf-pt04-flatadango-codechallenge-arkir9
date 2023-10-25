// Your code here
const apiUrl = "http://localhost:3000/films";
function getAllFilms() {
  fetch(`${apiUrl}`)
    .then((response) => response.json())
    .then((films) => {
      document.getElementById("films").innerHTML = films
        .map(
          (films) => `<li onClick='getAfilm(${films.id})'>${films.title}</li>`
        )
        .join("");
    });
}
function getAfilm(filmId) {
  fetch(`${apiUrl}/${filmId}`)
    .then((response) => response.json())
    .then((film) => {
      console.log(film);
      document.getElementById("title").innerHTML = film.title;
      document.getElementById("runtime").innerHTML = film.runtime;
      document.getElementById("showtime").innerHTML = film.showtime;
      document.getElementById("ticket-num").innerHTML =
        film.capacity - film.tickets_sold;
      document.getElementById("film-info").innerHTML = film.description;
      document.getElementById("poster").src = film.poster;
      btn.addEventListener("click", () => {
        let value = parseInt(document.getElementById("ticket-num").innerHTML  -= 1 )
        
        document.getElementById("ticket-num").innerHTML = value;
      });
    });
}
const btn = document.getElementById("buy-ticket");
function buyTicket() {
  btn.addEventListener("click", () => {
    let value = parseInt(document.getElementById("ticket-num").innerHTML);
    value -= 1;
    document.getElementById("ticken-num").innerHTML = value;
  });
}
document.addEventListener("DOMContentLoaded", () => {
  getAllFilms();
  getAfilm(1);
  buyTicket();
});
