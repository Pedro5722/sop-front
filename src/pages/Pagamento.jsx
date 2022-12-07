import { AddButton } from "../components/AddButton";
import { Table } from "../components/Table";

export function Pagamento() {
  return (
    <div>
      <AddButton modelo="pagamento"/>
      <Table modelo="pagamento" />
    </div>
  );
}
