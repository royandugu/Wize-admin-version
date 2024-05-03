import AosWrapper from '../../../components/systemComponents/wrapper/aosWrapper';
import NotLoggedClientProvider from '../../../components/systemComponents/queryClientProviders/notLoggedIn/notLoggedClientProvider';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <AosWrapper>
                    <NotLoggedClientProvider>
                        {children}
                    </NotLoggedClientProvider>
                </AosWrapper>
            </body>
        </html>
    )

}



