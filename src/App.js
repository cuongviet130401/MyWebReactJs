/* eslint-disable jsx-a11y/iframe-has-title */
import './App.css';
import avt from '../src/assets/images/IMG_1096.JPG';
import PostForm from './API/PostForm'
import PostList from './API/PostList'
function App() {
  return (
    <div className="App">
    <header className="App-header">
    <img src={avt} alt="avt"width="400px"height="400px"/>
    <p>
    Nguyen Cuong Viet
    </p>
    {/*https://www.youtube.com/watch?v=cQhx1Cp811w*/}
    <h1> Hutao Theme </h1>  
    <iframe width="400" height="400" src="https://www.youtube.com/embed/cQhx1Cp811w">
    </iframe>
    </header>
    <PostForm></PostForm>
    </div>
  );
}

export default App;