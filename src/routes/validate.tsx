import ValidateSuccess from '@/components/Validate'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/validate')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ValidateSuccess/>
}
