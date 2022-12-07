import { useState } from "react";
export function AddButton(props) {
  const url = `/adicionar-${props.modelo}`
  return (
    <div>
      <button class="m-5">
        <a href={url}>Adicionar {props.modelo}</a>
      </button>
    </div>
  );
}
