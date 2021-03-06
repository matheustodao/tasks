import {
  Head, Html, Main, NextScript,
} from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <div id="portal" />
        <div id="modal-task" />
        <div id="modal-task-edit" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
