// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, doc, query, where } from "firebase/firestore";


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

export async function getItems(){
  const myCollection = collection(db, 'ropa');
  let snapshotDB = await getDocs(myCollection);

  let dataDocs = snapshotDB.docs.map((document)=>{
    let docFormat = {...document.data(), id: document.id};
    return docFormat
  })
  return dataDocs
}

export async function getItemsByCategory(categoryParams){
  const myCollection = collection(db, 'ropa');
  const queryCategory = query(myCollection, where('category',"==", categoryParams));

  const snapshotDB = await getDocs(queryCategory);

  let dataDocs = snapshotDB.docs.map((document)=>{
    let docFormat = {...document.data(), id: document.id};
    return docFormat
  })
  return dataDocs

}

export async function getSingleItem(idParams){
  try{
    const docRef = doc(db, 'ropa', idParams);
    let docSnapshot = await getDoc(docRef);
    return { ...docSnapshot.data(), id: docSnapshot.id };
  }catch(error){
    console.error(error)
  } 
}