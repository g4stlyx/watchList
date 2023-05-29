// Main Project File

const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const genreElement = document.querySelector("#genre");
const watchedItElement = document.querySelector("#watchedIt");
const urlElement = document.querySelector("#url");
const cardBody2 = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

// Tüm eventleri yükleme

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
    });

    cardBody2.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);
}

function addFilm(e){
    const title = titleElement.value;
    const genre = genreElement.value;
    const watchedIt = watchedItElement.value;
    const url = urlElement.value;

    if (title === "" || genre === "" || url === "" || watchedIt === ""){
        // Hata mesajı
        UI.displayMessages("Please fill all of the places!","danger");
    }
    else{
        // Yeni film
        const newFilm = new Film(title,genre,watchedIt,url);
        UI.addFilmToUI(newFilm); // Filmi arayüze ekleme
        Storage.addFilmToStorage(newFilm); // Filmi storage'a ekleme
        UI.displayMessages("The movie has been added successfully.","success");
    }


    UI.clearInputs(titleElement,urlElement,genreElement,watchedItElement);
    e.preventDefault();
}


function deleteFilm(e){
    if (e.target.id === "delete-film"){
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessages("The movie has been deleted successfully.","success");
    }
    
}

function clearAllFilms(e){
    if(confirm("Are you sure?")){
        UI.clearAllFilmsFromUI();
        Storage.clearAllFilmsFromStorage();
        UI.displayMessages("All movies have been cleaned!","success");
    }
}
















