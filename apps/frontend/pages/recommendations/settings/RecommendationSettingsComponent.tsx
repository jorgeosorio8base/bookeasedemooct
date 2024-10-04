import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, CheckboxGroup, Checkbox, Input, Chip, Switch, Slider, Select, SelectItem, Button } from '@nextui-org/react';
import { Icon } from '@iconify/react';

const genres = ['Fiction', 'Non-fiction', 'Mystery', 'Science Fiction', 'Biography', 'History'];
const themes = ['Adventure', 'Romance', 'Dystopian', 'Coming of Age', 'Historical', 'Thriller'];
const formats = ['E-books', 'Audiobooks', 'Physical books'];
const contentPreferences = [
  { id: 'mature', label: 'Include mature content' },
  { id: 'graphic', label: 'Include graphic novels' },
  { id: 'foreign', label: 'Include foreign language books' }
];
const frequencyOptions = [
  { key: 'daily', label: 'Daily' },
  { key: 'weekly', label: 'Weekly' },
  { key: 'monthly', label: 'Monthly' }
];

export function RecommendationSettingsComponent() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Card className="max-w-[800px] mx-auto bg-[hsl(var(--app-background-50))] rounded-xl shadow-[var(--app-box-shadow-medium)]">
        <CardHeader className="pb-0 pt-6 px-6">
          <h2 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] mb-4">Recommendation Settings</h2>
        </CardHeader>
        <CardBody className="px-6">
          <div className="grid grid-cols-12 gap-6">
            <section className="col-span-12 md:col-span-6">
              <h3 className="text-lg font-semibold text-[hsl(var(--app-foreground-800))] mb-3">Favorite Genres</h3>
              <CheckboxGroup
                orientation="vertical"
                color="primary"
                className="gap-2"
              >
                {genres.map((genre) => (
                  <Checkbox key={genre} value={genre}>{genre}</Checkbox>
                ))}
              </CheckboxGroup>
            </section>

            <section className="col-span-12 md:col-span-6">
              <h3 className="text-lg font-semibold text-[hsl(var(--app-foreground-800))] mb-3">Favorite Authors</h3>
              <Input
                placeholder="Add an author"
                className="mb-2"
              />
              <div className="flex flex-wrap gap-2">
                <Chip onClose={() => {}} variant="flat">J.K. Rowling</Chip>
                <Chip onClose={() => {}} variant="flat">George Orwell</Chip>
                <Chip onClose={() => {}} variant="flat">Jane Austen</Chip>
              </div>
            </section>

            <section className="col-span-12 md:col-span-6">
              <h3 className="text-lg font-semibold text-[hsl(var(--app-foreground-800))] mb-3">Themes</h3>
              <CheckboxGroup
                orientation="vertical"
                color="primary"
                className="gap-2"
              >
                {themes.map((theme) => (
                  <Checkbox key={theme} value={theme}>{theme}</Checkbox>
                ))}
              </CheckboxGroup>
            </section>

            <section className="col-span-12 md:col-span-6">
              <h3 className="text-lg font-semibold text-[hsl(var(--app-foreground-800))] mb-3">Content Preferences</h3>
              <div className="flex flex-col gap-3">
                {contentPreferences.map((preference) => (
                  <Switch key={preference.id}>{preference.label}</Switch>
                ))}
              </div>
            </section>

            <section className="col-span-12">
              <h3 className="text-lg font-semibold text-[hsl(var(--app-foreground-800))] mb-3">Recommendation Balance</h3>
              <Slider
                label="Based on reading history vs. New discoveries"
                step={25}
                maxValue={100}
                minValue={0}
                defaultValue={50}
                className="max-w-md"
              />
              <div className="flex justify-between w-full mt-1 text-sm text-[hsl(var(--app-foreground-600))]">
                <span>More familiar</span>
                <span>More diverse</span>
              </div>
            </section>

            <section className="col-span-12 md:col-span-6">
              <h3 className="text-lg font-semibold text-[hsl(var(--app-foreground-800))] mb-3">Format Preferences</h3>
              <CheckboxGroup
                orientation="vertical"
                color="primary"
                className="gap-2"
              >
                {formats.map((format) => (
                  <Checkbox key={format} value={format}>{format}</Checkbox>
                ))}
              </CheckboxGroup>
            </section>

            <section className="col-span-12 md:col-span-6">
              <h3 className="text-lg font-semibold text-[hsl(var(--app-foreground-800))] mb-3">Notification Settings</h3>
              <div className="flex flex-col gap-4">
                <Switch>Receive email notifications</Switch>
                <Select
                  placeholder="Select frequency"
                  className="max-w-xs"
                >
                  {frequencyOptions.map((option) => (
                    <SelectItem key={option.key}>{option.label}</SelectItem>
                  ))}
                </Select>
              </div>
            </section>
          </div>
        </CardBody>
        <CardFooter className="px-6 py-4">
          <div className="flex justify-end gap-4 w-full">
            <Button color="danger" variant="light">Cancel</Button>
            <Button color="primary">Save Settings</Button>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}
