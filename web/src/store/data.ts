import { writable, type Writable } from "svelte/store";

export interface Notification {
  id: number;
  message: string;
  title: string;
  icon: string;
}

export const notifications = writable<Notification[]>([]);
let notificationId = 0;

export function Notify(message: string, title: string, icon: string) {
  notificationId += 1;
  const newNotification: Notification = {
    id: notificationId,
    message,
    title,
    icon,
  };
  notifications.update((n) => [...n, newNotification]);
  setTimeout(() => {
    notifications.update((n) =>
      n.filter((notification) => notification.id !== newNotification.id)
    );
  }, 2000);
}

export const showOverview = writable(true);
export const showBills = writable(false);
export const showHistory = writable(false);
export const showHeav = writable(false);
export const showIndseat = writable(false);
export const showStats = writable(false);
export const showAccounts = writable(false);
export const showATM = writable(false);
export const currentCash = writable(0);
export const bankBalance = writable(0);

const createActiveViewStore = () => {
  const { subscribe, set, update } = writable('overview');
  
  return {
    subscribe,
    set: (value) => {
      set(value);
    },
    reset: () => set('overview')
  };
};

export const activeView = createActiveViewStore();

export const Currency = writable({
  lang: "pt-BR",
  currency: "BRL",
});

export const Locales = writable({
  atm: "Caixa Eletrônico",
  cash: "Dinheiro",
  bank_balance: "Saldo Bancário",
  deposit_amount: "Valor do Depósito",
  withdraw_amount: "Valor do Saque",
  submit: "Confirmar",
  close: "Fechar",
  overview: "Visão Geral",
  bills: "Contas",
  history: "Histórico",
  withdraw: "Sacar",
  deposit: "Depositar",
  stats: "Estatísticas",
  transactions: "Transações",
  total: "Total",
  search_transactions: "Buscar transações...",
  description: "Descrição",
  type: "Tipo",
  time_ago: "Há",
  amount: "Valor",
  date: "Data",
  pay_invoice: "Pagar Fatura",
  payment_completed: "Pagamento Concluído",
  from: "De",
  delete_all_transactions: "Excluir Todas as Transações",
  are_you_sure: "Tem certeza?",
  delete_confirmation:
    "Tem certeza de que deseja excluir todas as suas transações? (Faça isso apenas se o menu estiver travando!)",
  cancel: "Cancelar",
  confirm: "Confirmar",
  history_empty: "Seu histórico está vazio",
  all_history_deleted: "Você excluiu todo o seu histórico",
  error: "Erro",
  success: "Sucesso",
  new_cash: "Novo Dinheiro",
  withdraw_success: "Saque Realizado com Sucesso",
  withdraw_error: "Sua conta bancária não possui fundos suficientes",
  withdraw_button: "SACAR",
  new_bank: "Novo Saldo Bancário",
  current_cash: "Dinheiro Atual",
  deposit_success: "Depósito Realizado com Sucesso",
  deposit_error: "Você não possui dinheiro suficiente",
  deposit_button: "DEPOSITAR",
  total_balance: "Saldo Total",
  quick_actions: "Ações Rápidas",
  transfer_money: "Transferir Dinheiro",
  easy_transfer: "Transfira dinheiro facilmente para outras pessoas",
  transfer: "Transferir",
  pay_bills: "Pagar Contas",
  pay_pending_bills: "Pague rapidamente suas contas pendentes",
  pay: "Pagar",
  withdraw_all_money: "Sacar Todo o Dinheiro",
  withdraw_all_from_account: "Saque todo o seu dinheiro da sua conta",
  deposit_cash: "Depositar Dinheiro",
  deposit_all_cash: "Deposite todo o seu dinheiro na sua conta",
  weekly_summary: "Resumo Semanal",
  income: "Renda",
  expenses: "Despesas",
  report: "Relatório",
  latest_transactions: "Últimas Transações",
  see_all: "VER TUDO",
  unpaid_bills: "Faturas Não Pagas",
  no_unpaid_bills: "Nenhuma fatura não paga",
  confirm_pay_all_bills: "Tem certeza de que deseja pagar todas as suas contas?",
  pay_all_bills: "Pagar Todas as Contas",
  pay_all_bills_success: "Você pagou todas as suas contas!",
  pay_all_bills_error: "Você não possui contas",
  payment_method: "Método de Pagamento",
  phone_number: "Número de Telefone",
  id: "ID",
  id_or_phone_number: "ID ou Número de Telefone",
  no_cash_on_you: "Você não possui dinheiro",
  deposit_all_success: "Todo o seu dinheiro foi depositado",
  no_money_on_account: "Sua conta está vazia",
  withdraw_all_success: "Você sacou todo o dinheiro da conta",
  invoices: "Faturas",
  statistics_reports: "Estatísticas e Relatórios",
  balance_trend: "Tendência do Saldo",
  balance: "Saldo",
  used: "Usado",
  month: "Mês",
  balance_dkk: "Saldo",
  withdrawn: "Você sacou",
  deposited: "Você depositou",
  no_transactions: "Nenhuma transação recente",
  transactions_trend: "Tendência das Transações",
  total_transactions: "Total de Transações",
  accounts: "Contas",
  account_number_copied: "Número da conta copiado para a área de transferência",
  new_user_to_account: "Novo usuário para a conta",
  server_id: "ID do Servidor",
  add_user: "Adicionar Usuário",
  new_account_name: "Novo Nome da Conta",
  new_name: "Novo Nome",
  rename: "Renomear",
  create_new_account: "Criar Nova Conta",
  account_holder: "Titular da Conta",
  initial_balance: "Saldo Inicial",
  create: "Criar",
  delete_account: "Excluir Conta",
  are_you_sure_you_want_to_delete_this_account:
    "Tem certeza de que deseja excluir esta conta?",
  delete: "Excluir",
  remove_user_from_account: "Remover Usuário da Conta",
  select_user: "Selecionar Usuário",
  remove: "Remover",
  withdraw_from_account: "Sacar da Conta",
  deposit_to_account: "Depositar na Conta",
  removed_successfully: "removido com sucesso",
  select_account_and_user: "Por favor, selecione uma conta e um usuário",
  account_deleted_successfully: "Conta excluída com sucesso",
  new_account_created_successfully: "Nova conta criada com sucesso",
  withdrew: "Sacou",
  successfully: "com sucesso",
  select_valid_account_and_amount: "Por favor, selecione uma conta e valor válidos",
  openBank: "Acessar Banco",
  openATM: "Acessar Caixa Eletrônico",
  account_deletion_failed: "Falha ao excluir conta",
  withdrawal_failed: "Falha no saque",
  deposit_failed: "Falha no depósito",
  user_added_successfully: "adicionado com sucesso",
  user_addition_failed: "Falha ao adicionar usuário",
  new_account_creation_failed: "Falha ao criar nova conta",
  account_renamed_successfully: "Conta renomeada com sucesso",
  account_rename_failed: "Falha ao renomear conta",
  rename_account: "Alterar nome",
});

