import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ConvertDateJson } from "../components/util/ConvertDate";

export function AdicionarEmpenho() {
  const baseURL = "http://localhost:8084/financeiro-api/empenho";
  const navigate = useNavigate();
  const [ano, setano] = useState(0);
  const [numero, setnumero] = useState(0);
  const [data, setdata] = useState(Date);
  const [valor, setvalor] = useState(0.00);
  const [observacao, setObservacao] = useState("");
  const [numeroProtocolo, setNumeroProtocolo] = useState("");
  

  const numeroProtocoloChangeHandler = (event) => {
    setNumeroProtocolo(event.target.value);
  };
  const anoChangeHandler = (event) => {
    setano(event.target.value);
  };
  const numeroChangeHandler = (event) => {
    setnumero(event.target.value);
  };
  const dataChangeHandler = (event) => {
    setdata(event.target.value);
  };
  const valorChangeHandler = (event) => {
    setvalor(event.target.value);
  };
  const observacaoChangeHandler = (event) => {
    setObservacao(event.target.value);
  };
  //faz o post
  const submitActionHandler = (event) => {
    event.preventDefault();
    axios
      .post(baseURL, {
        ano: ano,
        numero: numero,
        data: data,
        valor: valor,
        observacao: observacao,  
        numeroProtocolo: numeroProtocolo      
      })
      .then((response) => {
        alert("Sucesso: empenho adicionado!");
        navigate("/empenho");
      })
      .catch((error) => {
        alert(error);
      });
  };

  //reseta os valores dos campos
  const cancelHandler = () => {
    setano("");
    setdata("");
    setObservacao("");
    setvalor("");
  };

  return (
    <div class="m-5">
      <button class="mx-5 mb-3">
        <a href="/empenho">Voltar a tela de Empenhos</a>
      </button>
      <form class="card mx-5" onSubmit={submitActionHandler}>
        <div class="form-row p-5">
          <div class="col">
            <label>Numero do protocolo da despesa</label>
            <input
              type="number"
              class="form-control"
              value={numeroProtocolo}
              onChange={numeroProtocoloChangeHandler}
              placeholder="Ex.: 123123123"
              required
            />
            <label>Numero do empenho</label>
            <input
              type="number"
              class="form-control"
              value={numero}
              onChange={numeroChangeHandler}
              placeholder="Ex.: 123123123"
              required
            />
          </div>
          <div class="col">
            <label>Ano do empenho</label>
            <input
              type="year"
              class="form-control"
              value={ano}
              onChange={anoChangeHandler}
              placeholder="Ex.: 2022"
              required
            />
          </div>
          <div class="col">
            <label htmlFor="">Data de cadastro</label>
            <input
              type="date"
              class="form-control"
              value={data}
              onChange={dataChangeHandler}
              required
            />
          </div>
          <div class="col">
            <label htmlFor="">Valor</label>
            <input
              type="text"
              class="form-control"
              value={valor}
              onChange={valorChangeHandler}
              placeholder="Ex.: 1"
              required
            />
          </div>
          <div class="col">
            <label htmlFor="">Observa????o</label>
            <input
              type="text"
              class="form-control"
              value={observacao}
              onChange={observacaoChangeHandler}
              placeholder="Ex.: empenho da despesa 22123"
              required
            />
          </div>
          <button type="submit" class="my-5 ">Cadastrar</button>
          <button type="submit" class="danger mx-3" onClick={() => cancelHandler()}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
