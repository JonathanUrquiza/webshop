import React, { useState, useEffect } from 'react';

export default function Promesas() {
    /* 
        let productosMock = [
            { id: 100, name: 'zapato nike', price: 100 },
            { id: 101, name: ' cartera nike', price: 150 },
            { id: 102, name: 'zapato adidas', price: 300 },
        ] */



    //API promise
    const [loading, setloading] = useState(true);
    const [Productos, setProductos] = useState([]);
    const [error, seterror] = useState('');



    useEffect(() => {
        let promesaProductos = new Promise((res, rej) => {
            setTimeout(() => {
                res([{ id: 100, name: 'zapato nike', price: 100 },
                { id: 101, name: ' cartera nike', price: 150 },
                { id: 102, name: 'zapato adidas', price: 300 },
                ])
            }, 3000);
        });

        promesaProductos
            .then((res) => {
                //si sale bien se ejecuta esta.
                //recibe una funcion por parametro, (entonces) lo que quiero que ocurra
                //se ejecuta cuando se resuelva la promesa
                //me deja postergar en el tiempo cierta linea de codigo para que se ejecute cuando la promesa se cumple. 
                /* setpago(res); */
                setProductos(res);
          
               
            })
            .catch((err) => {
                //si sale todo mal se ejecuta el catch
                seterror(err);
                setloading(false);
            })
            .finally(() => {
                setloading(false);
            })
    }, []);



    return (
        <div>
            <p>{loading ? 'loading...' : 'fin'}</p>
          
            {Productos.map((item) => (
                <di>
                    <h1>{item.name}</h1>
                    <p>{item.id}</p>
                    <p>{item.price}</p>
                </di>
            ))}

        </div>

    );




}
