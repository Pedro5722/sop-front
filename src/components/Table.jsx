import axios from "axios";
import { useEffect, useState } from "react";
import { DeleteButton } from "./DeleteButton";

import "./Table.css";
import { ConvertDate } from "./util/ConvertDate";

export function Table(props) {
  const baseURL = "http://localhost:8084/financeiro-api/";
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios.get(baseURL + props.modelo).then((response) => {
      setRows(response.data);
    });
  }, []);

  if (props.modelo == "despesa") {
    function renderTable() {
      return rows?.map((val) => (
        <tr key={val.id}>
          <td>{val.id}</td>
          <td>{val.numeroProtocolo}</td>
          <td>{ConvertDate(val.dataProtocolo)}</td>
          <td>{ConvertDate(val.dataVencimento)}</td>
          <td>{val.credor}</td>
          <td>{val.descricao}</td>
          <td>{val.valor}</td>
          <td>
            <DeleteButton id={val.id} modelo={props.modelo} />
          </td>
        </tr>
      ));
    }

    return (
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
          <tbody>{renderTable()}</tbody>
        </table>
      </div>
    );
  }

  if (props.modelo == "pagamento") {
    function renderTable() {
      return rows?.map((val) => (
        <tr key={val.id}>
          <td>{val.id}</td>
          <td>{val.numero}</td>
          <td>{val.ano}</td>
          <td>{ConvertDate(val.data)}</td>
          <td>{val.valor}</td>
          <td>{val.observacao}</td>
          <td>
            <DeleteButton id={val.id} modelo={props.modelo} />
          </td>
        </tr>
      ));
    }

    return (
      <div class="mx-5">
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Numero do pagamento</th>
              <th scope="col">Ano do pagamento</th>
              <th scope="col">Data de pagamento</th>
              <th scope="col">Valor</th>
              <th scope="col">Observação</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>{renderTable()}</tbody>
        </table>
      </div>
    );
  }
  
    function renderTable() {
      return rows?.map((val) => (
        <tr key={val.id}>
          <td>{val.id}</td>
          <td>{val.numero}</td>
          <td>{val.ano}</td>
          <td>{ConvertDate(val.data)}</td>
          <td>{val.valor}</td>
          <td>{val.observacao}</td>
          <td>
            <DeleteButton id={val.id} modelo={props.modelo} />
          </td>
        </tr>
      ));
    }
    

    return (
      <div class="mx-5">
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Numero do Empenho</th>
              <th scope="col">Ano do Empenho</th>
              <th scope="col">Data de cadastro</th>
              <th scope="col">Valor</th>
              <th scope="col">Observação</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>{renderTable()}</tbody>
        </table>
      </div>
    );
  
}
