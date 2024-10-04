
      import React, { useState } from 'react';
      import { Sidebar, SidebarProps } from './Sidebar/Sidebar';
      import { useCurrentUser } from '../hooks';

      export function AppLayout({ children }: { children: React.ReactNode }) {
        
        const currentUser = useCurrentUser();
        const sidebarGroups: SidebarProps['items'] = [{"title":"Home","href":"/","icon":"home-01"},{"title":"Dashboard","href":"/dashboard","icon":"user-multiple"},{"title":"Search","href":"/search","icon":"search-01"},{"title":"My Loans","href":"/my-loans","icon":"book-02"},{"title":"Digital Library","href":"/digital-library","icon":"book-open-01"},{"title":"Recommendations","href":"/recommendations","icon":"book-bookmark-01"},{"title":"Notifications","href":"/notifications","icon":"notification-01"},{"title":"Reports","href":"/reports","icon":"user-list","subitems":[{"title":"Dashboard","href":"/reports/dashboard","icon":"search-list-01"},{"title":"Customize","href":"/reports/customize","icon":"settings-03"},{"title":"Insights","href":"/reports/insights","icon":"search-visual"}]},{"title":"Settings","href":"/settings","icon":"settings-01","subitems":[{"title":"Language","href":"/settings/language","icon":"settings-02"}]},{"title":"Help","href":"/help","icon":"help-circle"},{"title":"Staff","href":"/staff","icon":"user-shield-01","subitems":[{"title":"Circulation Desk","href":"/staff/circulation-desk","icon":"book-03"},{"title":"Overdue Books","href":"/staff/overdue-books","icon":"book-04"},{"title":"Catalog Management","href":"/staff/catalog-management","icon":"book-edit"},{"title":"Account Management","href":"/staff/account-management","icon":"user-settings-01"},{"title":"Book Orders","href":"/staff/book-orders","icon":"book-upload"}]},{"title":"Patron","href":"/patron","icon":"user-circle","subitems":[{"title":"Self-Service Kiosk","href":"/patron/self-service-kiosk","icon":"user-circle-02"},{"title":"Book Holds","href":"/patron/book-holds","icon":"book-bookmark-02"},{"title":"Account Renewals","href":"/patron/account/renewals","icon":"user-switch"},{"title":"My Reviews","href":"/patron/my-reviews","icon":"user-star-01"}]}];
        
        
        return (
          <div className="flex h-screen">
              <Sidebar
              
                items={sidebarGroups}
                iconStyle={"hugeicons"}
                currentUser={currentUser || undefined}
                
              />
              <div className={`ml-[18rem] w-[calc(100%-18rem)] flex-1 p-4`}>
                  {children}
              </div>
          </div>
        )
      }