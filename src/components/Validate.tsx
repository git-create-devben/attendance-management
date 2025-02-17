import { CheckCircle } from "lucide-react";
import { useParams } from "@tanstack/react-router";
import { db } from "@/services/firebase";
import { getDocs, collection, doc, updateDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { format } from "date-fns";


const ValidateSuccess = () => {
  const { studentId } = useParams({ strict: false });
  const [students, setStudents] = useState<{ id: string; name: string }[]>([]);
  const [isMarked, setIsMarked] = useState(false);

  useEffect(() => {
    const fetchStudents = async () => {
      const querySnapshot = await getDocs(collection(db, "students"));
      const studentList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
      }));
      setStudents(studentList);
    };

    fetchStudents();
  }, []);

  useEffect(() => {
    const markAttendance = async () => {
      if (!studentId) return;

      // Check if student exists
      const studentExists = students.some((s) => s.id === studentId);
      if (!studentExists) return;

      // Get today's date
      const today = format(new Date(), "yyyy-MM-dd");

      try {
        const studentRef = doc(db, "students", studentId);
        await updateDoc(studentRef, {
          [`attendance.${today}`]: "Present",
        });
        setIsMarked(true);
      } catch (error) {
        console.error("Error marking attendance:", error);
      }
    };

    markAttendance();
  }, [studentId, students]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg text-center">
        <div className="mb-6">
          <CheckCircle className="mx-auto text-green-500 text-6xl" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          {isMarked ? "Attendance Recorded Successfully!" : "Marking Attendance..."}
        </h1>
        <p className="text-gray-600 mb-6">
          {isMarked
            ? "Your attendance has been successfully recorded in the system."
            : "Please wait while we update your attendance."}
        </p>
        <p className="text-sm text-gray-500">
          You will be redirected to the home page in a few seconds...
        </p>
      </div>
    </div>
  );
};

export default ValidateSuccess;
