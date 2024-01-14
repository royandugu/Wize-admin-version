"use client"

import { QueryClientProvider, QueryClient } from 'react-query';

import DashboardLayout from "../../../components/adminComponents/secondaryComponents/dashboardLayout";

const queryClient = new QueryClient(
  {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        retry: false
      },
    },
  }
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <DashboardLayout>
            {children}
          </DashboardLayout>
        </QueryClientProvider>
      </body>
    </html>
  )
} 
