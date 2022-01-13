import React, {useState, useRef} from 'react'
//import Counter from './components/Counter'
//import PostItem from './components/PostItem'
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput'
import './styles/App.css'

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'Javascript 2', body: 'Description 2'},
    {id: 3, title: 'Javascript 3', body: 'Description 3'}
  ])

  const [posts2, setPosts2] = useState([
    {id: 1, title: 'Python', body: 'Description'},
    {id: 2, title: 'Python 2', body: 'Description 2'},
    {id: 3, title: 'Python 3', body: 'Description 3'}
  ])

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  //const bodyInputRef = useRef()

  const addNewPost = (e) => {
    e.preventDefault()

    const newPost = {
      id : Date.now(),
      title,
      body
    }

    setPosts([...posts, newPost])
  }

  return (
    <div className="App">

        <form>
          {/* Управляемый компонент */}
          <MyInput 
            value = {title}
            onChange = {e => setTitle(e.target.value)}
            type = "text"
            placeholder = "Название поста"
          />
          
          <MyInput
            value = {body}
            onChange = {e => setBody(e.target.value)}
            type = "text"
            placeholder = "Описание поста"
          />

          <MyButton onClick = {addNewPost}>Создать пост</MyButton>
        </form>

        <PostList posts = {posts} title = "Посты про JS" />
        <PostList posts = {posts2} title = "Посты про Python" />
    </div>
  )
}

export default App;






/*

          <MyInput
            ref = {bodyInputRef.current.value}
            type="text"
            placeholder = "Описание поста"
          />

          <MyInput
            ref = {bodyInputRef}
            type = "text"
            placeholder = "Описание поста"
          />

  function increment() {
    setLikes(likes + 1)
  }

  function decrement() {
    setLikes(likes - 1)
  }


function App() {

  let likes = 0

  function increment() {
    likes += 1
    console.log(likes)
  }

  function decrement() {
    likes -= 1
    console.log(likes)
  }

  const state = useState

  return (
    <div className="App">
      <h1>{likes}</h1>
          <button onClick = {increment}>Increment</button>
          <button onClick = {decrement}>Decrement</button>
    </div>
  )
}





    React.createElement('button', {

      disabled: false,
      onClick: () => {

        console.log('click')
      }
    },
    'Gogogo')
*/