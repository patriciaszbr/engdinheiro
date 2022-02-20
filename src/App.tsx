import { useEffect, useState } from 'react';
import Modal from 'react-modal'
import { Dashboard } from './components/Dashboard';
import { Header } from '../src/components/Header/index';
import {GlobalStyle} from './styles/global'
import { NewTransactionModal } from './components/NewTransactionModal';

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
      <NewTransactionModal
       isOpen={isNewTransactionModalOpen}
       onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
   </>
  );
}

export default App;