import Navbar from "../navbar";
import img1 from "../../images/alea-film-oU-TSYlvkpY-unsplash.jpg";
import img2 from "../../images/josua-natanael-AIoaTWtswkg-unsplash.jpg";
import img3 from "../../images/ma-ti-wzeA3sU2hlo-unsplash.jpg";
import img4 from "../../images/rafiqmia-ihsanuddin-qqbmMh57u5k-unsplash.jpg";

import NavAdmin from "../navAdmin";

import { IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";
import ListTanaman from "../listTanaman";
// import { LiHTMLAttributes } from "react";

export default function TambahAdmin() {
  const Nav = [
    { name: "Koleksi", link: "/tanaman", on: false },
    { name: "Pesan", link: "/pesan", on: false },
    { name: "Admin", link: "/admin", on: false },
    { name: "Profile", link: "/profile", on: false },
  ];

  const tb_tanaman = [
    { img: img1, nama: "tanaman 1", deskripsi: "Lorem velit nisi culpa id est cillum sit." },
    { img: img2, nama: "tanaman 2", deskripsi: "Lorem velit nisi culpa id est cillum sit." },
    { img: img3, nama: "tanaman 3", deskripsi: "Lorem velit nisi culpa id est cillum sit." },
    { img: img4, nama: "tanaman 4", deskripsi: "Lorem velit nisi culpa id est cillum sit." },
  ];

  return (
    <div>
      <NavAdmin navList={Nav} />

      <div className="lg:pl-64 w-full pt-[10vh] lg:pt-0 min-h-screen font-sans justify-center items-center p-3 bg-teal-200">
        <form className="p-5 lg:w-1/2 mx-auto" action="">
          <div className="bg-white p-7 pb-10 shadow-md shadow-gray-300 rounded-md">
            <div className="flex items-center justify-center py-3 px-10">
              <h1 className="lg:text-2xl text-md font-semibold leading-relaxed text-gray-800">Tambah Admin Baru</h1>
            </div>
            <label className="text-gray-800" for="email">
              Nama
            </label>
            <input className="w-full p-2 bg-gray-100 text-gray-700 rounded-md outline-teal-700 mb-4" type="text" placeholder="Masukan Email" id="email" />
            <label className="text-gray-800" for="email">
              Jabatan
            </label>
            <input className="w-full p-2 bg-gray-100 text-gray-700 rounded-md outline-teal-700 mb-4" type="text" placeholder="Masukan Email" id="email" />

            <label className="text-gray-800" for="email">
              Email
            </label>
            <input className="w-full p-2 bg-gray-100 text-gray-700 rounded-md outline-teal-700 mb-4" type="email" placeholder="Masukan Email" id="email" />
            <label className="text-gray-800" for="Password">
              Password
            </label>
            <input className="w-full p-2 bg-gray-100 text-gray-700 rounded-md outline-teal-700 mb-5" type="password" placeholder="Masukan Password" id="Password" />

            <div className="flex justify-start">
              <button className="w-1/3 py-2 bg-teal-400 hover:bg-teal-600 text-gray-700 hover:text-gray-200 rounded-md">
                <span className="text-md">Tamabah</span>
              </button>
            </div>
          </div>
        </form>
      </div>
      <main className="flex h-screen justify-center items-center p-3 bg-teal-200"></main>
    </div>
  );
}
