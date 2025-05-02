import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Navbar = () => {
  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container flex justify-between items-center py-4">
        <div className="flex items-center space-x-1">
          <Link to="/" className="text-2xl font-bold text-primary flex items-center">
            <span className="mr-2">blog</span>
            <span className="text-accent">battle</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">
            Главная
          <Link to="/" className="text-foreground hover:text-primary transition-colors">
            Главная
          </Link>
          <Link to="/upgrades" className="text-foreground hover:text-primary transition-colors">
            Апгрейды
          </Link>
          <Link to="/cases" className="text-foreground hover:text-primary transition-colors">
            Кейсы
          </Link>
            Инвентарь
          </Link>
        </div>

        <div className="flex items-center space-x-3">
          <Button className="bg-accent hover:bg-accent/90 text-white">
            <Icon name="LogIn" size={18} className="mr-2" />
            Войти
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;