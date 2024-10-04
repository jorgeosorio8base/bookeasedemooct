import React from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, ButtonGroup, Chip } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function CatalogDiscrepancyResolutionComponent() {
  const discrepancies = [
    { id: '1234', title: 'To Kill a Mockingbird', discrepancyType: 'Missing Physical Copy', actions: ['Update', 'Mark Lost'] },
    { id: '5678', title: '1984', discrepancyType: 'Incorrect Status', actions: ['Update', 'Correct Status'] },
  ];

  const resolutionLog = [
    { date: '2023-06-15 14:30', action: 'Updated status for Book ID 9012' },
    { date: '2023-06-14 11:45', action: 'Marked Book ID 3456 as lost' },
    { date: '2023-06-13 09:15', action: 'Corrected inventory count for Book ID 7890' },
  ];

  return (
    <main className="grid grid-cols-12 gap-6 p-6 bg-[hsl(var(--app-background-50))]">
      <section className="col-span-12 bg-[hsl(var(--app-background-100))] rounded-lg p-6 h-full">
        <h1 className="text-2xl font-bold mb-6 text-[hsl(var(--app-foreground-900))]">Catalog Discrepancy Resolution</h1>
        
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4 text-[hsl(var(--app-foreground-800))]">Discrepancies List</h2>
          <Button color="primary" startContent={<Icon icon="hugeicons:refresh" />} className="mb-4">
            Run Inventory Check
          </Button>
          <Table aria-label="Discrepancies list">
            <TableHeader>
              <TableColumn>Book ID</TableColumn>
              <TableColumn>Title</TableColumn>
              <TableColumn>Discrepancy Type</TableColumn>
              <TableColumn>Actions</TableColumn>
            </TableHeader>
            <TableBody>
              {discrepancies.map((discrepancy) => (
                <TableRow key={discrepancy.id}>
                  <TableCell>{discrepancy.id}</TableCell>
                  <TableCell>{discrepancy.title}</TableCell>
                  <TableCell>
                    <Chip color="warning" variant="flat">{discrepancy.discrepancyType}</Chip>
                  </TableCell>
                  <TableCell>
                    <ButtonGroup size="sm">
                      {discrepancy.actions.map((action, index) => (
                        <Button key={index}>{action}</Button>
                      ))}
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      <section className="col-span-12 md:col-span-6 bg-[hsl(var(--app-background-100))] rounded-lg p-6 h-full">
        <h2 className="text-lg font-semibold mb-4 text-[hsl(var(--app-foreground-800))]">Resolution Actions</h2>
        <div className="flex flex-wrap gap-2">
          <Button color="primary">Update Record</Button>
          <Button color="warning">Mark as Damaged</Button>
          <Button color="danger">Mark as Lost</Button>
        </div>
      </section>

      <section className="col-span-12 md:col-span-6 bg-[hsl(var(--app-background-100))] rounded-lg p-6 h-full">
        <h2 className="text-lg font-semibold mb-4 text-[hsl(var(--app-foreground-800))]">Resolution Log</h2>
        <ul className="space-y-2">
          {resolutionLog.map((entry, index) => (
            <li key={index} className="text-sm text-[hsl(var(--app-foreground-700))]">
              {entry.date} - {entry.action}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
