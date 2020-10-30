import axios from "axios"
import { BASE_URL } from "../constants/urls"

const getData = (endpoint, setData) => {
  const token = localStorage.getItem('token')
  if (token) {
    axios.get(`${BASE_URL}${endpoint}`, {
      headers: {
        auth : token
      }
    })
      .then(response => setData(response.data))
      .catch(err => console.log(err.message))
  }
}

export default getData