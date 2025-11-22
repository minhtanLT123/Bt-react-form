import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import SearchBar from "../components/SearchBar";

export default function StudentManagement() {
    return (
        <div className="container mx-auto p-5">
            <StudentForm />
            <SearchBar />
            <StudentList />
        </div>
    );
}
