import type { Sidebar } from "../types/sidebar";

const sidebarLinks: Sidebar[] = [
    { icon: 'dashicons:screenoptions', label: 'Dashboard', href: '/' },
    { icon: 'fluent:wallet-20-filled', label: 'My Wallet', href: '/wallet' },
    { icon: 'tabler:exchange', label: 'Transaction', href: '/transactions' },
    { icon: 'tabler:currency-bitcoin', label: 'Crypto', href: '/crypto' },
    { icon: 'ri:bank-line', label: 'Exchange', href: '' },
    { icon: 'fluent:settings-16-filled', label: 'Settings',href: '' },
];

export default sidebarLinks;