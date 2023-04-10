import { initializeApp } from 'firebase/app';
import firebaseConfig from './Config';


const Initialization = () =>{
    return initializeApp(firebaseConfig)
}
export default Initialization