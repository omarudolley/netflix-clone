
import React, {useState, useEffect,useContext} from 'react'
import FirebaseContext from '../context/firebase'


export default function useContent(target){

    const [content,setContent] = useState([])
    const {firebase} = useContext(FirebaseContext)

    useEffect(async ()=>{
        try{
            const result = await firebase.firestore().collection(target).get()
            const container = await result.docs.map(item =>({...item.data(),docId:item.id}))
            setContent(container)
        }catch(error){
        }
    },[])
    
    return {[target]:content}
}