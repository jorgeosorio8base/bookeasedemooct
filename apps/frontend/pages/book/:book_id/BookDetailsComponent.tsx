import React from 'react';
import { Card, CardHeader, CardBody, Button, Chip, Divider, Image, Link } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function BookDetailsComponent() {
  const mockBookDetails = {
    title: 'Book Title',
    author: 'Author Name',
    isbn: '1234567890123',
    publicationDate: 'January 1, 2024',
    status: 'Available',
    synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    location: {
      shelf: 'A3',
      section: 'Fiction'
    },
    relatedBooks: [
      { id: '1', title: 'Book Series 1', author: 'Author Name', coverImage: 'https://example.com/book1-cover.jpg' },
      { id: '2', title: 'Book Series 2', author: 'Author Name', coverImage: 'https://example.com/book2-cover.jpg' },
      { id: '3', title: 'Book Series 3', author: 'Author Name', coverImage: 'https://example.com/book3-cover.jpg' }
    ],
    userReviews: [
      { id: 1, userName: 'John D.', rating: 4, comment: 'Great read! Highly recommended.' },
      { id: 2, userName: 'Jane S.', rating: 5, comment: 'Absolutely loved this book. Couldn\'t put it down!' },
      { id: 3, userName: 'Mike R.', rating: 3, comment: 'Interesting plot, but the pacing was a bit slow for my taste.' }
    ],
    librarianRecommendations: [
      { id: '1', title: 'To Kill a Mockingbird', author: 'Harper Lee' },
      { id: '2', title: '1984', author: 'George Orwell' },
      { id: '3', title: 'Pride and Prejudice', author: 'Jane Austen' }
    ]
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-12 gap-6">
        <section className="col-span-12 lg:col-span-8">
          <Card className="w-full bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] appShadow-[var(--app-box-shadow-medium)] rounded-lg h-full">
            <CardHeader className="flex gap-3 p-6">
              <Icon icon="hugeicons:book-01" width="40" height="40" />
              <div className="flex flex-col">
                <h1 className="text-2xl md:text-3xl font-bold">{mockBookDetails.title}</h1>
                <p className="text-lg md:text-xl font-medium text-[hsl(var(--app-foreground-700))]">{mockBookDetails.author}</p>
              </div>
            </CardHeader>
            <CardBody className="px-6 pb-6">
              <dl className="flex flex-col gap-2 text-sm mb-4">
                <div className="flex">
                  <dt className="font-semibold w-1/3">ISBN:</dt>
                  <dd>{mockBookDetails.isbn}</dd>
                </div>
                <div className="flex">
                  <dt className="font-semibold w-1/3">Publication Date:</dt>
                  <dd>{mockBookDetails.publicationDate}</dd>
                </div>
                <div className="flex items-center">
                  <dt className="font-semibold w-1/3">Status:</dt>
                  <dd>
                    <Chip color={mockBookDetails.status === 'Available' ? 'success' : 'danger'}>
                      {mockBookDetails.status}
                    </Chip>
                  </dd>
                </div>
              </dl>
              <Button 
                className="mb-4 bg-[hsl(var(--app-primary-500))] text-white"
                size="lg"
                disabled={mockBookDetails.status !== 'Available'}
              >
                Reserve Book
              </Button>
              <Divider className="my-4" />
              <section className="mb-4">
                <h3 className="font-semibold mb-2 text-lg">Synopsis</h3>
                <p className="text-sm leading-relaxed text-[hsl(var(--app-foreground-700))]">{mockBookDetails.synopsis}</p>
              </section>
              <Divider className="my-4" />
              <section className="mb-4">
                <h3 className="font-semibold mb-2 text-lg">Location</h3>
                <p className="text-sm text-[hsl(var(--app-foreground-700))]">
                  Shelf: {mockBookDetails.location.shelf} | Section: {mockBookDetails.location.section}
                </p>
              </section>
            </CardBody>
          </Card>
        </section>

        <aside className="col-span-12 lg:col-span-4 space-y-6">
          <Card className="bg-[hsl(var(--app-background-50))] appShadow-[var(--app-box-shadow-small)] rounded-lg h-full">
            <CardBody className="p-4">
              <h3 className="text-xl font-bold mb-4 text-[hsl(var(--app-foreground-900))]">
                <Icon icon="hugeicons:book-01" className="mr-2 inline-block" />
                Librarian Recommendations
              </h3>
              <ul className="space-y-3">
                {mockBookDetails.librarianRecommendations.map((book) => (
                  <li key={book.id}>
                    <Link
                      href={`/book/${book.id}`}
                      className="block p-3 rounded-md bg-[hsl(var(--app-background-100))] hover:bg-[hsl(var(--app-background-200))] transition-colors"
                    >
                      <p className="font-semibold text-[hsl(var(--app-foreground-800))]">{book.title}</p>
                      <p className="text-sm text-[hsl(var(--app-foreground-600))]">{book.author}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>

          <div className="bg-[hsl(var(--app-background-50))] p-4 rounded-lg appShadow-[var(--app-box-shadow-small)]">
            <h3 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))] mb-4">Digital Options</h3>
            <div className="flex flex-col space-y-2">
              <Button
                variant="solid"
                color="primary"
                size="lg"
                radius="md"
                startContent={<Icon icon="hugeicons:book-open-01" />}
                onPress={() => console.log('Preview E-book')}
                aria-label="Preview E-book"
              >
                Preview E-book
              </Button>
              <Button
                variant="bordered"
                color="secondary"
                size="lg"
                radius="md"
                startContent={<Icon icon="hugeicons:book-03" />}
                onPress={() => console.log('Borrow Audiobook')}
                aria-label="Borrow Audiobook"
              >
                Borrow Audiobook
              </Button>
            </div>
          </div>
        </aside>

        <section className="col-span-12">
          <div className="bg-[hsl(var(--app-background-50))] p-6 rounded-lg appShadow-[var(--app-box-shadow-medium)]">
            <h2 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] mb-6">
              <Icon icon="hugeicons:book-02" className="inline-block mr-2" />
              Related Books in Series
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {mockBookDetails.relatedBooks.map((book) => (
                <Card 
                  key={book.id} 
                  isPressable 
                  isHoverable 
                  className="w-full h-full"
                >
                  <CardBody className="p-0">
                    <Image
                      src={book.coverImage}
                      alt={`Cover of ${book.title}`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-3">
                      <h3 className="text-sm font-semibold text-[hsl(var(--app-foreground-800))] mb-1">
                        {book.title}
                      </h3>
                      <p className="text-xs text-[hsl(var(--app-foreground-600))]">
                        {book.author}
                      </p>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="col-span-12">
          <div className="p-6 bg-[hsl(var(--app-background-50))] rounded-lg appShadow-[var(--app-box-shadow-medium)]">
            <h2 className="text-2xl font-semibold text-[hsl(var(--app-foreground-900))] mb-6">User Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockBookDetails.userReviews.map((review) => (
                <Card key={review.id} className="bg-[hsl(var(--app-background-100))]">
                  <CardHeader className="flex justify-between items-center p-4 border-b border-[hsl(var(--app-background-200))]">
                    <span className="text-sm font-medium text-[hsl(var(--app-foreground-700))]">{review.userName}</span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, index) => (
                        <Icon
                          key={index}
                          icon={index < review.rating ? 'hugeicons:star' : 'hugeicons:star-off'}
                          className={`w-4 h-4 ${index < review.rating ? 'text-[hsl(var(--app-warning-500))]' : 'text-[hsl(var(--app-foreground-300))]'}`}
                        />
                      ))}
                      <span className="ml-1 text-sm text-[hsl(var(--app-foreground-600))]">{review.rating.toFixed(1)}</span>
                    </div>
                  </CardHeader>
                  <CardBody className="p-4">
                    <p className="text-sm text-[hsl(var(--app-foreground-600))] leading-relaxed">{review.comment}</p>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
