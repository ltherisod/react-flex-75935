import { useEffect, useState } from "react"

const WithDataFetch = (WrappedComponent, url)=>{
    return function FetchComponent(props){
        const [data, setData] = useState([])
        const [loading, setLoading] = useState(false)
        const [error, setError] = useState(null)

        useEffect(()=>{
            setLoading(true)
            fetch(url)
            .then((res)=> res.json())
            .then((info)=> setData(info.results))
            .catch((error)=> setError(error))
            .finally(()=> setLoading(false))
        },[url])


        
        return(
            <WrappedComponent
            {...props}
            data={data}
            loading={loading}
            error={error}
            />
        )
    }

}
export default WithDataFetch