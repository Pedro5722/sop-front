import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export function Editarempenho(props) {
  const baseURL = "http://localhost:8084/financeiro-api/empenho/";
  const navigate = useNavigate();

  let {id} = useParams();
  console.log(id)

  const [numeroProtocolo, setNumeroProtocolo] = useState(0);
  const [dataProtocolo, setDataProtocolo] = useState(Date);
  const [tipoempenho, setTipoempenho] = useState(0);
  const [dataVencimento, setDataVencimento] = useState(Date);
  const [credor, setcredor] = useState("");
  const [descricao, setDescricao] = useState("");
  const [valor, setvalor] = useState(0.0);

  const numeroProtocoloChangeHandler = (event) => {
    setNumeroProtocolo(event.target.value);
  };
  const dataProtocoloChangeHandler = (event) => {
    setDataProtocolo(event.target.value);
  };
  const tipoempenhoChangeHandler = (event) => {
    setTipoempenho(event.target.value);
  };
  const dataVencimentoChangeHandler = (event) => {
    setDataVencimento(event.target.value);
  };
  const credorChangeHandler = (event) => {
    setcredor(event.target.value);
  };
  const descricaoChangeHandler = (event) => {
    setDescricao(event.target.value);
  };
  const valorChangeHandler = (event) => {
    setvalor(event.target.value);
  };

  

  const submitActionHandler = (event) => {
    event.preventDefault();
    axios
      .post(baseURL, {
        numeroProtocolo: numeroProtocolo,
        tipo: 2,
        dataProtocolo: dataProtocolo,
        dataVencimento: dataVencimento,
        credor: credor,
        descricao: descricao,
        valor: valor,
      })
      .then((response) => {
        alert("Sucesso: " + numeroProtocolo + " adicionado!");
        navigate("/");
      })
      .catch((error) => {
        alert("error===" + error);
      });
  };

  const cancelHandler = () => {
    //reseta os valores dos campos
    setDataProtocolo("");
    setDataVencimento("");
    setDescricao("");
    setNumeroProtocolo("");
    setTipoempenho("");
    setcredor("");
    setvalor("");
  };


  useEffect(() => {
    axios.get(baseURL + props.id).then((response) => {
      data(response.data);
    });
  }, []);
   var data
  if(data){
    console.log(data)
  }

  return (
    <div class="m-5">
      <button class="mx-5 mb-3">
        <a href="/">Voltar a tela inicial</a>
      </button>
      <button></button>
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
            ></input>
          </div>
          <div class="col">
            <label htmlFor="">Data do protocolo</label>
            <input
              type="date"
              class="form-control"
              value={dataProtocolo}
              onChange={dataProtocoloChangeHandler}
              required
            ></input>
          </div>
          <div class="col">
            <label htmlFor="">Tipo de empenho</label>
            <input
              type="text"
              class="form-control"
              value={tipoempenho}
              onChange={tipoempenhoChangeHandler}
              placeholder="Ex.: 1"
              required
            ></input>
          </div>
          <div class="col">
            <label htmlFor="">Data de vencimento</label>
            <input
              type="date"
              class="form-control"
              value={dataVencimento}
              onChange={dataVencimentoChangeHandler}
              required
            ></input>
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
            ></input>
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
            ></input>
          </div>
          <div class="col">
            <label htmlFor="">Valor da empenho</label>
            <input
              type="text"
              class="form-control"
              value={valor}
              onChange={valorChangeHandler}
              placeholder="Ex.: 2000.00"
              required
            ></input>
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
