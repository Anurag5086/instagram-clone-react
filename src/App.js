import React,{useState, useEffect} from 'react';
import Post from './Components/Post'
import './App.css';
import {db} from './firebase'

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => doc.data()));
    })
  }, [] );

  return (
    <div className="App">

      {/* Header */}

      <div className="app__header">
        <img className="app__headerImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1024px-Instagram_logo.svg.png" alt="" />
      </div>

      {/* Posts */}

        <Post 
          username="aanurag_23"
          imgURL="https://images.pexels.com/photos/1040499/pexels-photo-1040499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          caption="Today is a great daayy!!"
        />
        <Post 
          username="anuragguptaofficial"
          imgURL="https://us.123rf.com/450wm/sergio34/sergio341511/sergio34151100750/48404560-abstract-splashes-of-water-on-a-black-background-abstract-spray-of-water-abstract-rain-shower-water-.jpg?ver=6"
          caption="Im build insta clone"
        />
        <Post 
          username="sadhhhana"
          imgURL="https://images.pexels.com/photos/396547/pexels-photo-396547.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          caption="Wooww amazing to se you here!!!"
        />
        

    </div>
  );
}

export default App;
