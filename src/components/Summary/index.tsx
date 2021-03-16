import { Container } from "../../styles/components/Summary";
import IncomeImg from '../../assets/income.svg';
import OutcomeImg from '../../assets/outcome.svg';
import TotalImg from '../../assets/total.svg';
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
  const {transactions} = useTransactions();

  const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    }else {
      acc.withdraws += transaction.amount
      acc.total -= transaction.amount
    }

    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  })

  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={IncomeImg} alt="Income"/>
        </header>

        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={OutcomeImg} alt="Outcome"/>
        </header>

        <strong>
          - {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(summary.withdraws)}
        </strong>
      </div>
      <div style={{background: '#33cc95', color: '#FFF'}}>
        <header>
          <p>Total</p>
          <img src={TotalImg} alt="total"/>
        </header>

        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  )
}