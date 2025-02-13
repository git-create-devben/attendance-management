// import { wordShorten } from "@/utils/wordShorten"
import { StudentType, columns } from "./columns"
import { DataTable } from "./data-table"
import { useEffect, useState } from "react"
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/services/firebase";
import { generateDateHeaders } from "@/utils/generateDateHeaders";

export default function DemoPage() {
    const [students, setStudents] = useState<StudentType[]>([]);
    const [selectedMonth, setSelectedMonth] = useState<Date>(new Date());
    const [attendanceStats, setAttendanceStats] = useState({ present: 0, absent: 0 });

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "students"), (snapshot) => {
            const studentList:StudentType[] = snapshot.docs.map((doc) => ({ 
                id: doc.id,
                name:doc.data().name,
                attendance:doc.data().attendance || {},
            }))
            setStudents(studentList)
        })
        return () => unsubscribe();
    },[]);

    useEffect(() => {
        // Calculate attendance statistics when students or selectedMonth changes
        const workingDays = generateDateHeaders(selectedMonth).dates;
        let presentCount = 0;
        let absentCount = 0;

        students.forEach(student => {
            workingDays.forEach(date => {
                if (student.attendance[date]?.toLowerCase() === "present") {
                    presentCount++;
                } else {
                    absentCount++;
                }
            });
        });

        setAttendanceStats({ present: presentCount, absent: absentCount });
    }, [students, selectedMonth]);

    return (
        <div className="container mx-auto py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                <div className="bg-white p-4 rounded-lg shadow space-x-6">
                    Total Students
                    <span className="ml-2">{students.length}</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    Present
                    <span className="ml-2">{attendanceStats.present}</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    Absent
                    <span className="ml-2">{attendanceStats.absent}</span>
                </div>
            </div>
            <DataTable 
                columns={columns(selectedMonth)} 
                data={students} 
                selectedMonth={selectedMonth} 
                setSelectedMonth={setSelectedMonth}
            />
        </div>
    );
}
