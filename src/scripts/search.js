import { getCurrentListByCategory} from "./request.js"

export const searchCategoryList = () => {
  const input = document.querySelector('#select')
  
  const button = document.querySelector('.search__button')

  button.addEventListener('click', async () => {
    const categoriesList =  getCurrentListByCategory(input.value)
    console.log(input.value)
    console.log(categoriesList)
  })
}