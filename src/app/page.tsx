import Link from "next/link";
import Search from "./_components/Search";
import Table from "./_components/table/Table";


export default function Home() {
  return (
    <>
    <Search
      action="/search"
      method="POST"
      labelText="Enter a reference number"
      hintText="You can search by a CPR UUID"/>
    <Table caption="Needs Attention Clusters:"> 
      <Table.Head>
        <Table.Header>UUID</Table.Header>
        <Table.Header>Source System</Table.Header>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell><Link key={1} href={"/cluster/5caffe97-fe5e-411e-873b-793fbeb0fa55"}>5caffe97-fe5e-411e-873b-793fbeb0fa55</Link></Table.Cell>
          <Table.Cell>DELIUS</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    </>
  );
}
