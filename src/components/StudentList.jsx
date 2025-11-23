import { useDispatch, useSelector } from "react-redux";
import { deleteStudent, setEditingStudent, setSearchKeyword } from "../redux/studentSlice";

export default function StudentList() {
    const dispatch = useDispatch();
    const { students, searchKeyword } = useSelector(s => s.students);
    const filtered = students.filter(s =>
        s.hoTen.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        s.maSV.includes(searchKeyword)
    );

    return (
        <div className="mt-5">

            <input
                className="input mb-3"
                placeholder="Tìm kiếm sinh viên..."
                onChange={(e) => dispatch(setSearchKeyword(e.target.value))}
            />

            <table className="table-auto w-full bg-white shadow">
                <thead>
                    <tr>
                        <th>Mã SV</th>
                        <th>Họ tên</th>
                        <th>SĐT</th>
                        <th>Email</th>
                        <th>Hành động</th>
                    </tr>
                </thead>

                <tbody>
                    {filtered.map(s => (
                        <tr key={s.maSV}>
                            <td>{s.maSV}</td>
                            <td>{s.hoTen}</td>
                            <td>{s.soDT}</td>
                            <td>{s.email}</td>
                            <td>
                                <button
                                    className="btn btn-warning mr-2"
                                    onClick={() => dispatch(setEditingStudent(s))}
                                >
                                    Sửa
                                </button>

                                <button
                                    className="btn btn-danger"
                                    onClick={() => dispatch(deleteStudent(s.maSV))}
                                >
                                    Xoá
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}
