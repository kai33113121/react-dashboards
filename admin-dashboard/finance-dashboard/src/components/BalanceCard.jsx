import { Wallet, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

export default function BalanceCard() {
  return (
    <div className="pop-in relative rounded-3xl overflow-hidden p-7" style={{
      background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #ec4899 100%)',
      animationDelay: '0ms'
    }}>
      <div className="absolute inset-0 opacity-20"
        style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, #fff 0%, transparent 50%)' }} />
      <div className="relative">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Wallet size={18} className="text-white/80" />
            <span className="text-sm text-white/80 font-medium">Balance Total</span>
          </div>
          <span className="text-xs bg-white/20 text-white px-3 py-1 rounded-full font-medium">Abr 2026</span>
        </div>
        <p className="text-4xl font-bold text-white tracking-tight font-mono mb-1">$12,480.50</p>
        <p className="text-sm text-white/60">+$1,240 este mes</p>
        <div className="flex gap-4 mt-6">
          <button className="flex items-center gap-2 bg-white/15 hover:bg-white/25 transition text-white text-sm font-medium px-4 py-2 rounded-xl">
            <ArrowUpRight size={15} /> Enviar
          </button>
          <button className="flex items-center gap-2 bg-white/15 hover:bg-white/25 transition text-white text-sm font-medium px-4 py-2 rounded-xl">
            <ArrowDownLeft size={15} /> Recibir
          </button>
        </div>
      </div>
    </div>
  );
}
