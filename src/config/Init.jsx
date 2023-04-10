import { initializeApp } from 'firebase';

import firebaseConfig from "./Config";

const Initialization = () =>{
    return initializeApp(firebaseConfig)
}
export default Initialization