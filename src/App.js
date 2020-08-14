import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';


function App() {

  //Definir la categoria y noticias
  const [categoria, guardarCategoria] = useState('');
  //Guardar consulta de noticias
  const [noticias, guardarNoticias] = useState([]);

  useEffect(()=>{
    const consultarAPI = async () =>{

      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=0a91244851764a0bbbf7661bb4487040`;

      const respuesta = await fetch(url);

      const noticias = await respuesta.json(); //console.log(noticias.articles);

      guardarNoticias(noticias.articles);
      
    }
      consultarAPI();
  },[categoria]);



  return (

      <Fragment>
        <Header 
          titulo="Buscador de noticias"
        />

        <div className="container white">
          <Formulario
            guardarCategoria={guardarCategoria}
          />

          <ListadoNoticias
            noticias={noticias}
          />


        </div>

      </Fragment>
    

  );
}

export default App;
