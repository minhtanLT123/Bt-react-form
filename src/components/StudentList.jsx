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

            {/* <input
                className="input mb-3"
                placeholder="Tìm kiếm sinh viên..."
                onChange={(e) => dispatch(setSearchKeyword(e.target.value))}
            /> */}

            <table className="table-auto w-full bg-white shadow border border-gray-300">
                <thead className="bg-gray-100">
                    <tr className="text-center">
                        <th className="border border-gray-300 px-4 py-2">Mã SV</th>
                        <th className="border border-gray-300 px-4 py-2">Họ tên</th>
                        <th className="border border-gray-300 px-4 py-2">SĐT</th>
                        <th className="border border-gray-300 px-4 py-2">Email</th>
                        <th className="border border-gray-300 px-4 py-2">Hành động</th>
                    </tr>
                </thead>

                <tbody>
                    {filtered.map(s => (
                        <tr key={s.maSV} className="text-center hover:bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2">{s.maSV}</td>
                            <td className="border border-gray-300 px-4 py-2">{s.hoTen}</td>
                            <td className="border border-gray-300 px-4 py-2">{s.soDT}</td>
                            <td className="border border-gray-300 px-4 py-2">{s.email}</td>

                            <td className="border border-gray-300 px-4 py-2 flex justify-center gap-2">
                                <button
                                    className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition"
                                    onClick={() => dispatch(setEditingStudent(s))}
                                >
                                    Sửa
                                </button>

                                <button
                                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
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
