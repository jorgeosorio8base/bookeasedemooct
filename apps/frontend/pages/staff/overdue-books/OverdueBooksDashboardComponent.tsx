import React from 'react';
import { Card, CardBody, CardHeader, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Pagination } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

export function OverdueBooksDashboardComponent() {
  const metrics = [
    { title: 'Total Overdue Books', value: 127, icon: 'book-01' },
    { title: 'Total Late Fees', value: '$523.50', icon: 'book-02' },
    { title: 'Average Days Overdue', value: 8.3, icon: 'book-03' }
  ];

  const overdueBooks = [
    {
      id: '1',
      title: 'To Kill a Mockingbird',
      patron: 'John Doe',
      dueDate: '2023-05-15',
      daysOverdue: 12,
      lateFee: 6.00
    },
    {
      id: '2',
      title: '1984',
      patron: 'Jane Smith',
      dueDate: '2023-05-18',
      daysOverdue: 9,
      lateFee: 4.50
    },
    {
      id: '3',
      title: 'The Great Gatsby',
      patron: 'Bob Johnson',
      dueDate: '2023-05-20',
      daysOverdue: 7,
      lateFee: 3.50
    }
  ];

  const bookCategories = [
    { name: 'Fiction', value: 45, color: 'hsl(var(--app-primary-500))' },
    { name: 'Non-Fiction', value: 30, color: 'hsl(var(--app-secondary-500))' },
    { name: 'Science', value: 20, color: 'hsl(var(--app-success-500))' },
    { name: 'History', value: 15, color: 'hsl(var(--app-warning-500))' },
    { name: 'Others', value: 17, color: 'hsl(var(--app-danger-500))' },
  ];

  return (
    <main className="grid grid-cols-12 gap-6 p-6 bg-[hsl(var(--app-background-50))]">
      <section className="col-span-12">
        <div className="w-full p-6 bg-[hsl(var(--app-background-100))] rounded-lg appShadow-[var(--app-box-shadow-medium)]">
          <h2 className="text-2xl font-bold mb-4 text-[hsl(var(--app-foreground-900))]">Overdue Books Dashboard</h2>
          <div className="flex flex-col md:flex-row gap-4">
            {metrics.map((metric, index) => (
              <Card key={index} className="w-full md:w-1/3 h-full">
                <CardBody className="flex flex-row items-center justify-between p-4">
                  <div>
                    <p className="text-sm text-[hsl(var(--app-foreground-500))]">{metric.title}</p>
                    <h3 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))]">{metric.value}</h3>
                  </div>
                  <Icon icon={`hugeicons:${metric.icon}`} className="text-3xl text-[hsl(var(--app-primary-500))]" />
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="col-span-12 md:col-span-8">
        <div className="bg-[hsl(var(--app-background-100))] p-6 rounded-lg appShadow-[var(--app-box-shadow-medium)]">
          <h2 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] mb-4">Overdue Books List</h2>
          
          <div className="flex justify-between mb-4">
            <Button color="primary" startContent={<Icon icon="hugeicons:filter" />}>
              Filter
            </Button>
            <Button color="secondary" startContent={<Icon icon="hugeicons:download-01" />}>
              Export
            </Button>
          </div>
          
          <Table aria-label="Overdue books table">
            <TableHeader>
              <TableColumn>Book Title</TableColumn>
              <TableColumn>Patron Name</TableColumn>
              <TableColumn>Due Date</TableColumn>
              <TableColumn>Days Overdue</TableColumn>
              <TableColumn>Late Fee</TableColumn>
              <TableColumn>Actions</TableColumn>
            </TableHeader>
            <TableBody>
              {overdueBooks.map((book) => (
                <TableRow key={book.id}>
                  <TableCell>{book.title}</TableCell>
                  <TableCell>{book.patron}</TableCell>
                  <TableCell>{book.dueDate}</TableCell>
                  <TableCell className="text-[hsl(var(--app-danger-500))]">{book.daysOverdue}</TableCell>
                  <TableCell>${book.lateFee.toFixed(2)}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="sm" color="warning">Notify</Button>
                      <Button size="sm" color="success">Renew</Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          <div className="flex justify-center mt-4">
            <Pagination total={10} initialPage={1} />
          </div>
        </div>
      </section>

      <section className="col-span-12 md:col-span-4">
        <Card className="w-full h-full bg-[hsl(var(--app-background-100))] appShadow-[var(--app-box-shadow-medium)]">
          <CardHeader className="flex justify-between items-center pb-2">
            <h2 className="text-lg font-semibold text-[hsl(var(--app-foreground-800))]">
              Overdue Books by Category
            </h2>
            <Icon icon="hugeicons:book-02" className="text-2xl text-[hsl(var(--app-primary-500))]" />
          </CardHeader>
          <CardBody>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={bookCategories}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {bookCategories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value, name) => [`${value} books`, `${name}`]}
                  contentStyle={{
                    backgroundColor: 'hsl(var(--app-background-100))',
                    border: 'none',
                    borderRadius: '8px',
                    boxShadow: 'var(--app-box-shadow-small)',
                  }}
                />
                <Legend
                  layout="vertical"
                  align="right"
                  verticalAlign="middle"
                  wrapperStyle={{
                    paddingLeft: '20px',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardBody>
        </Card>
      </section>
    </main>
  );
}
