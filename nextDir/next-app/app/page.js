//import cc into sc
import Filtering from "@/components/Filtering";
import { Suspense, lazy } from "react";
import TodoForm from '@/components/TodoForm'

const LazyClientComponent = lazy(() => import("@/components/List"));
export default async function Page({ searchParams }) {
  // console.log('main', searchParams)
  const filter = searchParams?.difficulty ?? "easy"
  const result = await fetch('https://jsonplaceholder.typicode.com/todos')
  const items = await result.json()
  if (!items.length) return null
  let displayTodos = []
  if (filter === 'easy') displayTodos = items.slice(0, 5)
  if (filter === 'medium') displayTodos = items.slice(0, 10)
  if (filter === 'hard') displayTodos = items.slice(0, 15)

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Welcome to Next.js App</h1>
      <p className="text-lg text-gray-600">This is a simple Next.js 14 App Router example.</p>
      <Filtering />
      <Suspense fallback={<p>Loading...</p>}>
        <LazyClientComponent items={displayTodos} />
      </Suspense>
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Todo App</h1>
        {/* <TodoForm /> */}
      </div>
    </div>
  );
}
