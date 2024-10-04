import React from 'react';
import { Card, CardHeader, CardBody, Button, ButtonGroup, Accordion, AccordionItem } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function PatronSelfServiceKioskComponent() {
  const mockData = {
    title: 'Patron Self-Service Kiosk',
    welcomeMessage: 'Welcome to the Library Self-Service Kiosk',
    instructions: 'Please follow the steps below to check out or return books:',
    steps: [
      'Scan your library card',
      'Scan the barcode of each book',
      'Review your transaction',
      'Complete the process'
    ],
    actions: [
      { label: 'Check Out Books', icon: 'book-download' },
      { label: 'Return Books', icon: 'book-upload' }
    ],
    currentLoans: [
      { id: '1', title: 'The Great Gatsby', dueDate: '05/15/2024', status: 'normal' },
      { id: '2', title: 'To Kill a Mockingbird', dueDate: '05/20/2024', status: 'due-soon' },
      { id: '3', title: '1984', dueDate: '05/30/2024', status: 'overdue' }
    ],
    alerts: [
      { message: 'You have 1 book due in 3 days.', dueDate: '05/15/2024', count: 1 },
      { message: 'A book you reserved is now available.' }
    ],
    assistanceInfo: {
      contactNumber: '555-123-4567',
      message: 'Need assistance? Please contact a librarian or call 555-123-4567'
    }
  };

  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      <Card className="w-full bg-[hsl(var(--app-background-50))] shadow-md mb-8">
        <CardHeader className="flex flex-col items-start pb-0">
          <h1 className="text-3xl font-bold text-[hsl(var(--app-foreground-900))] mb-2">
            {mockData.title}
          </h1>
          <p className="text-xl text-[hsl(var(--app-foreground-700))]">
            {mockData.welcomeMessage}
          </p>
        </CardHeader>
        <CardBody className="pt-2">
          <p className="text-[hsl(var(--app-foreground-800))] mb-2">
            {mockData.instructions}
          </p>
          <ol className="list-decimal list-inside mb-4">
            {mockData.steps.map((step, index) => (
              <li key={index} className="text-[hsl(var(--app-foreground-700))]">{step}</li>
            ))}
          </ol>
          <div className="flex gap-4">
            {mockData.actions.map((action, index) => (
              <Button
                key={index}
                color={index === 0 ? 'primary' : 'secondary'}
                className="flex items-center gap-2"
              >
                <Icon icon={`hugeicons:${action.icon}`} width="20" height="20" />
                {action.label}
              </Button>
            ))}
          </div>
        </CardBody>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="h-full bg-[hsl(var(--app-background-50))] shadow-md">
          <CardHeader>
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Icon icon="hugeicons:book-01" className="mr-2" />
              Current Loans
            </h2>
          </CardHeader>
          <CardBody>
            <Accordion>
              {mockData.currentLoans.map((loan) => (
                <AccordionItem
                  key={loan.id}
                  aria-label={`Loan for ${loan.title}`}
                  title={loan.title}
                  subtitle={`Due: ${loan.dueDate}`}
                  className={`mb-2 ${getBorderColorClass(loan.status)}`}
                >
                  <p>Book Title: {loan.title}</p>
                  <p>Due Date: {loan.dueDate}</p>
                  <p>Status: {getStatusText(loan.status)}</p>
                </AccordionItem>
              ))}
            </Accordion>
          </CardBody>
        </Card>

        <Card className="h-full bg-[hsl(var(--app-background-50))] shadow-md">
          <CardHeader className="flex gap-3">
            <Icon icon="hugeicons:alert-circle" className="text-[hsl(var(--app-warning-500))] text-xl" />
            <h2 className="text-xl font-bold text-[hsl(var(--app-foreground-900))]">
              Account Alerts
            </h2>
          </CardHeader>
          <CardBody>
            <ul className="flex flex-col gap-2">
              {mockData.alerts.map((alert, index) => (
                <li
                  key={index}
                  className="bg-[hsl(var(--app-background-100))] p-3 rounded border-l-4 border-[hsl(var(--app-warning-500))]"
                >
                  <p className="text-[hsl(var(--app-foreground-700))]">{alert.message}</p>
                  {alert.dueDate && (
                    <p className="text-sm text-[hsl(var(--app-foreground-500))] mt-1">
                      Due: {alert.dueDate}
                    </p>
                  )}
                  {alert.count && (
                    <p className="text-sm text-[hsl(var(--app-foreground-500))] mt-1">
                      Books affected: {alert.count}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </div>

      <div className="mt-8">
        <Card className="w-full bg-[hsl(var(--app-background-50))] shadow-md">
          <CardBody className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Need assistance?</h2>
              <Icon icon="hugeicons:phone-off-01" className="text-2xl text-[hsl(var(--app-primary-500))]" />
            </div>
            <p className="text-base leading-relaxed mb-4">{mockData.assistanceInfo.message}</p>
            <div className="flex items-center justify-center">
              <a
                href={`tel:${mockData.assistanceInfo.contactNumber}`}
                className="inline-flex items-center justify-center px-4 py-2 bg-[hsl(var(--app-primary-500))] text-white rounded-md hover:bg-[hsl(var(--app-primary-600))] transition-colors"
              >
                <Icon icon="hugeicons:phone-off-02" className="mr-2" />
                Call for Assistance
              </a>
            </div>
          </CardBody>
        </Card>
      </div>
    </main>
  );
}

function getBorderColorClass(status) {
  switch (status) {
    case 'due-soon':
      return 'border-l-4 border-[hsl(var(--app-warning-500))]';
    case 'overdue':
      return 'border-l-4 border-[hsl(var(--app-danger-500))]';
    default:
      return 'border-l-4 border-[hsl(var(--app-primary-500))]';
  }
}

function getStatusText(status) {
  switch (status) {
    case 'due-soon':
      return 'Due Soon';
    case 'overdue':
      return 'Overdue';
    default:
      return 'Normal';
  }
}