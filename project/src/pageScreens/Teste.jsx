import { useHistory } from "react-router-dom";
import axios from 'axios'
import React, { useEffect } from 'react';
import { useForm } from "../../hooks/useForm";


const Teste = () => {

const [filter, setFilter] = useState("");

const TestFilter = () => {
  
  axios
      .get(`${BASE_URL}/restaurants`, {
          headers: {
              auth: window.localStorage.getItem("token")
          }
      })
      .then((response) => {
          window.localStorage.setItem("token", response.data.token);
          console.log(response.data)
        setFilter(response.data)


      })
      .catch((err) => {
          alert("Não foi possivel completar a sua solicitação, tente novamente mais tarde.")
      });
}




  return (
    <div>
      {filter.filter((item)=>{
        return (
          <div>
            <p>{item.includes("Mc")}</p>
          </div>
        )
      })}
    </div>
  )
}