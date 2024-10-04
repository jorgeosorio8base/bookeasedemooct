import React from 'react';
import { Card, CardHeader, CardBody, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Checkbox, Button, Text } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function BookRenewalComponent() {
  const mockData = {
    title: 'Book Renewal',
    booksCheckedOut: 3,
    instructions: 'Select the books you wish to renew:',
    newDueDate: 'June 15, 2024',
    note: 'Books that are not eligible for renewal may be on hold or have reached the maximum number of renewals. Please return these items to the library or contact staff for assistance.'
  };

  const mockBooks = [
    { id: '1', title: 'The Great Gatsby', dueDate: 'May 15, 2024', status: 'Eligible' },
    { id: '2', title: 'To Kill a Mockingbird', dueDate: 'May 20, 2024', status: 'Eligible' },
    { id: '3', title: '1984', dueDate: 'May 10, 2024', status: 'Not Eligible' },
  ];

  const columns = [
    { key: 'select', label: 'Select' },
    { key: 'title', label: 'Book Title' },
    { key: 'dueDate', label: 'Due Date' },
    { key: 'status', label: 'Status' },
    { key: 'action', label: 'Action' },
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-12 gap-8">
        <section className="col-span-12">
          <Card className="w-full bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))]">
            <CardHeader className="flex gap-3">
              <Icon icon="hugeicons:book-01" width={40} height={40} className="text-[hsl(var(--app-primary-500))]" />
              <h1 className="text-3xl md:text-4xl font-bold text-[hsl(var(--app-primary-700))]">{mockData.title}</h1>
            </CardHeader>
            <CardBody>
              <p className="text-base md:text-lg text-[hsl(var(--app-foreground-700))]">
                You have {mockData.booksCheckedOut} books currently checked out. {mockData.instructions}
              </p>
            </CardBody>
          </Card>
        </section>

        <section className="col-span-12">
          <div className="bg-[hsl(var(--app-background-100))] rounded-lg shadow-[var(--app-box-shadow-small)] p-6">
            <Table
              aria-label="Book renewal table"
              className="mb-4"
              selectionMode="multiple"
              color="primary"
              isStriped
            >
              <TableHeader>
                {columns.map((column) => (
                  <TableColumn key={column.key}>{column.label}</TableColumn>
                ))}
              </TableHeader>
              <TableBody>
                {mockBooks.map((book) => (
                  <TableRow key={book.id}>
                    <TableCell>
                      <Checkbox aria-label={`Select ${book.title}`} isDisabled={book.status === 'Not Eligible'} />
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Icon icon="hugeicons:book-02" className="mr-2 text-[hsl(var(--app-primary-500))]" />
                        {book.title}
                      </div>
                    </TableCell>
                    <TableCell>{book.dueDate}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          book.status === 'Eligible'
                            ? 'bg-[hsl(var(--app-success-100))] text-[hsl(var(--app-success-700))]'
                            : 'bg-[hsl(var(--app-danger-100))] text-[hsl(var(--app-danger-700))]'
                        }`}
                      >
                        {book.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Button
                        size="sm"
                        color={book.status === 'Eligible' ? 'primary' : 'default'}
                        isDisabled={book.status !== 'Eligible'}
                      >
                        <Icon icon="hugeicons:refresh" className="mr-1" />
                        Renew
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4">
              <Text className="text-sm text-[hsl(var(--app-foreground-600))] mb-4 md:mb-0">
                New due date after renewal: {mockData.newDueDate}
              </Text>
              <Button color="primary" className="px-4 py-2 font-semibold">
                Renew Selected Books
              </Button>
            </div>
          </div>
        </section>

        <section className="col-span-12">
          <Card className="bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))]" shadow="sm">
            <CardBody className="p-4">
              <div className="flex items-center mb-2">
                <Icon
                  icon="hugeicons:book-01"
                  className="text-[hsl(var(--app-primary-500))] text-xl mr-2"
                />
                <h3 className="text-lg font-semibold">Note:</h3>
              </div>
              <p className="text-sm leading-relaxed">{mockData.note}</p>
            </CardBody>
          </Card>
        </section>
      </div>
    </main>
  );
}
