import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import CaseGrid from '@/components/cases/CaseGrid';
import BattleGrid from '@/components/battles/BattleGrid';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { mockCases, mockBattles } from '@/data/mockData';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("cases");

  const handleOpenCase = (caseId: string) => {
    toast({
      title: "Открытие кейса",
      description: `Вы выбрали кейс с ID: ${caseId}. Скоро мы добавим возможность открывать кейсы!`,
      duration: 3000,
    });
  };

  const handleJoinBattle = (battleId: string) => {
    toast({
      title: "Присоединение к баттлу",
      description: `Вы пытаетесь присоединиться к баттлу с ID: ${battleId}. Функционал находится в разработке.`,
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative bg-card border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/10 opacity-50"></div>
          <div className="container py-16 relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Открывай кейсы <span className="text-primary">blogbattle</span><br />
                и участвуй в баттлах
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Испытай свою удачу с самыми редкими скинами и оружием из Counter-Strike 2.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Package" size={20} className="mr-2" />
                  Открыть кейсы
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Swords" size={20} className="mr-2" />
                  Создать баттл
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container py-10">
          <Tabs defaultValue="cases" onValueChange={setActiveTab} value={activeTab}>
            <div className="flex justify-between items-center mb-6">
              <TabsList className="grid grid-cols-2 w-[400px]">
                <TabsTrigger value="cases" className="text-base px-6 py-3">
                  <Icon name="Package" size={18} className="mr-2" />
                  Кейсы
                </TabsTrigger>
                <TabsTrigger value="battles" className="text-base px-6 py-3">
                  <Icon name="Swords" size={18} className="mr-2" />
                  Баттлы
                </TabsTrigger>
              </TabsList>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-md border border-border">
                  <Icon name="Wallet" size={18} className="text-primary" />
                  <span className="font-medium">0.00 ₽</span>
                </div>
                <Button size="sm" className="bg-success hover:bg-success/90">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Пополнить
                </Button>
              </div>
            </div>

            <TabsContent value="cases" className="mt-0">
              <CaseGrid cases={mockCases} onOpenCase={handleOpenCase} />
            </TabsContent>
            
            <TabsContent value="battles" className="mt-0">
              <BattleGrid battles={mockBattles} onJoinBattle={handleJoinBattle} />
            </TabsContent>
          </Tabs>
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
              <Button variant="ghost" size="sm">
                <Icon name="Mail" size={16} className="mr-2" />
                Поддержка
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="FileText" size={16} className="mr-2" />
                Условия
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="ShieldAlert" size={16} className="mr-2" />
                Политика
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;