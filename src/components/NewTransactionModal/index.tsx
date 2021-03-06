import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './style';
import inComeImg from '../../assets/income.svg';
import outComeImg from '../../assets/outcome.svg';

import closeImg from '../../assets/close.svg'
import { useState } from 'react';
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;

}

export function NewTransactionModal({ isOpen,onRequestClose }: NewTransactionModalProps){
  const [type, setType] = useState('deposit');

 
  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button"
        onClick={onRequestClose} 
        className="react-modal-close"
        >
        <img src={closeImg} alt="Fechar Modal" />
      </button>
      <Container>
        <h2>Cadastrar Transação</h2>

        <input
          placeholder="Título"
        />

        <input 
          type="number" 
          placeholder="Valor"
        />
        
        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={ () => {setType('deposit');}}
            isActive={type === 'deposit'}
            activeColor='green'
          >
            <img src={inComeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox 
            type="button"
            onClick={ () => {setType('withdrwaw');}}
            isActive={type === 'withdrwaw'}
            activeColor='red'
          >
            <img src={outComeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>


        <input 
          placeholder="Categoria"
        />
        
        <button type="submit">
          Cadastrar
        </button>

      </Container>
    </Modal>
  );
}
