import { useSelector, useDispatch } from "react-redux";
import { addStudent, updateStudent } from "../redux/studentSlice";
import { useEffect, useState } from "react";

export default function StudentForm() {
    const dispatch = useDispatch();
    const editingStudent = useSelector(s => s.students.editingStudent);

    const [form, setForm] = useState({
        maSV: "",
        hoTen: "",
        soDT: "",
        email: ""
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (editingStudent) {
            setForm(editingStudent);
        }
    }, [editingStudent]);

    const validate = () => {
        let temp = {};
        if (!form.maSV) temp.maSV = "Mã SV không được trống";
        if (!form.hoTen) temp.hoTen = "Họ tên không được trống";
        if (!/^\d+$/.test(form.soDT)) temp.soDT = "SĐT phải là số";
        if (!/\S+@\S+\.\S+/.test(form.email)) temp.email = "Email không hợp lệ";

        setErrors(temp);
        return Object.keys(temp).length === 0;
    };

    const handleSubmit = () => {
        if (!validate()) return;

        if (editingStudent) {
            dispatch(updateStudent(form));
        } else {
            dispatch(addStudent(form));
        }

        setForm({
            maSV: "",
            hoTen: "",
            soDT: "",
            email: ""
        });
    };

    return (
        <div className="bg-gray-200 p-3 rounded">
            <h3 className="text-lg font-bold mb-2">Thông tin sinh viên</h3>

            <div className="grid grid-cols-2 gap-3">

                <div>
                    <label className="m-1">Mã SV</label>
                    <input
                        className="input"
                        value={form.maSV}
                        placeholder="Nhập mã sinh viên"
                        onChange={(e) => setForm({ ...form, maSV: e.target.value })}
                    />
                    <p className="text-red-500">{errors.maSV}</p>
                </div>

                <div>
                    <label className="m-1">Họ tên</label>
                    <input
                        className="input"
                        value={form.hoTen}
                        placeholder="Nhập họ tên"
                        onChange={(e) => setForm({ ...form, hoTen: e.target.value })}
                    />
                    <p className="text-red-500">{errors.hoTen}</p>
                </div>

                <div>
                    <label className="m-1">Số ĐT</label>
                    <input
                        className="input"
                        placeholder="Nhập số điện thoại"
                        value={form.soDT}
                        onChange={(e) => setForm({ ...form, soDT: e.target.value })}
                    />
                    <p className="text-red-500">{errors.soDT}</p>
                </div>

                <div>
                    <label className="m-1" >Email</label>
                    <input
                        className="input"
                        placeholder="Nhập email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                    <p className="text-red-500">{errors.email}</p>
                </div>

            </div>

            <button
                className="btn btn-primary mt-3 bg-green-600 rounded-md  hover:bg-green-800 transition hover:scale-110 p-1.5"
                onClick={handleSubmit}
            >
                {editingStudent ? "Cập nhật" : "Thêm sinh viên"}
            </button>
        </div>
    );
}
