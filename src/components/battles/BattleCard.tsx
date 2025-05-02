import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { CaseType } from '@/components/cases/CaseCard';

export interface BattleType {
  id: string;
  name: string;
  cases: CaseType[];
  players: {
    id: string;
    name: string;
    avatar: string;
  }[];
  maxPlayers: number;
  status: 'waiting' | 'in-progress' | 'completed';
  price: number;
}

interface BattleCardProps {
  battle: BattleType;
  onJoin?: (battleId: string) => void;
}

const BattleCard = ({ battle, onJoin }: BattleCardProps) => {
  const availableSlots = battle.maxPlayers - battle.players.length;
  
  const handleJoin = () => {
    if (onJoin) {
      onJoin(battle.id);
    }
  };

  return (
    <Card className="overflow-hidden border-border">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold">{battle.name}</h3>
          <Badge 
            className={
              battle.status === 'waiting' ? 'bg-accent text-white' : 
              battle.status === 'in-progress' ? 'bg-[hsl(var(--uncommon))] text-black' : 
              'bg-muted text-muted-foreground'
            }
          >
            {battle.status === 'waiting' ? 'Ожидание' : 
             battle.status === 'in-progress' ? 'В процессе' : 
             'Завершен'}
          </Badge>
        </div>
        
        <div className="flex justify-between mb-4">
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Цена входа</span>
            <span className="text-lg font-bold text-primary">{battle.price} ₽</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-sm text-muted-foreground">Игроки</span>
            <div className="flex items-center">
              <span className="text-foreground font-medium">{battle.players.length}/{battle.maxPlayers}</span>
              <div className="flex -space-x-2 ml-2">
                {battle.players.map((player) => (
                  <div 
                    key={player.id} 
                    className="h-6 w-6 rounded-full border-2 border-card bg-muted overflow-hidden"
                    title={player.name}
                  >
                    <img 
                      src={player.avatar || "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=100&auto=format&fit=crop"} 
                      alt={player.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
                {availableSlots > 0 && Array.from({ length: availableSlots }).map((_, index) => (
                  <div key={`empty-${index}`} className="h-6 w-6 rounded-full border-2 border-dashed border-muted flex items-center justify-center bg-card">
                    <Icon name="Plus" size={12} className="text-muted-foreground" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {battle.cases.map((caseItem) => (
            <div 
              key={caseItem.id} 
              className="bg-secondary/30 rounded p-2 flex flex-col items-center"
              title={caseItem.name}
            >
              <img 
                src={caseItem.image} 
                alt={caseItem.name} 
                className="w-16 h-16 object-contain mb-1"
              />
              <span className="text-xs text-muted-foreground truncate max-w-full">
                {caseItem.name}
              </span>
              <span className="text-xs font-medium text-foreground">
                {caseItem.price} ₽
              </span>
            </div>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full bg-accent hover:bg-accent/90"
          disabled={battle.status !== 'waiting' || availableSlots === 0}
          onClick={handleJoin}
        >
          {battle.status === 'waiting' && availableSlots > 0 ? (
            <>
              <Icon name="Swords" size={16} className="mr-2" />
              Присоединиться
            </>
          ) : battle.status === 'in-progress' ? (
            <>
              <Icon name="Eye" size={16} className="mr-2" />
              Наблюдать
            </>
          ) : (
            <>
              <Icon name="Lock" size={16} className="mr-2" />
              Недоступно
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BattleCard;