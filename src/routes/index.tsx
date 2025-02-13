import DemoPage from '../table/page'; // Corrected import path
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div>
      <DemoPage />
    </div>
  );
}
