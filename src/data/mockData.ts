import { CaseType } from '@/components/cases/CaseCard';
import { BattleType } from '@/components/battles/BattleCard';

// Данные для кейсов
export const mockCases: CaseType[] = [
  {
    id: '1',
    name: 'Классический кейс',
    image: 'https://images.unsplash.com/photo-1595151405041-b10b23811929?q=80&w=200&auto=format&fit=crop',
    price: 250,
    items: [
      {
        id: 'item1',
        name: 'AK-47 | Вулкан',
        image: 'https://images.unsplash.com/photo-1595377864610-35c4c1c98352?q=80&w=200&auto=format&fit=crop',
        rarity: { name: 'Rare', color: 'text-[hsl(var(--rare))]', chance: 15 },
        price: 3500
      },
      {
        id: 'item2',
        name: 'M4A4 | Азимов',
        image: 'https://images.unsplash.com/photo-1666091863721-54331a6d7c06?q=80&w=200&auto=format&fit=crop',
        rarity: { name: 'Mythical', color: 'text-[hsl(var(--mythical))]', chance: 7 },
        price: 5200
      },
      {
        id: 'item3',
        name: 'Desert Eagle | Пламя',
        image: 'https://images.unsplash.com/photo-1620294347966-edcc7a898135?q=80&w=200&auto=format&fit=crop',
        rarity: { name: 'Legendary', color: 'text-[hsl(var(--legendary))]', chance: 3 },
        price: 12000
      },
      {
        id: 'item4',
        name: 'P250 | Песчаная дюна',
        image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=200&auto=format&fit=crop',
        rarity: { name: 'Common', color: 'text-[hsl(var(--common))]', chance: 40 },
        price: 120
      },
      {
        id: 'item5',
        name: 'Glock-18 | Градиент',
        image: 'https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=200&auto=format&fit=crop',
        rarity: { name: 'Uncommon', color: 'text-[hsl(var(--uncommon))]', chance: 25 },
        price: 650
      }
    ]
  },
  {
    id: '2',
    name: 'Премиум кейс',
    image: 'https://images.unsplash.com/photo-1646326335135-082406e36ad4?q=80&w=200&auto=format&fit=crop',
    price: 500,
    items: [
      {
        id: 'item6',
        name: 'AWP | Дракон',
        image: 'https://images.unsplash.com/photo-1620039476094-7bb0c8c22f05?q=80&w=200&auto=format&fit=crop',
        rarity: { name: 'Ancient', color: 'text-[hsl(var(--ancient))]', chance: 1 },
        price: 25000
      },
      {
        id: 'item7',
        name: 'USP-S | Убийство',
        image: 'https://images.unsplash.com/photo-1618945524163-32451704cbb8?q=80&w=200&auto=format&fit=crop',
        rarity: { name: 'Mythical', color: 'text-[hsl(var(--mythical))]', chance: 10 },
        price: 4800
      },
      {
        id: 'item8',
        name: 'M4A1-S | Кибер',
        image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=200&auto=format&fit=crop',
        rarity: { name: 'Legendary', color: 'text-[hsl(var(--legendary))]', chance: 5 },
        price: 8500
      }
    ]
  },
  {
    id: '3',
    name: 'Кейс с ножами',
    image: 'https://images.unsplash.com/photo-1619597361832-a568b1e0555f?q=80&w=200&auto=format&fit=crop',
    price: 1200,
    items: [
      {
        id: 'item9',
        name: 'Нож Керамбит | Градиент',
        image: 'https://images.unsplash.com/photo-1555431189-0fabf2667795?q=80&w=200&auto=format&fit=crop',
        rarity: { name: 'Ancient', color: 'text-[hsl(var(--ancient))]', chance: 2 },
        price: 35000
      },
      {
        id: 'item10',
        name: 'Нож-бабочка | Кровавая паутина',
        image: 'https://images.unsplash.com/photo-1554224311-beee415c201e?q=80&w=200&auto=format&fit=crop',
        rarity: { name: 'Ancient', color: 'text-[hsl(var(--ancient))]', chance: 1 },
        price: 42000
      }
    ]
  },
  {
    id: '4',
    name: 'Кейс операции',
    image: 'https://images.unsplash.com/photo-1615834292198-5dedad1c2328?q=80&w=200&auto=format&fit=crop',
    price: 350,
    items: [
      {
        id: 'item11',
        name: 'AK-47 | Неоновая революция',
        image: 'https://images.unsplash.com/photo-1640622307906-8696cf8e945c?q=80&w=200&auto=format&fit=crop',
        rarity: { name: 'Mythical', color: 'text-[hsl(var(--mythical))]', chance: 8 },
        price: 6800
      },
      {
        id: 'item12',
        name: 'AWP | Дикая молния',
        image: 'https://images.unsplash.com/photo-1536218156291-6c6842182b1f?q=80&w=200&auto=format&fit=crop',
        rarity: { name: 'Legendary', color: 'text-[hsl(var(--legendary))]', chance: 4 },
        price: 9500
      }
    ]
  },
  {
    id: '5',
    name: 'Кейс с перчатками',
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=200&auto=format&fit=crop',
    price: 850,
    items: [
      {
        id: 'item13',
        name: 'Перчатки спецназа | Изумруд',
        image: 'https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?q=80&w=200&auto=format&fit=crop',
        rarity: { name: 'Ancient', color: 'text-[hsl(var(--ancient))]', chance: 2 },
        price: 28000
      },
      {
        id: 'item14',
        name: 'Водительские перчатки | Багровый узор',
        image: 'https://images.unsplash.com/photo-1559616003-84ebcca59e14?q=80&w=200&auto=format&fit=crop',
        rarity: { name: 'Legendary', color: 'text-[hsl(var(--legendary))]', chance: 5 },
        price: 15000
      }
    ]
  }
];

// Данные для баттлов
export const mockBattles: BattleType[] = [
  {
    id: 'battle1',
    name: 'Стандартный дуэль',
    cases: [mockCases[0], mockCases[1]],
    players: [
      { id: 'player1', name: 'ProGamer', avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=100&auto=format&fit=crop' }
    ],
    maxPlayers: 2,
    status: 'waiting',
    price: 750
  },
  {
    id: 'battle2',
    name: 'Битва кейсов',
    cases: [mockCases[2], mockCases[3], mockCases[4]],
    players: [
      { id: 'player2', name: 'Sniper_Elite', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop' },
      { id: 'player3', name: 'CS_Master', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop' }
    ],
    maxPlayers: 4,
    status: 'waiting',
    price: 2000
  },
  {
    id: 'battle3',
    name: 'VIP Баттл',
    cases: [mockCases[2], mockCases[4]],
    players: [
      { id: 'player4', name: 'Knife_Collector', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop' },
      { id: 'player5', name: 'Headshot_King', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop' },
      { id: 'player6', name: 'GunMaster', avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100&auto=format&fit=crop' }
    ],
    maxPlayers: 3,
    status: 'in-progress',
    price: 2050
  }
];
