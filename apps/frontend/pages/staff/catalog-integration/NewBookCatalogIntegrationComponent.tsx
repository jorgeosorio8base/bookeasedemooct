import React from 'react';
import { Input, Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination } from '@nextui-org/react';
import { Icon } from '@iconify/react';

const mockBooks = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', isbn: '9780743273565', genre: 'Fiction', location: 'A3-12' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', isbn: '9780446310789', genre: 'Fiction', location: 'B2-05' },
  { id: 3, title: '1984', author: 'George Orwell', isbn: '9780451524935', genre: 'Science Fiction', location: 'C1-18' }
];

export function NewBookCatalogIntegrationComponent() {
  return (
    <main className="container mx-auto px-4 py-8 bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] font-sans">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-4">New Book Catalog Integration</h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <Input
            className="w-full md:w-1/3"
            placeholder="Search books..."
            startContent={<Icon icon="hugeicons:search-02" className="text-[hsl(var(--app-foreground-400))]" />}
            aria-label="Search books"
          />
          <div className="flex gap-2">
            <Button color="primary" className="bg-[hsl(var(--app-primary-500))] text-white px-4 py-2 rounded-md">
              Add New Book
            </Button>
            <Button color="secondary" className="bg-[hsl(var(--app-secondary-500))] text-white px-4 py-2 rounded-md">
              Batch Process
            </Button>
          </div>
        </div>
      </header>

      <section className="mb-8">
        <Table
          aria-label="Book catalog table"
          className="w-full bg-white rounded-md overflow-hidden"
          shadow="sm"
        >
          <TableHeader>
            <TableColumn>Title</TableColumn>
            <TableColumn>Author</TableColumn>
            <TableColumn>ISBN</TableColumn>
            <TableColumn>Genre</TableColumn>
            <TableColumn>Location</TableColumn>
            <TableColumn>Actions</TableColumn>
          </TableHeader>
          <TableBody>
            {mockBooks.map((book) => (
              <TableRow key={book.id}>
                <TableCell>{book.title}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{book.isbn}</TableCell>
                <TableCell>{book.genre}</TableCell>
                <TableCell>{book.location}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button size="sm" color="warning">Edit</Button>
                    <Button size="sm" color="danger">Delete</Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

      <footer className="flex items-center justify-between">
        <div className="text-sm">
          Showing 1-3 of 50 books
        </div>
        <Pagination
          total={10}
          initialPage={1}
          size="sm"
          color="primary"
          variant="light"
          showControls
          classNames={{
            wrapper: "gap-0 overflow-visible h-8",
            item: "w-8 h-8 text-sm rounded-none",
            cursor: "bg-[hsl(var(--app-primary-500))] text-white font-bold",
            next: "bg-transparent hover:bg-[hsl(var(--app-primary-100))] text-[hsl(var(--app-foreground-900))]",
            prev: "bg-transparent hover:bg-[hsl(var(--app-primary-100))] text-[hsl(var(--app-foreground-900))]"
          }}
        />
      </footer>
    </main>
  );
}
