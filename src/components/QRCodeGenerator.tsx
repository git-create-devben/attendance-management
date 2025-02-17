import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/services/firebase";

const QRCodeGenerator = () => {
  const [students, setStudents] = useState<{ id: string; name: string }[]>([]);

  // Fetch students from Firestore
  useEffect(() => {
    const fetchStudents = async () => {
      const querySnapshot = await getDocs(collection(db, "students"));
      const studentList = querySnapshot.docs.map((doc) => ({
        id: doc.id, // Firebase-generated unique ID
        name: doc.data().name,
      }));
      setStudents(studentList);
    };

    fetchStudents();
  }, []);

  return (
    <div>
      <h2>Student QR Codes</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {students.map((student) => (
          <div
            key={student.id}
            className="p-4 border rounded flex flex-col justify-center items-center gap-5"
          >
            <h3 className="text-text text-sm">{student.name}</h3>
            <QRCode
              value={`https://attendance-management-orpin.vercel.app/${student.id}`}
              size={150}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              viewBox={`0 0 256 256`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
