import React from 'react';
import { Input, Select, SelectItem, Textarea, Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react';
import { Icon } from '@iconify/react';

const mockBookData = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  isbn: '9780743273565',
  publicationDate: '1925-04-10',
  genre: 'Fiction',
  physicalCondition: 'Good',
  description: 'The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, the novel depicts narrator Nick Carraway\'s interactions with mysterious millionaire Jay Gatsby and Gatsby\'s obsession to reunite with his former lover, Daisy Buchanan.',
  internalNotes: 'Book has been rebound. Popular among high school students.',
  totalCopies: 5,
  availableCopies: 3
};

const mockLendingHistory = [
  { key: '1', patron: 'John Doe', checkoutDate: '2023-05-15', returnDate: '2023-06-05' },
  { key: '2', patron: 'Jane Smith', checkoutDate: '2023-07-01', returnDate: '2023-07-22' }
];

const genreOptions = ['Fiction', 'Non-fiction', 'Science Fiction', 'Mystery', 'Romance', 'Biography'];
const conditionOptions = ['New', 'Like New', 'Very Good', 'Good', 'Fair', 'Poor'];

export function BookDetailsandEditComponent() {
  return (
    <main className="p-6 bg-[hsl(var(--app-background-50))] min-h-screen">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[hsl(var(--app-foreground-900))] mb-6">Book Details and Edit</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Input
            label="Title"
            defaultValue={mockBookData.title}
            startContent={<Icon icon="hugeicons:book-01" />}
            isRequired
            className="w-full"
          />
          <Input
            label="Author"
            defaultValue={mockBookData.author}
            startContent={<Icon icon="hugeicons:book-edit" />}
            isRequired
            className="w-full"
          />
          <Input
            label="ISBN"
            defaultValue={mockBookData.isbn}
            startContent={<Icon icon="hugeicons:book-02" />}
            isRequired
            className="w-full"
          />
          <Input
            label="Publication Date"
            type="date"
            defaultValue={mockBookData.publicationDate}
            startContent={<Icon icon="hugeicons:book-03" />}
            isRequired
            className="w-full"
          />
          <Select
            label="Genre"
            defaultSelectedKeys={[mockBookData.genre]}
            startContent={<Icon icon="hugeicons:book-bookmark-01" />}
            isRequired
            className="w-full"
          >
            {genreOptions.map((genre) => (
              <SelectItem key={genre} value={genre}>
                {genre}
              </SelectItem>
            ))}
          </Select>
          <Select
            label="Physical Condition"
            defaultSelectedKeys={[mockBookData.physicalCondition]}
            startContent={<Icon icon="hugeicons:book-04" />}
            isRequired
            className="w-full"
          >
            {conditionOptions.map((condition) => (
              <SelectItem key={condition} value={condition}>
                {condition}
              </SelectItem>
            ))}
          </Select>
        </div>
        
        <div className="grid grid-cols-1 gap-6 mb-6">
          <Textarea
            label="Description"
            defaultValue={mockBookData.description}
            minRows={3}
            maxRows={5}
            className="w-full"
          />
          <Textarea
            label="Internal Notes"
            defaultValue={mockBookData.internalNotes}
            minRows={2}
            maxRows={4}
            className="w-full"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-[hsl(var(--app-foreground-800))]">Inventory Status</h2>
            <div className="flex gap-4">
              <Input
                type="number"
                label="Total Copies"
                defaultValue={mockBookData.totalCopies.toString()}
                startContent={<Icon icon="hugeicons:book-open-01" />}
                isRequired
                className="w-full"
              />
              <Input
                type="number"
                label="Available Copies"
                defaultValue={mockBookData.availableCopies.toString()}
                startContent={<Icon icon="hugeicons:book-open-02" />}
                isRequired
                className="w-full"
              />
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-[hsl(var(--app-foreground-800))] mb-2">Lending History</h2>
          <Table aria-label="Lending history table" className="w-full">
            <TableHeader>
              <TableColumn>Patron</TableColumn>
              <TableColumn>Checkout Date</TableColumn>
              <TableColumn>Return Date</TableColumn>
            </TableHeader>
            <TableBody>
              {mockLendingHistory.map((record) => (
                <TableRow key={record.key}>
                  <TableCell>{record.patron}</TableCell>
                  <TableCell>{record.checkoutDate}</TableCell>
                  <TableCell>{record.returnDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        <div className="flex justify-end gap-4">
          <Button
            variant="light"
            color="danger"
            size="lg"
            startContent={<Icon icon="hugeicons:cancel-circle" />}
          >
            Cancel
          </Button>
          <Button
            color="primary"
            size="lg"
            startContent={<Icon icon="hugeicons:save-energy-01" />}
          >
            Save Changes
          </Button>
        </div>
      </section>
    </main>
  );
}
