import React, { useState, useEffect, Fragment } from 'react';
import {useParams} from 'react-router-dom';
import ItemList from '../ItemList';
import { getFirestore} from '../../firebase';

const ItemListContainer = () => {
    const {catId}= useParams();
    const [productos, setProductos]= useState([]);

    useEffect(() => {
        
            const db= getFirestore();
            let itemCollection= db.collection("items");
            if(catId){
                itemCollection= itemCollection.where ('catid', '==', Number(catId));
            }
                itemCollection.get()
                .then((querySnapshot) => {
                    if (querySnapshot.size === 0){
                    console.log('Sin resultados');
                    } 
                    setProductos (querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
                })
                .catch((error) =>{console.log("Error buscando items", error);}) 
    },[catId]);
    
    return (
        <Fragment>
            <div className="section"></div>
            <ItemList productos={productos} />
        </Fragment>
    );
}
 
export default ItemListContainer;