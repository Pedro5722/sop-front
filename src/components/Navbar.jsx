import './Navbar.css'

export function Navbar(){

  return(
    <div>
      <navbar>
        <ul>
          <li><a href="/despesa">DESPESA</a></li>
          <li><a href="/empenho">EMPENHO</a></li>
          <li><a href="/pagamento">PAGAMENTO</a></li>
        </ul>
      </navbar>
    </div>

  )
}