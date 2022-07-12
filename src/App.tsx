import React from 'react';
import picture from './assets/main-picture.jpg';
import './style.scss';

class App extends React.Component{
    render(){
        return(
            <figure>
                <img src={picture} alt={'Webpack meme'} />
                <figcaption>В самом проекте достаточно предусмотреть одну страницу с текстом и картинкой, содержание не важно.</figcaption>
            </figure>
        );
    }
}
export default App;