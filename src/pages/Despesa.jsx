import { AddButton } from "../components/AddButton";
import { Table } from "../components/Table";

export function Despesa() {
  return (
    <div>
      <AddButton modelo="despesa"/>
      <Table modelo="despesa" />
    </div>
  );
}
