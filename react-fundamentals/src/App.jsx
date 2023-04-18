import './styles/App.css'
import {PostItem} from "./components/PostItem.jsx";
import {useState} from "react";
import {PostList} from "./components/PostList.jsx";
import {MyButton} from "./components/UI/button/MyButton.jsx";
import MyInput from "./components/UI/input/MyInput.jsx";

function App() {

    const [posts,setPosts] = useState([
        {id:1,title:'JavaScript',body:'description'},
        {id:2,title:'JavaScript 2',body:'description'},
        {id:3,title:'JavaScript 3',body:'description'}
    ])

    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')

    
    const addNewPost = (event)=> {
        const newPost = {
            title,
            body
        }
    }

  return (
    <div className="container">
        <form>
            <MyInput value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Post title'/>
            <MyInput value={body} onChange={(e) => setBody(e.target.value)} type="text" placeholder='Post description'/>
            <MyButton onClick={addNewPost} disabled>Add post</MyButton>

        </form>
        <PostList posts={posts} title="Posts about JS" />
    </div>
  )
}

export default App
