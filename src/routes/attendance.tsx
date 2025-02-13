import DemoPage from '@/table/page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/attendance')({
  component: RouteComponent,
})

function RouteComponent() {
  return <DemoPage/>
}
