
    const charsConteiner = document.querySelector(".chars-container")

    const API = "https://rickandmortyapi.com/api"
    const defaultFilters = {
        name: " ",
        species: "",
        gender: "",
        status: " ",
        page: 1

    }



async function getCharractes ({ name, species, gender, status, page = 1}) {
    const response = await fetch(`${API}/character?name=${name}&species=${species}&gender=${gender}&stattus${status}&page${page}`)

    const characters = await response.json()
    return characters.results
}

async function render({characters}) {
        characters.forEach((characters) => {
            return charsConteiner.innerHTML += `
            <div class="char">
            <img src="${characters.image}" alt="">
            <div class="char-info">
              <h3>"${characters.name}"</h3>
              <span>${characters.species}</span>
            </div>
          </div> 
            
            `
        });

        
    }
        
    async function main(){
        const characters = await getCharractes(defaultFilters)
        render ({characters})
      
        
    }

    main();