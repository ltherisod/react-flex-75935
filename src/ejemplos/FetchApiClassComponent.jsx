import { Component } from "react";

class FetchApiClassComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            characters:[],
            loading:false,
            error:null
        }
    }

    componentDidMount(){
        this.setState({loading:true})
        fetch('https://rickandmortyapi.com/api/character')
        .then((res)=> res.json())
        .then((data)=> this.setState({characters:data.results}))
        .catch((error)=> this.setState({error:true}))
        .finally(()=> this.setState({loading:false}))
    }

    render(){
        const {characters, loading, error} = this.state


        if(error){
            return <h1>Hubo un error</h1>
        }
        return(
            <div>
                {loading 
                ? <p>Cargando</p> 
                :<div>
                   { characters.map((item)=> <p>{item.name}</p>)}
                </div> 
                }
            </div>
        )
    }
}

export default FetchApiClassComponent