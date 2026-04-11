import { Post, Author } from "@/types"

const authors: Author[] = [
  {
    id: "1",
    name: "John Doe",
    bio: "Tech writer",
    avatar: "/avatars/john.jpg"
  },
  {
    id: "2",
    name: "Jane Smith",
    bio: "React expert",
    avatar: "/avatars/jane.jpg"
  }
]

const posts: Post[] = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    content: "Next.js is a React framework...",
    author: "1",
    date: "2026-03-01",
    tags: ["nextjs", "react"],
    readTime: 5
  },
  {
    id: "2",
    title: "React Server Components",
    content: "Server components are powerful...",
    author: "2",
    date: "2026-03-02",
    tags: ["react"],
    readTime: 7
  }
]

export async function getAllPosts(): Promise<Post[]> {
  return posts
}

export async function getPostById(id: string): Promise<Post | undefined> {
  return posts.find(p => p.id === id)
}

export async function getAuthorById(id: string): Promise<Author | undefined> {
  return authors.find(a => a.id === id)
}
export interface User {
  id: string
  name: string
  email: string
  avatar: string
  role: "admin" | "user"
}

export interface Notification {
  id: string
  type: "info" | "warning" | "success"
  message: string
  read: boolean
  createdAt: string
}