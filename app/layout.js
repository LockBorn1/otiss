import "./globals.css";

export const metadata = {
  title: "Patrol Terminal RP",
  description: "Roleplay patrol computer"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
