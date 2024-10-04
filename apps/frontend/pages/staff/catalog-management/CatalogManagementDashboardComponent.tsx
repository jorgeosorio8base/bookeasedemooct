import React from 'react';
import { Input, Button, Card, CardBody, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, Select, SelectItem } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function CatalogManagementDashboardComponent() {
  const mockBooks = [
    { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', isbn: '9780446310789', status: 'Available' },
    { id: 2, title: '1984', author: 'George Orwell', isbn: '9780451524935', status: 'Borrowed' },
    { id: 3, title: 'Pride and Prejudice', author: 'Jane Austen', isbn: '9780141439518', status: 'Overdue' }
  ];

  const stats = [
    { title: 'Total Books', count: 12345, color: '--app-primary-100', icon: 'book-01' },
    { title: 'Available Books', count: 10678, color: '--app-success-100', icon: 'book-open-01' },
    { title: 'Borrowed Books', count: 1667, color: '--app-warning-100', icon: 'book-bookmark-01' },
    { title: 'Overdue Books', count: 89, color: '--app-danger-100', icon: 'book-upload' }
  ];

  const columns = [
    { key: 'title', label: 'Title' },
    { key: 'author', label: 'Author' },
    { key: 'isbn', label: 'ISBN' },
    { key: 'status', label: 'Status' },
    { key: 'actions', label: 'Actions' }
  ];

  const itemsPerPageOptions = [
    { value: '10', label: '10 per page' },
    { value: '20', label: '20 per page' },
    { value: '50', label: '50 per page' },
    { value: '100', label: '100 per page' },
  ];

  const totalBooks = 12345;
  const currentPage = 1;
  const itemsPerPage = 10;

  return (
    <main className="grid grid-cols-12 gap-4 p-4 bg-[hsl(var(--app-background-50))]">
      <header className="col-span-12 flex flex-col md:flex-row justify-between items-center w-full mb-4">
        <h1 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] mb-4 md:mb-0">
          Catalog Management Dashboard
        </h1>
        <div className="flex flex-col sm:flex-row w-full md:w-auto gap-4">
          <Input
            className="w-full md:w-64"
            placeholder="Search books..."
            startContent={<Icon icon="hugeicons:search-01" className="text-[hsl(var(--app-foreground-400))]" />}
            size="sm"
            variant="bordered"
          />
          <Button
            color="primary"
            startContent={<Icon icon="hugeicons:add-02" />}
            size="sm"
          >
            Add New Book
          </Button>
        </div>
      </header>

      <section className="col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className={`w-full h-full bg-[hsl(var(${stat.color}))] shadow-md hover:shadow-lg transition-shadow`}>
            <CardBody className="flex flex-col items-center justify-center p-4">
              <Icon icon={`hugeicons:${stat.icon}`} className="text-3xl mb-2" />
              <h2 className="text-lg font-semibold mb-1">{stat.title}</h2>
              <p className="text-2xl font-bold">{stat.count.toLocaleString()}</p>
            </CardBody>
          </Card>
        ))}
      </section>

      <section className="col-span-12">
        <Table
          aria-label="Books catalog management table"
          className="min-w-full"
          classNames={{
            base: 'max-h-[400px] overflow-scroll',
            table: 'min-w-full',
            th: 'bg-[hsl(var(--app-background-200))] text-[hsl(var(--app-foreground-700))] font-bold uppercase text-xs',
            td: 'text-[hsl(var(--app-foreground-900))]'
          }}
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key} className="px-4 py-2">
                {column.label}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={mockBooks}>
            {(book) => (
              <TableRow key={book.id} className="border-b border-[hsl(var(--app-border-50))] hover:bg-[hsl(var(--app-background-100))]">
                <TableCell>{book.title}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{book.isbn}</TableCell>
                <TableCell>{book.status}</TableCell>
                <TableCell>
                  <div className="flex justify-end gap-2">
                    <Button isIconOnly size="sm" variant="light" aria-label="Edit book">
                      <Icon icon="hugeicons:edit-01" className="text-[hsl(var(--app-primary-500))]" />
                    </Button>
                    <Button isIconOnly size="sm" variant="light" aria-label="Delete book">
                      <Icon icon="hugeicons:delete-01" className="text-[hsl(var(--app-danger-500))]" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </section>

      <footer className="col-span-12 flex flex-col sm:flex-row items-center justify-between w-full py-4">
        <div className="text-sm font-medium text-[hsl(var(--app-foreground-600))] mb-4 sm:mb-0">
          Showing {(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, totalBooks)} of {totalBooks} books
        </div>
        <div className="flex items-center space-x-4">
          <Select
            className="w-32 bg-[hsl(var(--app-background-100))] border-[hsl(var(--app-primary-200))] border rounded-md"
            defaultSelectedKeys={['10']}
            aria-label="Items per page"
          >
            {itemsPerPageOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </Select>
          <Pagination
            total={Math.ceil(totalBooks / itemsPerPage)}
            initialPage={1}
            showControls
            className="gap-1"
            radius="md"
            renderItem={({ page, isActive, onNext, onPrevious }) => {
              if (page === 'prev') {
                return (
                  <button
                    className="min-w-8 h-8 rounded-md bg-[hsl(var(--app-background-100))] hover:bg-[hsl(var(--app-primary-100))] transition-colors"
                    onClick={onPrevious}
                  >
                    <Icon icon="hugeicons:arrow-left-02" width="20" height="20" />
                  </button>
                );
              }
              if (page === 'next') {
                return (
                  <button
                    className="min-w-8 h-8 rounded-md bg-[hsl(var(--app-background-100))] hover:bg-[hsl(var(--app-primary-100))] transition-colors"
                    onClick={onNext}
                  >
                    <Icon icon="hugeicons:arrow-right-02" width="20" height="20" />
                  </button>
                );
              }
              return (
                <button
                  className={`min-w-8 h-8 rounded-md transition-colors ${isActive
                    ? 'bg-[hsl(var(--app-primary-500))] text-white'
                    : 'bg-[hsl(var(--app-background-100))] hover:bg-[hsl(var(--app-primary-100))]'
                    }`}
                >
                  {page}
                </button>
              );
            }}
          />
        </div>
      </footer>
    </main>
  );
}
