import { useState } from "react"
export function AddButton(){
  

  function openModal(){
    setModalIsOpen(true)
  }
  function closeModal(){
    setModalIsOpen(false)
  }

  return(
    <div>
      <button class="m-5" onClick={openModal}>ADICIONAR DESPESA</button>
      

    </div>
  )
}