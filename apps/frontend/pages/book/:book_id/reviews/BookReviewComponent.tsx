import React from 'react';
import { Card, CardHeader, CardBody, Button, Select, SelectItem, Checkbox } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function BookReviewComponent() {
  const bookData = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    rating: 4.5,
    reviewCount: 120,
    description: 'A classic novel set in the roaring twenties, exploring themes of decadence, idealism, social upheaval, and resistance to change.'
  };

  const mockReviews = [
    {
      id: '1',
      reviewerName: 'John Doe',
      rating: 5,
      date: '2 days ago',
      content: 'Great book! I couldn\'t put it down. The characters were well-developed and the plot was engaging throughout.',
      isVerified: true
    },
    {
      id: '2',
      reviewerName: 'Jane Smith',
      rating: 4,
      date: '1 week ago',
      content: 'An interesting read, but I found some parts to be a bit slow. The ending was satisfying though.',
      isVerified: false
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<Icon key={i} icon="hugeicons:star" className="text-yellow-400" />);
      } else if (i - 0.5 <= rating) {
        stars.push(<Icon key={i} icon="hugeicons:star-half" className="text-yellow-400" />);
      } else {
        stars.push(<Icon key={i} icon="hugeicons:star" className="text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <main className="container mx-auto px-4 py-8 grid grid-cols-12 gap-8">
      <section className="col-span-12">
        <Card className="w-full bg-[hsl(var(--app-background-50))] rounded-lg">
          <CardHeader className="flex flex-col items-start p-6">
            <h1 className="text-2xl md:text-3xl font-bold text-[hsl(var(--app-foreground-900))]">{bookData.title}</h1>
            <p className="text-lg md:text-xl text-[hsl(var(--app-foreground-700))]">{bookData.author}</p>
          </CardHeader>
          <CardBody className="space-y-4 p-6">
            <div className="flex items-center space-x-2">
              <div className="flex">{renderStars(bookData.rating)}</div>
              <span className="text-sm text-[hsl(var(--app-foreground-600))]">{bookData.rating.toFixed(1)} ({bookData.reviewCount} reviews)</span>
            </div>
            <p className="text-base text-[hsl(var(--app-foreground-800))]">{bookData.description}</p>
            <Button
              color="primary"
              className="font-medium transition-colors duration-200"
              aria-label="Write a review for this book"
            >
              Write a Review
            </Button>
          </CardBody>
        </Card>
      </section>

      <section className="col-span-12 bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] p-6 rounded-lg shadow-[var(--app-box-shadow-medium)]">
        <h2 className="text-2xl font-bold mb-6">Reviews</h2>
        
        <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
          <Button
            color="primary"
            className="bg-[hsl(var(--app-primary-500))] text-white px-4 py-2 rounded-md"
          >
            Write a Review
          </Button>
          
          <div className="flex items-center space-x-4 flex-wrap gap-4">
            <div className="flex items-center">
              <span className="mr-2">Sort by:</span>
              <Select
                className="w-40"
                defaultSelectedKeys={['most_recent']}
              >
                <SelectItem key="most_recent" value="most_recent">Most Recent</SelectItem>
                <SelectItem key="highest_rated" value="highest_rated">Highest Rated</SelectItem>
              </Select>
            </div>
            
            <Checkbox defaultSelected={false}>
              Show verified borrowers only
            </Checkbox>
          </div>
        </div>
        
        <ul className="list-none p-0 space-y-6">
          {mockReviews.map((review) => (
            <li key={review.id} className="border-b border-[hsl(var(--app-foreground-200))] pb-6">
              <h3 className="text-lg font-semibold mb-2">{review.reviewerName}</h3>
              <div className="flex items-center mb-2">
                <div className="flex mr-2">{renderStars(review.rating)}</div>
                <span className="text-sm text-[hsl(var(--app-foreground-600))]">{review.rating} ({review.date})</span>
              </div>
              <p className="text-[hsl(var(--app-foreground-800))]">{review.content}</p>
            </li>
          ))}
        </ul>
        
        <Button
          className="mt-6 w-full bg-[hsl(var(--app-secondary-500))] text-white py-2 rounded-md"
        >
          Load More Reviews
        </Button>
      </section>
    </main>
  );
}
