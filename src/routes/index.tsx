import DemoPage from '../table/page';
import { createFileRoute } from '@tanstack/react-router';
// import JsData from "../../students.json"
// import { uploadJsonToFirestore } from '@/utils/uploadDataToFirebase'
// import { useEffect } from 'react';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  // useEffect(() => {
  //   // Run once on initial mount
  //   uploadJsonToFirestore(JsData);
  // }, []);

  return (
    <div>
      <DemoPage />
    </div>
  );
}