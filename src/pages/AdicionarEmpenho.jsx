import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ConvertDateJson } from "../components/util/ConvertDate";

export function AdicionarEmpenho() {
  const baseURL = "http://localhost:8084/financeiro-api/Empenho";
  const navigate = useNavigate();
  const [ano, setano] = useState(0);
  const [numero, setDataProtocolo] = useState(0);
  const [data, setTipoEmpenho] = useState(Date);
  const [valor, setvalor] = useState(0.00);
  const [observacao, setcredor] = useState("");
  

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
    setDataVencimento(event.target.value);
  };
  const observacaoChangeHandler = (event) => {
    setobservacao(event.target.value);
  };
  const descricaoChangeHandler = (event) => {
    setDescricao(event.target.value);
  };
  //faz o post
  const submitActionHandler = (event) => {
    event.preventDefault();
    axios
      .post(baseURL, {
        numeroProtocolo: numeroProtocolo,
        tipo: 2,
        dataProtocolo: ConvertDateJson(dataProtocolo),
        dataVencimento: ConvertDateJson(dataVencimento),
        credor: credor,
        descricao: descricao,
        valor: valor,
      })
      .then((response) => {
        alert("Sucesso: " + numeroProtocolo + " adicionado!");
        navigate("/");
      })
      .catch((error) => {
        alert("Erro: erro ao cadastrar a Empenho");
      });
  };

  //reseta os valores dos campos
  const cancelHandler = () => {
    setDataProtocolo("");
    setDataVencimento("");
    setDescricao("");
    setNumeroProtocolo("");
    setTipoEmpenho("");
    setcredor("");
    setvalor("");
  };

  return (
    <div class="m-5">
      <button class="mx-5 mb-3">
        <a href="/">Voltar a tela inicial</a>
      </button>
      <form class="card mx-5" onSubmit={submitActionHandler}>
        <div class="form-row p-5">
          <div class="col">
            <label>Numero do protocolo</label>
            <input
              type="text"
              class="form-control"
              value={numeroProtocolo}
              onChange={numeroProtocoloChangeHandler}
              placeholder="Ex.: 12345678"
              required
            />
          </div>
          <div class="col">
            <label htmlFor="">Data do protocolo</label>
            <input
              type="date"
              class="form-control"
              value={dataProtocolo}
              onChange={dataProtocoloChangeHandler}
              required
            />
          </div>
          <div class="col">
            <label htmlFor="">Tipo de Empenho</label>
            <input
              type="text"
              class="form-control"
              value={tipoEmpenho}
              onChange={tipoEmpenhoChangeHandler}
              placeholder="Ex.: 1"
              required
            />
          </div>
          <div class="col">
            <label htmlFor="">Data de vencimento</label>
            <input
              type="date"
              class="form-control"
              value={dataVencimento}
              onChange={dataVencimentoChangeHandler}
              required
            />
          </div>
          <div class="col">
            <label htmlFor="">Credor</label>
            <input
              type="text"
              class="form-control"
              value={credor}
              onChange={credorChangeHandler}
              placeholder="Ex.: InfoTech ltd."
              required
            />
          </div>
          <div class="col">
            <label htmlFor="">Descrição</label>
            <input
              type="text"
              class="form-control"
              value={descricao}
              onChange={descricaoChangeHandler}
              placeholder=""
              required
            />
          </div>
          <div class="col">
            <label htmlFor="">Valor da Empenho</label>
            <input
              type="text"
              class="form-control"
              value={valor}
              onChange={valorChangeHandler}
              placeholder="Ex.: 2000.00"
              required
            />
          </div>
          <button type="submit">Cadastrar</button>
          <button type="submit" class="danger" onClick={() => cancelHandler()}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
