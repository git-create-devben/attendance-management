import { db } from "../services/firebase";
import { collection, addDoc, getDocs} from "firebase/firestore";

/**
 * Uploads JSON data to Firestore, avoiding duplicates.
 * @param jsonData JSON object to upload
 */
export const uploadJsonToFirestore = async (jsonData: any[]) => {
  try {
    console.log("Checking existing data...");
    
    // Get reference to students collection
    const studentsRef = collection(db, "students");
    
    // Get all existing students
    const snapshot = await getDocs(studentsRef);
    const existingStudents = new Set(
      snapshot.docs.map(doc => doc.data().name)
    );

    // Filter out students that already exist
    const newStudents = jsonData.filter(student => !existingStudents.has(student.name));

    if (newStudents.length === 0) {
      console.log("No new students to add. Skipping upload.");
      return;
    }

    console.log(`Adding ${newStudents.length} new students...`);
    
    // Upload only new students
    const uploadPromises = newStudents.map(student => addDoc(studentsRef, student));
    await Promise.all(uploadPromises);

    console.log(`✅ Successfully added ${newStudents.length} new students to Firestore!`);
  } catch (error) {
    console.error("❌ Error during upload process:", error);
    throw error;
  }
};
