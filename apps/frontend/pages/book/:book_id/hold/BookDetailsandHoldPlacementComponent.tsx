import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Select, SelectItem, Button } from '@nextui-org/react';
import { Icon } from '@iconify/react';

const bookData = {
  title: 'Book Title',
  author: 'Author Name',
  isbn: '1234567890',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  availableCopies: 5,
  currentHolds: 3,
  estimatedWaitTime: '2 weeks',
  userQueuePosition: 4
};

const formatOptions = [
  { key: 'physical', label: 'Physical Book' },
  { key: 'ebook', label: 'E-Book' },
  { key: 'audiobook', label: 'Audiobook' }
];

const pickupLocations = [
  { key: 'main', label: 'Main Branch' },
  { key: 'north', label: 'North Branch' },
  { key: 'south', label: 'South Branch' }
];

const notificationPreferences = [
  { key: 'email', label: 'Email' },
  { key: 'sms', label: 'SMS' },
  { key: 'phone', label: 'Phone Call' }
];

const relatedBooks = [
  { id: '1', title: 'Related Book 1', author: 'Author Name' },
  { id: '2', title: 'Related Book 2', author: 'Author Name' },
  { id: '3', title: 'Related Book 3', author: 'Author Name' }
];

export function BookDetailsandHoldPlacementComponent() {
  return (
    <main className="container mx-auto px-4 py-8 bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] font-sans">
      <h1 className="text-3xl font-bold mb-8 text-[hsl(var(--app-primary-700))]">Book Details and Hold Placement</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="h-full appshadow-[var(--app-box-shadow-medium)] rounded-lg">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h2 className="text-2xl font-bold text-[hsl(var(--app-primary-700))]">Book Information</h2>
          </CardHeader>
          <CardBody className="py-2 px-4">
            <h3 className="text-xl font-bold">{bookData.title}</h3>
            <p className="text-lg text-[hsl(var(--app-secondary-600))]">{bookData.author}</p>
            <p className="text-base mt-2"><strong>ISBN:</strong> {bookData.isbn}</p>
            <p className="text-base mt-2">{bookData.description}</p>
            <p className="text-base mt-2"><strong>Available copies:</strong> {bookData.availableCopies}</p>
          </CardBody>
        </Card>

        <Card className="h-full appshadow-[var(--app-box-shadow-medium)] rounded-lg">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h2 className="text-2xl font-bold text-[hsl(var(--app-primary-700))]">Place Hold</h2>
          </CardHeader>
          <CardBody className="py-2 px-4">
            <form className="flex flex-col gap-4">
              <Select label="Format" placeholder="Select format">
                {formatOptions.map((option) => (
                  <SelectItem key={option.key} value={option.key}>
                    {option.label}
                  </SelectItem>
                ))}
              </Select>
              <Select label="Pickup Location" placeholder="Select pickup location">
                {pickupLocations.map((location) => (
                  <SelectItem key={location.key} value={location.key}>
                    {location.label}
                  </SelectItem>
                ))}
              </Select>
              <Select label="Notification Preference" placeholder="Select notification preference">
                {notificationPreferences.map((preference) => (
                  <SelectItem key={preference.key} value={preference.key}>
                    {preference.label}
                  </SelectItem>
                ))}
              </Select>
              <Button color="primary" className="mt-2 bg-[hsl(var(--app-primary-500))] hover:bg-[hsl(var(--app-primary-600))] text-white px-4 py-2 rounded">
                Place Hold
              </Button>
            </form>
          </CardBody>
        </Card>

        <Card className="h-full appshadow-[var(--app-box-shadow-medium)] rounded-lg">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h2 className="text-2xl font-bold text-[hsl(var(--app-primary-700))]">Hold Information</h2>
          </CardHeader>
          <CardBody className="py-2 px-4">
            <div className="flex items-center mb-2">
              <Icon icon="hugeicons:book-01" className="mr-2 text-[hsl(var(--app-secondary-500))]" width="24" height="24" />
              <p className="text-base"><strong>Current Holds:</strong> {bookData.currentHolds}</p>
            </div>
            <div className="flex items-center mb-2">
              <Icon icon="hugeicons:user" className="mr-2 text-[hsl(var(--app-secondary-500))]" width="24" height="24" />
              <p className="text-base"><strong>Your position:</strong> {bookData.userQueuePosition} in line</p>
            </div>
            <div className="flex items-center">
              <Icon icon="hugeicons:clock" className="mr-2 text-[hsl(var(--app-secondary-500))]" width="24" height="24" />
              <p className="text-base"><strong>Estimated wait time:</strong> {bookData.estimatedWaitTime}</p>
            </div>
          </CardBody>
        </Card>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[hsl(var(--app-primary-700))] mb-4">Related Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedBooks.map((book) => (
            <Card key={book.id} className="appshadow-[var(--app-box-shadow-small)] rounded-lg">
              <CardBody>
                <h3 className="text-lg font-bold">{book.title}</h3>
                <p className="text-[hsl(var(--app-secondary-600))]">{book.author}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
