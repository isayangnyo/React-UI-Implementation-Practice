import { useState } from "react";
import LiveClock from "./components/LiveClock";
import StudentTable from "./components/StudentTable";
import "./app.css"; // Sesuaikan dengan nama file css kamu (app.css)

export default function App() {
  const [students] = useState([
    { nim: "2301001", nama: "Andreas syifa", hp: "081234567801", email: "andreas@mail.com", alamat: "Madura", prodi: "Informatika", tahun: 2023 },
    { nim: "2301002", nama: "Budiono Siregar", hp: "081234567802", email: "budi@mail.com", alamat: "Malang", prodi: "Sistem Informasi", tahun: 2023 },
    { nim: "2301003", nama: "Yolla Gwen", hp: "081234567803", email: "yolla@mail.com", alamat: "Madiun", prodi: "Biologi", tahun: 2023 },
    { nim: "2401001", nama: "Marsha Lea", hp: "081234567804", email: "marsha@mail.com", alamat: "Sidoarjo", prodi: "Manajemen", tahun: 2024 },
    { nim: "2401002", nama: "Rizqi Wahyu", hp: "081234567805", email: "rizqi@mail.com", alamat: "Surabaya", prodi: "Sains Data", tahun: 2024 },
  ]);

  return (
    <div className="app">
      <header className="header">
        <h1>Student Management</h1>
        <LiveClock />
      </header>

      <main className="container">
        <div className="subheader">
          <h2>Daftar Data Mahasiswa</h2>
          <span className="badge">
            Total: {students.length} Mahasiswa
          </span>
        </div>

        <StudentTable students={students} />
      </main>
    </div>
  );
}
