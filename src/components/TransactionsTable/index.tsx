import { Container } from "./style";

export function TransactionsTable() {
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th> Titulo </th>
            <th> Valor </th>
            <th> Transação </th>
            <th> Data </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de Software</td>
            <td className="deposit">R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>06/02/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">R$ -110.00</td>
            <td>Casa</td>
            <td>06/02/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}