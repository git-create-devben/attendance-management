
import DemoPage from '@/table/page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

 function Index() {
  return (
    <div>
 

      <DemoPage/>
    </div>

  )
}

