import React from 'react';
import { Select, SelectItem, Switch, Button, Input } from '@nextui-org/react';
import { Icon } from '@iconify/react';

const notificationHistoryOptions = [
  { key: '1week', label: '1 week' },
  { key: '1month', label: '1 month' },
  { key: '3months', label: '3 months' },
];

const quietHoursMockData = {
  quietHoursEnabled: false,
  fromTime: '22:00',
  toTime: '06:00'
};

const privacySettings = {
  showBookTitles: true,
  showDueDates: false
};

export function NotificationSettingsComponent() {
  const [groupSimilar, setGroupSimilar] = React.useState(true);
  const [groupByCategory, setGroupByCategory] = React.useState(false);

  return (
    <main className="container mx-auto px-4 py-8 bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] font-sans">
      <h1 className="text-3xl font-bold mb-8">Notification Settings</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="bg-[hsl(var(--app-background-100))] rounded-lg p-6 h-full">
          <h2 className="text-xl font-semibold mb-4">Notification History</h2>
          <div className="flex flex-col space-y-4">
            <div>
              <label htmlFor="notification-history-select" className="text-sm text-[hsl(var(--app-foreground-700))] mb-2 block">
                Keep notification history for
              </label>
              <Select
                id="notification-history-select"
                className="max-w-xs"
                defaultSelectedKeys={['1week']}
              >
                {notificationHistoryOptions.map((option) => (
                  <SelectItem key={option.key} value={option.key}>
                    {option.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <Button
              color="danger"
              variant="flat"
              startContent={<Icon icon="hugeicons:delete-01" />}
            >
              Clear Notification History
            </Button>
          </div>
        </section>

        <section className="bg-[hsl(var(--app-background-100))] rounded-lg p-6 h-full">
          <h2 className="text-xl font-semibold mb-4">Quiet Hours</h2>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-[hsl(var(--app-foreground-700))]">Enable Quiet Hours</span>
              <Switch
                defaultSelected={quietHoursMockData.quietHoursEnabled}
                color="primary"
                size="md"
                startContent={<Icon icon="hugeicons:clock-02" width="20" height="20" />}
                aria-label="Enable Quiet Hours"
              />
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="fromTime" className="text-sm font-medium text-[hsl(var(--app-foreground-700))]">From</label>
                <Input
                  id="fromTime"
                  type="time"
                  defaultValue={quietHoursMockData.fromTime}
                  className="max-w-[120px]"
                  aria-label="Quiet hours start time"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="toTime" className="text-sm font-medium text-[hsl(var(--app-foreground-700))]">To</label>
                <Input
                  id="toTime"
                  type="time"
                  defaultValue={quietHoursMockData.toTime}
                  className="max-w-[120px]"
                  aria-label="Quiet hours end time"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[hsl(var(--app-background-100))] rounded-lg p-6 h-full">
          <h2 className="text-xl font-semibold mb-4">Notification Grouping</h2>
          <div className="flex flex-col space-y-4">
            <div className="flex justify-between items-center">
              <label htmlFor="group-similar" className="text-sm text-[hsl(var(--app-foreground-700))]">
                Group similar notifications
              </label>
              <Switch
                id="group-similar"
                isSelected={groupSimilar}
                onValueChange={setGroupSimilar}
                aria-label="Group similar notifications"
                color="primary"
              />
            </div>
            <div className="flex justify-between items-center">
              <label htmlFor="group-by-category" className="text-sm text-[hsl(var(--app-foreground-700))]">
                Group by category
              </label>
              <Switch
                id="group-by-category"
                isSelected={groupByCategory}
                onValueChange={setGroupByCategory}
                aria-label="Group by category"
                color="primary"
              />
            </div>
          </div>
        </section>

        <section className="bg-[hsl(var(--app-background-100))] rounded-lg p-6 h-full">
          <h2 className="text-xl font-semibold mb-4">Privacy Settings</h2>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <label htmlFor="showBookTitles" className="text-sm text-[hsl(var(--app-foreground-700))]">
                <Icon icon="hugeicons:book-01" className="inline-block mr-2" />
                Show book titles in notifications
              </label>
              <Switch
                id="showBookTitles"
                aria-label="Show book titles in notifications"
                isSelected={privacySettings.showBookTitles}
                color="primary"
              />
            </div>
            <div className="flex items-center justify-between">
              <label htmlFor="showDueDates" className="text-sm text-[hsl(var(--app-foreground-700))]">
                <Icon icon="hugeicons:calendar-01" className="inline-block mr-2" />
                Show due dates in notifications
              </label>
              <Switch
                id="showDueDates"
                aria-label="Show due dates in notifications"
                isSelected={privacySettings.showDueDates}
                color="primary"
              />
            </div>
          </div>
        </section>
      </div>

      <section className="mt-8 bg-[hsl(var(--app-background-100))] rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Test Notifications</h2>
        <p className="text-sm text-[hsl(var(--app-foreground-600))] mb-4">
          Send a test notification to ensure your settings are working correctly.
        </p>
        <Button
          color="primary"
          variant="solid"
          startContent={<Icon icon="hugeicons:notification-01" />}
          className="max-w-xs"
        >
          Send Test Notification
        </Button>
      </section>
    </main>
  );
}
