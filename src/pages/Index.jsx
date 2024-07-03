import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Package2, Star, User } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Welcome to the National Pension Scheme</h1>
        <p className="text-xl">Secure your future by investing in the National Pension Scheme.</p>
        <Button onClick={() => navigate("/signup")}>Get Started</Button>
      </section>

      {/* Segment One */}
      <section className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="md:w-1/2">
          <img src="/images/segment1.jpg" alt="Segment 1" className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-semibold">Segment One</h2>
          <p className="text-lg">Description for segment one goes here.</p>
        </div>
      </section>

      {/* Segment Two */}
      <section className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-semibold">Segment Two</h2>
          <p className="text-lg">Description for segment two goes here.</p>
        </div>
        <div className="md:w-1/2">
          <img src="/images/segment2.jpg" alt="Segment 2" className="w-full h-auto" />
        </div>
      </section>

      {/* Segment Three */}
      <section className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="md:w-1/2">
          <img src="/images/segment3.jpg" alt="Segment 3" className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-semibold">Segment Three</h2>
          <p className="text-lg">Description for segment three goes here.</p>
        </div>
      </section>

      {/* Segment Four */}
      <section className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-semibold">Segment Four</h2>
          <p className="text-lg">Description for segment four goes here.</p>
        </div>
        <div className="md:w-1/2">
          <img src="/images/segment4.jpg" alt="Segment 4" className="w-full h-auto" />
        </div>
      </section>

      {/* Segment Five */}
      <section className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="md:w-1/2">
          <img src="/images/segment5.jpg" alt="Segment 5" className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-semibold">Segment Five</h2>
          <p className="text-lg">Description for segment five goes here.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-4 border-t text-center">
        <div className="space-x-4">
          <a href="/about" className="text-muted-foreground hover:text-foreground">About Us</a>
          <a href="/contact" className="text-muted-foreground hover:text-foreground">Contact</a>
          <a href="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</a>
        </div>
        <div className="mt-4 space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;