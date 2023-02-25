


  export const getAllListByCategory = async () =>{
    const allCategory = await fetch(`https://api.nytimes.com/svc/books/v3/lists/names?api-key=0a0wQu74ov8b25TGLp2AC4kMSsLf5Y6x`,{
        method: 'GET',        
    })
    .then(response => response.json())      
   
    
    return allCategory
        
}

export const getCurrentListByCategory = async(bookList) =>{
    const category = await fetch (`https://api.nytimes.com/svc/books/v3/lists/current/${bookList}.json?api-key=0a0wQu74ov8b25TGLp2AC4kMSsLf5Y6x`,{
        method: 'GET',
    })
    .then(response=>{
        console.log(response)
        if(response.ok){
            response.json().then(responseJson=>{
                localStorage.setItem('bookList', JSON.stringify(responseJson))
            })
            window.location.replace('./src/pages/dashboard.html')
            return response.json()
        }else{
            window.location.replace('./src/pages/error.html')
        }
    })
    return category
}