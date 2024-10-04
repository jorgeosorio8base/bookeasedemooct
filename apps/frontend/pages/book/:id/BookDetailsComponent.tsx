import React from 'react';
import { Card, CardHeader, CardBody, Button, Image, Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function BookDetailsComponent() {
  const bookDetails = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    isbn: '978-0743273565',
    publicationYear: 1925,
    genre: 'Classic Literature',
    availableCopies: 3,
    coverImage: 'https://example.com/great-gatsby-cover.jpg',
    description: 'The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway\'s interactions with mysterious millionaire Jay Gatsby and Gatsby\'s obsession to reunite with his former lover, Daisy Buchanan.',
    loanHistory: [
      { borrower: 'John Doe', borrowDate: '2023-05-15', returnDate: '2023-06-15' },
      { borrower: 'Jane Smith', borrowDate: '2023-03-01', returnDate: '2023-04-01' }
    ],
    relatedTitles: [
      { title: 'Tender Is the Night', author: 'F. Scott Fitzgerald', coverImage: 'https://example.com/tender-is-the-night.jpg' },
      { title: 'This Side of Paradise', author: 'F. Scott Fitzgerald', coverImage: 'https://example.com/this-side-of-paradise.jpg' },
      { title: 'The Beautiful and Damned', author: 'F. Scott Fitzgerald', coverImage: 'https://example.com/the-beautiful-and-damned.jpg' },
      { title: 'The Last Tycoon', author: 'F. Scott Fitzgerald', coverImage: 'https://example.com/the-last-tycoon.jpg' }
    ]
  };

  return (
    <main className="grid grid-cols-12 gap-4 p-4 bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] font-sans">
      <section className="col-span-12">
        <Card className="w-full bg-[hsl(var(--app-background-50))] shadow-[var(--app-box-shadow-medium)] rounded-lg">
          <CardBody className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4">
            <Image
              alt={`Cover of ${bookDetails.title}`}
              src={bookDetails.coverImage}
              className="w-full md:w-1/4 aspect-[3/4] object-cover rounded-md"
            />
            <div className="flex flex-col gap-2 text-[hsl(var(--app-foreground-900))]">
              <h1 className="text-2xl md:text-3xl font-bold">{bookDetails.title}</h1>
              <h2 className="text-lg md:text-xl font-semibold text-[hsl(var(--app-foreground-700))]">
                {bookDetails.author}
              </h2>
              <div className="flex flex-col gap-1 text-sm text-[hsl(var(--app-foreground-600))]">
                <p>ISBN: {bookDetails.isbn}</p>
                <p>Publication Year: {bookDetails.publicationYear}</p>
                <p>Genre: {bookDetails.genre}</p>
                <p>Available: {bookDetails.availableCopies} copies</p>
              </div>
              <Button
                color="primary"
                className="mt-2 w-full md:w-auto"
                startContent={<Icon icon="hugeicons:book-open-01" />}
              >
                Borrow Book
              </Button>
            </div>
          </CardBody>
        </Card>
      </section>

      <section className="col-span-12 md:col-span-8">
        <Card className="h-full rounded-lg shadow-[var(--app-box-shadow-medium)]">
          <CardHeader>
            <h3 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))]">
              Description
            </h3>
          </CardHeader>
          <CardBody>
            <p className="text-base leading-relaxed text-[hsl(var(--app-foreground-800))]">
              {bookDetails.description}
            </p>
          </CardBody>
        </Card>
      </section>

      <section className="col-span-12 md:col-span-4">
        <Card className="h-full rounded-lg shadow-[var(--app-box-shadow-medium)]">
          <CardHeader>
            <h3 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))]">
              Loan History
            </h3>
          </CardHeader>
          <CardBody>
            <Table aria-label="Loan history table">
              <TableHeader>
                <TableColumn>Borrower</TableColumn>
                <TableColumn>Borrow Date</TableColumn>
                <TableColumn>Return Date</TableColumn>
              </TableHeader>
              <TableBody>
                {bookDetails.loanHistory.map((loan, index) => (
                  <TableRow key={index}>
                    <TableCell>{loan.borrower}</TableCell>
                    <TableCell>{loan.borrowDate}</TableCell>
                    <TableCell>{loan.returnDate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardBody>
        </Card>
      </section>

      <section className="col-span-12">
        <Card className="rounded-lg shadow-[var(--app-box-shadow-medium)]">
          <CardHeader>
            <h3 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))]">
              Related Titles
            </h3>
          </CardHeader>
          <CardBody>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {bookDetails.relatedTitles.map((book, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <Image
                    alt={`Cover of ${book.title}`}
                    className="w-full aspect-[2/3] object-cover rounded mb-2"
                    src={book.coverImage}
                  />
                  <p className="text-sm font-medium text-[hsl(var(--app-foreground-900))] line-clamp-2">
                    {book.title}
                  </p>
                  <p className="text-xs text-[hsl(var(--app-foreground-600))]">{book.author}</p>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </section>
    </main>
  );
}
