import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Checkbox, Button, Link } from '@nextui-org/react';

export function UserLoginComponent() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[hsl(var(--app-background-100))]">
      <div className="w-full max-w-md px-4 py-8">
        <Card className="bg-[hsl(var(--app-background-50))] shadow-[var(--app-box-shadow-medium)] border border-[hsl(var(--app-foreground-200))] rounded-lg">
          <CardHeader className="p-6 border-b border-[hsl(var(--app-foreground-200))]">
            <h1 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))]">Login</h1>
          </CardHeader>
          <CardBody className="p-6">
            <Input
              label="Username or Email"
              placeholder="Enter your username or email"
              className="mb-4"
            />
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              className="mb-4"
            />
            <div className="flex items-center justify-between mb-6">
              <Checkbox defaultSelected>Remember me</Checkbox>
              <Link href="#" className="text-[hsl(var(--app-primary-500))] hover:underline">
                Forgot password?
              </Link>
            </div>
            <Button className="w-full bg-[hsl(var(--app-primary-500))] text-white hover:bg-[hsl(var(--app-primary-600))]">
              Log In
            </Button>
          </CardBody>
          <CardFooter className="p-6 border-t border-[hsl(var(--app-foreground-200))]">
            <div className="flex justify-center items-center w-full">
              <span className="mr-2 text-[hsl(var(--app-foreground-600))]">Don't have an account?</span>
              <Link href="#" className="text-[hsl(var(--app-primary-500))] hover:underline">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}