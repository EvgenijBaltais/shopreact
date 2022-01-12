import React, {useState} from 'react'
//import Counter from './components/Counter'
import PostItem from './components/PostItem'
import './styles/App.css'

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'Javascript 2', body: 'Description 2'},
    {id: 3, title: 'Javascript 3', body: 'Description 3'}
  ])

  return (
    <div className="App">

      {
        posts.map(post =>
          <PostItem post = {post} key = {post.id} />
        )
      }

    </div>
  )
}

export default App;






/*


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