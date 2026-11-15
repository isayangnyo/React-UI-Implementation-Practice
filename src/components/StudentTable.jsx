export default function StudentTable({ students }) {
    return (
      <div className="table-wrapper">
        <table className="student-table">
          <thead>
            <tr>
              <th>NIM</th>
              <th>Nama Mahasiswa</th>
              <th>No. HP</th>
              <th>Email</th>
              <th>Alamat</th>
              <th>Program Studi</th>
              <th>Tahun Masuk</th>
            </tr>
          </thead>
          <tbody>
            {students.map((m) => (
              <tr key={m.nim}>
                <td>{m.nim}</td>
                <td>{m.nama}</td>
                <td>{m.hp}</td>
                <td>{m.email}</td>
                <td>{m.alamat}</td>
                <td>{m.prodi}</td>
                <td>{m.tahun}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
