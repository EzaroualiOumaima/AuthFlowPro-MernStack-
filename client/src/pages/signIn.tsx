import { AppDispatch } from "@/Store/store";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginUser } from "@/slices/authSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function SignInForm() {
  const dispatch = useDispatch<AppDispatch>();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    dispatch(loginUser(credentials));
  };

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden ">
      <div className="bg-white max-w-xl w-full mx-auto">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Login</CardTitle>
            <CardDescription className="text-center">
              Enter your email and password to sign in
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder=""
                onChange={(e) =>
                  setCredentials({ ...credentials, email: e.target.value })
                }
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
              />
            </div>
            <span className=" text-blue-600 hover:underline text-sm">
              Forget password ?
            </span>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="w-full" onClick={handleLogin}>
              Sign In
            </Button>
            <p className="mt-2 text-xs text-center text-gray-700">
              {" "}
              Don't have an account?{" "}
              <span className=" text-blue-600 hover:underline">Sign Up</span>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
