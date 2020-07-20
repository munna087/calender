import React, {useState,useEffect} from 'react'
import Axios from 'axios'

function Ajax() {

    const [posts, setPosts] = useState([])
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(()=>{
        Axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
            console.log(res)
            setIsLoaded(true);
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
            setIsLoaded(true);
            setError(error);
        })
    },[])

    if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <div>
            <ol>
                {
                    posts.map(post => <li key={post.id}>
                        <b>UserId:</b> {post.userId}<br></br>
                        <b>Id:</b> {post.id}<br></br>
                        <b>Title:</b> {post.title}<br></br>
                        <b>Body:</b> {post.body}<br></br>
                        <br></br>
                        </li>)
                }
            </ol>
            
        </div>
        );
      }

}

export default Ajax
