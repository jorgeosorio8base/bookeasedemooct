import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button, ButtonGroup, Image } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function DigitalResourceDetailsComponent() {
  const bookMockData = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    coverImage: 'https://example.com/great-gatsby-cover.jpg',
    rating: 4.5,
    totalRatings: 2345,
    availability: ['E-book', 'Audiobook'],
    synopsis: 'The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway\'s interactions with mysterious millionaire Jay Gatsby and Gatsby\'s obsession to reunite with his former lover, Daisy Buchanan.',
    details: {
      format: 'E-book, Audiobook',
      pages: 180,
      language: 'English',
      publisher: 'Scribner',
      publicationDate: 'April 10, 1925'
    },
    recommendations: [
      { id: 1, title: 'To Kill a Mockingbird', coverImage: 'https://example.com/mockingbird-cover.jpg' },
      { id: 2, title: '1984', coverImage: 'https://example.com/1984-cover.jpg' },
      { id: 3, title: 'Pride and Prejudice', coverImage: 'https://example.com/pride-prejudice-cover.jpg' },
      { id: 4, title: 'The Catcher in the Rye', coverImage: 'https://example.com/catcher-rye-cover.jpg' }
    ]
  };

  return (
    <main className="container mx-auto px-4 py-8 grid grid-cols-12 gap-6">
      <section className="col-span-12">
        <Card className="w-full bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] shadow-[var(--app-box-shadow-medium)] rounded-lg">
          <CardBody className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4">
            <Image
              src={bookMockData.coverImage}
              alt={`Cover of ${bookMockData.title}`}
              className="w-full md:w-1/4 aspect-[3/4] object-cover rounded-md"
            />
            <div className="flex flex-col gap-2 flex-grow">
              <h1 className="text-2xl font-bold">{bookMockData.title}</h1>
              <p className="text-lg">by {bookMockData.author}</p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <Icon
                    key={index}
                    icon={index < Math.floor(bookMockData.rating) ? 'hugeicons:star' : 'hugeicons:star-off'}
                    className={`text-[hsl(var(--app-warning-500))] ${index < Math.floor(bookMockData.rating) ? 'opacity-100' : 'opacity-50'}`}
                  />
                ))}
                <span className="text-[hsl(var(--app-foreground-600))] ml-2">
                  {bookMockData.rating} ({bookMockData.totalRatings.toLocaleString()} ratings)
                </span>
              </div>
              <p>Available: {bookMockData.availability.join(' / ')}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Button color="primary" className="bg-[hsl(var(--app-primary-500))] text-[hsl(var(--app-background-50))] hover:bg-[hsl(var(--app-primary-600))]">
                  Borrow
                </Button>
                <Button color="secondary" className="bg-[hsl(var(--app-secondary-500))] text-[hsl(var(--app-background-50))] hover:bg-[hsl(var(--app-secondary-600))]">
                  Read Sample
                </Button>
                <Button color="default" className="bg-[hsl(var(--app-background-200))] text-[hsl(var(--app-foreground-700))] hover:bg-[hsl(var(--app-background-300))]">
                  Place Hold
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </section>

      <section className="col-span-12 md:col-span-8">
        <Card className="h-full bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] shadow-[var(--app-box-shadow-medium)] rounded-lg">
          <CardBody className="p-4">
            <h2 className="text-xl font-semibold mb-2">Synopsis</h2>
            <p className="text-base leading-relaxed text-[hsl(var(--app-foreground-800))] mb-6">
              {bookMockData.synopsis}
            </p>
            <h2 className="text-xl font-semibold mb-2">Details</h2>
            <ul className="list-none p-0">
              {Object.entries(bookMockData.details).map(([key, value]) => (
                <li key={key} className="mb-2">
                  <span className="font-medium">{key.charAt(0).toUpperCase() + key.slice(1)}:</span> {value}
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </section>

      <section className="col-span-12 md:col-span-4">
        <Card className="h-full bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] shadow-[var(--app-box-shadow-medium)] rounded-lg">
          <CardBody className="p-4">
            <h2 className="text-xl font-semibold mb-4">You may also like</h2>
            <div className="grid grid-cols-2 gap-4">
              {bookMockData.recommendations.map((book) => (
                <Card key={book.id} className="w-full">
                  <CardBody className="p-0">
                    <Image
                      src={book.coverImage}
                      alt={`Cover of ${book.title}`}
                      className="w-full aspect-[3/4] object-cover"
                    />
                  </CardBody>
                  <CardFooter className="text-center text-sm p-2">
                    <p className="truncate">{book.title}</p>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </CardBody>
        </Card>
      </section>
    </main>
  );
}
