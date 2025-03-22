import { useEffect, useState } from 'react'
import { getProducts } from '../mock/asyncData'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
const ItemListContainer = ({greeting}) => {
    const [data, setData]= useState([])
    const [loading, setLoading] = useState(false)
    const {categoryId} = useParams()
//Promesa de productos
console.log(categoryId)
useEffect(()=>{
    setLoading(true)
    getProducts()
    .then((res)=>{
        if(categoryId){
            //filtrar
            setData(res.filter((item)=> item.category === categoryId))
        }else{
            setData(res)
        }
    })
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
},[categoryId])

    return(
        <main>
            <h1 className='text-success'>{greeting}{categoryId && <span style={{textTransform:'capitalize'}}>{categoryId}</span>}</h1>
           {/* {data.map((item)=> <p key={item.id}>{item.name}</p>)} */}
           {loading ? <LoaderComponent/> : <ItemList data={data}/>}
        </main>
    )
}

export default ItemListContainer