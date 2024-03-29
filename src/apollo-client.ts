import {from, HttpLink} from "@apollo/client";
import {
    NextSSRInMemoryCache,
    NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_API_URL}`,
    credentials: 'include'
})

export const { getClient } = registerApolloClient(() => {
    return new NextSSRApolloClient({
        cache: new NextSSRInMemoryCache(),
        link: from([httpLink]),
    });
});