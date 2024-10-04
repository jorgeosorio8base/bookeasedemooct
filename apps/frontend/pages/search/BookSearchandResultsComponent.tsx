import React from 'react';
import { Input, Select, SelectItem, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, CheckboxGroup, Checkbox, Card, CardBody, Pagination } from '@nextui-org/react';
import { Icon } from '@iconify/react';

// Mock data
const categories = ['All Categories', 'Fiction', 'Non-Fiction', 'Science', 'History', 'Biography'];
const authors = ['All Authors', 'Jane Austen', 'George Orwell', 'J.K. Rowling', 'Stephen King'];
const publicationDates = ['All Dates', 'Last 30 days', 'Last 6 months', 'Last year', 'Last 5 years'];
const availabilityOptions = ['All', 'Available', 'Unavailable'];
const sortOptions = ['Relevance', 'Date: Newest', 'Date: Oldest', 'Title: A-Z', 'Title: Z-A'];
const genres = ['Fiction', 'Non-Fiction', 'Mystery'];
const formats = ['Hardcover', 'Paperback', 'E-book'];
const mockBooks = [
  { id: 1, title: 'Book Title', author: 'Author Name', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', available: true },
  { id: 2, title: 'Another Book', author: 'Different Author', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', available: false },
];

export function BookSearchandResultsComponent() {
  return (
    <main className="container mx-auto px-4 py-8 font-sans">
      <h1 className="text-3xl font-bold text-[hsl(var(--app-foreground-900))] mb-8">Book Search and Results</h1>
      
      <section className="mb-8 bg-[hsl(var(--app-background-50))] rounded-lg shadow-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <Input
            placeholder="Search for books..."
            startContent={<Icon icon="hugeicons:search-01" />}
            className="w-full"
          />
          <Select placeholder="All Categories">
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </Select>
          <Select placeholder="All Authors">
            {authors.map((author) => (
              <SelectItem key={author} value={author}>
                {author}
              </SelectItem>
            ))}
          </Select>
          <Select placeholder="Publication Date">
            {publicationDates.map((date) => (
              <SelectItem key={date} value={date}>
                {date}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div className="flex justify-between items-center">
          <Select placeholder="Availability" className="w-48">
            {availabilityOptions.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </Select>
          <Button className="bg-[hsl(var(--app-primary-500))] text-white px-4 py-2 rounded">
            Advanced Search
          </Button>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1 bg-[hsl(var(--app-background-100))] rounded-lg p-6 h-full">
          <h2 className="text-xl font-bold text-[hsl(var(--app-foreground-900))] mb-4">Refine Results</h2>
          <CheckboxGroup label="Genre" className="mb-4">
            {genres.map((genre) => (
              <Checkbox key={genre} value={genre}>{genre}</Checkbox>
            ))}
          </CheckboxGroup>
          <CheckboxGroup label="Format" className="mb-4">
            {formats.map((format) => (
              <Checkbox key={format} value={format}>{format}</Checkbox>
            ))}
          </CheckboxGroup>
        </div>

        <div className="lg:col-span-3">
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm text-[hsl(var(--app-foreground-700))]">Showing 1-10 of 100 results</p>
            <Dropdown>
              <DropdownTrigger>
                <Button variant="light">Sort by: Relevance</Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Sort options">
                {sortOptions.map((option) => (
                  <DropdownItem key={option}>{option}</DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockBooks.map((book) => (
              <Card key={book.id} className="h-full">
                <CardBody>
                  <h3 className="text-lg font-bold text-[hsl(var(--app-foreground-900))]">{book.title}</h3>
                  <p className="text-sm text-[hsl(var(--app-foreground-700))]">{book.author}</p>
                  <p className="text-sm mt-2 text-[hsl(var(--app-foreground-800))]">{book.description}</p>
                  <p className={`text-sm font-semibold mt-2 ${book.available ? 'text-[hsl(var(--app-success-500))]' : 'text-[hsl(var(--app-warning-500))]'}`}>
                    {book.available ? 'Available' : 'On Hold'}
                  </p>
                  <Button size="sm" className="mt-4">Quick View</Button>
                </CardBody>
              </Card>
            ))}
          </div>

          <Pagination total={10} initialPage={1} className="mt-8 justify-center" />
        </div>
      </section>
    </main>
  );
}
