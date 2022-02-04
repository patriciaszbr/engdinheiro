import { Container } from "../Summary/styles";
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';

export function Summmary() {
  return(
    <>
      <Container>
        <div>
            <header>
              <p>Entradas</p>
              <img src={income} alt="simbolo da seta de entrada" />
            </header>
            <strong>R$ 100</strong>
        </div>
        <div>
            <header>
              <p>Saídas</p>
              <img src={outcome} alt="simbolo da seta de saída" />
            </header>
            <strong>R$ 100</strong>
        </div>


      </Container>
    </>
  )
}