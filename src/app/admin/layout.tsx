import DashboardLayout from "../../../components/adminComponents/secondaryComponents/dashboardLayout";
import AdminClientProvider from "../../../components/systemComponents/queryClientProviders/admin/adminClientProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AdminClientProvider>
          <DashboardLayout>

            {children}
          </DashboardLayout>
        </AdminClientProvider>
      </body>
    </html>
  )
} 
