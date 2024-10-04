import React from 'react';
import { Card, CardHeader, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Input, Textarea } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function BookOrderManagementComponent() {
  const headerTitle = 'Book Order Management';

  const mockOrders = [
    { id: 'ORD001', supplier: 'BookWorld Inc.', dateOrdered: '2023-05-15', status: 'Pending' },
    { id: 'ORD002', supplier: 'Literary Supplies Co.', dateOrdered: '2023-05-10', status: 'Shipped' },
  ];

  const columns = [
    { key: 'id', label: 'Order ID' },
    { key: 'supplier', label: 'Supplier' },
    { key: 'dateOrdered', label: 'Date Ordered' },
    { key: 'status', label: 'Status' },
    { key: 'actions', label: 'Actions' },
  ];

  const mockSuppliers = ['BookWorld Inc.', 'Literary Supplies Co.', 'Novel Distributors'];

  const mockBooks = [
    {
      id: '1',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      receivedDate: '2023-05-18'
    },
    {
      id: '2',
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      receivedDate: '2023-05-17'
    },
    {
      id: '3',
      title: '1984',
      author: 'George Orwell',
      receivedDate: '2023-05-16'
    }
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <Card className="w-full bg-[hsl(var(--app-background-50))] shadow-[var(--app-box-shadow-small)] mb-8" radius="lg">
        <CardHeader className="flex justify-between items-center p-4">
          <div className="flex items-center">
            <Icon
              icon="hugeicons:book-01"
              className="text-[hsl(var(--app-primary-500))] text-2xl mr-2"
            />
            <h1 className="text-[hsl(var(--app-foreground-900))] text-xl font-bold">
              {headerTitle}
            </h1>
          </div>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <section className="lg:col-span-8">
          <h2 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] mb-4">Current Orders</h2>
          <Card className="w-full bg-[hsl(var(--app-background-100))] shadow-[var(--app-box-shadow-small)]" radius="lg">
            <Table aria-label="Current book orders">
              <TableHeader>
                {columns.map((column) => (
                  <TableColumn 
                    key={column.key}
                    className="bg-[hsl(var(--app-background-200))] font-semibold text-[hsl(var(--app-foreground-800))]"
                  >
                    {column.label}
                  </TableColumn>
                ))}
              </TableHeader>
              <TableBody>
                {mockOrders.map((order) => (
                  <TableRow key={order.id} className="even:bg-[hsl(var(--app-background-50))] odd:bg-[hsl(var(--app-background-100))] hover:bg-[hsl(var(--app-background-200))]">
                    {(columnKey) => (
                      <TableCell className="p-2 border-b border-[hsl(var(--app-border-100))]">
                        {columnKey === 'actions' ? (
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              className="bg-[hsl(var(--app-primary-500))] text-white hover:bg-[hsl(var(--app-primary-600))] px-3 py-1 rounded"
                            >
                              <Icon icon="hugeicons:arrow-reload-horizontal" className="mr-1" />
                              Update
                            </Button>
                            <Button
                              size="sm"
                              className="bg-[hsl(var(--app-secondary-500))] text-white hover:bg-[hsl(var(--app-secondary-600))] px-3 py-1 rounded"
                            >
                              <Icon icon="hugeicons:arrow-down-01" className="mr-1" />
                              Receive
                            </Button>
                          </div>
                        ) : (
                          order[columnKey]
                        )}
                      </TableCell>
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </section>

        <section className="lg:col-span-4">
          <Card className="bg-[hsl(var(--app-background-50))] p-6 shadow-[var(--app-box-shadow-medium)]" radius="lg">
            <h2 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] mb-4">Create New Order</h2>
            
            <form className="flex flex-col gap-4">
              <div className="mb-4">
                <Input
                  label="Supplier"
                  placeholder="Enter supplier name"
                  fullWidth
                  list="suppliers"
                />
                <datalist id="suppliers">
                  {mockSuppliers.map((supplier, index) => (
                    <option key={index} value={supplier} />
                  ))}
                </datalist>
              </div>
              
              <div className="mb-4">
                <Input
                  label="Order Date"
                  type="date"
                  placeholder="Select order date"
                  fullWidth
                />
              </div>
              
              <div className="mb-4">
                <Textarea
                  label="Books"
                  placeholder="Enter book titles, one per line"
                  minRows={3}
                  fullWidth
                />
              </div>
              
              <Button
                color="primary"
                className="mt-6 w-full"
                startContent={<Icon icon="hugeicons:add-02" />}
              >
                Create Order
              </Button>
            </form>
          </Card>
        </section>
      </div>

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] mb-4">Recently Received Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockBooks.map((book) => (
            <Card key={book.id} className="bg-[hsl(var(--app-background-100))] shadow-[var(--app-box-shadow-small)]" radius="lg">
              <CardHeader className="flex flex-col gap-2 p-4">
                <h3 className="text-lg font-semibold text-[hsl(var(--app-foreground-900))]">{book.title}</h3>
                <p className="text-sm text-[hsl(var(--app-foreground-700))]">{book.author}</p>
                <p className="text-xs text-[hsl(var(--app-foreground-600))]">
                  Received: {new Date(book.receivedDate).toLocaleDateString()}
                </p>
                <Button
                  color="primary"
                  size="sm"
                  className="mt-2"
                  startContent={<Icon icon="hugeicons:add-circle" />}
                >
                  Add to Catalog
                </Button>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
