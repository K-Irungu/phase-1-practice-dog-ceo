console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function fetchInfo() {
    fetch(imgUrl)
    .then(response => response.json())
    .then(function(data) {
            const picsArray = data.message;
            // console.log(picsArray);
            for(pic of picsArray) {
                const newPic = document.createElement('img');
                newPic.src = pic;

                const picsContainer = document.querySelector('#dog-image-container');
                picsContainer.append(newPic)

            }
        })
    
}

//Challenge 2
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
function fetchInfo2() {
    fetch(breedUrl)
    .then(response => response.json())
    .then(appendDogBreeds)
    
    }

function appendDogBreeds(dogBreedsObject) {
    const allBreeds = dogBreedsObject.message;
    for(const key in allBreeds) {
     const breed = document.createElement('li');
     breed.addEventListener('click', function() {//Challenge 3
         breed.style.color = "red";
     })
     breed.append(`${key}: ${allBreeds[key]}`)
     document.querySelector('ul').append(breed);
    }      
    }


document.addEventListener('DOMContentLoaded', fetchInfo2)


document.addEventListener('DOMContentLoaded', fetchInfo);


  
    

   
