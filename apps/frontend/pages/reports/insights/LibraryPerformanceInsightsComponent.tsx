import React from 'react';
import { Card, CardBody, CardHeader, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

export function LibraryPerformanceInsightsComponent() {
  const metricData = [
    {
      title: 'Average Book Loan Duration',
      value: '14 days',
      change: '+2 days from last month',
      isPositive: false
    },
    {
      title: 'Overdue Books',
      value: '127',
      change: '-5% from last month',
      isPositive: true
    },
    {
      title: 'Patron Satisfaction',
      value: '4.7/5',
      change: '+0.2 from last month',
      isPositive: true
    },
    {
      title: 'Book Circulation Rate',
      value: 'Line Chart Placeholder',
      change: '',
      isPositive: true
    }
  ];

  const circulationData = [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 5000 },
    { name: 'Apr', value: 4500 },
    { name: 'May', value: 4800 },
    { name: 'Jun', value: 5500 },
  ];

  const activeUsersData = [
    { name: 'Jan', value: 500 },
    { name: 'Feb', value: 600 },
    { name: 'Mar', value: 750 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 850 },
    { name: 'Jun', value: 900 },
  ];

  const performanceData = [
    { metric: 'Loan Duration', current: '14 days', previous: '12 days', change: 16.67 },
    { metric: 'Overdue Books', current: 127, previous: 134, change: -5.22 },
    { metric: 'Satisfaction', current: 4.7, previous: 4.5, change: 4.44 }
  ];

  const mockRecommendations = [
    {
      id: 1,
      text: 'Consider implementing a reminder system to reduce overdue books.',
      details: 'A reminder system can help patrons return books on time, reducing the number of overdue items and improving circulation efficiency.'
    },
    {
      id: 2,
      text: 'Analyze popular genres to guide future book acquisitions.',
      details: 'By understanding which genres are most popular, we can make informed decisions about future book purchases, ensuring our collection meets patron interests.'
    },
    {
      id: 3,
      text: 'Investigate reasons for increased loan duration and potential solutions.',
      details: 'The increase in loan duration may indicate changing patron behaviors or needs. Investigating the causes can help us adapt our policies or services accordingly.'
    }
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <section className="mb-8 bg-[hsl(var(--app-background-50))] p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] mb-4">Library Performance Insights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metricData.map((metric, index) => (
            <Card key={index} className="h-full">
              <CardBody className="flex flex-col justify-between">
                <p className="text-sm font-medium text-[hsl(var(--app-foreground-600))] mb-2">{metric.title}</p>
                <p className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] mb-1" aria-label={`${metric.title}: ${metric.value}`}>{metric.value}</p>
                {metric.change && (
                  <div className={`text-sm font-medium flex items-center gap-1 ${metric.isPositive ? 'text-[hsl(var(--app-success-600))]' : 'text-[hsl(var(--app-danger-600))]'}`}>
                    <Icon icon={`hugeicons:arrow-${metric.isPositive ? 'up' : 'down'}-02`} />
                    <span>{metric.change}</span>
                  </div>
                )}
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="lg:col-span-2 bg-[hsl(var(--app-background-100))] shadow-sm">
          <CardHeader>
            <h3 className="text-lg font-bold text-[hsl(var(--app-foreground-900))]">Book Circulation Rate</h3>
          </CardHeader>
          <CardBody>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={circulationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardBody>
        </Card>

        <Card className="bg-[hsl(var(--app-background-100))] shadow-sm">
          <CardHeader>
            <h3 className="text-lg font-bold text-[hsl(var(--app-foreground-900))]">Active Users</h3>
          </CardHeader>
          <CardBody>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={activeUsersData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </CardBody>
        </Card>
      </section>

      <section className="mb-8 bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Icon icon="hugeicons:chart-line-data-01" className="mr-2" />
          Performance Trends
        </h2>
        <Table aria-label="Performance trends table" className="w-full">
          <TableHeader>
            <TableColumn>METRIC</TableColumn>
            <TableColumn>CURRENT</TableColumn>
            <TableColumn>PREVIOUS</TableColumn>
            <TableColumn>CHANGE</TableColumn>
          </TableHeader>
          <TableBody>
            {performanceData.map((row, index) => (
              <TableRow key={index} className="hover:bg-[hsl(var(--app-background-100))]">
                <TableCell>{row.metric}</TableCell>
                <TableCell>{row.current}</TableCell>
                <TableCell>{row.previous}</TableCell>
                <TableCell>
                  <span className={`font-bold ${row.change > 0 ? 'text-[hsl(var(--app-success-500))]' : 'text-[hsl(var(--app-danger-500))]'}`}>
                    {row.change > 0 ? '+' : ''}{row.change.toFixed(2)}%
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

      <section className="bg-[hsl(var(--app-background-50))] rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] mb-4">Recommendations</h2>
        <ul className="space-y-3">
          {mockRecommendations.map((recommendation) => (
            <li key={recommendation.id}>
              <Card
                className="bg-[hsl(var(--app-background-100))] hover:bg-[hsl(var(--app-background-200))] transition-colors"
                shadow="sm"
                isPressable
              >
                <CardHeader className="flex gap-3">
                  <Icon icon="hugeicons:book-01" className="text-[hsl(var(--app-primary-500))] text-xl" />
                  <p className="text-sm font-semibold text-[hsl(var(--app-foreground-700))]">{recommendation.text}</p>
                </CardHeader>
                <CardBody>
                  <p className="text-xs text-[hsl(var(--app-foreground-500))]">{recommendation.details}</p>
                </CardBody>
              </Card>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
