import { useEffect } from 'react';
import LogoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';
import Modal from 'react-modal'

export function Header() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useEffect(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return(
    <Container>
      <Content>
        <img src={LogoImg} alt="Logo engDinheiro" />
        <button type='button' onClick={handleOpenNewTransactionModal}>
          New Transation
        </button>

        <Modal isOpen={isNewTransactionModalOpen}>
          <h2>Cadastrar Transação</h2>
        </Modal>
      </Content>
    </Container>
  );
}

