import React from 'react';
import { Card, CardBody, Input, Button, Link, Image } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function HomeComponent() {
  const mockData = {
    title: 'Welcome to the Library Management System',
    searchPlaceholder: 'Search books, authors...',
    searchButtonLabel: 'Search',
    accountInfo: {
      booksBorrowed: 3,
      booksDueSoon: 1
    },
    libraryStats: {
      totalBooks: 25000,
      activeMembers: 1500,
      booksCheckedOutToday: 87
    },
    newArrivals: [
      {
        id: '1',
        title: 'The Great Gatsby',
        coverImage: 'https://example.com/great-gatsby-cover.jpg'
      },
      {
        id: '2',
        title: 'To Kill a Mockingbird',
        coverImage: 'https://example.com/to-kill-a-mockingbird-cover.jpg'
      },
      {
        id: '3',
        title: '1984',
        coverImage: 'https://example.com/1984-cover.jpg'
      },
      {
        id: '4',
        title: 'Pride and Prejudice',
        coverImage: 'https://example.com/pride-and-prejudice-cover.jpg'
      }
    ],
    popularCategories: [
      { name: 'Fiction', url: '/category/fiction' },
      { name: 'Non-Fiction', url: '/category/non-fiction' },
      { name: 'Science & Technology', url: '/category/science-technology' },
      { name: 'History', url: '/category/history' },
      { name: 'Biography', url: '/category/biography' }
    ],
    upcomingEvents: [
      { title: 'Book Club Meeting', date: 'July 15, 2023', time: '6:00 PM' },
      { title: 'Author Talk: Jane Doe', date: 'July 22, 2023', time: '3:00 PM' },
      { title: "Children's Story Time", date: 'Every Saturday', time: '11:00 AM' }
    ]
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <Card className="w-full bg-[hsl(var(--app-background-50))] border-b border-[hsl(var(--app-foreground-200))] mb-6 rounded-lg">
        <CardBody className="p-4">
          <h1 className="text-2xl md:text-3xl font-bold text-[hsl(var(--app-foreground-900))] mb-4">
            {mockData.title}
          </h1>
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <Input
              className="w-full sm:w-64 bg-[hsl(var(--app-background-100))] text-[hsl(var(--app-foreground-700))] border-[hsl(var(--app-foreground-300))]"
              placeholder={mockData.searchPlaceholder}
              startContent={<Icon icon="hugeicons:search-01" className="text-[hsl(var(--app-foreground-400))]" />}
            />
            <Button
              className="bg-[hsl(var(--app-primary-500))] text-[hsl(var(--app-background-50))] px-4 py-2 rounded"
            >
              {mockData.searchButtonLabel}
            </Button>
          </div>
        </CardBody>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] h-full rounded-lg">
          <CardBody>
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Icon icon="hugeicons:user-circle" width="24" height="24" className="mr-2" />
              My Account
            </h2>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-[hsl(var(--app-foreground-700))]" aria-label="Books borrowed">
                Books borrowed: {mockData.accountInfo.booksBorrowed}
              </p>
              <p className="text-sm text-[hsl(var(--app-foreground-700))]" aria-label="Books due soon">
                Books due soon: {mockData.accountInfo.booksDueSoon}
              </p>
              <Link 
                href="#" 
                color="primary" 
                className="text-sm mt-2" 
                aria-label="View full account details"
              >
                View account details
              </Link>
            </div>
          </CardBody>
        </Card>

        <Card className="bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] h-full rounded-lg">
          <CardBody>
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Icon icon="hugeicons:book-01" width="24" height="24" className="mr-2" />
              Library Stats
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Total books:</span>
                <span className="font-semibold">{mockData.libraryStats.totalBooks.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Active members:</span>
                <span className="font-semibold">{mockData.libraryStats.activeMembers.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Books checked out today:</span>
                <span className="font-semibold">{mockData.libraryStats.booksCheckedOutToday}</span>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card className="bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] h-full rounded-lg">
          <CardBody>
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Icon icon="hugeicons:book-02" className="mr-2" />
              Popular Categories
            </h2>
            <ul className="space-y-2">
              {mockData.popularCategories.map((category) => (
                <li key={category.name} className="transition-colors duration-200 hover:bg-[hsl(var(--app-background-100))] rounded">
                  <Link 
                    href={category.url}
                    className="block p-2 text-[hsl(var(--app-primary-600))] no-underline hover:underline"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </div>

      <section className="w-full p-4 md:p-6 bg-[hsl(var(--app-background-50))] mt-6 rounded-lg">
        <h2 className="text-xl md:text-2xl font-bold text-[hsl(var(--app-foreground-900))] mb-4">
          New Arrivals
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {mockData.newArrivals.map((book) => (
            <Card 
              key={book.id} 
              isPressable 
              isHoverable 
              className="w-full aspect-[3/4] rounded-lg"
            >
              <CardBody className="p-0 overflow-hidden">
                <Image
                  src={book.coverImage}
                  alt={`Cover of ${book.title}`}
                  className="w-full h-full object-cover"
                  classNames={{
                    img: "w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  }}
                  fallbackSrc="https://via.placeholder.com/300x400?text=Book+Cover"
                />
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      <Card className="w-full bg-[hsl(var(--app-background-50))] mt-6 rounded-lg">
        <CardBody>
          <h2 className="text-xl font-bold text-[hsl(var(--app-foreground-900))] mb-4 flex items-center">
            <Icon icon="hugeicons:calendar-01" width="24" height="24" className="mr-2" />
            Upcoming Events
          </h2>
          <ul className="space-y-2">
            {mockData.upcomingEvents.map((event, index) => (
              <li key={index}>
                <Card className="rounded-lg">
                  <CardBody>
                    <h3 className="text-lg font-semibold text-[hsl(var(--app-foreground-800))]">
                      {event.title}
                    </h3>
                    <time className="text-sm text-[hsl(var(--app-foreground-600))]">
                      {event.date} - {event.time}
                    </time>
                  </CardBody>
                </Card>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </main>
  );
}
