import React from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Input, Checkbox, Select, SelectItem, Card, CardBody } from '@nextui-org/react';
import { Icon } from '@iconify/react';

type Book = {
  id: string;
  title: string;
  queuePosition: number;
  estimatedAvailability: string;
};

const mockBooks: Book[] = [
  { id: '1', title: 'The Great Gatsby', queuePosition: 1, estimatedAvailability: 'May 15, 2024' },
  { id: '2', title: 'To Kill a Mockingbird', queuePosition: 3, estimatedAvailability: 'June 2, 2024' },
];

const mockAvailableBooks = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { id: 3, title: '1984', author: 'George Orwell' },
];

const autoCancelOptions = [
  { key: 'never', label: 'Never' },
  { key: '1week', label: '1 week' },
  { key: '2weeks', label: '2 weeks' },
  { key: '1month', label: '1 month' },
];

const notificationTypes = [
  'A held book becomes available',
  'Your hold is about to expire',
  'There are changes to your hold status'
];

export function BookHoldManagementComponent() {
  return (
    <main className="container mx-auto px-4 py-8 bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))]">
      <h1 className="text-3xl font-bold mb-8">Book Hold Management</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <section className="lg:col-span-12">
          <Card className="shadow-md rounded-lg">
            <CardBody>
              <h2 className="text-2xl font-semibold mb-4">Current Holds</h2>
              <Table aria-label="Current book holds table">
                <TableHeader>
                  <TableColumn>Book Title</TableColumn>
                  <TableColumn>Queue Position</TableColumn>
                  <TableColumn>Estimated Availability</TableColumn>
                  <TableColumn>Actions</TableColumn>
                </TableHeader>
                <TableBody>
                  {mockBooks.map((book) => (
                    <TableRow key={book.id}>
                      <TableCell>{book.title}</TableCell>
                      <TableCell>{book.queuePosition}</TableCell>
                      <TableCell>{book.estimatedAvailability}</TableCell>
                      <TableCell>
                        <Button
                          size="sm"
                          color="danger"
                          variant="flat"
                          startContent={<Icon icon="hugeicons:cancel-circle" />}
                        >
                          Cancel Hold
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardBody>
          </Card>
        </section>

        <section className="lg:col-span-6">
          <Card className="shadow-md rounded-lg h-full">
            <CardBody>
              <h2 className="text-2xl font-semibold mb-4">Place New Hold</h2>
              <form className="flex flex-col gap-4">
                <Input
                  label="Search for a book"
                  placeholder="Enter book title, author, or ISBN"
                  variant="bordered"
                  color="primary"
                  size="lg"
                  startContent={<Icon icon="hugeicons:search" className="text-[hsl(var(--app-primary-500))]" />}
                  className="w-full"
                />
                <Button
                  color="primary"
                  size="lg"
                  className="w-full md:w-auto"
                  endContent={<Icon icon="hugeicons:arrow-right" />}
                >
                  Search
                </Button>
              </form>
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Available Books</h3>
                <ul className="space-y-2">
                  {mockAvailableBooks.map((book) => (
                    <li key={book.id} className="flex justify-between items-center p-3 bg-[hsl(var(--app-background-100))] rounded-md">
                      <div>
                        <p className="font-medium">{book.title}</p>
                        <p className="text-sm text-[hsl(var(--app-foreground-600))]">{book.author}</p>
                      </div>
                      <Button size="sm" color="success" variant="flat">
                        Place Hold
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            </CardBody>
          </Card>
        </section>

        <section className="lg:col-span-6">
          <div className="grid grid-cols-1 gap-8 h-full">
            <Card className="shadow-md rounded-lg">
              <CardBody>
                <h2 className="text-xl font-semibold mb-4">Hold Preferences</h2>
                <form className="flex flex-col gap-4">
                  <Checkbox
                    color="primary"
                    className="text-[hsl(var(--app-primary-500))]"
                  >
                    Suspend all holds
                  </Checkbox>
                  <div className="mt-2">
                    <label htmlFor="auto-cancel" className="text-sm font-medium mb-1 block text-[hsl(var(--app-foreground-700))]">
                      Auto-cancel holds after
                    </label>
                    <Select
                      id="auto-cancel"
                      placeholder="Select an option"
                      className="max-w-xs"
                    >
                      {autoCancelOptions.map((option) => (
                        <SelectItem key={option.key} value={option.key}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                  <Button
                    color="primary"
                    className="mt-4 bg-[hsl(var(--app-primary-500))] text-white hover:bg-[hsl(var(--app-primary-600))] focus:ring-[hsl(var(--app-primary-400))]"
                  >
                    Save Preferences
                  </Button>
                </form>
              </CardBody>
            </Card>

            <Card className="shadow-md rounded-lg">
              <CardBody className="flex flex-col gap-4">
                <h2 className="text-xl font-bold mb-4">Notifications</h2>
                
                <ul className="list-none p-0 mb-4">
                  {notificationTypes.map((type, index) => (
                    <li key={index} className="mb-2 text-sm flex items-center">
                      <Icon icon="hugeicons:notification-01" className="mr-2" />
                      {type}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-col gap-4">
                  <Input
                    label="Notification Email"
                    placeholder="Enter your email"
                    type="email"
                    variant="bordered"
                    fullWidth
                  />
                  <Button
                    color="primary"
                    className="bg-[hsl(var(--app-primary-500))] text-white font-semibold"
                  >
                    Update Notification Settings
                  </Button>
                </div>
              </CardBody>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}