import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import { cn } from '@/lib/utils';

export interface UpgradeItemProps {
  id: string;
  name: string;
  image: string;
  rarity: {
    name: string;
    color: string;
  };
  price: number;
  wear: number; // 0-1, где 0 - идеальное состояние, 1 - сильно изношенное
  selected?: boolean;
  onSelect?: (id: string) => void;
}

const UpgradeItem = ({ id, name, image, rarity, price, wear, selected, onSelect }: UpgradeItemProps) => {
  const [isHovering, setIsHovering] = useState(false);
  
  // Определение категории износа
  const getWearCategory = (wear: number): string => {
    if (wear < 0.07) return 'Прямо с завода';
    if (wear < 0.15) return 'Немного поношенное';
    if (wear < 0.38) return 'После полевых испытаний';
    if (wear < 0.45) return 'Поношенное';
    return 'Закаленное в боях';
  };
  
  // Определение цвета для прогресс-бара износа
  const getWearColor = (wear: number): string => {
    if (wear < 0.07) return 'bg-[#5ecc3a]';
    if (wear < 0.15) return 'bg-[#b0e83c]';
    if (wear < 0.38) return 'bg-[#e8da3c]';
    if (wear < 0.45) return 'bg-[#e8983c]';
    return 'bg-[#e83c3c]';
  };

  const handleSelect = () => {
    if (onSelect) {
      onSelect(id);
    }
  };

  let rarityColorClass;
  switch(rarity.name) {
    case 'Common': rarityColorClass = 'bg-[hsl(var(--common))] text-black'; break;
    case 'Uncommon': rarityColorClass = 'bg-[hsl(var(--uncommon))] text-black'; break;
    case 'Rare': rarityColorClass = 'bg-[hsl(var(--rare))] text-white'; break;
    case 'Mythical': rarityColorClass = 'bg-[hsl(var(--mythical))] text-white'; break;
    case 'Legendary': rarityColorClass = 'bg-[hsl(var(--legendary))] text-black'; break;
    case 'Ancient': rarityColorClass = 'bg-[hsl(var(--ancient))] text-white'; break;
    default: rarityColorClass = 'bg-muted text-muted-foreground';
  }

  return (
    <Card 
      className={cn(
        "relative overflow-hidden transition-all duration-300 cursor-pointer border-2", 
        selected ? "border-primary" : "border-border",
        isHovering && !selected ? "border-accent/50" : ""
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={handleSelect}
    >
      <div className="absolute top-0 left-0 right-0 h-1 z-10" style={{ 
        background: `linear-gradient(to right, ${rarity.color}, transparent)` 
      }}></div>
      
      <CardContent className="p-4 relative">
        <div className="flex space-x-4">
          <div className="relative flex-shrink-0">
            <div className="w-24 h-24 bg-secondary/40 rounded flex items-center justify-center overflow-hidden">
              <img 
                src={image} 
                alt={name} 
                className={`w-20 h-20 object-contain transition-transform duration-300 ${isHovering ? 'scale-110' : 'scale-100'}`}
              />
            </div>
            {selected && (
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center">
                <Icon name="Check" size={14} />
              </div>
            )}
          </div>
          
          <div className="flex-1">
            <div className="mb-2">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-medium truncate max-w-[150px]">{name}</h3>
                <span className="text-primary font-semibold">{price} ₽</span>
              </div>
              <div className={`inline-block px-2 py-0.5 text-xs rounded-full mt-1 ${rarityColorClass}`}>
                {rarity.name}
              </div>
            </div>
            
            <div className="mt-2">
              <div className="flex justify-between items-center text-xs text-muted-foreground mb-1">
                <span>{getWearCategory(wear)}</span>
                <span>{(wear * 100).toFixed(2)}%</span>
              </div>
              <Progress
                value={100 - wear * 100}
                className="h-1.5 bg-secondary"
                indicatorClassName={getWearColor(wear)}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UpgradeItem;