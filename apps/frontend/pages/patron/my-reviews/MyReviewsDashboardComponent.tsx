import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button, Divider } from '@nextui-org/react';
import { Icon } from '@iconify/react';

interface Review {
  id: number;
  bookTitle: string;
  rating: number;
  content: string;
  date: string;
  likes: number;
  comments: number;
}

interface DraftReview {
  id: number;
  bookTitle: string;
  content: string;
}

interface SuggestedBook {
  id: number;
  title: string;
  borrowDate: string;
}

const yourReviews: Review[] = [
  {
    id: 1,
    bookTitle: 'The Great Gatsby',
    rating: 4.5,
    content: "A captivating story of wealth, love, and the American Dream. Fitzgerald's prose is beautiful and the characters are unforgettable.",
    date: 'May 15, 2023',
    likes: 24,
    comments: 8
  },
  {
    id: 2,
    bookTitle: 'To Kill a Mockingbird',
    rating: 5,
    content: 'A powerful exploration of racial injustice and loss of innocence. Harper Lee\'s masterpiece is a must-read for everyone.',
    date: 'June 3, 2023',
    likes: 42,
    comments: 15
  }
];

const draftReviews: DraftReview[] = [
  {
    id: 1,
    bookTitle: '1984',
    content: 'Started reading this dystopian classic. The world-building is intense and thought-provoking...'
  }
];

const suggestedBooks: SuggestedBook[] = [
  {
    id: 1,
    title: 'Pride and Prejudice',
    borrowDate: 'April 10, 2023'
  },
  {
    id: 2,
    title: 'The Catcher in the Rye',
    borrowDate: 'Last week'
  },
  {
    id: 3,
    title: 'Brave New World',
    borrowDate: 'Based on your interest in 1984'
  }
];

export function MyReviewsDashboardComponent() {
  return (
    <main className="grid grid-cols-12 gap-8 p-6 bg-[hsl(var(--app-background-50))]">
      <header className="col-span-12">
        <Card className="w-full bg-[hsl(var(--app-background-50))] shadow-none rounded-lg">
          <CardHeader className="flex justify-between items-center px-6 py-4">
            <div className="flex items-center gap-2">
              <Icon icon="hugeicons:book-01" className="text-[hsl(var(--app-foreground-500))] text-2xl" />
              <h1 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))]">My Reviews Dashboard</h1>
            </div>
          </CardHeader>
        </Card>
      </header>

      <section className="col-span-12">
        <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-800))] mb-4">Your Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {yourReviews.map((review) => (
            <Card key={review.id} className="h-full rounded-lg">
              <CardHeader className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-[hsl(var(--app-foreground-800))]">{review.bookTitle}</h3>
                <div className="flex items-center">
                  {[...Array(Math.floor(review.rating))].map((_, i) => (
                    <Icon key={i} icon="hugeicons:star" className="text-yellow-400" />
                  ))}
                  {review.rating % 1 !== 0 && <Icon icon="hugeicons:star-half" className="text-yellow-400" />}
                </div>
              </CardHeader>
              <CardBody>
                <p className="text-base text-[hsl(var(--app-foreground-700))]">{review.content}</p>
              </CardBody>
              <CardFooter className="flex justify-between items-center">
                <span className="text-sm text-[hsl(var(--app-foreground-600))]">{review.date}</span>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Icon icon="hugeicons:thumb-up" />
                    {review.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon icon="hugeicons:comment-01" />
                    {review.comments}
                  </span>
                </div>
              </CardFooter>
              <Divider />
              <CardFooter>
                <div className="flex justify-end gap-2 w-full">
                  <Button size="sm" variant="light">Edit</Button>
                  <Button size="sm" variant="light" color="danger">Delete</Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="col-span-12 md:col-span-6">
        <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-800))] mb-4">Draft Reviews</h2>
        {draftReviews.map((draft) => (
          <Card key={draft.id} className="mb-4 rounded-lg">
            <CardHeader>
              <h3 className="text-lg font-semibold text-[hsl(var(--app-foreground-800))]">{draft.bookTitle}</h3>
            </CardHeader>
            <CardBody>
              <p className="text-base text-[hsl(var(--app-foreground-700))]">{draft.content}</p>
            </CardBody>
            <CardFooter>
              <div className="flex justify-end gap-2 w-full">
                <Button size="sm" variant="light">Continue Writing</Button>
                <Button size="sm" variant="light" color="danger">Discard</Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </section>

      <section className="col-span-12 md:col-span-6">
        <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-800))] mb-4">Suggested Books to Review</h2>
        {suggestedBooks.map((book) => (
          <Card key={book.id} className="mb-4 rounded-lg">
            <CardBody>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-[hsl(var(--app-foreground-800))]">{book.title}</h3>
                <span className="text-sm text-[hsl(var(--app-foreground-600))]">{book.borrowDate}</span>
              </div>
            </CardBody>
            <CardFooter>
              <Button size="sm" color="primary">Start Review</Button>
            </CardFooter>
          </Card>
        ))}
      </section>
    </main>
  );
}
