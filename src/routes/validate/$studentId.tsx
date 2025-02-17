import ValidateSuccess from '@/components/Validate'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/validate/$studentId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ValidateSuccess/>
}
