import { useState } from 'react';
import CaseCard, { CaseType } from '@/components/cases/CaseCard';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface CaseGridProps {
  cases: CaseType[];
  onOpenCase?: (caseId: string) => void;
}

const CaseGrid = ({ cases, onOpenCase }: CaseGridProps) => {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

  const filteredCases = cases.filter(caseItem => {
    if (filter === 'all') return true;
    // Здесь можно добавить доп. фильтрацию по категориям
    return true;
  });

  const sortedCases = [...filteredCases].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    // По умолчанию сортируем по популярности
    return 0;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4 justify-between items-center">
        <div className="flex gap-2">
          <Button 
            variant={filter === 'all' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setFilter('all')}
          >
            Все кейсы
          </Button>
          <Button 
            variant={filter === 'popular' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setFilter('popular')}
          >
            Популярные
          </Button>
          <Button 
            variant={filter === 'new' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setFilter('new')}
          >
            Новые
          </Button>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Сортировка:</span>
          <select 
            className="bg-secondary border border-border rounded px-2 py-1 text-sm"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="popularity">По популярности</option>
            <option value="price-asc">Сначала дешевые</option>
            <option value="price-desc">Сначала дорогие</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {sortedCases.map((caseItem) => (
          <CaseCard 
            key={caseItem.id} 
            caseData={caseItem} 
            onOpen={onOpenCase}
          />
        ))}
      </div>
      
      {sortedCases.length === 0 && (
        <div className="text-center py-10">
          <Icon name="Package" size={48} className="mx-auto text-muted-foreground mb-4" />
          <p className="text-muted-foreground">Нет доступных кейсов по вашему запросу</p>
        </div>
      )}
    </div>
  );
};

export default CaseGrid;