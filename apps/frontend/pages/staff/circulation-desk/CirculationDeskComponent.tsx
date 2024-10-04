import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function CirculationDeskComponent() {
  const navigationItems = [
    { id: 'checkout', label: 'Book Checkout', isActive: true },
    { id: 'return', label: 'Book Return', isActive: false },
  ];

  const checkoutData = {
    title: 'Book Checkout',
    placeholders: {
      barcode: 'Scan Book Barcode',
      patronId: 'Enter Patron ID'
    },
    buttonText: 'Check Out'
  };

  const returnData = {
    title: 'Book Return',
    inputPlaceholder: 'Scan or enter barcode',
    buttonText: 'Return Book'
  };

  const patronData = {
    name: 'John Doe',
    id: '12345',
    booksCheckedOut: 3,
    overdueItems: 1
  };

  const mockTransactions = [
    { id: '1', bookTitle: 'The Great Gatsby', action: 'Checked Out', date: '2023-06-15', dueDate: '2023-07-06' },
    { id: '2', bookTitle: 'To Kill a Mockingbird', action: 'Returned', date: '2023-06-14', dueDate: null },
    { id: '3', bookTitle: '1984', action: 'Checked Out', date: '2023-06-10', dueDate: '2023-07-01' }
  ];

  const mockAlerts = [
    {
      type: 'Overdue book',
      message: '"The Catcher in the Rye" - Due 3 days ago',
      date: '2023-06-18'
    },
    {
      type: 'Hold available',
      message: '"Pride and Prejudice" - Ready for pickup',
      date: '2023-06-20'
    }
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-12 gap-6">
        <section className="col-span-12">
          <Card className="w-full bg-[hsl(var(--app-background-100))] text-[hsl(var(--app-foreground-900))] appshadow-[var(--app-box-shadow-small)]">
            <CardHeader className="flex flex-col items-start pb-0">
              <div className="flex items-center">
                <Icon icon="hugeicons:book-01" className="text-[hsl(var(--app-primary-700))] text-2xl mr-2" />
                <h1 className="text-2xl md:text-3xl font-bold text-[hsl(var(--app-primary-700))]">Circulation Desk</h1>
              </div>
            </CardHeader>
            <CardBody>
              <nav className="flex flex-wrap gap-2 mt-2">
                {navigationItems.map((item) => (
                  <Button
                    key={item.id}
                    auto
                    light={!item.isActive}
                    color={item.isActive ? 'primary' : 'default'}
                    className={`px-3 py-1 rounded font-medium transition-colors duration-150 ${item.isActive ? 'bg-[hsl(var(--app-primary-300))] text-[hsl(var(--app-primary-900))]' : 'bg-[hsl(var(--app-primary-100))] text-[hsl(var(--app-primary-700))] hover:bg-[hsl(var(--app-primary-200))]'}`}
                    aria-current={item.isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </Button>
                ))}
              </nav>
            </CardBody>
          </Card>
        </section>

        <section className="col-span-12 md:col-span-6 lg:col-span-4">
          <Card className="h-full bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] appShadow-[var(--app-box-shadow-medium)] rounded-lg">
            <CardHeader className="flex gap-3">
              <Icon icon="hugeicons:book-01" width="24" height="24" />
              <h2 className="text-xl font-bold">{checkoutData.title}</h2>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <Input
                label={checkoutData.placeholders.barcode}
                placeholder={checkoutData.placeholders.barcode}
                className="w-full"
              />
              <Input
                label={checkoutData.placeholders.patronId}
                placeholder={checkoutData.placeholders.patronId}
                className="w-full"
              />
            </CardBody>
            <CardFooter>
              <Button color="primary" className="w-full">{checkoutData.buttonText}</Button>
            </CardFooter>
          </Card>
        </section>

        <section className="col-span-12 md:col-span-6 lg:col-span-4">
          <Card className="h-full w-full bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] appshadow-[var(--app-box-shadow-medium)] border border-[hsl(var(--app-primary-200))] rounded-lg">
            <CardHeader className="p-4 border-b border-[hsl(var(--app-primary-100))] bg-[hsl(var(--app-background-100))]">
              <h3 className="text-xl font-semibold">{returnData.title}</h3>
            </CardHeader>
            <CardBody className="p-4 flex flex-col gap-4">
              <Input
                placeholder={returnData.inputPlaceholder}
                startContent={<Icon icon="hugeicons:book-open-01" className="text-[hsl(var(--app-foreground-400))]" />}
                className="w-full"
              />
              <Button
                color="primary"
                className="w-full bg-[hsl(var(--app-primary-500))] text-white hover:bg-[hsl(var(--app-primary-600))] active:bg-[hsl(var(--app-primary-700))]"
              >
                {returnData.buttonText}
              </Button>
            </CardBody>
          </Card>
        </section>

        <section className="col-span-12 md:col-span-6 lg:col-span-4">
          <Card className="h-full w-full bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] rounded-lg appshadow-[var(--app-box-shadow-medium)]">
            <CardHeader className="flex justify-between items-center p-4 bg-[hsl(var(--app-background-100))] border-b border-[hsl(var(--app-background-200))]">
              <h3 className="text-xl font-semibold text-[hsl(var(--app-foreground-800))]">Patron Information</h3>
              <Icon icon="hugeicons:account-setting-01" width="24" height="24" />
            </CardHeader>
            <CardBody className="p-4 flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <span className="font-medium text-[hsl(var(--app-foreground-700))]">Name</span>
                <span className="font-semibold">{patronData.name}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-[hsl(var(--app-foreground-700))]">ID</span>
                <span className="font-semibold">{patronData.id}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-[hsl(var(--app-foreground-700))]">Books Checked Out</span>
                <span className="font-semibold">{patronData.booksCheckedOut}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-[hsl(var(--app-foreground-700))]">Overdue Items</span>
                <span className={`font-semibold ${patronData.overdueItems > 0 ? 'text-[hsl(var(--app-danger-500))]' : ''}`}>
                  {patronData.overdueItems}
                </span>
              </div>
            </CardBody>
          </Card>
        </section>

        <section className="col-span-12 lg:col-span-8">
          <div className="bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] rounded-lg appShadow-[var(--app-box-shadow-medium)] p-4 h-full font-sans text-sm">
            <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
            <Table
              aria-label="Recent book transactions table"
              className="min-w-full"
              classNames={{
                base: 'max-h-[400px] overflow-y-auto',
                table: 'min-w-full',
                th: 'bg-[hsl(var(--app-background-100))] text-[hsl(var(--app-foreground-900))] font-semibold py-2 px-4',
                td: 'py-2 px-4'
              }}
            >
              <TableHeader>
                <TableColumn>Book Title</TableColumn>
                <TableColumn>Action</TableColumn>
                <TableColumn>Date</TableColumn>
                <TableColumn>Due Date</TableColumn>
              </TableHeader>
              <TableBody>
                {mockTransactions.map((transaction) => (
                  <TableRow key={transaction.id} className="hover:bg-[hsl(var(--app-background-200))] transition-colors duration-150">
                    <TableCell>
                      <div className="flex items-center">
                        <Icon icon="hugeicons:book-01" className="mr-2" />
                        {transaction.bookTitle}
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className={transaction.action === 'Checked Out' ? 'text-[hsl(var(--app-warning-500))]' : 'text-[hsl(var(--app-success-500))]'}>
                        {transaction.action}
                      </span>
                    </TableCell>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>{transaction.dueDate || 'N/A'}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="mt-4 flex justify-end">
              <Pagination total={10} initialPage={1} />
            </div>
          </div>
        </section>

        <section className="col-span-12 lg:col-span-4">
          <Card className="h-full w-full max-w-md mx-auto">
            <CardHeader className="flex justify-between items-center bg-[hsl(var(--app-primary-100))] p-4">
              <h2 className="text-lg font-bold text-[hsl(var(--app-foreground-900))]">Alerts</h2>
              <Icon icon="hugeicons:alert-circle" className="text-2xl text-[hsl(var(--app-foreground-700))]" />
            </CardHeader>
            <CardBody className="bg-[hsl(var(--app-background-100))] p-4">
              <ul className="list-none p-0 m-0">
                {mockAlerts.map((alert, index) => (
                  <li key={index} className="py-3 border-b border-[hsl(var(--app-foreground-200))] last:border-b-0">
                    <div className="font-semibold text-[hsl(var(--app-foreground-800))]">{alert.type}</div>
                    <div className="text-sm text-[hsl(var(--app-foreground-600))]">{alert.message}</div>
                    {alert.date && (
                      <div className="text-xs text-[hsl(var(--app-foreground-500))] mt-1">{alert.date}</div>
                    )}
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
        </section>
      </div>
    </main>
  );
}
