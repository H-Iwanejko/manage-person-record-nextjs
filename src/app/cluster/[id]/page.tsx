import { BackLink } from "@/app/_components/BackLink";
import Table from "@/app/_components/table/Table";
import TableBody from "@/app/_components/table/TableBody";
import TableCell from "@/app/_components/table/TableCell";
import TableRow from "@/app/_components/table/TableRow";
import Tag, { TagColour } from "@/app/_components/Tag";

interface ClusterDetailParams {
  params: {
    id: string
  },
}

export default async function ClusterDetailPage({
  params,
}: ClusterDetailParams) {
  const { id } = await params

  return (
    <>
      <BackLink href="/"/>
      <h1 className="govuk-heading-l">UUID: {id}</h1>
      <h2 className="govuk-heading-m">Record composition</h2>
      <Table scrollable={true}>
        <Table.Head>
          <Table.Header>Source System ID</Table.Header>
          <Table.Header>Name</Table.Header>
          <Table.Header>Source System</Table.Header>
        </Table.Head>
        <TableBody>
          <TableRow>
            <TableCell>1234567890</TableCell>
            <TableCell>Test User</TableCell>
            <TableCell>LIBRA</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <h2 className="govuk-heading-m">Event Log</h2>
      <Table scrollable={true}>
        <Table.Head>
          <Table.Header>Event Timestamp</Table.Header>
          <Table.Header>UUID Status Type</Table.Header>
          <Table.Header>Source System</Table.Header>
          <Table.Header>Event Type</Table.Header>
          <Table.Header>Source System ID</Table.Header>
          <Table.Header>First Name</Table.Header>
          <Table.Header>First Name Aliases</Table.Header>
          <Table.Header>Middle Names</Table.Header>
        </Table.Head>
        <TableBody>
          <TableRow>
            <TableCell>2025-08-30 11:28:55.803452</TableCell>
            <TableCell><Tag colour={TagColour.RED}>NEEDS ATTENTION</Tag></TableCell>
            <TableCell>COMMON_PLATFORM</TableCell>
            <TableCell>CPR_RECORD_UPDATED</TableCell>
            <TableCell>63778937-a4bc-4ce7-bd33-1f0d5067598c</TableCell>
            <TableCell>Test</TableCell>
            <TableCell>TEST</TableCell>
            <TableCell>person</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}