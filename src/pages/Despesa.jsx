import { PencilLine, Trash } from 'phosphor-react';
import { AddButton } from '../components/AddButton';
import { EditButton } from '../components/EditButton';
import { Table } from '../components/Table';

export function Despesa(){
  return(
    <div>
      <AddButton/>
      <Table modelo="despesa"/>    
    </div>
  )
}