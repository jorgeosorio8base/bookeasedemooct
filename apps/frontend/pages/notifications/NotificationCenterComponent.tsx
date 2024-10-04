import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button, CheckboxGroup, Checkbox, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react';
import { Icon } from '@iconify/react';

type Notification = {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  type: 'book_due' | 'hold_available' | 'announcement';
};

type NotificationHistoryItem = {
  type: 'Due Date' | 'Hold' | 'Announcement';
  message: string;
  date: string;
};

const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'Book Due Tomorrow',
    message: '"The Great Gatsby" is due to be returned tomorrow.',
    timestamp: '2 hours ago',
    type: 'book_due'
  },
  {
    id: '2',
    title: 'Hold Available',
    message: 'Your hold for "1984" is now available for pickup.',
    timestamp: '1 day ago',
    type: 'hold_available'
  },
  {
    id: '3',
    title: 'Library Announcement',
    message: 'The library will be closed on Monday for maintenance.',
    timestamp: '2 days ago',
    type: 'announcement'
  }
];

const notificationOptions = [
  { id: 'dueDate', label: 'Due Date Reminders' },
  { id: 'hold', label: 'Hold Notifications' },
  { id: 'library', label: 'Library Announcements' }
];

const mockNotificationHistory: NotificationHistoryItem[] = [
  {
    type: 'Due Date',
    message: '"To Kill a Mockingbird" was due to be returned tomorrow.',
    date: '05/15/2023'
  },
  {
    type: 'Hold',
    message: '"The Catcher in the Rye" hold expired',
    date: '05/10/2023'
  },
  {
    type: 'Announcement',
    message: 'Summer reading program starts',
    date: '05/01/2023'
  }
];

export function NotificationCenterComponent() {
  return (
    <main className="container mx-auto px-4 py-8 bg-[hsl(var(--app-background-50))]">
      <div className="grid grid-cols-12 gap-6">
        <section className="col-span-12">
          <Card className="w-full">
            <CardHeader className="flex justify-between items-center p-4 bg-[hsl(var(--app-background-100))]">
              <div className="flex items-center">
                <Icon icon="hugeicons:notification-03" width="24" height="24" className="text-[hsl(var(--app-foreground-900))]" />
                <h1 className="text-2xl font-semibold ml-2 text-[hsl(var(--app-foreground-900))]">
                  Notification Center
                </h1>
                <span className="ml-2 bg-[hsl(var(--app-primary-100))] text-[hsl(var(--app-primary-600))] text-xs font-medium px-2 py-1 rounded-full">
                  {mockNotifications.length}
                </span>
              </div>
              <Button
                size="sm"
                variant="light"
                color="primary"
                className="text-sm"
              >
                Mark All as Read
              </Button>
            </CardHeader>
          </Card>
        </section>

        <section className="col-span-12 lg:col-span-8">
          <div className="flex flex-col space-y-4">
            {mockNotifications.map((notification) => (
              <Card key={notification.id} className="w-full shadow-md hover:shadow-lg transition-shadow duration-200">
                <CardHeader className="px-4 py-3 bg-[hsl(var(--app-background-100))]">
                  <h3 className="text-lg font-semibold text-[hsl(var(--app-foreground-900))]">{notification.title}</h3>
                </CardHeader>
                <CardBody className="px-4 py-3">
                  <p className="text-base text-[hsl(var(--app-foreground-700))]">{notification.message}</p>
                </CardBody>
                <CardFooter className="flex justify-between items-center px-4 py-3 bg-[hsl(var(--app-background-50))]">
                  <span className="text-sm text-[hsl(var(--app-foreground-500))]">{notification.timestamp}</span>
                  <div className="flex space-x-2">
                    {notification.type === 'book_due' && (
                      <Button size="sm" color="primary">Renew</Button>
                    )}
                    {notification.type === 'hold_available' && (
                      <Button size="sm" color="primary">View Details</Button>
                    )}
                    <Button size="sm" color="danger" variant="light">Dismiss</Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <aside className="col-span-12 lg:col-span-4 space-y-6">
          <div className="bg-[hsl(var(--app-background-100))] p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))] mb-4 flex items-center">
              <Icon icon="hugeicons:notification-02" className="mr-2" />
              Notification Settings
            </h2>
            <CheckboxGroup
              orientation="vertical"
              color="primary"
              defaultValue={['dueDate', 'library']}
            >
              {notificationOptions.map((option) => (
                <Checkbox key={option.id} value={option.id} size="sm">
                  {option.label}
                </Checkbox>
              ))}
            </CheckboxGroup>
          </div>

          <div className="bg-[hsl(var(--app-background-100))] p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))] mb-4">Notification History</h2>
            <Table aria-label="Notification history table">
              <TableHeader>
                <TableColumn>Type</TableColumn>
                <TableColumn>Message</TableColumn>
                <TableColumn>Date</TableColumn>
              </TableHeader>
              <TableBody>
                {mockNotificationHistory.map((notification, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Icon icon={`hugeicons:book-${notification.type === 'Due Date' ? '01' : notification.type === 'Hold' ? '02' : '03'}`} className="text-[hsl(var(--app-primary-500))]" />
                        {notification.type}
                      </div>
                    </TableCell>
                    <TableCell>{notification.message}</TableCell>
                    <TableCell>{notification.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </aside>
      </div>
    </main>
  );
}
