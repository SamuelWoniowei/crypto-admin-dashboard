interface TradeDetails {
    coin: string;
    time: string;
    amount: number;
    profit: boolean;
    status: string;
}
 const RecentTrades: TradeDetails[] = [
    {
        coin: 'BTC',
        time: '12:45 PM',
        amount: 5554,
        profit: true,
        status: 'Pending'
    },
    {
        coin: 'ETH',
        time: '12:45 PM',
        amount: 542,
        profit: true,
        status: 'Completed'
    },
    {
        coin: 'LTC',
        time: '12:45 PM',
        amount: 0.0005,
        profit: false,
        status: 'Canceled'
    },
    {
        coin: 'USDT',
        time: '12:45 PM',
        amount: 921,
        profit: false,
        status: 'Pending'
    },
    {
        coin: 'ETH',
        time: '12:45 PM',
        amount: 7762,
        profit: true,
        status: 'Completed'
    },
    {
        coin: 'LTC',
        time: '12:45 PM',
        amount: 5553,
        profit: false,
        status: 'Pending'
    },

]

export default RecentTrades;