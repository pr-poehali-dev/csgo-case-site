import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export interface ItemRarity {
  name: string;
  color: string;
  chance: number;
}

export interface CaseItem {
  id: string;
  name: string;
  image: string;
  rarity: ItemRarity;
  price: number;
}

export interface CaseType {
  id: string;
  name: string;
  image: string;
  price: number;
  items: CaseItem[];
}

interface CaseCardProps {
  caseData: CaseType;
  onOpen?: (caseId: string) => void;
}

const CaseCard = ({ caseData, onOpen }: CaseCardProps) => {
  const [isHovering, setIsHovering] = useState(false);
  
  const handleOpenCase = () => {
    if (onOpen) {
      onOpen(caseData.id);
    }
  };

  const rarityCount = caseData.items.reduce((acc, item) => {
    const rarityName = item.rarity.name;
    acc[rarityName] = (acc[rarityName] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <Card 
      className="relative overflow-hidden transition-all duration-300 group border-border"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-0 opacity-70"></div>
      
      <CardContent className="p-3 pt-3 relative z-10">
        <div className="flex flex-col items-center">
          <div className="w-full h-48 flex items-center justify-center mb-3 relative">
            <img 
              src={caseData.image} 
              alt={caseData.name} 
              className={`max-h-36 object-contain transition-transform duration-300 ${isHovering ? 'scale-110' : 'scale-100'}`}
            />
            
            {/* Glow effect behind the case */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-50 blur-lg"></div>
          </div>
          
          <h3 className="text-lg font-bold text-center text-foreground">{caseData.name}</h3>
          
          <div className="flex justify-center gap-1 mt-2 flex-wrap">
            {Object.entries(rarityCount).map(([rarity, count]) => {
              let color;
              switch(rarity) {
                case 'Common': color = 'bg-[hsl(var(--common))] text-black'; break;
                case 'Uncommon': color = 'bg-[hsl(var(--uncommon))] text-black'; break;
                case 'Rare': color = 'bg-[hsl(var(--rare))] text-white'; break;
                case 'Mythical': color = 'bg-[hsl(var(--mythical))] text-white'; break;
                case 'Legendary': color = 'bg-[hsl(var(--legendary))] text-black'; break;
                case 'Ancient': color = 'bg-[hsl(var(--ancient))] text-white'; break;
                default: color = 'bg-muted text-muted-foreground';
              }
              
              return (
                <Badge key={rarity} className={`text-xs ${color}`}>
                  {count}×{rarity.charAt(0)}
                </Badge>
              );
            })}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-3 pt-0 z-10 relative flex justify-between items-center">
        <div className="text-lg font-bold text-primary">{caseData.price} ₽</div>
        <Button 
          size="sm" 
          className="bg-accent hover:bg-accent/90 transition-colors"
          onClick={handleOpenCase}
        >
          <Icon name="UnlockKeyhole" size={16} className="mr-2" />
          Открыть
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CaseCard;