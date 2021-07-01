import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail';
import {useParams} from 'react-router-dom';
import {getFirestore} from '../../firebase';

const getItems=(id) =>{
  const db = getFirestore();
  const itemCollection = db.collection('items');
  const oneItem = itemCollection.doc(id) 
  return oneItem.get();
 }
 
const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const {itemId}= useParams();

  useEffect(() => {
    getItems(itemId)
      .then((doc) => {
        if(doc.exists){
          setItem({id: doc.id, ...doc.data()})
        }
      })
      return;
  }, [itemId]);

  return(
    <ItemDetail item={item} />
  );
}
 
export default ItemDetailContainer;