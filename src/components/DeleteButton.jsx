import axios from "axios";
import { Trash } from "phosphor-react";
import { useNavigate } from "react-router-dom";

export function DeleteButton(props) {
  const id = props.id;
  const modelo = props.modelo;
  const navigate = useNavigate();
  function Delete() {
    axios
      .delete(`http://localhost:8084/financeiro-api/${modelo}/${id}`)
      .then((response) => {
        alert(`${modelo} removido com sucesso`);
      })
      .catch((error) => {
        alert(error.response.data)
      });

      // window.location.reload(false);
  }

  return (
    <div>
      <button onClick={Delete}>
        <Trash size={30} />
      </button>
    </div>
  );
}
