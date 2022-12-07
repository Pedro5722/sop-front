import axios from "axios";
import { Trash } from "phosphor-react";
import { useNavigate } from "react-router-dom";

export function DeleteButton(props) {
  const id = props.id;
  const navigate = useNavigate();
  function Delete() {
    axios
      .delete(`http://localhost:8084/financeiro-api/despesa/${id}`)
      .then((response) => {
        alert("Despesa deletada");
        navigate("/despesa");
      })
      .catch((error) => {
        alert("Erro ao deletar");
      });
  }

  return (
    <div>
      <button onClick={Delete}>
        <Trash size={30} />
      </button>
    </div>
  );
}
