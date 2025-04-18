'use server'

// Add a new todo
export async function addTodo(formData) {
  try {
    const title = formData.get('title')
    
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        completed: false,
        userId: 1,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to add todo')
    }

    return { success: true, message: 'Todo added successfully' }
  } catch (error) {
    return { success: false, message: error.message }
  }
}

// Delete a todo
export async function deleteTodo(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'DELETE',
    })

    if (!response.ok) {
      throw new Error('Failed to delete todo')
    }

    return { success: true, message: 'Todo deleted successfully' }
  } catch (error) {
    return { success: false, message: error.message }
  }
}

// Update todo status
export async function updateTodoStatus(id, completed) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        completed,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to update todo')
    }

    return { success: true, message: 'Todo updated successfully' }
  } catch (error) {
    return { success: false, message: error.message }
  }
} 