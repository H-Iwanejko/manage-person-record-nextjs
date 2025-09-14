import "@/app/styles/globals.scss";

import Header from "./_components/Header";
import Footer from "./_components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="govuk-template--rebranded">
      <head>
          <meta charSet="utf-8"/>
          <title lang="en">GOV.UK - The best place to find government services and information</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
      </head>
      <body className="govuk-template__body">
        <Header
          applicationName="Manage a Person Record"/>
        <div className="govuk-width-container">
          <main className="govuk-main-wrapper app-container govuk-body">
              {children}
          </main>
        </div>
        <Footer/>
      </body>
    </html>
  );
}
