import React from 'react';
import { Card, CardHeader, CardBody, Button, Select, SelectItem, Input, Spacer } from '@nextui-org/react';
import { Icon } from '@iconify/react';

const userRoles = ['Patron', 'Librarian', 'Administrator'];
const mockOutstandingFines = 15.50;

export function AccountActionsModalComponent() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Card className="w-full bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] shadow-[var(--app-box-shadow-medium)]">
        <CardHeader className="flex flex-col items-start px-6 pt-6 pb-0">
          <h1 className="text-2xl font-bold">Account Actions</h1>
        </CardHeader>
        <CardBody className="flex flex-col gap-8 px-6 py-6">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4 h-full">
              <h2 className="text-xl font-semibold">Deactivate Account</h2>
              <p className="text-sm text-[hsl(var(--app-foreground-700))]">
                <Icon icon="hugeicons:alert-circle" className="inline-block mr-2 text-[hsl(var(--app-warning-500))]" />
                Warning: This action will temporarily disable the user's account. They will not be able to borrow books or access library services.
              </p>
              <Button color="danger" variant="flat" className="self-start mt-auto">
                Deactivate Account
              </Button>
            </div>
            <div className="flex flex-col gap-4 h-full">
              <h2 className="text-xl font-semibold">Change User Role</h2>
              <p className="text-sm">Select a new role for the user:</p>
              <Select
                placeholder="Select a role"
                className="max-w-xs"
              >
                {userRoles.map((role) => (
                  <SelectItem key={role} value={role}>
                    {role}
                  </SelectItem>
                ))}
              </Select>
              <Button color="primary" className="self-start mt-auto">
                Update Role
              </Button>
            </div>
          </section>
          <section className="w-full">
            <h2 className="text-xl font-semibold mb-4">Manage Fines</h2>
            <p className="text-sm mb-4">Current outstanding fines: ${mockOutstandingFines.toFixed(2)}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="number"
                label="Amount"
                placeholder="Enter amount"
                startContent={
                  <div className="pointer-events-none flex items-center">
                    <span className="text-default-400 text-small">$</span>
                  </div>
                }
              />
              <div className="flex flex-wrap gap-2">
                <Button color="primary" variant="flat">
                  Pay Fine
                </Button>
                <Button color="secondary" variant="flat">
                  Waive Fine
                </Button>
              </div>
            </div>
            <Spacer y={4} />
            <div className="flex justify-end gap-2">
              <Button color="default">
                Cancel
              </Button>
              <Button color="success">
                Confirm Changes
              </Button>
            </div>
          </section>
        </CardBody>
      </Card>
    </main>
  );
}
