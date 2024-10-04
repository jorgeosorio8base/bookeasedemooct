import React from 'react';
import { Card, CardBody, CardHeader, Button, ButtonGroup, Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function LibraryDashboardComponent() {
  const bookCirculationData = {
    totalLoans: 1234,
    returnsToday: 87,
    overdueBooks: 23
  };

  const patronActivityData = {
    activePatrons: 789,
    newRegistrations: 12,
    avgBooksPerPatron: 3.5
  };

  const popularCategoriesData = [
    { name: 'Fiction', percentage: 42 },
    { name: 'Non-Fiction', percentage: 28 },
    { name: "Children's", percentage: 18 },
    { name: 'Reference', percentage: 12 }
  ];

  const recentActivityData = [
    { patron: 'John Doe', book: 'To Kill a Mockingbird', action: 'Borrowed', date: '2023-06-15' },
    { patron: 'Jane Smith', book: '1984', action: 'Returned', date: '2023-06-14' },
    { patron: 'Bob Johnson', book: 'The Great Gatsby', action: 'Borrowed', date: '2023-06-14' }
  ];

  return (
    <main className="container mx-auto px-4 py-8 bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))]">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <Card className="h-full bg-[hsl(var(--app-background-50))] shadow-[var(--app-box-shadow-medium)]">
          <CardBody>
            <h2 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] mb-4">Book Circulation</h2>
            <div className="space-y-4">
              {Object.entries(bookCirculationData).map(([key, value], index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon icon={`hugeicons:${key.toLowerCase().replace(' ', '-')}`} className="text-[hsl(var(--app-primary-500))] text-xl" />
                    <span className="text-sm text-[hsl(var(--app-foreground-600))]">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                  </div>
                  <span className="text-lg font-semibold text-[hsl(var(--app-foreground-900))]">{value}</span>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
        <Card className="h-full bg-[hsl(var(--app-background-50))] shadow-[var(--app-box-shadow-medium)]">
          <CardBody>
            <h2 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] mb-4">Patron Activity</h2>
            <div className="space-y-4">
              {Object.entries(patronActivityData).map(([key, value], index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon icon={`hugeicons:${key.toLowerCase().replace(' ', '-')}`} className="text-[hsl(var(--app-primary-500))] text-xl" />
                    <span className="text-sm text-[hsl(var(--app-foreground-600))]">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                  </div>
                  <span className="text-lg font-semibold text-[hsl(var(--app-foreground-900))]">{value}</span>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className="h-full bg-[hsl(var(--app-background-50))] shadow-[var(--app-box-shadow-medium)]">
          <CardHeader className="bg-[hsl(var(--app-primary-100))] text-[hsl(var(--app-foreground-900))]">
            <h2 className="text-lg font-bold">Book Circulation</h2>
          </CardHeader>
          <CardBody>
            <ul className="space-y-2">
              {Object.entries(bookCirculationData).map(([key, value], index) => (
                <li key={index}>{key.replace(/([A-Z])/g, ' $1').trim()}: {value}</li>
              ))}
            </ul>
          </CardBody>
        </Card>

        <Card className="h-full bg-[hsl(var(--app-background-50))] shadow-[var(--app-box-shadow-medium)]">
          <CardHeader className="bg-[hsl(var(--app-secondary-100))] text-[hsl(var(--app-foreground-900))]">
            <h2 className="text-lg font-bold">Patron Activity</h2>
          </CardHeader>
          <CardBody>
            <ul className="space-y-2">
              {Object.entries(patronActivityData).map(([key, value], index) => (
                <li key={index}>{key.replace(/([A-Z])/g, ' $1').trim()}: {value}</li>
              ))}
            </ul>
          </CardBody>
        </Card>

        <Card className="h-full bg-[hsl(var(--app-background-50))] shadow-[var(--app-box-shadow-medium)]">
          <CardHeader className="bg-[hsl(var(--app-success-100))] text-[hsl(var(--app-foreground-900))]">
            <h2 className="text-lg font-bold">Popular Categories</h2>
          </CardHeader>
          <CardBody>
            <ul className="space-y-2">
              {popularCategoriesData.map((category, index) => (
                <li key={index}>{category.name}: {category.percentage}%</li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </section>

      <section className="mb-8">
        <Card className="bg-[hsl(var(--app-background-50))] shadow-[var(--app-box-shadow-medium)]">
          <CardHeader className="bg-[hsl(var(--app-primary-50))] text-[hsl(var(--app-foreground-900))]">
            <h2 className="text-lg font-bold">Recent Activity</h2>
          </CardHeader>
          <CardBody>
            <Table aria-label="Recent library activities">
              <TableHeader>
                <TableColumn>Patron</TableColumn>
                <TableColumn>Book</TableColumn>
                <TableColumn>Action</TableColumn>
                <TableColumn>Date</TableColumn>
              </TableHeader>
              <TableBody>
                {recentActivityData.map((activity, index) => (
                  <TableRow key={index}>
                    <TableCell>{activity.patron}</TableCell>
                    <TableCell>{activity.book}</TableCell>
                    <TableCell>{activity.action}</TableCell>
                    <TableCell>{activity.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardBody>
        </Card>
      </section>

      <section>
        <Card className="bg-[hsl(var(--app-background-50))] shadow-[var(--app-box-shadow-medium)]">
          <CardHeader>
            <h2 className="text-lg font-bold">Quick Actions</h2>
          </CardHeader>
          <CardBody>
            <ButtonGroup>
              <Button color="primary">
                <Icon icon="hugeicons:book-01" className="mr-2" />
                Add Book
              </Button>
              <Button color="secondary">
                <Icon icon="hugeicons:book-open-01" className="mr-2" />
                New Patron
              </Button>
              <Button color="warning">
                <Icon icon="hugeicons:book-bookmark-01" className="mr-2" />
                Manage Loans
              </Button>
              <Button color="success">
                <Icon icon="hugeicons:book-upload" className="mr-2" />
                Generate Report
              </Button>
            </ButtonGroup>
          </CardBody>
        </Card>
      </section>
    </main>
  );
}