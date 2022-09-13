import axios from "axios";

const apiCategories = {
    categories(){
        return axios.get('https://servicios.neunapp.com/api/tienda/categorias/lista/');
    }
}

export default apiCategories