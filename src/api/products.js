import axios from "axios";

const apiProducts = {
  topProducts() {
    return axios.get(
      "https://servicios.neunapp.com/api/tienda/productos/lista/"
    );
  },
  filterCategorie(filterCategorie) {
    return axios.get(
      "https://servicios.neunapp.com/api/tienda/productos/lista/?" +
        filterCategorie
    );
  },
  getProductsById(id) {
    return axios.get(
      "https://servicios.neunapp.com/api/tienda/producto/" +
      id
    );
  },
};

export default apiProducts;
