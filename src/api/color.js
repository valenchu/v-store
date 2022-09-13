import axios from "axios";

const apiColor = {
    listColor(){
        return axios.get("https://servicios.neunapp.com/api/tienda/colores/lista/");
    }
}

export default apiColor