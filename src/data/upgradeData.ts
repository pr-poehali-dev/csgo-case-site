import { UpgradeItemProps } from '@/components/upgrades/UpgradeItem';

// Массив предметов пользователя для апгрейда
export const userItems: UpgradeItemProps[] = [
  {
    id: 'user-item-1',
    name: 'USP-S | Кровавый тигр',
    image: 'https://images.unsplash.com/photo-1624998035495-25fd5004844e?q=80&w=200&auto=format&fit=crop',
    rarity: {
      name: 'Rare',
      color: 'hsl(var(--rare))'
    },
    price: 1500,
    wear: 0.12
  },
  {
    id: 'user-item-2',
    name: 'Glock-18 | Водяной',
    image: 'https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?q=80&w=200&auto=format&fit=crop',
    rarity: {
      name: 'Uncommon',
      color: 'hsl(var(--uncommon))'
    },
    price: 650,
    wear: 0.08
  },
  {
    id: 'user-item-3',
    name: 'M4A4 | Император',
    image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=200&auto=format&fit=crop',
    rarity: {
      name: 'Mythical',
      color: 'hsl(var(--mythical))'
    },
    price: 3200,
    wear: 0.23
  },
  {
    id: 'user-item-4',
    name: 'P250 | Supernova',
    image: 'https://images.unsplash.com/photo-1605142859862-978be7eba909?q=80&w=200&auto=format&fit=crop',
    rarity: {
      name: 'Common',
      color: 'hsl(var(--common))'
    },
    price: 320,
    wear: 0.35
  }
];

// Массив целевых предметов для апгрейда
export const targetItems: UpgradeItemProps[] = [
  {
    id: 'target-item-1',
    name: 'AK-47 | Вулкан',
    image: 'https://images.unsplash.com/photo-1595377864610-35c4c1c98352?q=80&w=200&auto=format&fit=crop',
    rarity: {
      name: 'Legendary',
      color: 'hsl(var(--legendary))'
    },
    price: 5800,
    wear: 0.05
  },
  {
    id: 'target-item-2',
    name: 'AWP | Асимов',
    image: 'https://images.unsplash.com/photo-1611462985358-60d3498e0364?q=80&w=200&auto=format&fit=crop',
    rarity: {
      name: 'Ancient',
      color: 'hsl(var(--ancient))'
    },
    price: 9500,
    wear: 0.18
  },
  {
    id: 'target-item-3',
    name: 'Desert Eagle | Пламя',
    image: 'https://images.unsplash.com/photo-1620294347966-edcc7a898135?q=80&w=200&auto=format&fit=crop',
    rarity: {
      name: 'Mythical',
      color: 'hsl(var(--mythical))'
    },
    price: 4200,
    wear: 0.07
  },
  {
    id: 'target-item-4',
    name: 'M4A1-S | Чистая вода',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=200&auto=format&fit=crop',
    rarity: {
      name: 'Rare',
      color: 'hsl(var(--rare))'
    },
    price: 2800,
    wear: 0.12
  }
];
