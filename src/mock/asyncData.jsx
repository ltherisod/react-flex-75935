export const productos = [
    {
      
        name:'Random 2',
        price:2000,
        description: 'lorem lorem lorem',
        stock:50,
        category:'ofertas',
        img:'https://picsum.photos/200'
    },
    {
       
        name:'Random 3',
        price:2500,
        description: 'lorem lorem lorem',
        stock:20,
        category:'mas vendidos',
        img:'https://picsum.photos/206'
    },
    {
       
        name:'Random 4',
        price:2000,
        description: 'lorem lorem lorem',
        stock:30,
        category:'ofertas',
        img:'https://picsum.photos/204'
    }
]

//creo y exporto mi promesa

export const getProducts = () =>{
    return new Promise((resolve, reject)=>{
        let error = false
        setTimeout(()=>{
            if(error){
                reject('No hay data')
            }else{
                resolve(productos)
            }
        },3000)
    })
}

//buscar un producto

export const getOneProduct = (id) => {
    return new Promise((resolve)=>{
        setTimeout(()=> {
            let product = productos.find(prod => prod.id === id)
            resolve(product)
        },2000)
    })
}