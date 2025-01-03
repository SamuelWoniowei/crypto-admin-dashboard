export interface Transaction {
    id: string;
    date: string;
    from: string;
    to: string;
    coin: string;
    amount: number;
    profit: boolean;
    note: string;
    status: 'Completed' | 'Pending' | 'Canceled';
}