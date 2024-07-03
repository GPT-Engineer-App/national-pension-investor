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

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <Card>
          <CardHeader>
            <Package2 className="h-12 w-12 mx-auto text-primary" />
            <CardTitle>Feature One</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Benefit from our comprehensive pension plans tailored to your needs.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Star className="h-12 w-12 mx-auto text-primary" />
            <CardTitle>Feature Two</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Enjoy tax benefits and secure your financial future with ease.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <User className="h-12 w-12 mx-auto text-primary" />
            <CardTitle>Feature Three</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Get personalized support and guidance from our expert advisors.</p>
          </CardContent>
        </Card>
      </section>

      {/* Testimonials Section */}
      <section className="space-y-8 text-center">
        <h2 className="text-3xl font-semibold">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Avatar className="mx-auto">
                <AvatarImage src="/images/user1.jpg" alt="User 1" />
                <AvatarFallback>U1</AvatarFallback>
              </Avatar>
              <CardTitle>John Doe</CardTitle>
            </CardHeader>
            <CardContent>
              <p>"The National Pension Scheme has given me peace of mind for my retirement."</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Avatar className="mx-auto">
                <AvatarImage src="/images/user2.jpg" alt="User 2" />
                <AvatarFallback>U2</AvatarFallback>
              </Avatar>
              <CardTitle>Jane Smith</CardTitle>
            </CardHeader>
            <CardContent>
              <p>"I love the tax benefits and the personalized support I receive."</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Avatar className="mx-auto">
                <AvatarImage src="/images/user3.jpg" alt="User 3" />
                <AvatarFallback>U3</AvatarFallback>
              </Avatar>
              <CardTitle>Robert Brown</CardTitle>
            </CardHeader>
            <CardContent>
              <p>"Investing in the National Pension Scheme was the best decision I made."</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-semibold">Ready to Secure Your Future?</h2>
        <Button onClick={() => navigate("/signup")}>Sign Up Now</Button>
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