import React from 'react';
import { Card, CardHeader, CardBody, Button, ButtonGroup, Tooltip, ScrollShadow, Input } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function LibraryMapComponent() {
  const mockLegendData = [
    { category: 'Fiction', color: 'bg-[hsl(var(--app-primary-500))]' },
    { category: 'Non-Fiction', color: 'bg-[hsl(var(--app-secondary-500))]' },
    { category: 'Reference', color: 'bg-[hsl(var(--app-success-500))]' },
    { category: 'Children\'s', color: 'bg-[hsl(var(--app-warning-500))]' },
  ];

  const mockNearbyBooks = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: '1984', author: 'George Orwell' },
    { title: 'Pride and Prejudice', author: 'Jane Austen' },
  ];

  const mockFacilities = [
    { name: 'Information Desk', icon: 'hugeicons:info' },
    { name: 'Self-Checkout Kiosk', icon: 'hugeicons:point-of-sale' },
    { name: 'Study Areas', icon: 'hugeicons:table-restaurant' },
    { name: 'Cafe', icon: 'hugeicons:local-cafe' },
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-12 gap-6">
        <section className="col-span-12">
          <Card className="bg-[hsl(var(--app-background-50))] appShadow-[var(--app-box-shadow-medium)]">
            <CardHeader>
              <h1 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] mb-4">
                Library Map
              </h1>
            </CardHeader>
            <CardBody>
              <div className="flex flex-wrap gap-2">
                <Button
                  size="sm"
                  color="primary"
                  aria-label="Zoom In"
                  className="bg-[hsl(var(--app-primary-500))] text-[hsl(var(--app-foreground-50))] hover:bg-[hsl(var(--app-primary-600))]"
                >
                  <Icon icon="hugeicons:zoom-in-area" width="20" height="20" />
                  Zoom In
                </Button>
                <Button
                  size="sm"
                  color="primary"
                  aria-label="Zoom Out"
                  className="bg-[hsl(var(--app-primary-500))] text-[hsl(var(--app-foreground-50))] hover:bg-[hsl(var(--app-primary-600))]"
                >
                  <Icon icon="hugeicons:zoom-out-area" width="20" height="20" />
                  Zoom Out
                </Button>
                <Button
                  size="sm"
                  color="primary"
                  aria-label="Find My Location"
                  className="bg-[hsl(var(--app-primary-500))] text-[hsl(var(--app-foreground-50))] hover:bg-[hsl(var(--app-primary-600))]"
                >
                  <Icon icon="hugeicons:location-01" width="20" height="20" />
                  Find My Location
                </Button>
              </div>
            </CardBody>
          </Card>
        </section>

        <section className="col-span-12 lg:col-span-8">
          <div className="bg-[hsl(var(--app-background-100))] p-4 rounded-lg appShadow-[var(--app-box-shadow-medium)]">
            <h2 className="text-xl font-bold text-[hsl(var(--app-foreground-900))] mb-4">Interactive Library Map</h2>
            <div className="bg-[hsl(var(--app-background-200))] p-4 rounded-md mb-4">
              <div className="h-64 bg-[hsl(var(--app-background-300))] rounded-md flex items-center justify-center text-[hsl(var(--app-foreground-500))]">
                Library Map Placeholder
              </div>
            </div>
            <div className="mb-4">
              <Input
                placeholder="Enter book title or shelf location"
                startContent={<Icon icon="hugeicons:map-pinpoint-01" />}
                className="w-full"
              />
            </div>
            <Button color="secondary" variant="bordered">
              <Icon icon="hugeicons:map-pin" className="mr-1" />
              Get Directions
            </Button>
          </div>
        </section>

        <section className="col-span-12 lg:col-span-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            <Card className="bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] h-full">
              <CardBody className="p-4">
                <h2 className="text-xl font-bold mb-2">Legend</h2>
                <ul className="list-none p-0 m-0">
                  {mockLegendData.map((item, index) => (
                    <li key={index} className="flex items-center mb-2 text-sm">
                      <span
                        className={`w-4 h-4 rounded-full mr-2 ${item.color}`}
                        aria-hidden="true"
                      ></span>
                      <span>{item.category}</span>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>

            <Card className="bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] h-full appShadow-[var(--app-box-shadow-medium)]">
              <CardHeader className="flex gap-3">
                <Icon icon="hugeicons:book-01" width="24" height="24" />
                <h2 className="text-xl font-bold">Nearby Books</h2>
              </CardHeader>
              <CardBody>
                <ScrollShadow className="h-[200px]">
                  {mockNearbyBooks.map((book, index) => (
                    <div key={index} className="mb-4 p-2 bg-[hsl(var(--app-background-100))] rounded hover:bg-[hsl(var(--app-background-200))]">
                      <h3 className="font-semibold">{book.title}</h3>
                      <p className="text-sm">{book.author}</p>
                    </div>
                  ))}
                </ScrollShadow>
              </CardBody>
            </Card>

            <Card className="bg-[hsl(var(--app-background-50))] appShadow-[var(--app-box-shadow-medium)] h-full">
              <CardHeader>
                <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))] mb-2">Facilities</h2>
              </CardHeader>
              <CardBody>
                <ul className="grid grid-cols-2 gap-4">
                  {mockFacilities.map((facility, index) => (
                    <li key={index} className="flex flex-col items-center justify-center p-2 rounded bg-[hsl(var(--app-background-100))] transition-colors duration-200">
                      <Icon icon={facility.icon} className="text-3xl mb-2 text-[hsl(var(--app-primary-500))]" aria-hidden="true" />
                      <span className="text-sm text-[hsl(var(--app-foreground-700))]">{facility.name}</span>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}
