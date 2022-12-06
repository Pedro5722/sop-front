
import { PencilLine, Trash } from 'phosphor-react';

export function Empenho(){
  return(
    <div className="table">
    <table class="table-fixed">
      <thead>
        <tr>
          <th>Ano do Empenho</th>
          <th>Número do Empenho</th>
          <th>Data do Empenho</th>
          <th>Valor do Empenho</th>
          <th>Observação</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2021</td>
          <td>202120032</td>
          <td>21/11/2022</td>
          <td>R$5700,96</td>
          <td>Compra de PCs para o setor de TI da nossa empresa Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cum accusamus deserunt omnis recusandae, laudantium ad error, reprehenderit vel rerum repudiandae quos nesciunt sunt aliquam voluptates! Cupiditate, ipsam architecto! Quas.</td>
          <td>
            <a href=""><PencilLine size={28} /></a>
            <a href=""><Trash size={28} /></a>
          </td>
        </tr>
        <tr>
          <td>2021</td>
          <td>202120032</td>
          <td>21/11/2022</td>
          <td>R$5700,96</td>
          <td>Compra de PCs para o setor de TI da nossa empresa Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cum accusamus deserunt omnis recusandae, laudantium ad error, reprehenderit vel rerum repudiandae quos nesciunt sunt aliquam voluptates! Cupiditate, ipsam architecto! Quas.</td>
          <td>
            <a href=""><PencilLine size={28} /></a>
            <a href=""><Trash size={28} /></a>
          </td>
        </tr>
      </tbody>
    </table>      
  </div>
  )
}