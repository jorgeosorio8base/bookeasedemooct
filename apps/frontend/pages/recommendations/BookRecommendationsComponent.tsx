import React from 'react';
import { Select, SelectItem, Card, CardHeader, CardBody, CardFooter, Button, Chip } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function BookRecommendationsComponent() {
  const genres = [
    { value: 'all', label: 'All Genres' },
    { value: 'fiction', label: 'Fiction' },
    { value: 'non-fiction', label: 'Non-Fiction' },
    { value: 'mystery', label: 'Mystery' },
    { value: 'sci-fi', label: 'Science Fiction' },
  ];

  const formats = [
    { value: 'all', label: 'All Formats' },
    { value: 'hardcover', label: 'Hardcover' },
    { value: 'paperback', label: 'Paperback' },
    { value: 'ebook', label: 'E-book' },
    { value: 'audiobook', label: 'Audiobook' },
  ];

  const availabilities = [
    { value: 'all', label: 'All' },
    { value: 'available', label: 'Available' },
    { value: 'unavailable', label: 'Unavailable' },
  ];

  const mockBooks = [
    {
      id: '1',
      title: 'The Midnight Library',
      author: 'Matt Haig',
      description: 'A novel about all the choices that go into a life well lived.',
      format: 'E-book',
      availability: 'Available',
      recommendationReason: 'Recommended because you enjoyed "The Alchemist"'
    },
    {
      id: '2',
      title: 'Atomic Habits',
      author: 'James Clear',
      description: 'An easy & proven way to build good habits & break bad ones.',
      format: 'Audiobook',
      availability: 'On Hold',
      recommendationReason: 'Recommended based on your interest in self-improvement'
    },
    {
      id: '3',
      title: 'The Silent Patient',
      author: 'Alex Michaelides',
      description: 'A shocking psychological thriller of a woman's act of violence against her husband.',
      format: 'Physical Book',
      availability: 'Available',
      recommendationReason: 'Recommended because you enjoy psychological thrillers'
    }
  ];

  return (
    <main className="grid grid-cols-12 gap-4 p-4 bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))]">
      <header className="col-span-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 p-4 bg-[hsl(var(--app-background-100))] border-[hsl(var(--app-border-200))] border-b rounded-lg">
        <h1 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] mb-4 md:mb-0">
          Book Recommendations
        </h1>
        <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
          <Select
            aria-label="Select genre"
            placeholder="Genre"
            className="w-full md:w-40"
            size="sm"
            selectorIcon={<Icon icon="hugeicons:arrow-down-01" />}
          >
            {genres.map((genre) => (
              <SelectItem key={genre.value} value={genre.value}>
                {genre.label}
              </SelectItem>
            ))}
          </Select>
          <Select
            aria-label="Select format"
            placeholder="Format"
            className="w-full md:w-40"
            size="sm"
            selectorIcon={<Icon icon="hugeicons:arrow-down-01" />}
          >
            {formats.map((format) => (
              <SelectItem key={format.value} value={format.value}>
                {format.label}
              </SelectItem>
            ))}
          </Select>
          <Select
            aria-label="Select availability"
            placeholder="Availability"
            className="w-full md:w-40"
            size="sm"
            selectorIcon={<Icon icon="hugeicons:arrow-down-01" />}
          >
            {availabilities.map((availability) => (
              <SelectItem key={availability.value} value={availability.value}>
                {availability.label}
              </SelectItem>
            ))}
          </Select>
        </div>
      </header>

      <section className="col-span-12 grid gap-4">
        {mockBooks.map((book) => (
          <Card key={book.id} className="w-full bg-[hsl(var(--app-background-100))] rounded-lg appShadow-[var(--app-box-shadow-medium)]">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <h2 className="text-xl font-bold text-[hsl(var(--app-foreground-900))]">{book.title}</h2>
                <p className="text-base text-[hsl(var(--app-foreground-700))]">{book.author}</p>
              </div>
            </CardHeader>
            <CardBody>
              <p className="text-sm text-[hsl(var(--app-foreground-800))] mt-2">{book.description}</p>
              <div className="flex gap-2 mt-2">
                <Chip size="sm" variant="flat">{book.format}</Chip>
                <Chip size="sm" variant="flat" color={book.availability === 'Available' ? 'success' : 'warning'}>
                  {book.availability}
                </Chip>
              </div>
              <p className="text-sm italic text-[hsl(var(--app-foreground-600))] mt-2">{book.recommendationReason}</p>
            </CardBody>
            <CardFooter>
              <div className="flex gap-2 mt-4">
                <Button color="primary" variant="solid">
                  Borrow
                </Button>
                <Button color="secondary" variant="bordered">
                  Add to Wishlist
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </section>

      <section className="col-span-12 mt-8 p-4 bg-[hsl(var(--app-background-100))] rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Rate These Recommendations</h3>
        <p className="mb-4">How helpful were these recommendations?</p>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <Button
              key={star}
              isIconOnly
              variant="ghost"
              className="w-8 h-8 text-[hsl(var(--app-foreground-200))] hover:text-[hsl(var(--app-warning-400))] transition-colors duration-150"
              aria-label={`Rate ${star} out of 5 stars`}
            >
              <Icon icon="hugeicons:star" width="24" height="24" />
            </Button>
          ))}
        </div>
      </section>
    </main>
  );
}
