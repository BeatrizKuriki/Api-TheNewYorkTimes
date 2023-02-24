import { getAllListByCategory } from "./request.js";

export const render = async(first, array = []) =>{
    const list = document.querySelector('.list')
    list.innerHTML = ''

    if(first){
        const results = await getAllListByCategory()

       

        results.results.forEach(element =>{
            const card = createCard(element)
            list.appendChild(card)
        })
    }else{
        array.forEach(element =>{
            const card = createCard(element)
            list.appendChild(card)
        })
    }
    
}



const createCard = (category) =>{
    const cardContainer = document.createElement('li');
    const cardTitle = document.createElement('h2');
    const cardDescription = document.createElement('p');
    const cardButton = document.createElement('button');

    
    cardButton.innerText = 'Know More'

    cardTitle.innerText =`List Name: ${category.display_name}` 
    cardDescription.innerText =`Updated: ${category.updated} Newest published date: ${category.newest_published_date}` 

    cardContainer.append(cardTitle, cardDescription, cardButton)

    return cardContainer
}

const createOption = (option)=>{
    const newOption = document.querySelector('option')

    newOption.value = option
    newOption.innerText = option

}

export const renderSelect = (array) =>{
    const select = document.querySelector('select')

    array.forEach(option =>{
        const createdOption = createOption(option)

        select.appendChild(createdOption)
    })
}

