"use server"

import { revalidatePath } from "next/cache"

// Mock user data - in a real app, this would be stored in a database
const users = [
  {
    id: "1",
    email: "user@example.com",
    password: "password123", // In a real app, this would be hashed
    firstName: "John",
    lastName: "Doe",
  },
]

export async function loginUser(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  // Validate inputs
  if (!email || !password) {
    return {
      error: "Email and password are required",
    }
  }

  // In a real app, you would:
  // 1. Check if the user exists
  // 2. Verify the password (using bcrypt or similar)
  // 3. Create a session or JWT

  const user = users.find((u) => u.email === email && u.password === password)

  if (!user) {
    return {
      error: "Invalid email or password",
    }
  }

  // In a real app, you would set cookies or session here

  return {
    success: true,
    redirectTo: "/dashboard",
  }
}

export async function registerUser(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const confirmPassword = formData.get("confirmPassword") as string
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string

  // Validate inputs
  if (!email || !password || !confirmPassword || !firstName || !lastName) {
    return {
      error: "All fields are required",
    }
  }

  if (password !== confirmPassword) {
    return {
      error: "Passwords do not match",
    }
  }

  // Check if user already exists
  const existingUser = users.find((u) => u.email === email)
  if (existingUser) {
    return {
      error: "User with this email already exists",
    }
  }

  // In a real app, you would:
  // 1. Hash the password
  // 2. Store the user in a database
  // 3. Create a session or JWT

  // Mock adding a user
  users.push({
    id: (users.length + 1).toString(),
    email,
    password, // In a real app, this would be hashed
    firstName,
    lastName,
  })

  revalidatePath("/login")

  return {
    success: true,
    redirectTo: "/login",
  }
}
