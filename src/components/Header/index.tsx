import LogoImg from '../../assets/logo.svg'
import { Container, Content } from '../../styles/components/Header'

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="Logo"/>
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>

        
      </Content>
        
    </Container>
  )
}