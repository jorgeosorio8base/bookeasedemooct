import React from 'react';
import { Card, CardHeader, CardBody, Avatar, Divider, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button } from '@nextui-org/react';
import { Icon } from '@iconify/react';

const mockUserData = {
  fullName: 'John Doe',
  email: 'john.doe@example.com',
  phone: '(555) 123-4567',
  address: '123 Main St, Anytown, USA 12345',
  userId: 'JD12345',
  role: 'Patron',
  accountStatus: 'Active',
  memberSince: 'January 15, 2022',
  avatarSrc: 'https://i.pravatar.cc/150?u=a042581f4e29026024d'
};

const mockBorrowedItems = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    dueDate: 'May 15, 2024',
    status: 'On Time'
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    dueDate: 'June 1, 2024',
    status: 'On Time'
  }
];

const mockLoanHistory = [
  { id: '1', title: 'The Great Gatsby', borrowedDate: '2024-05-15', returnedDate: null },
  { id: '2', title: 'To Kill a Mockingbird', borrowedDate: '2024-06-01', returnedDate: '2024-06-15' },
  { id: '3', title: '1984', borrowedDate: '2024-03-01', returnedDate: '2024-03-15' },
  { id: '4', title: 'Pride and Prejudice', borrowedDate: '2024-02-10', returnedDate: '2024-02-24' }
];

