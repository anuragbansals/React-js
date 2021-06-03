import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Post from './components/Post'


const App  = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            const results = await axios("http://jsonplaceholder.typicode.com/posts")
            setPosts(results.data)
        }
        fetchData();
        
    }, [])
    return (
        <div className="container">
            {posts.map(el=> {
                return (
                    <Post title={el.title} text={el.body} />
                )
            })}
        </div>

    )
}

ReactDOM.render(<App/>,document.getElementById('root'));
