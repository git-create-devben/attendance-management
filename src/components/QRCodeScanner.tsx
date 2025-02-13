import { useState } from "react";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "@/services/firebase"; // Your Firebase config file
import { QrReader } from "react-qr-reader";
import { format } from "date-fns";

const QRScanner = () => {
  const [scannedId, setScannedId] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  // Function to mark attendance
  const markAttendance = async (studentId: string) => {
    const today = format(new Date(), "yyyy-MM-dd"); // Format date as YYYY-MM-DD
    const studentRef = doc(db, "students", studentId);

    try {
      const studentSnap = await getDoc(studentRef);

      if (studentSnap.exists()) {
        await updateDoc(studentRef, {
          [`attendance.${today}`]: "Present", // Mark attendance for today
        });

        setStatus(`Attendance marked for ${studentSnap.data().name}`);
      } else {
        setStatus("Student not found!");
      }
    } catch (error) {
      console.error("Error updating attendance:", error);
      setStatus("Error marking attendance");
    }
  };

  return (
    <div>
      <h2 className="text-text">Scan QR Code</h2>
      {window.innerWidth > 768 ? (
        <p className="text-center justify-center text-text text-2xl flex mt-10">Please scan on your phone.</p>
      ) : (
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              const studentId = result.getText(); // Get scanned QR code value (student ID)
              setScannedId(studentId);
              markAttendance(studentId); // Mark attendance automatically
            } else if (error) {
              console.error(error);
            }
          }}
          constraints={{ facingMode: "environment" }}
          // style={{ width: '100%' }}
        />
      )}

      {scannedId && <p>Scanned ID: {scannedId}</p>}
      {status && <p>{status}</p>}
    </div>
  );
};

export default QRScanner;