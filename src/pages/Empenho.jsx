import { AddButton } from "../components/AddButton";
import { Table } from "../components/Table";

export function Empenho() {
  return (
    <div>
      <AddButton modelo="empenho"/>
      <Table modelo="empenho" />
    </div>
  );
}
