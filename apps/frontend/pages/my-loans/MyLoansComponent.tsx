import React from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Card, CardHeader } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function MyLoansComponent() {
  const mockLoans = [
    { id: '1', bookTitle: 'The Great Gatsby', dueDate: 'May 15, 2024' },
    { id: '2', bookTitle: 'To Kill a Mockingbird', dueDate: 'May 20, 2024' },
  ];

  const mockHoldRequests = [
    { id: '1', bookTitle: '1984', requestDate: 'April 30, 2024', status: 'Pending' },
    { id: '2', bookTitle: 'Pride and Prejudice', requestDate: 'May 2, 2024', status: 'Ready for Pickup' }
  ];

  const mockLoanHistory = [
    {
      id: '1',
      bookTitle: 'The Catcher in the Rye',
      borrowedDate: 'March 1, 2024',
      returnedDate: 'March 15, 2024'
    },
    {
      id: '2',
      bookTitle: 'Moby Dick',
      borrowedDate: 'February 15, 2024',
      returnedDate: 'March 1, 2024'
    }
  ];

  return (
    <main className="grid grid-cols-12 gap-4 p-4 bg-[hsl(var(--app-background-50))]">
      <section className="col-span-12">
        <Card
          className="w-full bg-[hsl(var(--app-background-50))] border-b border-[hsl(var(--app-foreground-200))]"
          radius="none"
          shadow="none"
        >
          <CardHeader className="p-4">
            <h1 className="text-3xl font-bold text-[hsl(var(--app-foreground-900))]">
              My Loans
            </h1>
          </CardHeader>
        </Card>
      </section>

      <section className="col-span-12 lg:col-span-6">
        <div className="bg-[hsl(var(--app-background-50))] p-4 rounded-lg shadow-md h-full">
          <h2 className="text-2xl font-bold mb-4 text-[hsl(var(--app-foreground-900))]">
            Current Loans
          </h2>
          <Table aria-label="Current loans table" className="w-full">
            <TableHeader>
              <TableColumn>Book Title</TableColumn>
              <TableColumn>Due Date</TableColumn>
              <TableColumn>Actions</TableColumn>
            </TableHeader>
            <TableBody>
              {mockLoans.map((loan) => (
                <TableRow key={loan.id}>
                  <TableCell>
                    <div className="flex items-center">
                      <Icon icon="hugeicons:book-01" className="mr-2" />
                      {loan.bookTitle}
                    </div>
                  </TableCell>
                  <TableCell>{loan.dueDate}</TableCell>
                  <TableCell>
                    <div className="flex justify-center gap-2">
                      <Button size="sm" color="primary" aria-label="Renew book loan">
                        Renew
                      </Button>
                      <Button size="sm" color="secondary" aria-label="Return book">
                        Return
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      <section className="col-span-12 lg:col-span-6">
        <div className="bg-[hsl(var(--app-background-50))] p-4 rounded-lg shadow-md h-full">
          <h2 className="text-[hsl(var(--app-foreground-900))] text-xl font-semibold mb-4 flex items-center">
            <Icon icon="hugeicons:book-01" className="mr-2" />
            Hold Requests
          </h2>
          <Table 
            aria-label="Hold requests table"
            className="w-full border border-[hsl(var(--app-background-200))] rounded-lg bg-[hsl(var(--app-background-50))]"
          >
            <TableHeader>
              <TableColumn className="text-left font-semibold text-[hsl(var(--app-foreground-800))]">
                Book Title
              </TableColumn>
              <TableColumn className="text-left font-semibold text-[hsl(var(--app-foreground-800))]">
                Request Date
              </TableColumn>
              <TableColumn className="text-left font-semibold text-[hsl(var(--app-foreground-800))]">
                Status
              </TableColumn>
            </TableHeader>
            <TableBody>
              {mockHoldRequests.map((request) => (
                <TableRow key={request.id} className="hover:bg-[hsl(var(--app-background-100))]">
                  <TableCell className="text-[hsl(var(--app-foreground-700))]">
                    {request.bookTitle}
                  </TableCell>
                  <TableCell className="text-[hsl(var(--app-foreground-600))]">
                    {request.requestDate}
                  </TableCell>
                  <TableCell className="text-[hsl(var(--app-foreground-700))]">
                    {request.status}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      <section className="col-span-12">
        <div className="bg-[hsl(var(--app-background-50))] p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-[hsl(var(--app-foreground-900))] flex items-center">
            <Icon icon="hugeicons:book-open-01" className="mr-2" />
            Loan History
          </h2>
          <Table 
            aria-label="Loan history table"
            className="w-full"
            removeWrapper
          >
            <TableHeader>
              <TableColumn>Book Title</TableColumn>
              <TableColumn>Borrowed Date</TableColumn>
              <TableColumn>Returned Date</TableColumn>
            </TableHeader>
            <TableBody>
              {mockLoanHistory.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.bookTitle}</TableCell>
                  <TableCell>{item.borrowedDate}</TableCell>
                  <TableCell>{item.returnedDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
    </main>
  );
}