import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import data from "../ItemListContainer/mock-data";


export const ItemDetailContainer = () => {
    const {productId}=useParams()
    const [items, setItems] = useState ([]);

    const getData = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 2000);
    });

    useEffect(() => {
        getData.then((result) => {
            if(productId){
                const newProducts= result.find(item=> item.id === productId);
                setItems (newProducts) 
            }   else{
                setItems(result)
            }

           
        })
    }, [productId]);    
            
        
  return (
  
  <div>
      <ItemDetail ItemDetail={data} />
  </div>
    
    
  )
}

export default ItemDetailContainer
































// export const ItemDetailContainer = () =>{ 
//   const [data,setData] = useState ([]);
//   const {categoryId}= useParams()

//   useEffect(() => {
//     getData.then((result) => {
//         if(categoryId){
//             const newProducts= result.filter(item=> item.id === categoryId);
//             setItems (newProducts) 
//         }   else{
//             setItems(result)
//         }

       
//     })
// }, [categoryId]);  





















    
// //   useEffect(() => {
// //       const getData = new Promise(resolve =>{
// //           setTimeout(() => {
// //               resolve(data)
// //           }, 2000);
// //   })

// //   getData.then(res => setData(res.filter(item => item.categoria === categoryId)))
// //   }, [])

// return (
//     <ItemDetail data={data}/>
// )}





// //   const getData =
// //      new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         resolve(data[0])
// //     }, 2000);
// // });

// // useEffect(() => {
// //     getData.then((result) => {
// //         setItems (result) 
// //     })
// // }, []);    



// export default ItemDetailContainer