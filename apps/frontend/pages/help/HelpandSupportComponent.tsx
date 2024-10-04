import React from 'react';
import { Accordion, AccordionItem, Link, Card, CardHeader, CardBody, Button } from '@nextui-org/react';
import { Icon } from '@iconify/react';

const faqItems = [
  {
    key: '1',
    question: 'How do I borrow a book?',
    answer: 'To borrow a book, simply search for it in our catalog, click on the "Borrow" button, and follow the prompts to complete the checkout process.'
  },
  {
    key: '2',
    question: 'How long can I keep a book?',
    answer: 'The standard loan period is 21 days. You can renew the book up to 3 times if no one else has placed a hold on it.'
  },
  {
    key: '3',
    question: 'How do I return a book?',
    answer: 'You can return books to any of our library branches during operating hours. Simply drop them off at the circulation desk or use our 24/7 book return slots.'
  }
];

const userGuides = [
  { title: 'How to Search the Catalog', url: '/guides/search-catalog' },
  { title: 'Managing Your Account', url: '/guides/manage-account' },
  { title: 'Using Digital Resources', url: '/guides/digital-resources' },
  { title: 'Mobile App Tutorial', url: '/guides/mobile-app' }
];

const supportData = {
  title: 'Contact Support',
  description: 'Need more help? Our support team is here to assist you.',
  phone: {
    title: 'Phone Support',
    number: '(555) 123-4567',
    hours: 'Mon-Fri: 9am - 5pm'
  },
  email: {
    title: 'Email Support',
    address: 'support@librarysystem.com'
  },
  liveChat: {
    title: 'Live Chat',
    buttonText: 'Start Live Chat'
  }
};

export function HelpandSupportComponent() {
  return (
    <main className="grid grid-cols-12 gap-6 p-4 sm:p-6 lg:p-8 bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))]">
      <div className="col-span-12">
        <h1 className="text-3xl font-bold mb-6">Help and Support</h1>
      </div>

      <section className="col-span-12 lg:col-span-8">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <Accordion selectionMode="multiple" className="bg-[hsl(var(--app-background-100))] rounded-lg">
          {faqItems.map((item) => (
            <AccordionItem
              key={item.key}
              title={
                <div className="flex items-center">
                  <Icon icon="hugeicons:question" className="mr-2 text-[hsl(var(--app-primary-500))]" />
                  <span>{item.question}</span>
                </div>
              }
              className="text-[hsl(var(--app-foreground-900))] font-medium"
            >
              <p className="text-[hsl(var(--app-foreground-700))]">{item.answer}</p>
            </AccordionItem>
          ))}
        </Accordion>
        <Link href="#" className="mt-4 block text-[hsl(var(--app-primary-600))] hover:underline">
          View all FAQs
        </Link>
      </section>

      <div className="col-span-12 lg:col-span-4 grid grid-cols-1 gap-6">
        <section className="bg-[hsl(var(--app-background-100))] p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3 flex items-center">
            <Icon icon="hugeicons:book-open-01" className="mr-2 text-[hsl(var(--app-primary-500))]" />
            User Guides
          </h2>
          <ul className="list-none p-0">
            {userGuides.map((guide, index) => (
              <li key={index} className="mb-2">
                <Link
                  href={guide.url}
                  color="primary"
                  underline="hover"
                  size="lg"
                  className="flex items-center"
                >
                  <Icon icon="hugeicons:book-02" className="mr-2" />
                  {guide.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <Card className="bg-[hsl(var(--app-background-100))] text-[hsl(var(--app-foreground-900))]">
          <CardHeader>
            <h2 className="text-2xl font-bold">{supportData.title}</h2>
          </CardHeader>
          <CardBody className="gap-4">
            <p className="text-base">{supportData.description}</p>
            
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold">{supportData.phone.title}</h3>
              <p className="text-base font-medium">
                <Icon icon="hugeicons:phone-01" className="inline-block mr-2 text-[hsl(var(--app-primary-500))]" />
                {supportData.phone.number}
              </p>
              <p className="text-sm text-[hsl(var(--app-foreground-600))]">{supportData.phone.hours}</p>
            </div>
            
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold">{supportData.email.title}</h3>
              <p className="text-base">Send us an email at:</p>
              <Link href={`mailto:${supportData.email.address}`} color="primary" underline>
                <Icon icon="hugeicons:message-01" className="inline-block mr-2" />
                {supportData.email.address}
              </Link>
            </div>
            
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">{supportData.liveChat.title}</h3>
              <Button color="primary">
                <Icon icon="hugeicons:message-user-01" className="mr-2" />
                {supportData.liveChat.buttonText}
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </main>
  );
}
