
import NavBar from "@/components/Navbar";
import "@/styles/globals.css";

export const metadata = {
  title: process.env.SITE_TITLE,
  description: 'A modern Next.js application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 text-gray-900">
        <NavBar/>
        <main className="container mx-auto p-4">
          {children}
        </main>
        <footer className="bg-white shadow-md mt-8">
          <div className="container mx-auto px-4 py-4 text-center text-gray-600">
            © 2024 Next.js App. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}