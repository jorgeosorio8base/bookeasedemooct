import React from 'react';
import { Card, CardBody, Select, SelectItem, Button } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function ReportGenerationDashboardComponent() {
  const metrics = [
    { label: 'Total Books', value: 12345, icon: 'hugeicons:book' },
    { label: 'Active Loans', value: 1234, icon: 'hugeicons:bookmark' },
    { label: 'Overdue Books', value: 123, icon: 'hugeicons:alert-circle' },
  ];

  const reportTypes = ['Book Circulation', 'Patron Activity', 'Inventory Status'];
  const dateRanges = ['Last 7 days', 'Last 30 days', 'Last 3 months', 'Custom'];

  const recentReports = [
    { title: 'Book Circulation (Last 30 days)', date: '2023-06-01' },
    { title: 'Patron Activity (Last 3 months)', date: '2023-05-15' },
    { title: 'Inventory Status (Current)', date: '2023-06-15' }
  ];

  const savedConfigurations = [
    'Monthly Circulation Summary',
    'Quarterly Patron Analysis',
    'Annual Inventory Review'
  ];

  const chartData = [
    { name: 'Jan', books: 400 },
    { name: 'Feb', books: 300 },
    { name: 'Mar', books: 200 },
    { name: 'Apr', books: 278 },
    { name: 'May', books: 189 },
    { name: 'Jun', books: 239 },
    { name: 'Jul', books: 349 },
  ];

  return (
    <main className="grid grid-cols-12 gap-6 p-6 bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] font-sans">
      <section className="col-span-12">
        <h1 className="text-2xl font-bold mb-6">Report Generation Dashboard</h1>
      </section>

      <section className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-4">
        {metrics.map((metric, index) => (
          <Card key={index} className="w-full h-full">
            <CardBody className="flex flex-row items-center justify-between p-4 bg-[hsl(var(--app-primary-100))] rounded-lg appShadow-[var(--app-box-shadow-small)]">
              <div>
                <p className="text-sm font-medium">{metric.label}</p>
                <p className="text-2xl font-bold">{metric.value.toLocaleString()}</p>
              </div>
              <Icon icon={metric.icon} className="text-3xl text-[hsl(var(--app-primary-500))]" />
            </CardBody>
          </Card>
        ))}
      </section>

      <section className="col-span-12 md:col-span-6 lg:col-span-4">
        <Card className="h-full bg-[hsl(var(--app-background-100))] rounded-lg appShadow-[var(--app-box-shadow-medium)]">
          <CardBody>
            <h2 className="text-xl font-semibold mb-4">Generate Custom Report</h2>
            <div className="flex flex-col gap-4">
              <Select label="Report Type" placeholder="Select a report type">
                {reportTypes.map((type, index) => (
                  <SelectItem key={index} value={type}>{type}</SelectItem>
                ))}
              </Select>
              <Select label="Date Range" placeholder="Select a date range">
                {dateRanges.map((range, index) => (
                  <SelectItem key={index} value={range}>{range}</SelectItem>
                ))}
              </Select>
              <Button color="primary">
                <Icon icon="hugeicons:book-open-01" className="mr-2" />
                Generate Report
              </Button>
            </div>
          </CardBody>
        </Card>
      </section>

      <section className="col-span-12 md:col-span-6 lg:col-span-4">
        <Card className="h-full bg-[hsl(var(--app-background-100))] rounded-lg appShadow-[var(--app-box-shadow-medium)]">
          <CardBody>
            <h2 className="text-xl font-semibold mb-4">Recent Reports</h2>
            <ul className="space-y-2">
              {recentReports.map((report, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{report.title}</span>
                  <Button size="sm" variant="light">View</Button>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </section>

      <section className="col-span-12 md:col-span-6 lg:col-span-4">
        <Card className="h-full bg-[hsl(var(--app-background-100))] rounded-lg appShadow-[var(--app-box-shadow-medium)]">
          <CardBody>
            <h2 className="text-xl font-semibold mb-4">Saved Report Configurations</h2>
            <ul className="space-y-2">
              {savedConfigurations.map((config, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{config}</span>
                  <Button size="sm" variant="light">Load</Button>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </section>

      <section className="col-span-12">
        <Card className="w-full bg-[hsl(var(--app-background-100))] rounded-lg appShadow-[var(--app-box-shadow-medium)]">
          <CardBody>
            <h2 className="text-xl font-semibold mb-4">Data Visualization</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="books" fill="hsl(var(--app-primary-500))" />
              </BarChart>
            </ResponsiveContainer>
          </CardBody>
        </Card>
      </section>
    </main>
  );
}
