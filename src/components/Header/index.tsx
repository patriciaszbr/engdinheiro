import LogoImg from '../../assets/logo.svg';

import { Container, Content } from './styles';

interface HeaderProps {
  onOpenTransationModal: () => void;
}
export function Header({onOpenTransationModal}: HeaderProps ){
  return(
    <Container>
      <Content> 
         <img src={LogoImg} alt="engDinehiro" />
         <button 
          type='button' 
          onClick={onOpenTransationModal}>New Transaction
         </button>
         
      </Content>
    </Container>
  );
}

