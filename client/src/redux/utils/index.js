// // (action.payload, [...state.allVideoGamesCopy], state.selectOrder, state.selectGenre
// export const originVideoGames = (filterBy, array, order, genre) => {
//     const filteredArray = array.filter(game => game.origin === filterBy);
//     const sortedArray = orderVideoGames(order, filteredArray, filterBy);
//     return genre !== "sin filtro" ? orderVideoGamesByGenre(genre, sortedArray, order, filterBy) : sortedArray;
// };

// export const orderVideoGames = (order, array, origin) => {
//     // Luego, ordena el array filtrado por nombre
//     const sortedArray = array.sort((a, b) => {
//         if (order === "a-z") {
//             return a.name.localeCompare(b.name);
//         } else if (order === "z-a") {
//             return b.name.localeCompare(a.name);
//         }
//         return 0;
//     });

//     return sortedArray;
// };

// export const orderVideoGamesByGenre = (genre, array, order, origin) => {
//     // Si el género es "sin filtro" y el origen es "ambos", devuelve el array original sin filtrar.
//     if (genre === "sin filtro" && origin === "ambos") {
//         return array;
//     }

//     // Filtra el array por género, ahora considerando que genre es un array de objetos con atributos name e id
//     let filteredArray = array.filter(game => game.genre && game.genre.some(g => g.name === genre));

//     // Ordena el array filtrado por nombre
//     return orderVideoGames(order, filteredArray, origin);
// };
// export const originVideoGames = (filterBy, array, order, genre) => {
    
   
//     switch(filterBy){
//         case "api":
//         {
//             let newArray = []
//             if(order === "a-z"){
//                 newArray = orderVideoGames("a-z", array, "ambos")
                    
//                 return newArray.filter( game => game.origin === "api")
//             }
//             if(order === "z-a"){
//                 newArray = orderVideoGames("z-a", array, "ambos")
                  
//                 return newArray.filter( game => game.origin === "api")
//             }
              
//             return array.filter( game => game.origin === "api")
//         }
//         case "db": 
//         {
//             let newArray = []
//             if(order === "a-z"){
//                 newArray = orderVideoGames("a-z", array, "ambos")
                  
//                 return newArray.filter( game => game.origin === "DB")
//             }
//             if(order === "z-a"){
//                 newArray = orderVideoGames("z-a", array, "ambos")
                   
//                 return newArray.filter( game => game.origin === "DB")
//             }
                
//             return array.filter( game => game.origin === "DB")  
//         }     
//         default:
//             {
//                 let newArray = []
//                 if(order === "a-z"){
//                     newArray = orderVideoGames("a-z", array, "ambos")
                      
//                     return newArray 
//                 }
//                 if(order === "z-a"){
//                     newArray = orderVideoGames("z-a", array, "ambos")
                       
//                     return newArray 
//                 }
                  
//                 return array 
//             }
            
//     }
// }

// export const orderVideoGames = (filterBy, array, origin, genre) => {
    
//     switch(filterBy){
//         case "a-z": 
//             {
//                 let newArray = []
//                 if(origin === "api"){
//                     newArray = originVideoGames(origin, array, "sin filtro" )
                       
//                     return newArray.sort((a,b) =>  a.name.localeCompare(b.name))
//                 }
//                 if(origin === "db"){
//                     newArray = originVideoGames(origin, array, "sin filtro" )
                       
//                     return newArray.sort((a,b) =>  a.name.localeCompare(b.name))
//                 }
                
//                 return array.sort((a,b) =>  a.name.localeCompare(b.name))
//             }
//         case "z-a":
//             {
//                 let newArray = []
//                 if(origin === "api"){
//                     newArray = originVideoGames(origin, array, "sin filtro" )
                     
//                     return newArray.sort( (a,b) =>  b.name.localeCompare(a.name))
//                 }
//                 if(origin === "db"){
//                     newArray = originVideoGames(origin, array, "sin filtro" )
                      
//                     return newArray.sort( (a,b) =>  b.name.localeCompare(a.name))
//                 }
                  
//                 return array.sort( (a,b) =>  b.name.localeCompare(a.name))
//             }
//         default:
//             {
//                 let newArray = []
//                 if(origin === "api"){
//                     newArray = originVideoGames(origin, array, "sin filtro" )
                      
//                     return newArray 
//                 }
//                 if(origin === "db"){
//                     newArray = originVideoGames(origin, array, "sin filtro" )
                       
//                     return newArray 
//                 }
                   
//                 return array 
//             }
//         }
// }

// export const orderVideoGamesByGenre = (filterBy, array, order, origin) => {
//     switch(filterBy){
//         case "sin filtro":{
//             return array
//         }
//         case filterBy:{
//             const newArray = [] 
//             array.forEach( game => {
//                 if(game.genre?.some(genre => genre === filterBy)) 
//                 newArray.push(game)
//             })
           
//             return newArray
//         }
//         default:
//             return array
//     }
// }