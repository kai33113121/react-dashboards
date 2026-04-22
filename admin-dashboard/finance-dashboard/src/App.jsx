import { Wallet, TrendingUp, TrendingDown, PiggyBank } from 'lucide-react';
import BalanceCard from './components/BalanceCard';
import ExpenseChart from './components/ExpenseChart';
import Transactions from './components/Transactions';
import BudgetCategories from './components/BudgetCategories';
import './index.css';

const STATS = [
  { icon: TrendingUp,   label: 'Ingresos Mes',  value: '$6,200', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  { icon: TrendingDown, label: 'Gastos Mes',     value: '$3,100', color: 'text-pink-400',    bg: 'bg-pink-500/10'    },
  { icon: PiggyBank,    label: 'Ahorro Mes',     value: '$3,100', color: 'text-violet-400',  bg: 'bg-violet-500/10'  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#13111a]">
      <header className="px-8 py-5 border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center">
            <Wallet size={15} className="text-white" />
          </div>
          <span className="font-bold text-white text-lg">FinanceApp</span>
        </div>
        <div className="flex items-center gap-2 bg-[#1a1726] border border-white/5 px-4 py-2 rounded-xl">
          <div className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-xs text-slate-400 font-mono">Abril 2026</span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-8 py-8">
        <div className="mb-7">
          <h1 className="text-2xl font-bold text-white">Mis Finanzas</h1>
          <p className="text-sm text-slate-500 mt-1">Resumen personal del mes</p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <BalanceCard />
          <div className="col-span-2 grid grid-cols-3 gap-4 content-start">
            {STATS.map(s => (
              <div key={s.label} className="pop-in bg-[#1a1726] rounded-2xl p-5 border border-white/5 hover:border-white/10 transition-all">
                <div className={`w-9 h-9 rounded-xl ${s.bg} flex items-center justify-center mb-3`}>
                  <s.icon size={17} className={s.color} />
                </div>
                <p className="text-xl font-bold text-white font-mono">{s.value}</p>
                <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-medium">{s.label}</p>
              </div>
            ))}
            <div className="col-span-3">
              <BudgetCategories />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <ExpenseChart />
          <Transactions />
        </div>
      </main>
    </div>
  );
}
