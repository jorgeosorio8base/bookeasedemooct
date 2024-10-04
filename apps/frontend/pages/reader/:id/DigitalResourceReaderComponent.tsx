import React from 'react';
import { Card, CardBody, Button, Tooltip, CardHeader, CardFooter, Progress, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Accordion, AccordionItem, Link } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function DigitalResourceReaderComponent() {
  const mockData = {
    bookTitle: 'Digital Resource Reader',
    currentPage: 135,
    totalPages: 300,
    isBookmarked: false,
    isFullscreen: false,
    progress: 45,
    chapters: [
      { title: 'Chapter 1: Introduction', page: 1 },
      { title: 'Chapter 2: Getting Started', page: 15 },
      { title: 'Chapter 3: Advanced Concepts', page: 50 }
    ],
    bookmarks: [
      { id: '1', title: 'Chapter 1: Introduction', page: 5 },
      { id: '2', title: 'Chapter 2: Getting Started', page: 15 },
      { id: '3', title: 'Chapter 3: Advanced Concepts', page: 42 }
    ]
  };

  return (
    <main className="container mx-auto px-4 py-8 bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))]">
      <div className="grid grid-cols-12 gap-6">
        <section className="col-span-12">
          <Card className="w-full bg-[hsl(var(--app-background-100))] border-b border-[hsl(var(--app-foreground-200))] appshadow-[var(--app-box-shadow-small)]" radius="none" shadow="none">
            <CardBody className="flex flex-row justify-between items-center p-4">
              <Tooltip content={mockData.bookTitle}>
                <h1 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] truncate max-w-[200px] sm:max-w-[300px] md:max-w-[400px]">
                  {mockData.bookTitle}
                </h1>
              </Tooltip>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Button isIconOnly variant="light" aria-label="Previous page" isDisabled={mockData.currentPage === 1}>
                    <Icon icon="hugeicons:arrow-left-01" width="24" height="24" />
                  </Button>
                  <span className="text-sm text-[hsl(var(--app-foreground-600))]">
                    {mockData.currentPage} / {mockData.totalPages}
                  </span>
                  <Button isIconOnly variant="light" aria-label="Next page" isDisabled={mockData.currentPage === mockData.totalPages}>
                    <Icon icon="hugeicons:arrow-right-01" width="24" height="24" />
                  </Button>
                </div>
                
                <Button isIconOnly variant="light" aria-label={mockData.isBookmarked ? 'Remove bookmark' : 'Add bookmark'}>
                  <Icon icon={mockData.isBookmarked ? 'hugeicons:bookmark' : 'hugeicons:bookmark-outline'} width="24" height="24" />
                </Button>
                
                <Button isIconOnly variant="light" aria-label={mockData.isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}>
                  <Icon icon={mockData.isFullscreen ? 'hugeicons:minimize' : 'hugeicons:maximize'} width="24" height="24" />
                </Button>
              </div>
            </CardBody>
          </Card>
        </section>

        <section className="col-span-12 md:col-span-8 lg:col-span-9">
          <Card className="w-full h-full bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))]">
            <CardHeader className="flex justify-between items-center border-b border-[hsl(var(--app-foreground-200))]">
              <h2 className="text-xl font-bold">{mockData.bookTitle}</h2>
            </CardHeader>
            <CardBody className="p-4">
              <div className="bg-[hsl(var(--app-background-100))] p-4 rounded-md shadow-md mb-4">
                <p className="text-lg">E-book content or Audio player interface would go here.</p>
              </div>
              <Dropdown>
                <DropdownTrigger>
                  <Button variant="bordered">Table of Contents</Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Table of Contents">
                  {mockData.chapters.map((chapter, index) => (
                    <DropdownItem key={index}>{chapter.title}</DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </CardBody>
            <CardFooter className="flex justify-between items-center border-t border-[hsl(var(--app-foreground-200))]">
              <Button isIconOnly variant="light">
                <Icon icon="hugeicons:arrow-left" width={24} />
              </Button>
              <span className="text-sm font-medium text-[hsl(var(--app-foreground-600))]">
                Page {mockData.currentPage} of {mockData.totalPages}
              </span>
              <Button isIconOnly variant="light">
                <Icon icon="hugeicons:arrow-right" width={24} />
              </Button>
            </CardFooter>
            <div className="px-4 pb-4">
              <Progress
                aria-label="Reading progress"
                value={mockData.progress}
                className="max-w-md"
              />
            </div>
          </Card>
        </section>

        <aside className="col-span-12 md:col-span-4 lg:col-span-3">
          <div className="grid grid-cols-1 gap-6">
            <Card className="w-full bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))]">
              <CardHeader className="flex justify-between items-center pb-2">
                <h3 className="text-xl font-bold">Table of Contents</h3>
              </CardHeader>
              <CardBody className="px-3 py-0 text-small">
                <Accordion className="p-0 m-0" variant="bordered" selectionMode="multiple" defaultExpandedKeys={['1']}>
                  {mockData.chapters.map((chapter, index) => (
                    <AccordionItem key={index} aria-label={`Chapter ${index + 1}`} title={chapter.title} className="border-b border-[hsl(var(--app-foreground-200))] last:border-b-0">
                      <Link href={`#chapter-${index + 1}`} className="text-[hsl(var(--app-primary-600))] no-underline hover:underline py-1 px-2 block">
                        Go to Chapter
                      </Link>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardBody>
            </Card>

            <Card className="w-full bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))]">
              <CardHeader className="flex justify-between items-center pb-2">
                <h3 className="text-xl font-bold">Bookmarks</h3>
              </CardHeader>
              <CardBody className="px-3 py-0 text-small">
                <ul className="flex flex-col gap-2">
                  {mockData.bookmarks.map((bookmark) => (
                    <li key={bookmark.id} className="flex justify-between items-center p-2 bg-[hsl(var(--app-background-100))] rounded">
                      <span className="text-[hsl(var(--app-primary-500))] hover:underline cursor-pointer">
                        {bookmark.title}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-[hsl(var(--app-foreground-700))]">
                          Page {bookmark.page}
                        </span>
                        <Button
                          isIconOnly
                          size="sm"
                          variant="light"
                          className="text-[hsl(var(--app-danger-700))] bg-[hsl(var(--app-danger-100))] rounded-full"
                          aria-label="Remove bookmark"
                        >
                          <Icon icon="hugeicons:cancel-01" width="16" height="16" />
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>

            <Card className="w-full bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))]">
              <CardBody>
                <div className="flex items-center mb-2">
                  <Icon icon="hugeicons:book-open-01" className="text-[hsl(var(--app-foreground-900))] mr-2" />
                  <h3 className="text-lg font-semibold">Reading Progress</h3>
                </div>
                <Progress 
                  value={mockData.progress} 
                  color="primary"
                  size="md"
                  radius="full"
                  showValueLabel={true}
                  label={`Page ${mockData.currentPage} of ${mockData.totalPages}`}
                  className="mt-2"
                />
              </CardBody>
            </Card>
          </div>
        </aside>
      </div>
    </main>
  );
}
