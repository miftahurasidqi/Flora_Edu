// import Navbar from "../navbar";
// import img1 from "../../images/alea-film-oU-TSYlvkpY-unsplash.jpg";
// import img2 from "../../images/josua-natanael-AIoaTWtswkg-unsplash.jpg";
// import img3 from "../../images/ma-ti-wzeA3sU2hlo-unsplash.jpg";
// import img4 from "../../images/rafiqmia-ihsanuddin-qqbmMh57u5k-unsplash.jpg";

import NavAdmin from "../navAdmin";
import moveTo from "../moveTo";
import { IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";
import ListAdmin from "../listAdmin";
// import ListTanaman from "../listTanaman";
// import { LiHTMLAttributes } from "react";

export default function Admin() {
  const Nav = [
    { name: "Koleksi", link: "/tanaman", on: false },
    { name: "Pesan", link: "/pesan", on: false },
    { name: "Admin", link: "/admin", on: true },
    { name: "Profile", link: "/profile", on: false },
  ];

  const tb_admin = [
    { no: "1", nama: "admin 1", email: "admin@gmail.com", jabatan: "Ketua" },
    { no: "2", nama: "admin 2", email: "admin@gmail.com", jabatan: "Sekertaris" },
    { no: "3", nama: "admin 3", email: "admin@gmail.com", jabatan: "Admin Utama" },
    { no: "4", nama: "admin 4", email: "admin@gmail.com", jabatan: "Bendahara" },
  ];
  return (
    <div>
      <NavAdmin navList={Nav} />
      <div className="pl-64 w-full min-h-screen font-sans text-gray-900 bg-gray-50 flex">
        <div className="flex-1 pb-8">
          <div className="flex items-center justify-between py-7 px-10">
            <div>
              <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">Daftar Admin</h1>
            </div>

            <button onClick={() => moveTo("/tambahadmin")} className="inline-flex gap-x-2 items-center py-2.5 px-6 text-white bg-teal-600 rounded-xl hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-1">
              <IonIcon icon={add} size="medium"></IonIcon>
              <span className="text-sm font-semibold tracking-wide">Tamabh Admin</span>
            </button>
          </div>

          <div className="w-full border border-gray-200">
            <ListAdmin list={tb_admin[0]} />
            <ListAdmin list={tb_admin[1]} />
            <ListAdmin list={tb_admin[2]} />
            <ListAdmin list={tb_admin[3]} />
          </div>
        </div>
      </div>
    </div>
  );
}
