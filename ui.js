// Arayüz İşlemleri

class UI {
    static addFilmToUI(newFilm) {

        const filmList = document.getElementById("films");
        filmList.innerHTML += 
        `<tr>
            <td><a href="${newFilm.url}">${newFilm.title}</a></td>
            <td>${newFilm.genre}</td>
            <td>${newFilm.watchedIt}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Delete the movie</a></td>
        </tr> 
        `
    }
    
    static clearInputs (element1,element2,element3,element4){
        element1.value = "";
        element2.value = "";
        element3.value = "";
        element4.value = "";
    }
    
    static displayMessages(message,type){
        const cardBody = document.querySelector(".card-body");
        // Alert divini oluşturma
        const div = document.createElement("div");
        div.className = `alert alert-${type}`;
        div.textContent = message;

        cardBody.appendChild(div);

        setTimeout(function(){
            div.remove();
        },3000)
        
    }
    
    static loadAllFilms(films){
     
        const filmList = document.getElementById("films");
    
        films.forEach(function(film){
            filmList.innerHTML += `<tr>
            <td><a href="${film.url}">${film.title}</a></td>
            <td>${film.genre}</td>
            <td>${film.watchedIt}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Delete the movie</a></td>
        </tr>`;
        });
    
    }
    
    static deleteFilmFromUI(element){
        element.parentElement.parentElement.remove();
    }
    
    static clearAllFilmsFromUI(){
        const filmList = document.getElementById("films");
        //filmList.innerHTML = "";
    
        while(filmList.firstElementChild !== null){
            filmList.firstElementChild.remove();
        }
    
    }
}



















