import QRScanner from '@/components/QRCodeScanner'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/qrcodescanner')({
  component: RouteComponent,
})

function RouteComponent() {
  return <QRScanner/>
}
