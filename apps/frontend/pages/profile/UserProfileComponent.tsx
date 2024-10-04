import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Avatar, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Checkbox, Button, Chip } from '@nextui-org/react';
import { Icon } from '@iconify/react';

const mockUserData = {
  name: 'John Patron',
  initials: 'JP',
  memberSince: 'January 1, 2020',
  email: 'john.patron@example.com',
  phone: '(555) 123-4567',
  address: '123 Library Lane, Booktown, BT 12345',
  libraryCardNumber: '1234567890',
  accountType: 'Standard',
  booksBorrowed: 3,
  finesDue: 0.00,
  borrowingHistory: [
    { bookTitle: 'The Great Gatsby', borrowedDate: '2023-05-01', dueDate: '2023-05-15', status: 'Returned' },
    { bookTitle: 'To Kill a Mockingbird', borrowedDate: '2023-06-10', dueDate: '2023-06-24', status: 'On Loan' },
    { bookTitle: '1984', borrowedDate: '2023-06-15', dueDate: '2023-06-29', status: 'On Loan' },
  ],
};

const notificationPreferences = [
  { id: 'email', label: 'Receive email notifications', icon: 'hugeicons:notification-01' },
  { id: 'sms', label: 'Receive SMS notifications', icon: 'hugeicons:notification-02' },
  { id: 'dueDate', label: 'Due date reminders', icon: 'hugeicons:notification-03' },
  { id: 'newArrivals', label: 'New arrivals notifications', icon: 'hugeicons:notification-bubble' }
];

export function UserProfileComponent() {
  return (
    <main className="container mx-auto px-4 py-8 bg-[hsl(var(--app-background-100))]">
      <Card className="w-full bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] rounded-lg appshadow-[var(--app-box-shadow-medium)] mb-8">
        <CardHeader className="flex flex-col md:flex-row items-start md:items-center justify-between p-6">
          <div className="flex items-center mb-4 md:mb-0">
            <Avatar
              name={mockUserData.initials}
              size="lg"
              className="bg-[hsl(var(--app-primary-500))] text-[hsl(var(--app-background-50))] text-xl font-bold mr-4"
            />
            <div>
              <h1 className="text-2xl font-bold">{mockUserData.name}</h1>
              <Chip
                variant="light"
                color="primary"
                size="sm"
                radius="full"
                className="bg-[hsl(var(--app-primary-100))] text-[hsl(var(--app-primary-900))] mt-1"
                startContent={
                  <Icon
                    icon="hugeicons:time-01"
                    className="text-[hsl(var(--app-primary-700))]"
                    width="16"
                    height="16"
                  />
                }
              >
                <span className="font-normal text-xs">Member since: {mockUserData.memberSince}</span>
              </Chip>
            </div>
          </div>
          <div className="text-sm">
            <p><Icon icon="hugeicons:mail-01" className="mr-2" />{mockUserData.email}</p>
            <p><Icon icon="hugeicons:phone-01" className="mr-2" />{mockUserData.phone}</p>
            <p><Icon icon="hugeicons:location-01" className="mr-2" />{mockUserData.address}</p>
          </div>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="h-full bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] rounded-lg appshadow-[var(--app-box-shadow-small)]">
          <CardHeader>
            <h2 className="text-xl font-semibold text-[hsl(var(--app-primary-700))]">Account Status</h2>
          </CardHeader>
          <CardBody>
            <ul className="space-y-2">
              <li className="flex justify-between items-center">
                <span>Library Card Number</span>
                <span className="font-medium">{mockUserData.libraryCardNumber}</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Account Type</span>
                <span className="font-medium">{mockUserData.accountType}</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Books Borrowed</span>
                <span className="font-medium">{mockUserData.booksBorrowed}</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Fines Due</span>
                <span className={`font-medium ${mockUserData.finesDue > 0 ? 'text-[hsl(var(--app-danger-500))]' : ''}`}>
                  ${mockUserData.finesDue.toFixed(2)}
                </span>
              </li>
            </ul>
          </CardBody>
        </Card>

        <Card className="h-full bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] rounded-lg appshadow-[var(--app-box-shadow-small)]">
          <CardHeader>
            <h2 className="text-xl font-semibold text-[hsl(var(--app-primary-700))]">Notification Preferences</h2>
          </CardHeader>
          <CardBody>
            <form className="flex flex-col gap-4">
              <CheckboxGroup
                orientation="vertical"
                color="primary"
                defaultValue={['email', 'dueDate']}
              >
                {notificationPreferences.map((pref) => (
                  <Checkbox key={pref.id} value={pref.id} className="text-[hsl(var(--app-foreground-700))]">
                    <div className="flex items-center gap-2">
                      <Icon icon={pref.icon} className="text-xl" />
                      <span>{pref.label}</span>
                    </div>
                  </Checkbox>
                ))}
              </CheckboxGroup>
            </form>
          </CardBody>
          <CardFooter>
            <Button color="primary" className="w-full">Save Preferences</Button>
          </CardFooter>
        </Card>
      </div>

      <Card className="mt-8 bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] rounded-lg appshadow-[var(--app-box-shadow-medium)]">
        <CardHeader>
          <h2 className="text-xl font-semibold text-[hsl(var(--app-primary-700))] flex items-center">
            <Icon icon="hugeicons:book-01" className="mr-2" />
            Borrowing History
          </h2>
        </CardHeader>
        <CardBody>
          <Table aria-label="User borrowing history table">
            <TableHeader>
              <TableColumn>Book Title</TableColumn>
              <TableColumn>Borrowed Date</TableColumn>
              <TableColumn>Due Date</TableColumn>
              <TableColumn>Status</TableColumn>
            </TableHeader>
            <TableBody>
              {mockUserData.borrowingHistory.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.bookTitle}</TableCell>
                  <TableCell>{item.borrowedDate}</TableCell>
                  <TableCell>{item.dueDate}</TableCell>
                  <TableCell>
                    <Chip
                      color={item.status === 'Returned' ? 'success' : 'warning'}
                      variant="flat"
                    >
                      {item.status}
                    </Chip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    </main>
  );
}
