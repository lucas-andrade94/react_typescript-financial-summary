import { Table, TableHeadColumn } from "./styles";
import TableItem from "../TableItem";

import { Item } from "../../types/Item";

type Props = {
  list: Item[];
};

const TableArea = ({ list }: Props) => {
  return (
    <Table className="container">
      <thead>
        <tr>
          <TableHeadColumn width={110}>Date</TableHeadColumn>
          <TableHeadColumn width={130}>Category</TableHeadColumn>
          <TableHeadColumn>Title</TableHeadColumn>
          <TableHeadColumn width={120}>Value</TableHeadColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => {
          return <TableItem key={index} item={item} />;
        })}
      </tbody>
    </Table>
  );
};

export default TableArea;
