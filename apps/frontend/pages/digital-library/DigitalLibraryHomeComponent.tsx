import React from 'react';
import { Card, CardBody, CardHeader, Input, Button, Progress, Image } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function DigitalLibraryHomeComponent() {
  const borrowedBooks = [
    { title: 'The Great Gatsby', dueIn: 7 },
    { title: 'To Kill a Mockingbird', dueIn: 3 }
  ];

  const readingProgress = [
    { title: 'The Great Gatsby', progress: 60 },
    { title: 'To Kill a Mockingbird', progress: 25 }
  ];

  const curatedCollections = [
    { id: '1', title: 'Summer Reads', coverImage: '' },
    { id: '2', title: 'Sci-Fi Classics', coverImage: '' },
    { id: '3', title: 'Mystery Thrillers', coverImage: '' },
    { id: '4', title: 'Biographies', coverImage: '' }
  ];

  const recentlyAddedBooks = [
    { id: '1', title: 'The Midnight Library', author: 'Matt Haig', coverImage: '' },
    { id: '2', title: 'Klara and the Sun', author: 'Kazuo Ishiguro', coverImage: '' },
    { id: '3', title: 'The Four Winds', author: 'Kristin Hannah', coverImage: '' },
    { id: '4', title: 'Project Hail Mary', author: 'Andy Weir', coverImage: '' }
  ];

  const personalizedRecommendations = [
    { id: '1', title: 'Dune', author: 'Frank Herbert', coverUrl: '' },
    { id: '2', title: '1984', author: 'George Orwell', coverUrl: '' },
    { id: '3', title: 'The Hobbit', author: 'J.R.R. Tolkien', coverUrl: '' },
    { id: '4', title: 'Pride and Prejudice', author: 'Jane Austen', coverUrl: '' }
  ];

  return (
    <main className="bg-[hsl(var(--app-background-50))] min-h-screen p-4 md:p-6 lg:p-8">
      <header className="mb-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[hsl(var(--app-foreground-900))] mb-4">
          Digital Library Home
        </h1>
        <div className="flex flex-col sm:flex-row gap-2">
          <Input
            type="search"
            placeholder="Search for books, authors..."
            className="flex-grow"
            startContent={
              <Icon
                icon="hugeicons:search-02"
                className="text-[hsl(var(--app-foreground-400))] text-xl"
              />
            }
            aria-label="Search for books and authors"
          />
          <Button color="primary">Search</Button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="h-full">
          <CardHeader className="flex gap-3">
            <Icon icon="hugeicons:book-01" width="24" height="24" />
            <h2 className="text-xl font-bold text-[hsl(var(--app-foreground-900))]">
              Currently Borrowed
            </h2>
          </CardHeader>
          <CardBody>
            <ul className="space-y-2">
              {borrowedBooks.map((book, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center p-2 bg-[hsl(var(--app-background-100))] rounded"
                >
                  <span className="text-[hsl(var(--app-foreground-700))]">{book.title}</span>
                  <span className="text-sm text-[hsl(var(--app-foreground-500))]">Due in {book.dueIn} days</span>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>

        <Card className="h-full">
          <CardHeader>
            <h2 className="text-xl font-bold text-[hsl(var(--app-foreground-900))]">Reading Progress</h2>
          </CardHeader>
          <CardBody>
            <ul className="flex flex-col gap-4">
              {readingProgress.map((book, index) => (
                <li key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Icon icon="hugeicons:book-01" className="text-[hsl(var(--app-primary-500))]" />
                    <span className="text-sm sm:text-base font-medium text-[hsl(var(--app-foreground-800))]">{book.title}</span>
                  </div>
                  <div className="w-full sm:w-1/2">
                    <Progress
                      value={book.progress}
                      color="primary"
                      showValueLabel={true}
                      size="sm"
                      aria-label={`Reading progress for ${book.title}`}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] mb-4">Curated Collections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {curatedCollections.map((collection) => (
            <Card key={collection.id} isPressable isHoverable className="h-48">
              <CardBody className="p-0">
                <div className="h-32 w-full relative">
                  {collection.coverImage ? (
                    <Image
                      src={collection.coverImage}
                      alt={`Cover for ${collection.title}`}
                      className="object-cover rounded-t-lg"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[hsl(var(--app-primary-100))] rounded-t-lg">
                      <Icon icon="hugeicons:book-01" className="text-4xl text-[hsl(var(--app-primary-500))]" />
                    </div>
                  )}
                </div>
                <div className="p-2">
                  <p className="text-sm font-semibold text-[hsl(var(--app-foreground-900))]">{collection.title}</p>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] mb-4">Recently Added</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {recentlyAddedBooks.map((book) => (
            <Card key={book.id} isPressable className="h-full">
              <CardBody className="p-0">
                <Image
                  src={book.coverImage || 'https://example.com/placeholder-cover.jpg'}
                  alt={`Cover of ${book.title}`}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-3 flex flex-col justify-between">
                  <h3 className="text-sm font-semibold text-[hsl(var(--app-foreground-900))] line-clamp-2">
                    {book.title}
                  </h3>
                  <p className="text-xs text-[hsl(var(--app-foreground-600))] mt-1">
                    {book.author}
                  </p>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] mb-4 flex items-center">
          <Icon icon="hugeicons:book-open-01" className="mr-2" />
          Personalized Recommendations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {personalizedRecommendations.map((book) => (
            <Card key={book.id} isPressable isHoverable className="h-full">
              <CardBody className="p-0">
                <Image
                  src={book.coverUrl || 'https://example.com/placeholder-cover.jpg'}
                  alt={`Cover of ${book.title}`}
                  className="w-full aspect-[3/4] object-cover mb-2"
                />
                <div className="p-2">
                  <h3 className="text-sm font-semibold text-[hsl(var(--app-foreground-900))] line-clamp-2">
                    {book.title}
                  </h3>
                  <p className="text-xs text-[hsl(var(--app-foreground-600))] mt-1">
                    {book.author}
                  </p>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
