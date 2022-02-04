import LogoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

export function Header() {
  return(
    <Container>
      <Content>
        <img src={LogoImg} alt="engDinheiro" />
        <button type='button'>New Transation</button>
      </Content>
    </Container>
  );
}

