import React from 'react';
import { Card, CardHeader, CardBody, Select, SelectItem, Input, Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react';
import { Icon } from '@iconify/react';

const reportTypes = [
  { key: 'book-circulation', label: 'Book Circulation' },
  { key: 'overdue-books', label: 'Overdue Books' },
  { key: 'patron-activity', label: 'Patron Activity' },
  { key: 'inventory-status', label: 'Inventory Status' }
];

const scheduledReports = [
  { id: '1', name: 'Monthly Circulation Report', frequency: 'Monthly', lastRun: '2023-05-01' },
  { id: '2', name: 'Weekly Overdue Books Report', frequency: 'Weekly', lastRun: '2023-05-07' }
];

const recentReports = [
  { id: '1', title: 'Q1 2023 Circulation Report', generatedDate: '2023-04-05' },
  { id: '2', title: 'March 2023 Patron Activity', generatedDate: '2023-04-02' },
  { id: '3', title: '2023 YTD Inventory Status', generatedDate: '2023-03-31' }
];

export function ReportGeneratorComponent() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-[hsl(var(--app-foreground-900))]">Report Generator</h1>
      
      <div className="grid grid-cols-12 gap-8">
        <section className="col-span-12 lg:col-span-6">
          <Card className="h-full bg-[hsl(var(--app-background-50))] rounded-lg appShadow-[var(--app-box-shadow-medium)]">
            <CardHeader>
              <h2 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] mb-4">Create New Report</h2>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <Select 
                label="Report Type" 
                placeholder="Select a report type"
                className="w-full"
              >
                {reportTypes.map((type) => (
                  <SelectItem key={type.key} value={type.key}>
                    {type.label}
                  </SelectItem>
                ))}
              </Select>
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="date"
                  label="Start Date"
                  placeholder="Select start date"
                  className="w-full"
                />
                <Input
                  type="date"
                  label="End Date"
                  placeholder="Select end date"
                  className="w-full"
                />
              </div>
              <Input
                label="Additional Filters"
                placeholder="e.g., Genre, Age Group"
                className="w-full"
              />
              <Button
                color="primary"
                className="mt-4 font-semibold self-start"
                endContent={<Icon icon="hugeicons:document-validation" />}
              >
                Generate Report
              </Button>
            </CardBody>
          </Card>
        </section>

        <section className="col-span-12 lg:col-span-6">
          <Card className="h-full bg-[hsl(var(--app-background-50))] rounded-lg appShadow-[var(--app-box-shadow-medium)]">
            <CardHeader>
              <h2 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] mb-4">Scheduled Reports</h2>
            </CardHeader>
            <CardBody>
              <Table aria-label="Scheduled Reports Table">
                <TableHeader>
                  <TableColumn>Report Name</TableColumn>
                  <TableColumn>Frequency</TableColumn>
                  <TableColumn>Last Run</TableColumn>
                  <TableColumn>Actions</TableColumn>
                </TableHeader>
                <TableBody>
                  {scheduledReports.map((report) => (
                    <TableRow key={report.id}>
                      <TableCell>{report.name}</TableCell>
                      <TableCell>{report.frequency}</TableCell>
                      <TableCell>{report.lastRun}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button isIconOnly size="sm" aria-label="Edit report">
                            <Icon icon="hugeicons:edit-01" width={20} height={20} />
                          </Button>
                          <Button isIconOnly size="sm" color="danger" aria-label="Delete report">
                            <Icon icon="hugeicons:delete-01" width={20} height={20} />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardBody>
          </Card>
        </section>

        <section className="col-span-12">
          <Card className="bg-[hsl(var(--app-background-50))] rounded-lg appShadow-[var(--app-box-shadow-medium)]">
            <CardHeader>
              <h2 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] mb-4">Recent Reports</h2>
            </CardHeader>
            <CardBody>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {recentReports.map((report) => (
                  <div key={report.id} className="flex flex-col gap-2 p-4 bg-[hsl(var(--app-background-100))] rounded-md">
                    <h3 className="text-lg font-semibold text-[hsl(var(--app-foreground-800))]">{report.title}</h3>
                    <p className="text-sm text-[hsl(var(--app-foreground-600))]">Generated on: {report.generatedDate}</p>
                    <Button
                      size="sm"
                      color="primary"
                      variant="solid"
                      endContent={<Icon icon="hugeicons:document-code" />}
                      className="self-start mt-2"
                      aria-label={`View ${report.title}`}
                    >
                      View Report
                    </Button>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </section>
      </div>
    </main>
  );
}
