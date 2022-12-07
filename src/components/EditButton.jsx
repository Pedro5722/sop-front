import { PencilLine } from "phosphor-react";
import { useNavigate } from "react-router-dom";

export function EditButton(props){

  const id = props.id
  const navigate = useNavigate();

  function handleEdit(){
    navigate(`/edit/${id}`)
  }

  return(
    <div>
        <button onClick={handleEdit} id={id} >
          <PencilLine size={30} />
        </button>
    </div>
      
      
  )
}