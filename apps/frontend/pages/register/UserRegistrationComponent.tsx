import React from 'react';
import { Input, Button, Checkbox, Link } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function UserRegistrationComponent() {
  const mockTermsAndConditions = 'https://example.com/terms';

  return (
    <main className="min-h-screen bg-[hsl(var(--app-background-100))] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] font-sans p-6 rounded-lg shadow-[var(--app-box-shadow-medium)]">
          <h2 className="text-2xl font-bold mb-6">User Registration</h2>
          <form className="space-y-4">
            <Input
              label="Full Name"
              placeholder="Enter your full name"
              variant="bordered"
              isRequired
            />
            <Input
              label="Email Address"
              placeholder="Enter your email"
              type="email"
              variant="bordered"
              isRequired
            />
            <Input
              label="Library Card Number"
              placeholder="Enter your library card number"
              variant="bordered"
              isRequired
            />
            <Input
              label="Password"
              placeholder="Enter your password"
              type="password"
              variant="bordered"
              isRequired
              endContent={
                <button className="focus:outline-none" type="button">
                  <Icon icon="hugeicons:eye" className="text-2xl text-default-400 pointer-events-none" />
                </button>
              }
            />
            <Input
              label="Confirm Password"
              placeholder="Confirm your password"
              type="password"
              variant="bordered"
              isRequired
            />
            <Checkbox>
              I agree to the <Link href={mockTermsAndConditions} size="sm" isExternal>Terms and Conditions</Link>
            </Checkbox>
            <Button color="primary" className="w-full">
              Register
            </Button>
          </form>
          <div className="mt-4 text-center">
            <span>Already have an account? </span>
            <Link href="#" size="sm">Sign in</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
