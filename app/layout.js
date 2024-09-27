import "./globals.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";

export const metadata = {
  title: "main-project",
  description: "page for namaste.business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
