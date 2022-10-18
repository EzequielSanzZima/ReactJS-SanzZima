// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, doc, query, where, addDoc } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRrUFEk5ifF5HXfD3J5S-VOv9TYCmQWTA",
  authDomain: "proyecto-react-f67bb.firebaseapp.com",
  projectId: "proyecto-react-f67bb",
  storageBucket: "proyecto-react-f67bb.appspot.com",
  messagingSenderId: "561527558717",
  appId: "1:561527558717:web:f3148ce4fd8a1ddc069054"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//Obtiene todos los objetos para ser vistos en ItemList
export async function getItems(){
  const myCollection = collection(db, 'products');
  let snapshotDB = await getDocs(myCollection);

  let dataDocs = snapshotDB.docs.map((document)=>{
    let docFormat = {...document.data(), id: document.id};
    return docFormat
  })
  return dataDocs
}

//Obtiene los objetos por categoria
export async function getItemsByCategory(categoryParams){
  const myCollection = collection(db, 'products');
  const queryCategory = query(myCollection, where('category',"==", categoryParams));

  const snapshotDB = await getDocs(queryCategory);

  let dataDocs = snapshotDB.docs.map((document)=>{
    let docFormat = {...document.data(), id: document.id};
    return docFormat
  })
  return dataDocs

}

//Obtiene un unico objeto para ser mostrado en ItemDetail
//Y la id de Compra en CheckoutContainer
export async function getElementByID(id, type){
    const colRef = collection(db, type);
    const result = await getDoc(doc(colRef, id));
    return result.data();
}


export async function createOrder(orderData){
  const myCollection = collection(db, 'orders');
  let response = await addDoc(myCollection, orderData)
  return response.id
}
export default db