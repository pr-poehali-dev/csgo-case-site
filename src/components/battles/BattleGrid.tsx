import BattleCard, { BattleType } from '@/components/battles/BattleCard';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface BattleGridProps {
  battles: BattleType[];
  onJoinBattle?: (battleId: string) => void;
}

const BattleGrid = ({ battles, onJoinBattle }: BattleGridProps) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4 justify-between items-center">
        <div className="flex gap-2">
          <Button variant="default" size="sm">
            Все баттлы
          </Button>
          <Button variant="outline" size="sm">
            Ожидание
          </Button>
          <Button variant="outline" size="sm">
            В процессе
          </Button>
        </div>
        
        <Button className="bg-accent hover:bg-accent/90">
          <Icon name="Plus" size={16} className="mr-2" />
          Создать новый баттл
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {battles.map((battle) => (
          <BattleCard 
            key={battle.id} 
            battle={battle} 
            onJoin={onJoinBattle}
          />
        ))}
      </div>
      
      {battles.length === 0 && (
        <div className="text-center py-10">
          <Icon name="Swords" size={48} className="mx-auto text-muted-foreground mb-4" />
          <p className="text-muted-foreground">Нет доступных баттлов</p>
          <Button variant="outline" className="mt-4">
            <Icon name="Plus" size={16} className="mr-2" />
            Создать баттл
          </Button>
        </div>
      )}
    </div>
  );
};

export default BattleGrid;