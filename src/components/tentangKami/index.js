import Footer from "../footer";
import Navbar from "../navbar";

export default function TentangKami() {
  const Nav = [
    { name: "Beranda", link: "/", on: false },
    { name: "Tentang Kami", link: "/tetangkami", on: true },
    { name: "Koleksi", link: "/colections", on: false },
    { name: "Contact", link: "/contact", on: false },
  ];
  return (
    <div>
      <Navbar navList={Nav} />
      <main className="w-full min-h-screen flex flex-col gap-5 justify-center items-center">
        <h1 className="text-4xl">Halaman TentangKami</h1>
        <h1 className="text-4xl">Sedang Dalam Proses</h1>
        <h1 className="text-5xl">😂</h1>
      </main>
      <Footer />
    </div>
  );
}
