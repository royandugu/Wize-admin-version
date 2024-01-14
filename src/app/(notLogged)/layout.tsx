"use client"

import { QueryClientProvider, QueryClient } from 'react-query';


require("dotenv").config();

import AosWrapper from '../../../components/systemComponents/wrapper/aosWrapper';

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
                <AosWrapper>
                    <QueryClientProvider client={queryClient}>
                        {children}
                    </QueryClientProvider>
                </AosWrapper>
            </body>
        </html>
    )

}



