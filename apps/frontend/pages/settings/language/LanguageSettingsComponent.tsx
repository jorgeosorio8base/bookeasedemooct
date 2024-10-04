import React from 'react';
import { Select, SelectItem, Checkbox, Button, Card, CardHeader, CardBody, CardFooter } from '@nextui-org/react';
import { Icon } from '@iconify/react';

const languages = [
  { key: 'en', label: 'English' },
  { key: 'es', label: 'Spanish' },
  { key: 'fr', label: 'French' },
  { key: 'de', label: 'German' },
  { key: 'it', label: 'Italian' },
];

const dateFormats = [
  { key: 'MM/DD/YYYY', label: 'MM/DD/YYYY' },
  { key: 'DD/MM/YYYY', label: 'DD/MM/YYYY' },
  { key: 'YYYY-MM-DD', label: 'YYYY-MM-DD' },
];

const timeFormats = [
  { key: '12', label: '12-hour' },
  { key: '24', label: '24-hour' },
];

const timeZones = [
  { key: 'UTC', label: 'UTC (Coordinated Universal Time)' },
  { key: 'EST', label: 'EST (Eastern Standard Time)' },
  { key: 'CST', label: 'CST (Central Standard Time)' },
  { key: 'PST', label: 'PST (Pacific Standard Time)' },
];

export function LanguageSettingsComponent() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-12 gap-6">
        <section className="col-span-12">
          <Card className="bg-[hsl(var(--app-background-50))] shadow-[var(--app-box-shadow-small)] rounded-lg">
            <CardHeader className="pb-0 pt-6 px-6 flex-col items-start">
              <h1 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))]">
                Language Settings
              </h1>
              <p className="text-base text-[hsl(var(--app-foreground-700))]">
                Select your preferred language and configure localization settings for the application interface.
              </p>
            </CardHeader>
            <CardBody className="px-6 py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Select
                    label="Preferred Language"
                    placeholder="Select a language"
                    className="w-full"
                    startContent={<Icon icon="hugeicons:language-circle" />}
                  >
                    {languages.map((lang) => (
                      <SelectItem key={lang.key} value={lang.key}>
                        {lang.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
                <div>
                  <Select
                    label="Date Format"
                    placeholder="Select a date format"
                    className="w-full"
                  >
                    {dateFormats.map((format) => (
                      <SelectItem key={format.key} value={format.key}>
                        {format.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
                <div>
                  <Select
                    label="Time Format"
                    placeholder="Select a time format"
                    className="w-full"
                  >
                    {timeFormats.map((format) => (
                      <SelectItem key={format.key} value={format.key}>
                        {format.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
                <div>
                  <Select
                    label="Time Zone"
                    placeholder="Select a time zone"
                    className="w-full"
                  >
                    {timeZones.map((zone) => (
                      <SelectItem key={zone.key} value={zone.key}>
                        {zone.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
              </div>
              <Checkbox className="mt-6">
                Auto-detect language based on browser settings
              </Checkbox>
            </CardBody>
            <CardFooter className="px-6 py-4">
              <Button
                color="primary"
                className="w-full sm:w-auto px-6 py-2 bg-[hsl(var(--app-primary-500))] text-white hover:bg-[hsl(var(--app-primary-600))] transition-colors duration-200"
              >
                <Icon icon="hugeicons:check" className="mr-2" />
                Save Settings
              </Button>
            </CardFooter>
          </Card>
        </section>
      </div>
    </main>
  );
}
