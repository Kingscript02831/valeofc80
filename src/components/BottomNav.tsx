
import { Home, Bell, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-1 md:hidden">
      <div className="container mx-auto px-4">
        <div className="flex justify-around items-center">
          <Link
            to="/"
            className={`flex flex-col items-center p-1 ${
              isActive("/") ? "text-primary" : "text-gray-600"
            }`}
          >
            <Home className="h-5 w-5" />
            <span className="text-xs">Início</span>
          </Link>

          <Link
            to="/notifications"
            className={`flex flex-col items-center p-1 ${
              isActive("/notifications") ? "text-primary" : "text-gray-600"
            }`}
          >
            <Bell className="h-5 w-5" />
            <span className="text-xs">Notificações</span>
          </Link>

          <Link
            to="/profile"
            className={`flex flex-col items-center p-1 ${
              isActive("/profile") ? "text-primary" : "text-gray-600"
            }`}
          >
            <User className="h-5 w-5" />
            <span className="text-xs">Eu</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
