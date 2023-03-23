import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';

export default function ItemListContainer() {

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
            }, 2000);
        });



        promesaProductos
            .then((res) => {
                setProductos(res);
                console.log(res);
            })
            .catch((err) => {
                //si sale todo mal se ejecuta el catch
                seterror(err);
                setloading(false);
            })
            .finally(() => {
                setloading(false);
            })
    }, [])

    return (
        <>
        <ItemList promesaProductos={Productos}/>
        </>
    )
}




