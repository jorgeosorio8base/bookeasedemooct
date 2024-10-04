import React from 'react';
import { NotificationPreferencesHeader } from './NotificationPreferencesHeader';
import { NotificationMethodsSection } from './NotificationMethodsSection';
import { NotificationTypesSection } from './NotificationTypesSection';
import { ReminderFrequencySection } from './ReminderFrequencySection';
import { QuietHoursSection } from './QuietHoursSection';
import { SavePreferencesButton } from './SavePreferencesButton';

export function NotificationPreferencesComponent() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="grid grid-cols-12 gap-6">
        <section className="col-span-12">
          <NotificationPreferencesHeader />
        </section>

        <section className="col-span-12 md:col-span-6 lg:col-span-4">
          <div className="h-full bg-white rounded-lg shadow-md overflow-hidden">
            <NotificationMethodsSection />
          </div>
        </section>

        <section className="col-span-12 md:col-span-6 lg:col-span-8">
          <div className="h-full bg-white rounded-lg shadow-md overflow-hidden">
            <NotificationTypesSection />
          </div>
        </section>

        <section className="col-span-12 md:col-span-6">
          <div className="h-full bg-white rounded-lg shadow-md overflow-hidden">
            <ReminderFrequencySection />
          </div>
        </section>

        <section className="col-span-12 md:col-span-6">
          <div className="h-full bg-white rounded-lg shadow-md overflow-hidden">
            <QuietHoursSection />
          </div>
        </section>

        <section className="col-span-12 flex justify-end mt-6">
          <SavePreferencesButton />
        </section>
      </div>
    </main>
  );
}
