import axios            from "axios";


export const getDetails = async(id,det) => {

    try {
        const URL = `http://localhost:8081/products/${id}`;
        const response = await axios.get(URL )

        return response.data
    }
    catch(error){
        console.log(error)
    }

}


