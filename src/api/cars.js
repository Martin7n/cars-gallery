
import { auth } from '../firebase.js';
const baseUrl = 'https://asphalt-gallery-default-rtdb.europe-west1.firebasedatabase.app/';



async function getAll() {
    const url = baseUrl + "car";
    // const idToken = await auth.currentUser.getIdToken();
    // const response = await fetch(`${url}.json?auth=${idToken}`)
    const response = await fetch(`${url}.json`)
    const cars = await response.json();
    return Object.keys(cars).map((id) => ({id, ...cars[id]}))

};


async function addCar(carData, ctx) {

    const idToken = await auth.currentUser.getIdToken();
    const url = baseUrl+"car"
    //test const carData = {
    //     mark: "Porsche",
    //     model: "993",
    //     exclusivity: "10"
    //     };   

    const options = {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                    },
                    body: JSON.stringify(carData)
                    }
    const response = await fetch(`${url}.json?auth=${idToken}`, options);


    const result = await response.json();
    console.log(result)
    
}

async function getOne(id) {
    const queryId = id;
    const url = baseUrl+"car"
    const response = await fetch(`${url}/${id}.json`);
    const result = await response.json()

    return result
    
}



export default {
    getAll,
    addCar,
    getOne,
};