export const Transactions: Writable<Array<any>> = writable([
  // {
  //   id: 8,
  //   description: "Åbnede en ny konto",
  //   type: "Fra konto",
  //   amount: 1000,
  //   date: "2022/08/13",
  //   timeAgo: "For 18 timer siden",
  //   isIncome: false,
  // },
  // {
  //   id: 7,
  //   description: "Indsatte 500 DKK på konto",
  //   type: "Til konto",
  //   amount: 500,
  //   date: "2022/08/13",
  //   timeAgo: "For 18 timer siden",
  //   isIncome: true,
  // },
  // {
  //   id: 6,
  //   description: "Indsatte 500 DKK på konto",
  //   type: "Til konto",
  //   amount: 500,
  //   date: "2022/08/13",
  //   timeAgo: "For 18 timer siden",
  //   isIncome: true,
  // },
  // {
  //   id: 5,
  //   description: "Hævede 500 DKK fra en hæveautomat",
  //   type: "Fra konto",
  //   amount: -500,
  //   date: "2022/08/13",
  //   timeAgo: "For 18 timer siden",
  //   isIncome: false,
  // },
  // {
  //   id: 4,
  //   description: "Indsatte 500 DKK på konto",
  //   type: "Til konto",
  //   amount: 500,
  //   date: "2022/08/13",
  //   timeAgo: "For 18 timer siden",
  //   isIncome: true,
  // },
]);

export const Bills: Writable<Array<any>> = writable([
  // {
  //   id: 1,
  //   description: "Mekaniker Regning",
  //   type: "Auto Exotic",
  //   amount: 1000,
  //   date: "2022/08/13",
  //   timeAgo: "For 18 timer siden",
  //   isPaid: false,
  // },
  // {
  //   id: 2,
  //   description: "Mekaniker Regning",
  //   type: "Auto Exotic",
  //   amount: 1000,
  //   date: "2022/08/13",
  //   timeAgo: "For 18 timer siden",
  //   isPaid: false,
  // },
  // {
  //   id: 3,
  //   description: "Mekaniker Regning",
  //   type: "Auto Exotic",
  //   amount: 1000,
  //   date: "2022/08/13",
  //   timeAgo: "For 18 timer siden",
  //   isPaid: false,
  // },
]);
