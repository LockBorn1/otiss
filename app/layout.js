import "./globals.css";

export const metadata = {
  title: "Ohio Trooper Information System",
  description: "Roleplay patrol computer"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
