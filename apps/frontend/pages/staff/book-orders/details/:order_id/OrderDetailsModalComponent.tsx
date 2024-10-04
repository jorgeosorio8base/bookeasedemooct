import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Textarea } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function OrderDetailsModalComponent() {
  const mockOrderInfo = {
    orderId: '#12345',
    datePlaced: '2023-06-15',
    status: 'Processing'
  };

  const supplierMockData = {
    name: 'BookWorld Inc.',
    contact: 'John Doe',
    email: 'john.doe@bookworld.com'
  };

  const mockBooks = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', isbn: '9780743273565', quantity: 5, price: 12.99 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', isbn: '9780446310789', quantity: 3, price: 14.99 }
  ];

  const mockShippingInfo = {
    address: '123 Library Lane, Booktown, BT 12345',
    estimatedDelivery: '2023-06-30',
  };

  const mockTimelineEvents = [
    { date: '2023-06-15', description: 'Order placed', isCurrentStatus: false },
    { date: '2023-06-16', description: 'Order confirmed', isCurrentStatus: false },
    { date: '2023-06-30', description: 'Order shipped', isCurrentStatus: true },
    { date: 'Pending', description: 'Order delivered', isCurrentStatus: false },
  ];

  const mockNotes = `Add a note about this order...`;

  return (
    <main className="container mx-auto px-4 py-8 bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))]">
      <Card className="w-full mb-8 appShadow-[var(--app-box-shadow-medium)]">
        <CardHeader className="flex flex-col gap-2 font-medium">
          <h2 className="text-2xl">Order Details</h2>
          <div className="flex justify-between w-full">
            <span>Order ID: {mockOrderInfo.orderId}</span>
            <span>Date Placed: {mockOrderInfo.datePlaced}</span>
            <span>Status: {mockOrderInfo.status}</span>
          </div>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Card className="h-full appShadow-[var(--app-box-shadow-small)]">
          <CardHeader className="flex gap-3">
            <Icon icon="hugeicons:account-setting-01" width={24} height={24} />
            <h2 className="text-xl font-semibold">Supplier Details</h2>
          </CardHeader>
          <CardBody>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-[hsl(var(--app-foreground-600))]">Supplier</span>
                <span className="text-base text-[hsl(var(--app-foreground-800))]">{supplierMockData.name}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-[hsl(var(--app-foreground-600))]">Contact</span>
                <span className="text-base text-[hsl(var(--app-foreground-800))]">{supplierMockData.contact}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-[hsl(var(--app-foreground-600))]">Email</span>
                <span className="text-base text-[hsl(var(--app-foreground-800))]">{supplierMockData.email}</span>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card className="h-full appShadow-[var(--app-box-shadow-small)]">
          <CardHeader className="flex gap-3">
            <Icon icon="hugeicons:shipping-truck-01" width="24" height="24" />
            <h2 className="text-lg font-semibold">Shipping Information</h2>
          </CardHeader>
          <CardBody>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-[hsl(var(--app-foreground-600))]">Address:</span>
                <span className="text-sm text-[hsl(var(--app-foreground-800))]">{mockShippingInfo.address}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-[hsl(var(--app-foreground-600))]">Estimated Delivery:</span>
                <span className="text-sm text-[hsl(var(--app-foreground-800))]">{mockShippingInfo.estimatedDelivery}</span>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>

      <Card className="w-full mb-8 appShadow-[var(--app-box-shadow-medium)]">
        <CardHeader>
          <h2 className="text-xl font-semibold">Books in Order</h2>
        </CardHeader>
        <CardBody>
          <Table 
            aria-label="Books in order table"
            classNames={{
              base: "max-w-full overflow-x-auto",
              table: "min-w-full",
              th: "bg-[hsl(var(--app-primary-100))] text-[hsl(var(--app-foreground-800))] font-semibold",
              td: "border-b border-[hsl(var(--app-primary-200))]"
            }}
          >
            <TableHeader>
              <TableColumn>Title <Icon icon="hugeicons:sort-by-down-01" className="inline-block ml-1" /></TableColumn>
              <TableColumn>Author <Icon icon="hugeicons:sort-by-down-01" className="inline-block ml-1" /></TableColumn>
              <TableColumn>ISBN <Icon icon="hugeicons:sort-by-down-01" className="inline-block ml-1" /></TableColumn>
              <TableColumn className="text-right">Quantity <Icon icon="hugeicons:sort-by-down-01" className="inline-block ml-1" /></TableColumn>
              <TableColumn className="text-right">Price <Icon icon="hugeicons:sort-by-down-01" className="inline-block ml-1" /></TableColumn>
            </TableHeader>
            <TableBody>
              {mockBooks.map((book, index) => (
                <TableRow key={index} className="hover:bg-[hsl(var(--app-background-100))]">
                  <TableCell>{book.title}</TableCell>
                  <TableCell>{book.author}</TableCell>
                  <TableCell className="font-mono">{book.isbn}</TableCell>
                  <TableCell className="text-right">{book.quantity}</TableCell>
                  <TableCell className="text-right">${book.price.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardBody>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Card className="h-full appShadow-[var(--app-box-shadow-small)]">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h2 className="text-xl font-semibold">Order Timeline</h2>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <ul className="flex flex-col gap-2">
              {mockTimelineEvents.map((event, index) => (
                <li
                  key={index}
                  className={`flex items-center p-2 border-l-2 ${event.isCurrentStatus ? 'border-[hsl(var(--app-primary-500))]' : 'border-[hsl(var(--app-foreground-200))']}`}
                >
                  <Icon
                    icon={`hugeicons:time-0${index + 1}`}
                    className={`mr-2 ${event.isCurrentStatus ? 'text-[hsl(var(--app-primary-500))]' : 'text-[hsl(var(--app-foreground-400))]'}`}
                    width="24"
                    height="24"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-[hsl(var(--app-foreground-600))]">{event.date}</span>
                    <span className={`text-base ${event.isCurrentStatus ? 'text-[hsl(var(--app-foreground-900))] font-semibold' : 'text-[hsl(var(--app-foreground-700))]'}`}>
                      {event.description}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>

        <Card className="h-full appShadow-[var(--app-box-shadow-small)]">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Icon icon="hugeicons:note-02" className="text-[hsl(var(--app-foreground-900))] text-xl" />
              <h2 className="text-xl font-semibold">Notes</h2>
            </div>
          </CardHeader>
          <CardBody>
            <Textarea
              placeholder="Type your notes here..."
              minRows={3}
              maxRows={8}
              defaultValue={mockNotes}
              className="w-full min-h-[100px] text-sm text-[hsl(var(--app-foreground-700))] bg-[hsl(var(--app-background-100))]"
              variant="bordered"
              color="primary"
            />
          </CardBody>
          <CardFooter>
            <div className="flex justify-between w-full">
              <Button
                color="primary"
                className="px-4 py-2 text-sm font-medium rounded bg-[hsl(var(--app-primary-500))] text-white"
              >
                Edit Order
              </Button>
              <Button
                color="secondary"
                className="px-4 py-2 text-sm font-medium rounded bg-[hsl(var(--app-secondary-500))] text-white"
              >
                Update Status
              </Button>
              <Button
                color="success"
                className="px-4 py-2 text-sm font-medium rounded bg-[hsl(var(--app-success-500))] text-white"
              >
                Receive Order
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
