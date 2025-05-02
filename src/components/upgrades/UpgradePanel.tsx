import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';
import UpgradeItem, { UpgradeItemProps } from './UpgradeItem';

interface UpgradePanelProps {
  userItems: UpgradeItemProps[];
  targetItems: UpgradeItemProps[];
  onUpgrade?: (selectedItem: string, targetItem: string, multiplier: number) => void;
}

const UpgradePanel = ({ userItems, targetItems, onUpgrade }: UpgradePanelProps) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [selectedTarget, setSelectedTarget] = useState<string | null>(null);
  const [multiplier, setMultiplier] = useState(1.5);
  const [chance, setChance] = useState(0);
  
  const selectedItemData = userItems.find(item => item.id === selectedItem);
  const selectedTargetData = targetItems.find(item => item.id === selectedTarget);

  useEffect(() => {
    if (selectedItemData && selectedTargetData) {
      // Расчет шанса апгрейда на основе соотношения цен и множителя
      const baseChance = (selectedItemData.price / (selectedTargetData.price || 1)) * 100;
      const adjustedChance = baseChance / multiplier;
      setChance(Math.min(Math.max(adjustedChance, 1), 99)); // Ограничиваем шанс между 1% и 99%
    } else {
      setChance(0);
    }
  }, [selectedItem, selectedTarget, multiplier, selectedItemData, selectedTargetData]);

  const handleUpgrade = () => {
    if (selectedItem && selectedTarget && onUpgrade) {
      onUpgrade(selectedItem, selectedTarget, multiplier);
    }
  };

  const handleSelectItem = (id: string) => {
    setSelectedItem(id);
  };

  const handleSelectTarget = (id: string) => {
    setSelectedTarget(id);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Левая панель - выбор предмета для апгрейда */}
      <Card>
        <CardHeader className="pb-3">
          <h3 className="text-lg font-semibold">Ваши предметы</h3>
          <p className="text-sm text-muted-foreground">Выберите предмет для апгрейда</p>
        </CardHeader>
        <Separator />
        <CardContent className="pt-4">
          <div className="space-y-3">
            {userItems.length > 0 ? (
              userItems.map(item => (
                <UpgradeItem 
                  key={item.id} 
                  {...item} 
                  selected={item.id === selectedItem}
                  onSelect={handleSelectItem}
                />
              ))
            ) : (
              <div className="text-center py-6">
                <Icon name="PackageX" size={36} className="mx-auto text-muted-foreground mb-2" />
                <p className="text-muted-foreground text-sm">У вас нет доступных предметов</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Центральная панель - настройки апгрейда */}
      <Card>
        <CardHeader className="pb-3">
          <h3 className="text-lg font-semibold">Настройки апгрейда</h3>
          <p className="text-sm text-muted-foreground">Настройте параметры апгрейда</p>
        </CardHeader>
        <Separator />
        <CardContent className="pt-4">
          <div className="flex flex-col items-center space-y-6">
            {/* Выбранный предмет */}
            <div className="w-full">
              <h4 className="text-sm text-muted-foreground mb-2">Ваш предмет:</h4>
              {selectedItemData ? (
                <div className="bg-secondary/30 rounded-md p-3 flex items-center space-x-3">
                  <img src={selectedItemData.image} alt={selectedItemData.name} className="w-12 h-12 object-contain" />
                  <div>
                    <div className="font-medium">{selectedItemData.name}</div>
                    <div className="text-primary">{selectedItemData.price} ₽</div>
                  </div>
                </div>
              ) : (
                <div className="bg-secondary/30 rounded-md p-3 text-center text-muted-foreground">
                  Выберите предмет
                </div>
              )}
            </div>

            {/* Стрелка вниз */}
            <div className="w-full flex items-center justify-center">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <Icon name="ArrowDown" size={24} className="text-accent" />
              </div>
            </div>

            {/* Выбранная цель */}
            <div className="w-full">
              <h4 className="text-sm text-muted-foreground mb-2">Целевой предмет:</h4>
              {selectedTargetData ? (
                <div className="bg-secondary/30 rounded-md p-3 flex items-center space-x-3">
                  <img src={selectedTargetData.image} alt={selectedTargetData.name} className="w-12 h-12 object-contain" />
                  <div>
                    <div className="font-medium">{selectedTargetData.name}</div>
                    <div className="text-accent">{selectedTargetData.price} ₽</div>
                  </div>
                </div>
              ) : (
                <div className="bg-secondary/30 rounded-md p-3 text-center text-muted-foreground">
                  Выберите цель
                </div>
              )}
            </div>

            {/* Настройка множителя */}
            <div className="w-full space-y-2">
              <div className="flex justify-between items-center">
                <h4 className="text-sm">Множитель:</h4>
                <span className="font-semibold text-primary">x{multiplier.toFixed(1)}</span>
              </div>
              <Slider
                value={[multiplier]}
                min={1.1}
                max={5}
                step={0.1}
                onValueChange={(value) => setMultiplier(value[0])}
                className="w-full"
              />
            </div>

            {/* Индикатор шанса */}
            <div className="w-full bg-secondary/30 rounded-md p-4 text-center">
              <h4 className="text-sm text-muted-foreground mb-1">Шанс успеха:</h4>
              <div className="text-2xl font-bold">
                <span className={chance > 50 ? "text-[hsl(var(--uncommon))]" : chance > 30 ? "text-primary" : "text-[hsl(var(--ancient))]"}>
                  {chance.toFixed(2)}%
                </span>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="pt-0">
          <Button 
            onClick={handleUpgrade} 
            disabled={!selectedItem || !selectedTarget}
            className="w-full bg-accent hover:bg-accent/90"
            size="lg"
          >
            <Icon name="Sparkles" size={18} className="mr-2" />
            Апгрейд
          </Button>
        </CardFooter>
      </Card>

      {/* Правая панель - выбор целевого предмета */}
      <Card>
        <CardHeader className="pb-3">
          <h3 className="text-lg font-semibold">Целевые предметы</h3>
          <p className="text-sm text-muted-foreground">Выберите предмет, который хотите получить</p>
        </CardHeader>
        <Separator />
        <CardContent className="pt-4">
          <div className="space-y-3">
            {targetItems.length > 0 ? (
              targetItems.map(item => (
                <UpgradeItem 
                  key={item.id} 
                  {...item} 
                  selected={item.id === selectedTarget}
                  onSelect={handleSelectTarget}
                />
              ))
            ) : (
              <div className="text-center py-6">
                <Icon name="PackageX" size={36} className="mx-auto text-muted-foreground mb-2" />
                <p className="text-muted-foreground text-sm">Нет доступных целевых предметов</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UpgradePanel;