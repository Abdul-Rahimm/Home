import ClientWrapper from "@/components/ClientWrapper";
import "../styles/globals.css";

export const metadata = {
  title: "Abdul Rahim",
  description: "My simple and minimalistic portfolio",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Metadata is handled automatically */}
        <title>{metadata.title}</title>
      </head>
      <body className="dark:bg-stone-900">
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
