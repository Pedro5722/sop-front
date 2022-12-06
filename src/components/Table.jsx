import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import { DeleteButton } from "./DeleteButton";
import { EditButton } from "./EditButton";

import './Table.css';

export function Table(props){
  const [rows, setRows] = useState([])
  
  useEffect(() => {
    axios.get(`http://localhost:8084/financeiro-api/${props.modelo}`)
    .then((response) => {
      setRows(response.data)
    })
  }, [])

  if(props.modelo == "despesa"){
    const renderTable = () =>{
      return rows?.map((val) =>(
        <tr key={val.id}>
         <td>{val.id}</td>
         <td>{val.numeroProtocolo}</td>
         <td>{val.dataProtocolo}</td>
         <td>{val.dataVencimento}</td>
         <td>{val.credor}</td>
         <td>{val.descricao}</td>
         <td>{val.valor}</td>
         <td>
          <EditButton id={val.id}/> 
          <DeleteButton/>        
         </td>
        </tr>
      ))
    }


    return(
      <div class="mx-5">
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Numero do Protocolo</th>
              <th scope="col">Data Protocolo</th>
              <th scope="col">Data Vencimento</th>
              <th scope="col">Credor</th>
              <th scope="col">Descricao</th>
              <th scope="col">Valor</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {renderTable()}
          </tbody>
        </table>
      </div>
    )
  }
}