export function UserProfileComponent() {
  const { fullName, email, phone, address, userId, role, accountStatus, memberSince, avatarSrc } = mockUserData;

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-12 gap-6">
        <section className="col-span-12">
          <Card className="w-full bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] rounded-lg appShadow-[var(--app-box-shadow-medium)]">
            <CardHeader className="flex flex-col md:flex-row items-center md:items-start p-6">
              <Avatar
                src={avatarSrc}
                name={fullName}
                className="w-24 h-24 md:w-32 md:h-32 text-large mb-4 md:mb-0 md:mr-6 border-4 border-[hsl(var(--app-primary-200))]" 
                isBordered
                color="primary"
              />
              <div className="flex flex-col text-center md:text-left">
                <h1 className="text-2xl font-bold mb-2">{fullName}</h1>
                <div className="flex flex-col mb-4">
                  <div className="flex items-center mb-1">
                    <Icon icon="hugeicons:mail" className="mr-2" />
                    <span>{email}</span>
                  </div>
                  <div className="flex items-center mb-1">
                    <Icon icon="hugeicons:phone" className="mr-2" />
                    <span>{phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Icon icon="hugeicons:location" className="mr-2" />
                    <span>{address}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <Divider />
            <CardBody className="p-6">
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="font-semibold mb-1">User ID</dt>
                  <dd>{userId}</dd>
                </div>
                <div>
                  <dt className="font-semibold mb-1">Role</dt>
                  <dd>{role}</dd>
                </div>
                <div>
                  <dt className="font-semibold mb-1">Account Status</dt>
                  <dd>{accountStatus}</dd>
                </div>
                <div>
                  <dt className="font-semibold mb-1">Member Since</dt>
                  <dd>{memberSince}</dd>
                </div>
              </dl>
            </CardBody>
          </Card>
        </section>

        <section className="col-span-12 md:col-span-6">
          <Card className="h-full bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] rounded-lg appShadow-[var(--app-box-shadow-medium)]">
            <CardHeader className="flex gap-3 border-b border-[hsl(var(--app-foreground-200))] pb-2">
              <Icon icon="hugeicons:account-setting-01" width="24" height="24" />
              <h2 className="text-xl font-semibold">Personal Information</h2>
            </CardHeader>
            <CardBody className="flex flex-col gap-3">
              <InfoItem label="Full Name" value={fullName} />
              <InfoItem label="Email" value={email} />
              <InfoItem label="Phone" value={phone} />
              <InfoItem label="Address" value={address} />
            </CardBody>
          </Card>
        </section>

        <section className="col-span-12 md:col-span-6">
          <Card className="h-full bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] rounded-lg appShadow-[var(--app-box-shadow-medium)]">
            <CardHeader className="flex gap-3 p-4 bg-[hsl(var(--app-background-100))] border-b border-[hsl(var(--app-background-200))]">
              <Icon icon="hugeicons:account-setting-01" width="24" height="24" />
              <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-800))]">Account Information</h2>
            </CardHeader>
            <CardBody className="p-4 flex flex-col gap-4">
              <InfoItem label="User ID" value={userId} />
              <InfoItem label="Role" value={role} />
              <InfoItem label="Account Status" value={accountStatus} />
              <InfoItem label="Member Since" value={memberSince} />
            </CardBody>
          </Card>
        </section>

        <section className="col-span-12">
          <Card className="w-full bg-[hsl(var(--app-background-50))] rounded-lg appShadow-[var(--app-box-shadow-medium)]">
            <CardHeader className="px-2 py-3 border-b border-[hsl(var(--app-foreground-200))]">
              <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))]">Current Borrowed Items</h2>
            </CardHeader>
            <CardBody className="p-2">
              <Table 
                aria-label="Current borrowed items table"
                className="w-full text-sm"
                removeWrapper
                isStriped
              >
                <TableHeader>
                  <TableColumn>Title</TableColumn>
                  <TableColumn>Author</TableColumn>
                  <TableColumn>Due Date</TableColumn>
                  <TableColumn>Status</TableColumn>
                </TableHeader>
                <TableBody>
                  {mockBorrowedItems.map((item, index) => (
                    <TableRow key={index} className="border-b border-[hsl(var(--app-foreground-100))] hover:bg-[hsl(var(--app-background-100))]">
                      <TableCell className="px-4 py-3 font-medium">{item.title}</TableCell>
                      <TableCell className="px-4 py-3">{item.author}</TableCell>
                      <TableCell className="px-4 py-3">{item.dueDate}</TableCell>
                      <TableCell className="px-4 py-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${item.status === 'On Time' ? 'bg-[hsl(var(--app-success-100))] text-[hsl(var(--app-success-700))]' : item.status === 'Due Soon' ? 'bg-[hsl(var(--app-warning-100))] text-[hsl(var(--app-warning-700))]' : 'bg-[hsl(var(--app-danger-100))] text-[hsl(var(--app-danger-700))]'}`}>
                          {item.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardBody>
          </Card>
        </section>

        <section className="col-span-12">
          <Card className="w-full bg-[hsl(var(--app-background-50))] rounded-lg appShadow-[var(--app-box-shadow-medium)]">
            <CardHeader className="flex gap-3 bg-[hsl(var(--app-background-100))] border-b border-[hsl(var(--app-foreground-200))]">
              <Icon icon="hugeicons:book-open-01" className="text-2xl text-[hsl(var(--app-foreground-500))]" />
              <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))]">Loan History</h2>
            </CardHeader>
            <CardBody>
              <Table aria-label="Loan history table" className="w-full">
                <TableHeader>
                  <TableColumn>TITLE</TableColumn>
                  <TableColumn>BORROWED DATE</TableColumn>
                  <TableColumn>RETURNED DATE</TableColumn>
                </TableHeader>
                <TableBody>
                  {mockLoanHistory.map((item) => (
                    <TableRow key={item.id} className="border-b border-[hsl(var(--app-foreground-100))] hover:bg-[hsl(var(--app-background-100))]">
                      <TableCell className="text-[hsl(var(--app-foreground-800))]">{item.title}</TableCell>
                      <TableCell className="text-[hsl(var(--app-foreground-800))]">{item.borrowedDate}</TableCell>
                      <TableCell className="text-[hsl(var(--app-foreground-800))]">
                        {item.returnedDate || 'Not returned'}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardBody>
          </Card>
        </section>

        <section className="col-span-12">
          <div className="flex flex-row gap-2 justify-start items-center mt-4">
            <Button
              variant="flat"
              color="primary"
              size="sm"
              radius="md"
              className="bg-[hsl(var(--app-primary-100))] text-[hsl(var(--app-primary-700))] hover:bg-[hsl(var(--app-primary-200))] focus:ring-2 focus:ring-[hsl(var(--app-primary-300))]"
              startContent={<Icon icon="hugeicons:edit-02" className="w-4 h-4 mr-1" />}
            >
              Edit Profile
            </Button>
            <Button
              variant="light"
              color="secondary"
              size="sm"
              radius="md"
              className="bg-transparent text-[hsl(var(--app-secondary-700))] hover:bg-[hsl(var(--app-secondary-100))] focus:ring-2 focus:ring-[hsl(var(--app-secondary-300))]"
              startContent={<Icon icon="hugeicons:lock" className="w-4 h-4 mr-1" />}
            >
              Change Password
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-sm text-[hsl(var(--app-foreground-500))] mb-1">{label}</span>
      <span className="text-base font-medium">{value}</span>
    </div>
  );
}