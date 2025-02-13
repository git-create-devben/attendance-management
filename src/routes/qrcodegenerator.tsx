import QRCodeGenerator from '@/components/qrCodeGenerator'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/qrcodegenerator')({
  component: RouteComponent,
})

function RouteComponent() {
  return <QRCodeGenerator/>
}
