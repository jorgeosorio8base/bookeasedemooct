import React from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Input, Checkbox, Select, SelectItem } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function UserAccountManagementComponent() {
  const mockUsers = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Patron', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Staff', status: 'Active' },
  ];

  const mockBorrowedItems = [
    { id: 1, title: 'The Great Gatsby', borrowDate: '2023-05-01', dueDate: '2023-05-15', status: 'Due Soon' },
    { id: 2, title: 'To Kill a Mockingbird', borrowDate: '2023-04-20', dueDate: '2023-05-04', status: 'Overdue' },
  ];

  const mockUserDetails = {
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Patron',
    status: 'Active'
  };

  return (
    <main className="p-6 bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))]">
      <h1 className="text-2xl font-bold mb-6">User Account Management</h1>
      
      <div className="grid grid-cols-12 gap-6">
        <section className="col-span-12 bg-white rounded-lg appShadow-[var(--app-box-shadow-medium)] p-6">
          <h2 className="text-xl font-semibold mb-4">User Accounts</h2>
          
          <div className="flex justify-between items-center mb-4">
            <Button color="primary" startContent={<Icon icon="hugeicons:add-02" />}>
              Add New User
            </Button>
            <Input
              className="w-64"
              placeholder="Search users..."
              startContent={<Icon icon="hugeicons:search-02" />}
            />
          </div>
          
          <Table aria-label="User accounts table">
            <TableHeader>
              <TableColumn>NAME</TableColumn>
              <TableColumn>EMAIL</TableColumn>
              <TableColumn>ROLE</TableColumn>
              <TableColumn>STATUS</TableColumn>
              <TableColumn>ACTIONS</TableColumn>
            </TableHeader>
            <TableBody>
              {mockUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>{user.status}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="sm" color="primary">Edit</Button>
                      <Button size="sm" color="danger">Deactivate</Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>

        <section className="col-span-12 md:col-span-6 bg-white rounded-lg appShadow-[var(--app-box-shadow-small)] p-6 h-full">
          <h2 className="text-xl font-semibold mb-4">
            <Icon icon="hugeicons:user-circle" className="mr-2 inline-block" />
            User Details
          </h2>
          <form className="flex flex-col gap-4">
            <Input
              label="Full Name"
              placeholder="Enter full name"
              defaultValue={mockUserDetails.fullName}
              variant="bordered"
              className="w-full"
            />
            <Input
              label="Email"
              placeholder="Enter email address"
              defaultValue={mockUserDetails.email}
              variant="bordered"
              className="w-full"
            />
            <Select
              label="Role"
              placeholder="Select a role"
              defaultSelectedKeys={[mockUserDetails.role]}
              className="w-full"
            >
              <SelectItem key="Patron" value="Patron">Patron</SelectItem>
              <SelectItem key="Staff" value="Staff">Staff</SelectItem>
              <SelectItem key="Admin" value="Admin">Admin</SelectItem>
            </Select>
            <div className="flex items-center">
              <Checkbox defaultSelected label="Active" />
            </div>
            <div className="flex justify-end gap-2 mt-6">
              <Button color="default" variant="light">
                Cancel
              </Button>
              <Button color="primary">
                Save Changes
              </Button>
            </div>
          </form>
        </section>

        <section className="col-span-12 md:col-span-6 bg-white rounded-lg appShadow-[var(--app-box-shadow-medium)] p-6 h-full">
          <h2 className="text-xl font-semibold mb-4">
            <Icon icon="hugeicons:book-01" className="mr-2 inline-block" />
            Borrowed Items
          </h2>
          <Table aria-label="Borrowed items table">
            <TableHeader>
              <TableColumn>BOOK TITLE</TableColumn>
              <TableColumn>BORROW DATE</TableColumn>
              <TableColumn>DUE DATE</TableColumn>
              <TableColumn>STATUS</TableColumn>
            </TableHeader>
            <TableBody>
              {mockBorrowedItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.borrowDate}</TableCell>
                  <TableCell>{item.dueDate}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      item.status === 'Overdue' 
                        ? 'bg-[hsl(var(--app-danger-100))] text-[hsl(var(--app-danger-700))]' 
                        : 'bg-[hsl(var(--app-warning-100))] text-[hsl(var(--app-warning-700))]'
                    }`}>
                      {item.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>
      </div>
    </main>
  );
}