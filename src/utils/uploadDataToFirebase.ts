import { db } from "../services/firebase";
import { collection, addDoc } from "firebase/firestore";

/**
 * Uploads JSON data to Firestore.
 * @param jsonData JSON object to upload
 */
export const uploadJsonToFirestore = async (jsonData: any[]) => {
  try {
    console.log("Uploading data to Firestore...");

    for (const item of jsonData) {
      await addDoc(collection(db, "students"), item);
    }

    console.log("✅ Data successfully uploaded to Firestore!");
  } catch (error) {
    console.error("❌ Error uploading data:", error);
  }
};
