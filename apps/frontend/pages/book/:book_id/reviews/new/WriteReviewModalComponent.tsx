import React from 'react';
import { Input, Textarea, Button, Link } from '@nextui-org/react';
import { Icon } from '@iconify/react';

const RatingSelector = () => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Icon
          key={star}
          icon="hugeicons:star"
          className="text-[hsl(var(--app-warning-500))] text-2xl cursor-pointer"
        />
      ))}
    </div>
  );
};

const guidelines = [
  'Focus on your personal experience with the book',
  'Avoid spoilers or use spoiler warnings',
  'Be respectful and constructive in your feedback',
  'Proofread your review before submitting'
];

export function WriteReviewModalComponent() {
  return (
    <main className="grid grid-cols-12 gap-4 p-4 bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] max-w-3xl mx-auto">
      <section className="col-span-12">
        <h2 className="text-2xl font-bold mb-4">Write a Review</h2>
      </section>

      <section className="col-span-12 md:col-span-6 h-full">
        <div className="flex flex-col gap-4 h-full">
          <div>
            <label className="block text-sm font-medium mb-2">Rating</label>
            <RatingSelector />
          </div>
          <Input
            label="Review Title"
            placeholder="Enter a title for your review"
            className="w-full"
            labelPlacement="outside"
            radius="sm"
            variant="bordered"
          />
        </div>
      </section>

      <section className="col-span-12 md:col-span-6 h-full">
        <Textarea
          label="Your Review"
          placeholder="Write your review here"
          minRows={3}
          className="h-full"
          labelPlacement="outside"
          radius="sm"
          variant="bordered"
        />
      </section>

      <section className="col-span-12 bg-[hsl(var(--app-background-100))] p-4 rounded-sm">
        <h3 className="text-lg font-semibold mb-2">Guidelines for Helpful Reviews</h3>
        <ul className="list-disc pl-5">
          {guidelines.map((guideline, index) => (
            <li key={index} className="mb-1">{guideline}</li>
          ))}
        </ul>
      </section>

      <section className="col-span-12">
        <p className="text-sm mb-4">
          By submitting this review, you agree to our{' '}
          <Link href="#" color="primary" underline="hover">
            Review Policy
          </Link>
          .
        </p>
      </section>

      <section className="col-span-12 flex justify-between">
        <Button color="secondary" variant="flat">
          Save Draft
        </Button>
        <Button color="primary">
          Submit Review
        </Button>
      </section>
    </main>
  );
}
