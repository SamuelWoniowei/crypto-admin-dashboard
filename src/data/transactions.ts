import type { Transaction } from "../types/transactions";
const transactions: Transaction[] = [
  { id: '#123456789012', date: '01/02/2025 12:00 PM', from: 'Alice', to: 'Bob', coin: 'Bitcoin', amount: 500, profit: true, note: 'Payment for services', status: 'Completed' },
  { id: '#223456789013', date: '01/01/2025 03:30 PM', from: 'John', to: 'Dave', coin: 'Ethereum', amount: 1000, profit: false, note: '', status: 'Pending' },
  { id: '#323456789014', date: '01/03/2025 09:00 AM', from: 'Charlie', to: 'Eve', coin: 'Litecoin', amount: 3500, profit: true, note: 'Investment return', status: 'Completed' },
  { id: '#423456789015', date: '01/02/2025 05:00 PM', from: 'Frank', to: 'Grace', coin: 'Ripple', amount: 2000, profit: false, note: 'Refund', status: 'Canceled' },
  { id: '#523456789016', date: '01/03/2025 02:30 PM', from: 'Henry', to: 'Ivy', coin: 'Dogecoin', amount: 5000, profit: true, note: 'Gift', status: 'Completed' },
  { id: '#623456789017', date: '01/04/2025 11:00 AM', from: 'George', to: 'Hannah', coin: 'Bitcoin', amount: 250, profit: true, note: '', status: 'Completed' },
  { id: '#723456789018', date: '01/04/2025 01:00 PM', from: 'Ivy', to: 'John', coin: 'Ethereum', amount: 800, profit: false, note: 'Payment for goods', status: 'Pending' },
  { id: '#823456789019', date: '01/05/2025 10:00 AM', from: 'Liam', to: 'Mia', coin: 'Litecoin', amount: 1500, profit: true, note: 'Freelance work', status: 'Completed' },
  { id: '#923456789020', date: '01/05/2025 02:00 PM', from: 'Noah', to: 'Olivia', coin: 'Ripple', amount: 1200, profit: false, note: 'Loan repayment', status: 'Canceled' },
  { id: '#1023456789021', date: '01/06/2025 09:30 AM', from: 'James', to: 'Sophia', coin: 'Bitcoin', amount: 700, profit: true, note: 'Crypto investment', status: 'Completed' },
  { id: '#1123456789022', date: '01/06/2025 04:00 PM', from: 'Charlotte', to: 'Ava', coin: 'Dogecoin', amount: 200, profit: false, note: '', status: 'Pending' },
  { id: '#1223456789023', date: '01/07/2025 08:45 AM', from: 'William', to: 'Zoe', coin: 'Ethereum', amount: 3000, profit: true, note: 'Rent payment', status: 'Completed' },
  { id: '#1323456789024', date: '01/07/2025 07:30 PM', from: 'Ethan', to: 'Isabella', coin: 'Ripple', amount: 1500, profit: false, note: 'Gift', status: 'Canceled' },
  { id: '#1423456789025', date: '01/08/2025 07:00 AM', from: 'Lucas', to: 'Lily', coin: 'Litecoin', amount: 800, profit: true, note: 'Payment for services', status: 'Completed' },
  { id: '#1523456789026', date: '01/08/2025 02:45 PM', from: 'Mason', to: 'Amelia', coin: 'Bitcoin', amount: 1000, profit: false, note: 'Refund', status: 'Pending' }
]

  export default transactions;