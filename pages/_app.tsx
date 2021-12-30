import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {


  useEffect(() => {

    const w = window as any;

    if (w.netlifyIdentity) {
        w.netlifyIdentity.on("init", (user: any) => {
            if (!user) {
                w.netlifyIdentity.on("login", () => {
                    document.location.href = "/admin/";
                });
            }
        });
    }

}, []);



  return <Component {...pageProps} />
}

export default MyApp
