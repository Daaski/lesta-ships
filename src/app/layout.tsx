import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import { ApolloProvider } from 'providers/ApolloProvider/ApolloProvider';

import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';
import 'scss/_reset.scss';

export const metadata: Metadata = {
    title: 'Ships',
    description: 'Ships',
};

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="ru">
            <body style={{margin: '20px 0'}}>
                <ApolloProvider>{children}</ApolloProvider>
            </body>
        </html>
    );
}
