import React from 'react';
import { Card, CardHeader, CardBody, Select, SelectItem, Input, Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, Chip, Tooltip } from '@nextui-org/react';
import { Icon } from '@iconify/react';

const dateRangeOptions = [
  { value: 'last30days', label: 'Last 30 days' },
  { value: 'last60days', label: 'Last 60 days' },
  { value: 'last90days', label: 'Last 90 days' },
];

const mockRenewalData = [
  {
    id: '1',
    bookTitle: 'The Great Gatsby',
    originalDueDate: '2023-05-15',
    renewalDate: '2023-05-14',
    newDueDate: '2023-06-14',
    status: 'Successful'
  },
  {
    id: '2',
    bookTitle: 'To Kill a Mockingbird',
    originalDueDate: '2023-06-01',
    renewalDate: '2023-05-30',
    newDueDate: '2023-07-01',
    status: 'Successful'
  },
  {
    id: '3',
    bookTitle: '1984',
    originalDueDate: '2023-06-20',
    renewalDate: '2023-06-19',
    newDueDate: '-',
    status: 'Unsuccessful'
  }
];

const statisticsData = [
  { label: 'Total Renewals', value: 15, color: 'text-[hsl(var(--app-foreground-900))]' },
  { label: 'Successful Renewals', value: 12, color: 'text-[hsl(var(--app-success-500))]' },
  { label: 'Unsuccessful Renewals', value: 3, color: 'text-[hsl(var(--app-danger-500))]' },
];

export function RenewalHistoryComponent() {
  return (
    <main className="container mx-auto px-4 py-8 bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))]">
      <div className="grid grid-cols-12 gap-6">
        <section className="col-span-12">
          <Card className="w-full bg-[hsl(var(--app-background-50))] rounded-lg">
            <CardHeader className="flex flex-col items-start gap-4 p-6 border-b border-[hsl(var(--app-foreground-200))]">
              <h1 className="text-2xl font-bold">
                <Icon icon="hugeicons:book-01" className="inline-block mr-2" />
                Renewal History
              </h1>
              <div className="flex flex-col sm:flex-row w-full gap-4">
                <Select
                  label="Date Range"
                  placeholder="Select date range"
                  className="w-full sm:w-48"
                >
                  {dateRangeOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </Select>
                <Input
                  label="Book Title"
                  placeholder="Search by book title"
                  className="w-full sm:w-64"
                />
                <Button
                  color="primary"
                  className="bg-[hsl(var(--app-primary-500))] text-white hover:bg-[hsl(var(--app-primary-600))] px-4 py-2 rounded"
                >
                  Apply Filters
                </Button>
              </div>
            </CardHeader>
          </Card>
        </section>

        <section className="col-span-12 lg:col-span-8">
          <Card className="h-full rounded-lg">
            <CardBody className="p-6">
              <Table
                aria-label="Renewal History Table"
                classNames={{
                  base: 'max-w-full',
                  table: 'min-w-[800px]',
                }}
                isStriped
              >
                <TableHeader>
                  <TableColumn>Book Title</TableColumn>
                  <TableColumn>Original Due Date</TableColumn>
                  <TableColumn>Renewal Date</TableColumn>
                  <TableColumn>New Due Date</TableColumn>
                  <TableColumn>Status</TableColumn>
                </TableHeader>
                <TableBody>
                  {mockRenewalData.map((record) => (
                    <TableRow key={record.id}>
                      <TableCell>{record.bookTitle}</TableCell>
                      <TableCell>{record.originalDueDate}</TableCell>
                      <TableCell>{record.renewalDate}</TableCell>
                      <TableCell>{record.newDueDate}</TableCell>
                      <TableCell>
                        <Tooltip content={record.status === 'Unsuccessful' ? 'Renewal failed. Please check with the librarian.' : 'Renewal successful'}>
                          <Chip
                            color={record.status === 'Successful' ? 'success' : 'danger'}
                            variant="flat"
                          >
                            {record.status}
                          </Chip>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="flex justify-center mt-4">
                <Pagination total={10} initialPage={1} />
              </div>
            </CardBody>
          </Card>
        </section>

        <section className="col-span-12 lg:col-span-4">
          <Card className="h-full bg-[hsl(var(--app-background-50))] rounded-lg">
            <CardBody className="p-6">
              <div className="flex items-center mb-4">
                <Icon icon="hugeicons:chart-increase" className="mr-2 text-[hsl(var(--app-primary-500))]" width="24" height="24" />
                <h2 className="text-xl font-bold">
                  Renewal Statistics
                </h2>
              </div>
              <div className="flex flex-col gap-4">
                {statisticsData.map((item, index) => (
                  <div
                    key={item.label}
                    className={`flex justify-between items-center py-2 ${
                      index !== statisticsData.length - 1
                        ? 'border-b border-[hsl(var(--app-foreground-200))]'
                        : ''
                    }`}
                  >
                    <span className="font-medium text-[hsl(var(--app-foreground-700))]">
                      {item.label}
                    </span>
                    <span className={`font-bold text-lg ${item.color}`} aria-label={`${item.label}: ${item.value}`}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </section>

        <section className="col-span-12">
          <div className="bg-[hsl(var(--app-warning-50))] text-[hsl(var(--app-foreground-700))] p-4 text-sm italic rounded-lg">
            Note: Unsuccessful renewals may be due to holds on the item or exceeding the maximum number of renewals.
          </div>
        </section>
      </div>
    </main>
  );
}
