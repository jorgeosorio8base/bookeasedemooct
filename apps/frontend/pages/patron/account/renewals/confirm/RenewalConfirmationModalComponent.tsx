import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button } from '@nextui-org/react';
import { Icon } from '@iconify/react';

const renewalItems = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', dueDate: 'July 15, 2024' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', dueDate: 'July 18, 2024' },
  { title: '1984', author: 'George Orwell', dueDate: 'July 20, 2024' }
];

export function RenewalConfirmationModalComponent() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Card className="max-w-3xl mx-auto bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))]">
        <CardHeader className="flex flex-col items-start gap-2 p-6">
          <div className="flex items-center gap-2">
            <Icon icon="hugeicons:book-01" className="text-2xl text-[hsl(var(--app-primary-500))]" />
            <h1 className="text-2xl font-bold">Renewal Confirmation</h1>
          </div>
          <p className="text-sm text-[hsl(var(--app-foreground-600))]">
            Please review the following items for renewal:
          </p>
          <ul className="list-disc list-inside mt-2">
            {renewalItems.map((item, index) => (
              <li key={index} className="text-sm">
                {item.title} - {item.author}
              </li>
            ))}
          </ul>
        </CardHeader>
        <CardBody>
          <section className="mb-4">
            <h2 className="text-lg font-semibold mb-2">New Due Dates:</h2>
            <ul className="list-disc pl-5">
              {renewalItems.map((item, index) => (
                <li key={index} className="mb-1">{item.title}: {item.dueDate}</li>
              ))}
            </ul>
          </section>
          <section className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Renewal Fees:</h2>
            <p>No fees associated with this renewal.</p>
          </section>
        </CardBody>
        <CardFooter>
          <div className="flex justify-end gap-3 w-full">
            <Button color="danger" variant="light">Cancel</Button>
            <Button color="primary">Confirm Renewal</Button>
          </div>
        </CardFooter>
      </Card>
      <div className="mt-4 text-center text-[hsl(var(--app-foreground-600))]">
        <p>Success!</p>
        <p>Your items have been successfully renewed. The new due dates are reflected above.</p>
      </div>
    </main>
  );
}