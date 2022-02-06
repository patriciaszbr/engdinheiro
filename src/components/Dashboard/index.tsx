import { Container } from "../Dashboard/styles";
import { Summmary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";

export function Dashboard() {
  return (
    <>
      <Container>
        <Summmary/>
        <TransactionsTable />
      </Container>
    </>
  )
}

export default Dashboard;