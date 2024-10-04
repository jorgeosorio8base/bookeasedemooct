import React from 'react';
import { Tabs, Tab, Input, Card, CardHeader, CardBody, CardFooter, Button, ButtonGroup, Chip } from '@nextui-org/react';
import { Icon } from '@iconify/react';

type Notification = {
  id: string;
  title: string;
  content: string;
  type: 'warning' | 'info' | 'success';
  timestamp: string;
};

const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'Book Due Tomorrow',
    content: '"The Great Gatsby" is due to be returned tomorrow.',
    type: 'warning',
    timestamp: '2 hours ago'
  },
  {
    id: '2',
    title: 'Book Available for Pickup',
    content: 'Your reserved book "1984" is now available for pickup.',
    type: 'info',
    timestamp: '1 day ago'
  },
  {
    id: '3',
    title: 'New Books Added to Collection',
    content: 'Check out our latest additions to the Science Fiction section.',
    type: 'success',
    timestamp: '3 days ago'
  }
];

export function NotificationCenterComponent() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Card className="w-full bg-[hsl(var(--app-background-50))] rounded-lg appShadow-[var(--app-box-shadow-medium)]">
        <CardHeader className="flex flex-col gap-4 p-4 bg-[hsl(var(--app-background-50))] border-b border-[hsl(var(--app-foreground-200))]">
          <h1 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] mb-2">
            Notification Center
          </h1>
          <Tabs 
            aria-label="Notification filters" 
            color="primary" 
            variant="underlined"
            classNames={{
              tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
              cursor: "w-full bg-[hsl(var(--app-primary-500))]",
              tab: "max-w-fit px-0 h-12",
              tabContent: "group-data-[selected=true]:text-[hsl(var(--app-primary-500))] group-data-[selected=true]:font-bold"
            }}
          >
            <Tab key="all" title="All Notifications" />
            <Tab key="unread" title="Unread" />
          </Tabs>
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[44%]",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Search notifications"
            size="sm"
            startContent={<Icon icon="hugeicons:search-02" width="18" height="18" className="text-default-400" />}
            type="search"
          />
        </CardHeader>
        <CardBody className="p-4">
          <div className="space-y-4">
            {mockNotifications.map((notification) => (
              <Card key={notification.id} className="bg-[hsl(var(--app-background-100))] appShadow-[var(--app-box-shadow-small)]">
                <CardBody>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-[hsl(var(--app-foreground-900))]">{notification.title}</h3>
                      <p className="text-sm text-[hsl(var(--app-foreground-700))]">{notification.content}</p>
                      <span className="text-xs text-[hsl(var(--app-foreground-500))]">{notification.timestamp}</span>
                    </div>
                    <Chip
                      color={notification.type === 'warning' ? 'warning' : notification.type === 'success' ? 'success' : 'primary'}
                      variant="flat"
                      size="sm"
                    >
                      {notification.type}
                    </Chip>
                  </div>
                </CardBody>
                <CardFooter className="justify-end gap-2">
                  {notification.type === 'warning' && (
                    <Button size="sm" color="warning" variant="light">Renew</Button>
                  )}
                  {notification.type === 'info' && (
                    <Button size="sm" color="primary" variant="light">View Details</Button>
                  )}
                  <Button size="sm" variant="bordered">Mark as Read</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </CardBody>
        <CardFooter className="justify-center pt-4">
          <Button size="sm" variant="light">
            Load More
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
