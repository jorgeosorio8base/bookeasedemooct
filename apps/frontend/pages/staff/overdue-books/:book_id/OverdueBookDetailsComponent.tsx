import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button, ButtonGroup, Divider, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function OverdueBookDetailsComponent() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedAction, setSelectedAction] = React.useState('');

  const bookInfo = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    isbn: '9780743273565',
    dueDate: '15 days overdue',
    daysOverdue: 15
  };

  const patronInfo = {
    name: 'John Doe',
    id: 'P12345',
    email: 'johndoe@example.com',
    phone: '(555) 123-4567'
  };

  const communicationTimeline = [
    { method: 'mail', date: '3 days after due date', description: 'First Reminder Sent' },
    { method: 'phone', date: '7 days after due date', description: 'Phone Call Made' },
    { method: 'warning', date: '14 days after due date', description: 'Final Notice Sent' }
  ];

  const handleActionClick = (action) => {
    setSelectedAction(action);
    setIsOpen(true);
  };

  const handleConfirm = () => {
    console.log(`Confirmed action: ${selectedAction}`);
    setIsOpen(false);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <Card className="w-full bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] appshadow-[var(--app-box-shadow-medium)]">
            <CardHeader className="flex flex-col items-start pb-0">
              <h1 className="text-2xl font-bold mb-2">Overdue Book Details</h1>
              <div className="inline-block bg-[hsl(var(--app-danger-100))] text-[hsl(var(--app-danger-700))] px-2 py-1 rounded font-semibold text-sm mb-2" aria-label={`Overdue by ${bookInfo.daysOverdue} days`}>
                {bookInfo.dueDate}
              </div>
            </CardHeader>
            <CardBody className="py-2">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl font-semibold">Book Information</h2>
                  <div className="flex items-center gap-2">
                    <Icon icon="hugeicons:book-01" className="text-[hsl(var(--app-primary-500))]" />
                    <span className="font-medium">Title:</span> {bookInfo.title}
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon icon="hugeicons:user" className="text-[hsl(var(--app-primary-500))]" />
                    <span className="font-medium">Author:</span> {bookInfo.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon icon="hugeicons:book-open-01" className="text-[hsl(var(--app-primary-500))]" />
                    <span className="font-medium">ISBN:</span> {bookInfo.isbn}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl font-semibold">Patron Information</h2>
                  <div className="flex items-center gap-2">
                    <Icon icon="hugeicons:user-circle" className="text-[hsl(var(--app-primary-500))]" />
                    <span className="font-medium">Name:</span> {patronInfo.name}
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon icon="hugeicons:user-id-verification" className="text-[hsl(var(--app-primary-500))]" />
                    <span className="font-medium">ID:</span> {patronInfo.id}
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon icon="hugeicons:user-account" className="text-[hsl(var(--app-primary-500))]" />
                    <span className="font-medium">Email:</span> {patronInfo.email}
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon icon="hugeicons:user-sharing" className="text-[hsl(var(--app-primary-500))]" />
                    <span className="font-medium">Phone:</span> {patronInfo.phone}
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        <div className="col-span-12 md:col-span-6">
          <Card className="h-full bg-[hsl(var(--app-background-50))] appshadow-[var(--app-box-shadow-medium)]">
            <CardHeader>
              <h2 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] mb-4">Communication Timeline</h2>
            </CardHeader>
            <CardBody>
              <ol className="flex flex-col gap-4">
                {communicationTimeline.map((event, index) => (
                  <li key={index} className="flex items-center">
                    <Icon
                      icon={`hugeicons:${event.method === 'warning' ? 'alert' : event.method}-01`}
                      className="mr-2 text-[hsl(var(--app-primary-500))]" 
                      width="24"
                      height="24"
                    />
                    <span className="font-semibold mr-2">{event.date}:</span>
                    <span>{event.description}</span>
                  </li>
                ))}
              </ol>
            </CardBody>
          </Card>
        </div>

        <div className="col-span-12 md:col-span-6">
          <Card className="h-full bg-[hsl(var(--app-background-50))] appshadow-[var(--app-box-shadow-medium)]">
            <CardHeader>
              <h2 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] mb-4">Actions</h2>
            </CardHeader>
            <CardBody>
              <ButtonGroup className="flex flex-col sm:flex-row w-full">
                <Button
                  color="primary"
                  className="flex-1"
                  startContent={<Icon icon="hugeicons:mail-send-01" className="text-xl" />}
                  onPress={() => handleActionClick('Send Reminder')}
                >
                  Send Reminder
                </Button>
                <Button
                  color="warning"
                  className="flex-1 sm:ml-2 mt-2 sm:mt-0"
                  startContent={<Icon icon="hugeicons:money-bill-02" className="text-xl" />}
                  onPress={() => handleActionClick('Adjust Late Fees')}
                >
                  Adjust Late Fees
                </Button>
                <Button
                  color="danger"
                  className="flex-1 sm:ml-2 mt-2 sm:mt-0"
                  startContent={<Icon icon="hugeicons:book-remove" className="text-xl" />}
                  onPress={() => handleActionClick('Mark as Lost')}
                >
                  Mark as Lost
                </Button>
              </ButtonGroup>
            </CardBody>
          </Card>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            <Icon icon="hugeicons:alert-circle" className="text-2xl text-[hsl(var(--app-warning-500))]" />
            Confirm {selectedAction}
          </ModalHeader>
          <ModalBody>
            <p>Are you sure you want to {selectedAction.toLowerCase()} for the book "{bookInfo.title}"?</p>
            <p>This action cannot be undone.</p>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button color="primary" onPress={handleConfirm}>
              Confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </main>
  );
}
