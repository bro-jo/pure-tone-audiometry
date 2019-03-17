import App, {Container} from 'next/app';
import Head from 'next/head';
import React from 'react';

export default class MyApp extends App {
  static async getInitialProps({Component, router, ctx}: any) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps};
  }

  render() {
    const {Component, pageProps} = this.props;

    return (
      <Container>
        <Head>
          <title>순음 청각 테스트</title>
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}
