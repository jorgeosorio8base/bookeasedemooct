import React from 'react';
import { Input, Select, SelectItem, Button, Pagination } from '@nextui-org/react';
import { Icon } from '@iconify/react';

const categories = [
  { value: 'all', label: 'All Categories' },
  { value: 'fiction', label: 'Fiction' },
  { value: 'non-fiction', label: 'Non-Fiction' },
  { value: 'science', label: 'Science' },
  { value: 'history', label: 'History' }
];

const availabilityOptions = [
  { value: 'all', label: 'All' },
  { value: 'available', label: 'Available' },
  { value: 'checked-out', label: 'Checked Out' }
];

const mockSearchResults = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', categories: ['Fiction', 'Classic Literature'], available: true },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', categories: ['Fiction', 'Classic Literature'], available: false },
  { id: 3, title: '1984', author: 'George Orwell', categories: ['Fiction', 'Dystopian'], available: true },
];

const mockTotalResults = 50;
const mockItemsPerPage = 10;

export function CatalogSearchComponent() {
  const totalPages = Math.ceil(mockTotalResults / mockItemsPerPage);

  return (
    <main className="grid grid-cols-12 gap-4 p-4 bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] font-sans">
      <section className="col-span-12">
        <div className="flex flex-col md:flex-row items-start md:items-end gap-2 w-full bg-[hsl(var(--app-background-50))] p-4 border-b border-[hsl(var(--app-foreground-200))] rounded-lg">
          <h1 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] mb-4 w-full">Catalog Search</h1>
          <Input
            placeholder="Enter keywords"
            startContent={<Icon icon="hugeicons:search-02" />}
            className="w-full md:w-1/3"
            size="lg"
          />
          <Select
            placeholder="All Categories"
            className="w-full md:w-1/4"
            size="lg"
          >
            {categories.map((category) => (
              <SelectItem key={category.value} value={category.value}>
                {category.label}
              </SelectItem>
            ))}
          </Select>
          <Select
            placeholder="All"
            className="w-full md:w-1/5"
            size="lg"
          >
            {availabilityOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </Select>
          <Button
            color="primary"
            className="w-full md:w-auto px-4 py-2 rounded hover:bg-[hsl(var(--app-primary-600))]"
            size="lg"
          >
            Search
          </Button>
        </div>
      </section>

      <section className="col-span-12 md:col-span-8 lg:col-span-9">
        <div className="flex flex-col space-y-4 w-full h-full p-4 bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Catalog Search Results</h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
            <p className="text-sm mb-2 sm:mb-0">Showing 1-3 of 3 results</p>
            <div className="flex items-center">
              <span className="text-sm font-medium mr-2 hidden sm:inline-block">Sort by:</span>
              <Select
                className="w-48"
                defaultSelectedKeys={['relevance']}
                aria-label="Sort search results"
              >
                <SelectItem key="relevance" value="relevance">Relevance</SelectItem>
                <SelectItem key="title" value="title">Title</SelectItem>
                <SelectItem key="author" value="author">Author</SelectItem>
                <SelectItem key="date" value="date">Date</SelectItem>
              </Select>
            </div>
          </div>
          
          <ul className="flex flex-col gap-4">
            {mockSearchResults.map((item) => (
              <li key={item.id} className="flex flex-col sm:flex-row justify-between sm:items-center p-4 bg-[hsl(var(--app-background-100))] rounded-md shadow-sm">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-[hsl(var(--app-foreground-600))] mb-1">{item.author}</p>
                  <p className="text-xs text-[hsl(var(--app-foreground-500))] mb-2">{item.categories.join(', ')}</p>
                  <p className={`text-sm font-medium ${item.available ? 'text-[hsl(var(--app-success-500))]' : 'text-[hsl(var(--app-danger-500))]'}`}>
                    {item.available ? 'Available' : 'Checked Out'}
                  </p>
                </div>
                <div className="mt-2 sm:mt-0">
                  <Button
                    color={item.available ? 'primary' : 'secondary'}
                    variant={item.available ? 'solid' : 'bordered'}
                    className="w-full sm:w-auto"
                  >
                    {item.available ? 'Place Hold' : 'Join Waitlist'}
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <aside className="col-span-12 md:col-span-4 lg:col-span-3">
        <form className="flex flex-col gap-4 p-4 bg-[hsl(var(--app-background-50))] rounded-lg shadow-md h-full">
          <h2 className="text-xl font-bold text-[hsl(var(--app-foreground-900))]">Refine Search</h2>
          
          <Input
            label="Search"
            placeholder="Enter keywords"
            startContent={<Icon icon="hugeicons:search-02" className="text-[hsl(var(--app-foreground-400))]" />}
            className="w-full"
          />
          
          <Select
            label="Category"
            placeholder="Select a category"
            className="w-full"
          >
            {categories.map((category) => (
              <SelectItem key={category.value} value={category.value}>
                {category.label}
              </SelectItem>
            ))}
          </Select>
          
          <Select
            label="Availability"
            placeholder="Select availability"
            className="w-full"
          >
            {availabilityOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </Select>
          
          <Button
            color="primary"
            className="w-full mt-4"
            startContent={<Icon icon="hugeicons:search-02" />}
          >
            Refine Search
          </Button>
        </form>
      </aside>

      <section className="col-span-12">
        <div className="flex flex-col items-center gap-4 py-4 px-6 bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] rounded-lg shadow-md">
          <div className="text-sm">
            Showing 1-{mockItemsPerPage} of {mockTotalResults} results
          </div>
          <Pagination
            total={totalPages}
            initialPage={1}
            showControls
            size="sm"
            radius="full"
            classNames={{
              wrapper: "gap-2",
              item: "bg-[hsl(var(--app-background-100))] text-[hsl(var(--app-foreground-700))] hover:bg-[hsl(var(--app-primary-100))] hover:text-[hsl(var(--app-foreground-900))]",
              cursor: "bg-[hsl(var(--app-primary-500))] text-[hsl(var(--app-background-50))]"
            }}
            renderItem={(props) => {
              if (props.isActive) {
                return <Pagination.Cursor {...props} />;
              }
              if (props.page === "prev") {
                return (
                  <Pagination.PrevButton {...props}>
                    <Icon icon="hugeicons:arrow-left-02" width="16" height="16" />
                  </Pagination.PrevButton>
                );
              }
              if (props.page === "next") {
                return (
                  <Pagination.NextButton {...props}>
                    <Icon icon="hugeicons:arrow-right-02" width="16" height="16" />
                  </Pagination.NextButton>
                );
              }
              return <Pagination.Item {...props} />;
            }}
          />
        </div>
      </section>
    </main>
  );
}