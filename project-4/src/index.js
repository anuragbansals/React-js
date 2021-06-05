import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios'

const App = () => {
    const [images,setImages] = useState([])
    const [search,setSearch] = useState("")
    useEffect(()=> {
        const fetchImages = async () => {
            const results = await axios("https://api.pexels.com/v1/search",{
                params: {
                    query: search
                },
                headers: {
                    Authorization: "563492ad6f9170000100000110addb88103d4394a5313d2d5fd776ee"
                }
            })
            console.log(results);
            setImages(results.data.photos);
        }
        fetchImages();
    },[search])

    const renderImages = () => {
        return images.map(el=>{
            return (
                <div>
                    <div className="card m-3">
                        <img src={el.src.medium}></img>
                        <div className="card-body">
                            <p className="card-text">
                                Photographer - {el.photographer}
                            </p>
                        </div>
                    </div>
                </div>
            )
        })
    }

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    }
    return (
        <div className="container">
            <form className="form-group my-3 form-inline">
                <input onChange={handleSearchChange} type="text" className="form-control" placeholder="Search" />
                <button className="btn btn-primary">Search</button>
            </form>
            <div className="row justify-content-center">
                {renderImages()}
            </div>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'));