import React from 'react';
import { Card, CardHeader, CardBody, Select, SelectItem, Textarea, Button, Input, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip } from '@nextui-org/react';
import { Icon } from '@iconify/react';

const templateOptions = [
  { value: 'overdue', label: 'Overdue Notice' },
  { value: 'reminder', label: 'Reminder' },
  { value: 'warning', label: 'Final Warning' }
];

const patronGroups = [
  { value: 'all', label: 'All Patrons' },
  { value: 'students', label: 'Students' },
  { value: 'faculty', label: 'Faculty' }
];

const itemTypes = [
  { value: 'all', label: 'All Items' },
  { value: 'books', label: 'Books' },
  { value: 'media', label: 'Media' }
];

const communicationLog = [
  { date: '2024-03-15', patron: 'John Doe', messageType: 'Overdue Notice', status: 'Sent' },
  { date: '2024-03-14', patron: 'Jane Smith', messageType: 'Reminder', status: 'Pending' },
  { date: '2024-03-13', patron: 'Bob Johnson', messageType: 'Final Warning', status: 'Failed' }
];

const analyticsData = {
  responseRate: '68%',
  avgResponseTime: '2.3 days',
  mostEffectiveTemplate: 'Reminder'
};

export function CommunicationManagementComponent() {
  return (
    <main className="p-6 bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] font-sans">
      <h1 className="text-2xl font-bold mb-6">Communication Management</h1>
      
      <div className="grid grid-cols-12 gap-6">
        <section className="col-span-12 lg:col-span-8">
          <Card className="h-full">
            <CardHeader>
              <h2 className="text-xl font-semibold">Template Editor</h2>
            </CardHeader>
            <CardBody>
              <div className="flex flex-col gap-4">
                <Select label="Select Template" placeholder="Choose a template">
                  {templateOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </Select>
                <Textarea
                  label="Edit Template"
                  placeholder="Enter your template here"
                  minRows={5}
                />
                <Button color="primary">
                  <Icon icon="hugeicons:message-edit-01" className="mr-2" />
                  Save Template
                </Button>
              </div>
            </CardBody>
          </Card>
        </section>

        <section className="col-span-12 lg:col-span-4">
          <Card className="h-full">
            <CardHeader>
              <h2 className="text-xl font-semibold">Reminder Schedule</h2>
            </CardHeader>
            <CardBody>
              <div className="flex flex-col gap-4">
                <Select label="Patron Group" placeholder="Select patron group">
                  {patronGroups.map((group) => (
                    <SelectItem key={group.value} value={group.value}>
                      {group.label}
                    </SelectItem>
                  ))}
                </Select>
                <Select label="Item Type" placeholder="Select item type">
                  {itemTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </Select>
                <Input
                  type="number"
                  label="Reminder Interval (days)"
                  placeholder="Enter number of days"
                />
                <Button color="primary">
                  <Icon icon="hugeicons:message-delay-01" className="mr-2" />
                  Set Schedule
                </Button>
              </div>
            </CardBody>
          </Card>
        </section>

        <section className="col-span-12">
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Communication Log</h2>
            </CardHeader>
            <CardBody>
              <Table aria-label="Communication log table">
                <TableHeader>
                  <TableColumn>Date</TableColumn>
                  <TableColumn>Patron</TableColumn>
                  <TableColumn>Message Type</TableColumn>
                  <TableColumn>Status</TableColumn>
                </TableHeader>
                <TableBody>
                  {communicationLog.map((log, index) => (
                    <TableRow key={index}>
                      <TableCell>{log.date}</TableCell>
                      <TableCell>{log.patron}</TableCell>
                      <TableCell>{log.messageType}</TableCell>
                      <TableCell>
                        <Chip
                          size="sm"
                          className={`px-2 py-1 text-xs font-medium ${
                            log.status === 'Sent'
                              ? 'bg-[hsl(var(--app-success-100))] text-[hsl(var(--app-success-700))]'
                              : log.status === 'Pending'
                              ? 'bg-[hsl(var(--app-warning-100))] text-[hsl(var(--app-warning-700))]'
                              : 'bg-[hsl(var(--app-danger-100))] text-[hsl(var(--app-danger-700))]'
                          }`}
                        >
                          {log.status}
                        </Chip>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardBody>
          </Card>
        </section>

        <section className="col-span-12 lg:col-span-4">
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Communication Analytics</h2>
            </CardHeader>
            <CardBody>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center p-2 bg-[hsl(var(--app-background-100))] rounded">
                  <span className="text-sm font-medium text-[hsl(var(--app-foreground-700))]">Response Rate</span>
                  <span className="text-lg font-bold text-[hsl(var(--app-primary-500))]">{analyticsData.responseRate}</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-[hsl(var(--app-background-100))] rounded">
                  <span className="text-sm font-medium text-[hsl(var(--app-foreground-700))]">Avg. Response Time</span>
                  <span className="text-lg font-bold text-[hsl(var(--app-primary-500))]">{analyticsData.avgResponseTime}</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-[hsl(var(--app-background-100))] rounded">
                  <span className="text-sm font-medium text-[hsl(var(--app-foreground-700))]">Most Effective Template</span>
                  <span className="text-lg font-bold text-[hsl(var(--app-primary-500))]">{analyticsData.mostEffectiveTemplate}</span>
                </div>
                <Button color="secondary">
                  <Icon icon="hugeicons:message-preview-01" className="mr-2" />
                  Preview & Test Message
                </Button>
              </div>
            </CardBody>
          </Card>
        </section>
      </div>
    </main>
  );
}
