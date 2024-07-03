import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { CircleUser, Home, BookOpen, Calculator, Mail, Info } from "lucide-react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { navItems } from "../App";

const Layout = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 right-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 justify-center z-50">
        <nav className="flex items-center gap-5 lg:gap-6 text-lg font-medium md:text-sm justify-center">
          <NavItem
            to="/"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Home className="h-6 w-6" />
            <span className="sr-only">National Pension Scheme</span>
          </NavItem>
          <NavItem to="/" className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            Home
          </NavItem>
          <NavItem to="/blogs" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            Blogs
          </NavItem>
          <NavItem to="/calculators" className="flex items-center gap-2">
            <Calculator className="h-4 w-4" />
            Calculators
          </NavItem>
          <NavItem to="/contact" className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Contact Us
          </NavItem>
          <NavItem to="/about" className="flex items-center gap-2">
            <Info className="h-4 w-4" />
            About Us
          </NavItem>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" onClick={() => navigate("/login")}>
            Sign In
          </Button>
          <Button variant="outline" onClick={() => navigate("/signup")}>
            Sign Up
          </Button>
          <UserMenu />
        </div>
      </header>
      <main className="flex-grow p-4 overflow-auto mt-16">
        <Outlet />
      </main>
    </div>
  );
};

const UserMenu = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="secondary" size="icon" className="rounded-full">
        <CircleUser className="h-5 w-5" />
        <span className="sr-only">Toggle user menu</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Settings</DropdownMenuItem>
      <DropdownMenuItem>Support</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Logout</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

const NavItem = ({ to, children, className }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "transition-colors",
        isActive
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground",
        className,
      )
    }
  >
    {children}
  </NavLink>
);

export default Layout;