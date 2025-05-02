import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import UpgradePanel from '@/components/upgrades/UpgradePanel';
import { userItems, targetItems } from '@/data/upgradeData';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Upgrades = () => {
  const { toast } = useToast();
  const [upgradingInProgress, setUpgradingInProgress] = useState(false);
  
  const handleUpgrade = (selectedItemId: string, targetItemId: string, multiplier: number) => {
    setUpgradingInProgress(true);
    
    // Найдем данные выбранных предметов
    const selectedItem = userItems.find(item => item.id === selectedItemId);
    const targetItem = targetItems.find(item => item.id === targetItemId);
    
    if (!selectedItem || !targetItem) return;
    
    // Расчет шанса апгрейда
    const baseChance = (selectedItem.price / targetItem.price) * 100;
    const adjustedChance = baseChance / multiplier;
    const successChance = Math.min(Math.max(adjustedChance, 1), 99);
    
    // Имитация задержки процесса апгрейда
    setTimeout(() => {
      // Имитация результата (успех или неудача)
      const isSuccess = Math.random() * 100 <= successChance;
      
      if (isSuccess) {
        toast({
          title: "Апгрейд успешен! 🎉",
          description: `Вы успешно апгрейдили ${selectedItem.name} до ${targetItem.name}!`,
          variant: "default",
          duration: 5000,
        });
      } else {
        toast({
          title: "Апгрейд не удался 😔",
          description: `К сожалению, вы потеряли ${selectedItem.name}. Попробуйте еще раз!`,
          variant: "destructive",
          duration: 5000,
        });
      }
      
      setUpgradingInProgress(false);
    }, 2500);
  };
  
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-8">
        {/* Заголовок */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold flex items-center">
            <Icon name="Sparkles" size={28} className="mr-2 text-accent" />
            Апгрейд скинов
          </h1>
          <p className="text-muted-foreground mt-2">
            Улучшайте свои предметы и получайте более редкие и дорогие скины с помощью системы апгрейда
          </p>
        </div>
        
        {/* Панель апгрейда */}
        <div className={`transition-opacity duration-300 ${upgradingInProgress ? 'opacity-50 pointer-events-none' : ''}`}>
          <UpgradePanel 
            userItems={userItems} 
            targetItems={targetItems} 
            onUpgrade={handleUpgrade}
          />
        </div>
        
        {/* Информационные карточки */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                <Icon name="ArrowUpDown" size={20} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Как это работает</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Выберите свой предмет слева и целевой предмет справа. Настройте множитель, который влияет на шанс успеха. Чем выше множитель, тем ниже шанс, но выше потенциальная прибыль.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mr-4">
                <Icon name="BarChart2" size={20} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold">Шансы апгрейда</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Шанс успешного апгрейда зависит от стоимости вашего и целевого предмета, а также выбранного множителя. Система честно рассчитывает вероятность в реальном времени.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-[hsl(var(--uncommon))]/20 flex items-center justify-center mr-4">
                <Icon name="Lightbulb" size={20} className="text-[hsl(var(--uncommon))]" />
              </div>
              <h3 className="text-lg font-semibold">Советы</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Для начала выбирайте множитель 1.5-2.0, чтобы иметь разумные шансы. Предметы одинаковой редкости обычно дают более высокий шанс апгрейда. Старайтесь апгрейдить до предметов, которые действительно хотите получить.
            </p>
          </div>
        </div>
      </main>
      
      <footer className="bg-card border-t border-border py-6">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                © 2025 CS:GO CASE | Все права защищены
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Этот сайт не связан с Valve Corporation
              </p>
            </div>
            <div className="flex gap-4">
              <div className="text-sm text-muted-foreground">
                Поддержка: support@csgocase.com
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Upgrades;