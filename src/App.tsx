import { useEffect, useState } from 'react';
import Modal from 'react-modal'
import { Dashboard } from './components/Dashboard';
import { Header } from '../src/components/Header/index';
import {GlobalStyle} from './styles/global'

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  
    function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true);
    }
  
    function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false)
    }
  return (
   <>
      <Header onOpenTransationModal={handleOpenNewTransactionModal}/>
      <Dashboard />

      <Modal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar Transação</h2>
      </Modal>

      <GlobalStyle />
   </>
  );
}

export default App;