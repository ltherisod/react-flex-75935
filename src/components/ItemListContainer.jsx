import { useEffect, useState } from 'react'
import { getProducts, productos } from '../mock/asyncData'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { collection, getDocs, where, query, addDoc } from 'firebase/firestore'
import { db } from '../service/firebase'
const ItemListContainer = ({greeting}) => {
    const [data, setData]= useState([])
    const [loading, setLoading] = useState(false)
    const {categoryId} = useParams()


//Firebase

useEffect(()=> {
    setLoading(true)
    //conectamos con nuestra collection
    const productCollection = categoryId 
    ? query(collection(db, "productos"), where("category","==", categoryId))
    : collection(db, "productos")
    //pedir los documentos
    getDocs(productCollection)
    .then((res)=>{
        //limppiar datos para uso
        // console.log(res.docs)
        const list = res.docs.map((doc)=>{
            return {
                id:doc.id,
                ...doc.data()
            }
        })
        // console.log(list)
        setData(list)
    })
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
},[categoryId])





    //Promesa de productos
// useEffect(()=>{
//     setLoading(true)
//     getProducts()
//     .then((res)=>{
//         if(categoryId){
//             //filtrar
//             setData(res.filter((item)=> item.category === categoryId))
//         }else{
//             setData(res)
//         }
//     })
//     .catch((error)=> console.log(error))
//     .finally(()=> setLoading(false))
// },[categoryId])


//SE HACE UNA SOLA VEZ
// const subirData = () => {
//     console.log('Hiciste click')
//     const collectionToAdd = collection(db, "productos")
//     productos.map((item)=> addDoc(collectionToAdd,item))
// }
    return(
        <main>
            <h1 className='text-success'>{greeting}{categoryId && <span style={{textTransform:'capitalize'}}>{categoryId}</span>}</h1>
           {/* {data.map((item)=> <p key={item.id}>{item.name}</p>)} */}
           {loading ? <LoaderComponent/> : <ItemList data={data}/>}
           {/* <button onClick={subirData}>Firebase UNA SOLA VEZ</button> */}
        </main>
    )
}

export default ItemListContainer