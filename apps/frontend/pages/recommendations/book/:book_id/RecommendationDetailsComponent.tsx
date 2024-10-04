import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button, Chip, Image } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function RecommendationDetailsComponent() {
  const bookData = {
    title: 'Book Title',
    author: 'Author Name',
    rating: 4.5,
    reviewCount: 120,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    genres: ['Fiction', 'Mystery', 'Thriller'],
    availability: 5
  };

  const synopsis = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

  const authorBiography = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

  const mockReviews = [
    {
      id: 1,
      author: 'John D.',
      rating: 5,
      content: 'Great book! Couldn\'t put it down. The characters were well-developed and the plot kept me guessing until the end.'
    },
    {
      id: 2,
      author: 'Sarah M.',
      rating: 4,
      content: 'An engaging read with a unique perspective. The author\'s writing style was captivating, though the ending felt a bit rushed.'
    }
  ];

  const mockSimilarBooks = [
    { id: '1', title: 'The Great Gatsby', coverImage: 'https://example.com/gatsby.jpg' },
    { id: '2', title: 'To Kill a Mockingbird', coverImage: 'https://example.com/mockingbird.jpg' },
    { id: '3', title: '1984', coverImage: 'https://example.com/1984.jpg' },
    { id: '4', title: 'Pride and Prejudice', coverImage: 'https://example.com/pride.jpg' }
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-12 gap-8">
        <section className="col-span-12">
          <Card className="w-full bg-[hsl(var(--app-background-50))] appShadow-[var(--app-box-shadow-medium)] rounded-lg">
            <CardHeader>
              <div className="flex flex-col w-full">
                <h1 className="text-3xl md:text-4xl font-bold text-[hsl(var(--app-foreground-900))] mb-2">{bookData.title}</h1>
                <p className="text-xl text-[hsl(var(--app-foreground-700))] mb-4">{bookData.author}</p>
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, index) => (
                    <Icon
                      key={index}
                      icon={index < Math.floor(bookData.rating) ? 'hugeicons:star' : 'hugeicons:star-off'}
                      className={`text-[hsl(var(--app-warning-500))] ${index < Math.floor(bookData.rating) ? 'opacity-100' : 'opacity-50'}`}
                      width="24"
                      height="24"
                    />
                  ))}
                  <span className="text-sm text-[hsl(var(--app-foreground-600))]">{`(${bookData.reviewCount} reviews)`}</span>
                </div>
              </div>
            </CardHeader>
            <CardBody>
              <p className="text-base text-[hsl(var(--app-foreground-800))] mb-4">{bookData.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {bookData.genres.map((genre, index) => (
                  <Chip key={index} className="bg-[hsl(var(--app-primary-100))] text-[hsl(var(--app-primary-700))]">
                    {genre}
                  </Chip>
                ))}
              </div>
              <div className="flex items-center gap-2 mb-4">
                <Icon icon="hugeicons:check-list" className="text-[hsl(var(--app-success-500))]" width="24" height="24" />
                <span className="text-sm text-[hsl(var(--app-foreground-700))]">{`Available (${bookData.availability} copies)`}</span>
              </div>
            </CardBody>
            <CardFooter>
              <div className="flex flex-wrap gap-3">
                <Button color="primary">Place Hold</Button>
                <Button color="secondary">Add to Wishlist</Button>
                <Button variant="bordered">Share</Button>
              </div>
            </CardFooter>
          </Card>
        </section>

        <section className="col-span-12 md:col-span-6">
          <Card className="w-full h-full bg-[hsl(var(--app-background-100))] appShadow-[var(--app-box-shadow-small)] rounded-lg">
            <CardBody className="p-4">
              <div className="flex items-center mb-2">
                <Icon icon="hugeicons:book-open-01" className="text-[hsl(var(--app-foreground-900))] mr-2" width="24" height="24" />
                <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))]">
                  Synopsis
                </h2>
              </div>
              <p className="text-base leading-relaxed text-[hsl(var(--app-foreground-700))]">
                {synopsis}
              </p>
            </CardBody>
          </Card>
        </section>

        <section className="col-span-12 md:col-span-6">
          <Card className="w-full h-full bg-[hsl(var(--app-background-50))] appshadow-[var(--app-box-shadow-small)] rounded-lg">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h3 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))]">
                Author Biography
              </h3>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <p className="text-sm text-[hsl(var(--app-foreground-700))] leading-relaxed">
                {authorBiography}
              </p>
            </CardBody>
          </Card>
        </section>

        <section className="col-span-12">
          <div className="flex flex-col gap-4 bg-[hsl(var(--app-background-50))] p-4 rounded-lg appShadow-[var(--app-box-shadow-medium)]">
            <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))] mb-2">Reader Reviews</h2>
            <div className="flex flex-col gap-4 max-h-80 overflow-y-auto">
              {mockReviews.map((review) => (
                <Card key={review.id} className="bg-[hsl(var(--app-background-100))] rounded">
                  <CardBody className="p-3">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, index) => (
                        <Icon
                          key={index}
                          icon={index < review.rating ? 'hugeicons:star' : 'hugeicons:star-off'}
                          className={index < review.rating ? 'text-[hsl(var(--app-warning-500))]' : 'text-[hsl(var(--app-foreground-300))]'}
                        />
                      ))}
                      <span className="ml-1 text-sm text-[hsl(var(--app-foreground-700))]">{review.rating.toFixed(1)}</span>
                    </div>
                    <p className="text-sm font-medium text-[hsl(var(--app-foreground-700))] mb-1">{review.author}</p>
                    <p className="text-sm text-[hsl(var(--app-foreground-800))] leading-relaxed">{review.content}</p>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="col-span-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))] mb-2">
              <Icon icon="hugeicons:book-02" className="mr-2" />
              Similar Books
            </h2>
            <div className="flex flex-wrap gap-4 justify-start">
              {mockSimilarBooks.map((book) => (
                <Card
                  key={book.id}
                  isPressable
                  isHoverable
                  className="w-[150px] h-[220px] bg-[hsl(var(--app-background-100))] rounded-lg appshadow-[var(--app-box-shadow-small)] transition-all duration-200 ease-in-out hover:scale-105 hover:appshadow-[var(--app-box-shadow-medium)]"
                >
                  <CardBody className="p-0">
                    <Image
                      src={book.coverImage}
                      alt={`Cover of ${book.title}`}
                      className="w-full h-[180px] object-cover rounded-t-lg"
                    />
                    <p className="text-sm font-medium text-[hsl(var(--app-foreground-700))] p-2 overflow-ellipsis whitespace-nowrap overflow-hidden">
                      {book.title}
                    </p>
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
