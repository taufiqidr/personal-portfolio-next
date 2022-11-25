import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo2.png" />
        <title>Taufiqurrahman Idrus | Full-stack web developer</title>
      </Head>
      <Navbar />
      <main className="sm:mx-14 mx-2 shadow-xl shadow-white">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
