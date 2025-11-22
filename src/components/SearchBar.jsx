import { useDispatch, useSelector } from "react-redux";
import { setSearchKeyword } from "../redux/studentSlice";

export default function SearchBar() {
    const dispatch = useDispatch();
    const keyword = useSelector((state) => state.students.searchKeyword);

    const handleChange = (e) => {
        dispatch(setSearchKeyword(e.target.value));
    };

    return (
        <div className="mb-4">
            <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="🔎 Tìm kiếm sinh viên theo Mã SV hoặc Họ tên..."
                value={keyword}
                onChange={handleChange}
            />
        </div>
    );
}
