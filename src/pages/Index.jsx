import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-3xl">Welcome to the National Pension Scheme</h1>
      <p>Secure your future by investing in the National Pension Scheme.</p>
      <div className="space-x-4">
        <Button onClick={() => navigate("/signup")}>Sign Up</Button>
        <Button variant="outline" onClick={() => navigate("/login")}>
          Log In
        </Button>
      </div>
    </div>
  );
};

export default Index;
