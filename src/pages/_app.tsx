import { AppProps } from "next/app";
import "@/styles/global.css";
import { ProvideAuth } from "@/context/SupabaseContext";
import { NavBar } from "@/components/NavBar";
import styled, { createGlobalStyle } from "styled-components";
import { AuthGuard } from "@/guards/AuthGuard";
import { ClickToComponent } from "click-to-react-component";
import { createGetInitialProps } from "@mantine/next";
import { Container, MantineProvider } from "@mantine/core";
import { useEffect, useState } from "react";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    font-family: 'Inter', sans-serif;
    -webkit-tap-highlight-color: transparent;
  }

  *::selection {
    background-color: #b699f2;
  }
`;

// const Container = styled.div`
//   min-height: 100vh;
//   max-width: 1440px;
//   width: 100%;
//   margin: auto;
//   display: flex;
//   flex-direction: column;
// `;

export default function MyApp(props: AppProps) {
    const [showChild, setShowChild] = useState(false);

    const { Component, pageProps }: { Component: any; pageProps: any } = props;

    useEffect(() => {
        setShowChild(true);
    }, []);

    if (!showChild) {
        return null;
    }

    if (typeof window === `undefined`) {
        return <></>;
    } else {
        return (
            <>
                <MantineProvider
                    withGlobalStyles
                    withNormalizeCSS
                    theme={{
                        /** Put your mantine theme override here */
                        colorScheme: `light`,
                    }}
                >
                    <ClickToComponent />
                    <ProvideAuth>
                        <GlobalStyle />
                        <Container size={1440}>
                            <NavBar />
                            {Component.requireAuth ? (
                                <AuthGuard>
                                    <Component {...pageProps} />
                                </AuthGuard>
                            ) : (
                                // public page
                                <Component {...pageProps} />
                            )}
                        </Container>
                    </ProvideAuth>
                </MantineProvider>
            </>
        );
    }
}

const getInitialProps = createGetInitialProps();
