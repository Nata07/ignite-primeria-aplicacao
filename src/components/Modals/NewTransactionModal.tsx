import Modal from 'react-modal';
import { Container, TransactionTypeContiner, RadioBox } from '../../styles/components/Modals/NewTransactionModal';
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { FormEvent, useState } from 'react';
import { useTransactions } from '../../hooks/useTransactions';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
Modal.setAppElement('#root')
export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
  const { createTransaction } = useTransactions();

  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  async function handleCreateNewTransaction(event : FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type
    })

    setType('deposit');
    setTitle('');
    setAmount(0);
    setCategory('');
    onRequestClose();
  }

  return (
    <Modal  
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Close"/>
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input type="text" 
          value={title} 
          onChange={event => setTitle(event.target.value)} 
          placeholder="Titulo"

        />
        <input type="text" 
          value={amount} 
          onChange={event => setAmount(Number(event.target.value))}
          placeholder="Valor"/>

        <TransactionTypeContiner>
          <RadioBox
            type="button"
            onClick={() => {setType('deposit')}}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Income"/>
            <span>Entradas</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => {setType('withdraw')}}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Outcome"/>
            <span>Saidas</span>
          </RadioBox>
        </TransactionTypeContiner>
        <input type="text" 
          value={category} 
          onChange={event => setCategory(event.target.value)}
          placeholder="Categoria"/>

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}