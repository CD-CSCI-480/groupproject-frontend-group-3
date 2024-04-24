import axios from "axios";

import { useState, useEffect } from "react";


const URL = "http://localhost:8080/api/v1/diseases";

export function getListfromFromBackend() {
    const [disease,setDisease] = useState([]);
    useEffect(()=>{
        const fetchItems =async () => {
            try {
                const response = await axios.get(URL)
                setDisease(response.data);
            } catch (error) {
                console.error("Error getting data",error);
            }
    };
    fetchItems();
},[]);
return disease;
}

// const diseases = [
//     {   id: 0,
//         name: "Swine Flu",
//         picture: "pictures/swine.png",
//         text: "Lorem ipsum",
//     },
//     {   id: 1,
//         name: "COVID-19",
//         picture: "pictures/corona.png",
//         text: "Lorem ipsum",
//     },
//     {   id: 2,
//         name: "Asthma",
//         picture: "pictures/asthma.png",
//         text: "Lorem ipsum",
//     },
// ];
