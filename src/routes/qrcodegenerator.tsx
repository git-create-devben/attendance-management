import QRCodeGenerator from '../components/QRCodeGenerator'; // Corrected import path
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/qrcodegenerator')({
  component: RouteComponent,
});

function RouteComponent() {
  return <QRCodeGenerator />;
}
