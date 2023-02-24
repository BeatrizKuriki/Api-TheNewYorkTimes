


  export const getAllListByCategory = async () =>{
    const allCategory = await fetch(`https://api.nytimes.com/svc/books/v3/lists/names?api-key=0a0wQu74ov8b25TGLp2AC4kMSsLf5Y6x`,{
        method: 'GET',        
    })
    .then(response => response.json())      
   
    
    return allCategory
        
}
