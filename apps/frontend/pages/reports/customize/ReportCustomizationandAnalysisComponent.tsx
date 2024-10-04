import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, SelectItem, Checkbox, Button, DateInput, ButtonGroup } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const mockData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
];

const fieldOptions = [
  { key: 'book_title', label: 'Book Title' },
  { key: 'author', label: 'Author' },
  { key: 'isbn', label: 'ISBN' },
  { key: 'genre', label: 'Genre' }
];

const filterOptions = [
  { key: 'overdue', label: 'Overdue Books' },
  { key: 'popular', label: 'Most Popular Books' },
  { key: 'new', label: 'New Acquisitions' }
];

const chartTypes = [
  { key: 'bar', label: 'Bar Chart' },
  { key: 'line', label: 'Line Chart' },
  { key: 'pie', label: 'Pie Chart' },
  { key: 'scatter', label: 'Scatter Plot' },
  { key: 'area', label: 'Area Chart' },
];

const exportOptions = [
  { key: 'pdf', label: 'Export as PDF', icon: 'hugeicons:document-attachment' },
  { key: 'csv', label: 'Export as CSV', icon: 'hugeicons:document-code' },
  { key: 'excel', label: 'Export as Excel', icon: 'hugeicons:document-validation' }
];

const mockReports = [
  { id: '1', name: 'Monthly Circulation Report', frequency: 'Every 1st of the month' },
  { id: '2', name: 'Quarterly Acquisition Report', frequency: 'Every 3 months' }
];

export function ReportCustomizationandAnalysisComponent() {
  return (
    <main className="p-4 bg-[hsl(var(--app-background-50))]">
      <h1 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] mb-4">Report Customization and Analysis</h1>
      
      <div className="grid grid-cols-12 gap-4">
        <section className="col-span-12 lg:col-span-6">
          <Card className="h-full">
            <CardHeader>
              <h2 className="text-lg font-semibold text-[hsl(var(--app-foreground-800))]">Data Selection</h2>
            </CardHeader>
            <CardBody>
              <Select 
                label="Select Fields" 
                placeholder="Choose data fields" 
                className="mb-2"
                selectionMode="multiple"
              >
                {fieldOptions.map((option) => (
                  <SelectItem key={option.key} value={option.key}>
                    {option.label}
                  </SelectItem>
                ))}
              </Select>
              <div className="flex flex-col gap-2">
                {filterOptions.map((option) => (
                  <Checkbox key={option.key} value={option.key}>
                    {option.label}
                  </Checkbox>
                ))}
              </div>
            </CardBody>
            <CardFooter>
              <Button color="primary">
                <Icon icon="hugeicons:chart-line" className="mr-2" />
                Generate Report
              </Button>
            </CardFooter>
          </Card>
        </section>

        <section className="col-span-12 lg:col-span-6">
          <Card className="h-full">
            <CardHeader>
              <h2 className="text-lg font-semibold text-[hsl(var(--app-foreground-800))]">Visualization</h2>
            </CardHeader>
            <CardBody>
              <Select 
                label="Chart Type" 
                placeholder="Select chart type" 
                className="mb-4"
              >
                {chartTypes.map((type) => (
                  <SelectItem key={type.key} value={type.key}>
                    {type.label}
                  </SelectItem>
                ))}
              </Select>
              <div className="w-full h-64">
                <BarChart width={500} height={300} data={mockData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </div>
            </CardBody>
          </Card>
        </section>

        <section className="col-span-12 lg:col-span-6">
          <Card className="h-full">
            <CardHeader>
              <h2 className="text-lg font-semibold text-[hsl(var(--app-foreground-800))]">Time Period Comparison</h2>
            </CardHeader>
            <CardBody>
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <DateInput
                  label="From"
                  placeholder="Select start date"
                  className="w-full"
                />
                <DateInput
                  label="To"
                  placeholder="Select end date"
                  className="w-full"
                />
              </div>
              <Button color="secondary">
                <Icon icon="hugeicons:compare" className="mr-2" />
                Compare
              </Button>
            </CardBody>
          </Card>
        </section>

        <section className="col-span-12 lg:col-span-6">
          <Card className="h-full">
            <CardHeader>
              <h2 className="text-lg font-semibold text-[hsl(var(--app-foreground-800))]">Export Options</h2>
            </CardHeader>
            <CardBody>
              <ButtonGroup variant="flat" color="primary">
                {exportOptions.map((option) => (
                  <Button key={option.key} startContent={<Icon icon={option.icon} />}>
                    {option.label}
                  </Button>
                ))}
              </ButtonGroup>
            </CardBody>
          </Card>
        </section>

        <section className="col-span-12">
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold text-[hsl(var(--app-foreground-800))]">Scheduled Reports</h2>
            </CardHeader>
            <CardBody>
              {mockReports.map((report) => (
                <div key={report.id} className="flex justify-between items-center mb-2 p-2 bg-[hsl(var(--app-background-100))] rounded-md">
                  <div>
                    <span className="font-medium">{report.name}</span>
                    <p className="text-sm text-[hsl(var(--app-foreground-500))]">{report.frequency}</p>
                  </div>
                  <Button size="sm" color="danger">
                    <Icon icon="hugeicons:trash" className="mr-1" />
                    Delete
                  </Button>
                </div>
              ))}
            </CardBody>
          </Card>
        </section>
      </div>
    </main>
  );
}
