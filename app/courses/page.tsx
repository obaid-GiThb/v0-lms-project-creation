import Link from "next/link"
import { BookOpen, Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CoursesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Course Catalog</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Browse our extensive collection of courses and find the perfect one for your learning journey.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col gap-6 md:flex-row">
              <div className="md:w-1/4 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Search</h3>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search courses..." className="w-full bg-background pl-8" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center">
                        <Button variant="link" className="h-auto p-0 text-foreground">
                          {category}
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Filter</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Level
                      </label>
                      <Select>
                        <SelectTrigger className="w-full mt-2">
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner</SelectItem>
                          <SelectItem value="intermediate">Intermediate</SelectItem>
                          <SelectItem value="advanced">Advanced</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Duration
                      </label>
                      <Select>
                        <SelectTrigger className="w-full mt-2">
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="short">Less than 5 hours</SelectItem>
                          <SelectItem value="medium">5-10 hours</SelectItem>
                          <SelectItem value="long">More than 10 hours</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="w-full">
                      <Filter className="mr-2 h-4 w-4" />
                      Apply Filters
                    </Button>
                  </div>
                </div>
              </div>
              <div className="md:w-3/4">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-sm text-muted-foreground">Showing {courses.length} courses</div>
                  <Select defaultValue="newest">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courses.map((course) => (
                    <Card key={course.id} className="overflow-hidden">
                      <div className="aspect-video w-full bg-muted relative">
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10">
                          <BookOpen className="h-10 w-10 text-primary" />
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="line-clamp-1">{course.title}</CardTitle>
                        <CardDescription>{course.instructor}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="line-clamp-2 text-sm text-muted-foreground">{course.description}</p>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                              {course.level}
                            </span>
                          </div>
                          <div className="text-sm text-muted-foreground">{course.duration}</div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <div className="text-sm font-medium">{course.price === 0 ? "Free" : `$${course.price}`}</div>
                        <Link href={`/courses/${course.id}`}>
                          <Button variant="outline" size="sm">
                            View Course
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                <div className="flex justify-center mt-8">
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" disabled>
                      <span className="sr-only">Previous page</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="m15 18-6-6 6-6" />
                      </svg>
                    </Button>
                    <Button variant="outline" size="sm" className="font-medium">
                      1
                    </Button>
                    <Button variant="outline" size="sm">
                      2
                    </Button>
                    <Button variant="outline" size="sm">
                      3
                    </Button>
                    <Button variant="outline" size="icon">
                      <span className="sr-only">Next page</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

const categories = [
  "Web Development",
  "Data Science",
  "Digital Marketing",
  "Business",
  "Design",
  "Photography",
  "Music",
  "Health & Fitness",
]

const courses = [
  {
    id: "1",
    title: "Introduction to Web Development",
    instructor: "Sarah Johnson",
    description:
      "Learn the fundamentals of web development including HTML, CSS, and JavaScript. Build responsive websites from scratch.",
    level: "Beginner",
    duration: "10 hours",
    price: 49.99,
  },
  {
    id: "2",
    title: "Data Science Fundamentals",
    instructor: "Michael Chen",
    description:
      "Master the basics of data science, including data analysis, visualization, and machine learning concepts.",
    level: "Intermediate",
    duration: "15 hours",
    price: 59.99,
  },
  {
    id: "3",
    title: "Digital Marketing Essentials",
    instructor: "Emma Rodriguez",
    description:
      "Discover key digital marketing strategies including SEO, social media marketing, and content creation.",
    level: "Beginner",
    duration: "8 hours",
    price: 39.99,
  },
  {
    id: "4",
    title: "Advanced JavaScript Programming",
    instructor: "David Kim",
    description:
      "Take your JavaScript skills to the next level with advanced concepts like closures, prototypes, and async programming.",
    level: "Advanced",
    duration: "12 hours",
    price: 69.99,
  },
  {
    id: "5",
    title: "UI/UX Design Principles",
    instructor: "Sophia Lee",
    description:
      "Learn the fundamental principles of user interface and user experience design to create intuitive digital products.",
    level: "Intermediate",
    duration: "14 hours",
    price: 54.99,
  },
  {
    id: "6",
    title: "Introduction to Python Programming",
    instructor: "James Wilson",
    description:
      "Start your programming journey with Python, one of the most popular and versatile programming languages.",
    level: "Beginner",
    duration: "10 hours",
    price: 0,
  },
]
