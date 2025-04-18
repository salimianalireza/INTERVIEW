'use client'
import { useTransition } from 'react'
import { addTodo, deleteTodo, updateTodoStatus } from '@/app/actions'

export default function TodoForm() {
  const [isPending, startTransition] = useTransition()

  const handleSubmit = async (formData) => {
    startTransition(async () => {
      const result = await addTodo(formData)
      if (result.success) {
        // Reset form or show success message
        document.getElementById('todo-form').reset()
      } else {
        alert(result.message)
      }
    })
  }

  const handleDelete = async (id) => {
    startTransition(async () => {
      const result = await deleteTodo(id)
      if (result.success) {
        // Update UI or show success message
      } else {
        alert(result.message)
      }
    })
  }

  const handleStatusUpdate = async (id, completed) => {
    startTransition(async () => {
      const result = await updateTodoStatus(id, completed)
      if (result.success) {
        // Update UI or show success message
      } else {
        alert(result.message)
      }
    })
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <form id="todo-form" action={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="title"
            placeholder="Enter new todo"
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isPending}
          className={`w-full px-4 py-2 text-white rounded ${
            isPending ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {isPending ? 'Adding...' : 'Add Todo'}
        </button>
      </form>

      {/* Example of delete and update buttons */}
      <div className="mt-4">
        <button
          onClick={() => handleDelete(1)}
          disabled={isPending}
          className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 mr-2"
        >
          Delete Todo
        </button>
        <button
          onClick={() => handleStatusUpdate(1, true)}
          disabled={isPending}
          className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
        >
          Complete Todo
        </button>
      </div>
    </div>
  )
} 