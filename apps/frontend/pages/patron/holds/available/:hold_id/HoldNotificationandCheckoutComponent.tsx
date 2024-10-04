import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button, ButtonGroup, Divider } from '@nextui-org/react';
import { Icon } from '@iconify/react';

const bookInfo = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  isbn: '9780743273565',
  pickupLocation: 'Main Library - Front Desk',
  holdDuration: 7,
  remainingTime: '6 days, 23 hours, 45 minutes'
};

export function HoldNotificationandCheckoutComponent() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-2xl mx-auto bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] rounded-lg appshadow-[var(--app-box-shadow-medium)]">
        <CardHeader className="flex flex-col items-start pb-0 border-b border-[hsl(var(--app-foreground-200))]">
          <h1 className="text-2xl font-bold text-[hsl(var(--app-primary-700))]">Book Hold Notification</h1>
          <p className="text-lg font-semibold">Your held book is now available!</p>
        </CardHeader>
        <CardBody className="py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Icon icon="hugeicons:book-01" className="text-[hsl(var(--app-primary-500))]" />
                <h2 className="text-lg font-semibold">{bookInfo.title}</h2>
              </div>
              <p className="text-sm">Author: {bookInfo.author}</p>
              <p className="text-sm">ISBN: {bookInfo.isbn}</p>
              <p className="text-sm">Pickup Location: {bookInfo.pickupLocation}</p>
              <p className="text-sm font-medium">Hold Duration: {bookInfo.holdDuration} days</p>
            </div>
            <div className="flex flex-col justify-center items-center bg-[hsl(var(--app-background-100))] p-4 rounded-lg">
              <Icon icon="hugeicons:clock-03" className="text-[hsl(var(--app-primary-500))] mb-2" width="32" height="32" />
              <span className="text-sm font-semibold text-[hsl(var(--app-foreground-600))]">Time Remaining:</span>
              <span className="text-xl font-bold text-[hsl(var(--app-primary-600))]" aria-live="polite">{bookInfo.remainingTime}</span>
            </div>
          </div>
        </CardBody>
        <CardFooter className="flex-col items-stretch gap-4 pt-4 border-t border-[hsl(var(--app-foreground-200))]">
          <ButtonGroup className="w-full">
            <Button className="flex-1" color="primary">
              <Icon icon="hugeicons:book-01" className="mr-1" />
              Check Out Now
            </Button>
            <Button className="flex-1" color="secondary">
              Extend Hold
            </Button>
            <Button className="flex-1" color="danger">
              Cancel Hold
            </Button>
          </ButtonGroup>
          <Divider className="my-2" />
          <div className="w-full">
            <h3 className="text-lg font-semibold mb-2 text-center">Digital Access</h3>
            <p className="text-sm text-center mb-4">This title is also available as an e-book or audiobook. Would you like to access it digitally instead?</p>
            <div className="flex justify-center gap-2">
              <Button color="success">
                <Icon icon="hugeicons:book-open-01" className="mr-1" />
                Access E-book
              </Button>
              <Button color="success">
                <Icon icon="hugeicons:book-open-02" className="mr-1" />
                Access Audiobook
              </Button>
            </div>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}
