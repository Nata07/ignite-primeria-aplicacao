import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

import { useState } from "react";
import { NewTransactionModal } from "./components/Modals/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

export default function App() {
  const [isNewTransictionModalOpen, setIsNewTransictionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransictionModalOpen(true)
  }
  function handleCloseNewTransactionModal(){
    setIsNewTransictionModalOpen(false)
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransictionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal} 
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
