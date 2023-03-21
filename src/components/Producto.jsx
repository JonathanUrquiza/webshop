import React, { useState, useEffect } from "react"


export default function Producto({ item }) {
  console.log('imprimi en la pantalla el prodiucto ');
  /*   let contador = 0; */
  const [contador, setContador] = useState(0);
  const [contador2, setContador2] = useState(0);

  //array vacio es el montaje
  useEffect(()=>{
    //aca van las lineas necesarias para monte el componente
    console.log('se monto el componente');
  },[])
  

  //se ejecuta en cada render mientras aya un cambio
  useEffect(()=>{
    console.log("se ejecuta siempre que hay un rander!");
  }, undefined)

  //render condicional, depende de quien realizo el render
useEffect(()=>{
  console.log("cuando cambia contado 1");
},[contador])
useEffect(()=>{
  console.log("cuando cambia contado 2");
},[contador2])


  return (

    <div class="">
      <div className="card">
        <h1>{item.nombre}</h1>
        <div className="card-title">
          <p>{item.id}</p>
          <p>{contador}</p>
        </div>
        <div className="card-content">
          <span className="card-title">{item.simbolo}</span>
          <div>

          </div>
        </div>
        <div className="card-data">
          <p>electronegatividad</p>
          <p>{item.electroNegatividad}</p>
        </div>
        <div>
          <form />
          <button className="btnAdd" id="{producto.simbolo}"  onClick={() => {
            setContador(contador + 1);
            console.log(contador2);
          }}>Agregar al carrito</button>
          <button onClick={() => {
            setContador(contador + 1);
            console.log(contador);
          }}>Carrito</button>

        </div>
      </div>
    </div >


  )
}
