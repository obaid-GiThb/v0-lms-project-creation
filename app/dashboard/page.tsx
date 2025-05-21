import Link from "next/link"
import { BookOpen, Clock, GraduationCap, LayoutDashboard, LineChart, Settings, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <aside className="hidden w-64 border-r bg-muted/40 lg:block">
          <div className="flex h-full flex-col gap-2">
            <div className="flex h-14 items-center border-b px-4">
              <Link href="/" className="flex items-center gap-2 font-semibold">
                <GraduationCap className="h-6 w-6" />
                <span>EduLearn</span>
              </Link>
            </div>
            <div className="flex-1 overflow-auto py-2">
              <nav className="grid items-start px-2 text-sm font-medium">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2 text-primary transition-all"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </Link>
                <Link
                  href="/courses"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground transition-all"
                >
                  <BookOpen className="h-4 w-4" />
                  My Courses
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground transition-all"
                >
                  <LineChart className="h-4 w-4" />
                  Progress
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground transition-all"
                >
                  <User className="h-4 w-4" />
                  Profile
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground transition-all"
                >
                  <Settings className="h-4 w-4" />
                  Settings
                </Link>
              </nav>
            </div>
          </div>
        </aside>
        <main className="flex-1">
          <div className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px]">
            <div className="w-full flex justify-between">
              <h1 className="text-xl font-semibold">Dashboard</h1>
              <Button variant="outline" size="sm" className="ml-auto h-8 gap-1">
                <User className="h-3.5 w-3.5" />
                <span>John Doe</span>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 p-4 md:gap-8 md:p-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Courses Enrolled</CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">+1 from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Completed Courses</CardTitle>
                  <GraduationCap className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1</div>
                  <p className="text-xs text-muted-foreground">+1 from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Hours Spent</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12.5</div>
                  <p className="text-xs text-muted-foreground">+2.5 from last week</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Certificates</CardTitle>
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
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <rect width="18" height="14" x="3" y="4" rx="2" />
                    <line x1="12" x2="12" y1="4" y2="18" />
                    <line x1="3" x2="21" y1="11" y2="11" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1</div>
                  <p className="text-xs text-muted-foreground">+1 from last month</p>
                </CardContent>
              </Card>
            </div>
            <Tabs defaultValue="in-progress" className="space-y-4">
              <TabsList>
                <TabsTrigger value="in-progress">In Progress</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
                <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
              </TabsList>
              <TabsContent value="in-progress" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {inProgressCourses.map((course) => (
                    <Card key={course.id} className="overflow-hidden">
                      <div className="aspect-video w-full bg-muted relative">
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10">
                          <BookOpen className="h-10 w-10 text-primary" />
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle>{course.title}</CardTitle>
                        <CardDescription>{course.instructor}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span>Progress</span>
                            <span className="font-medium">{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                        <div className="flex justify-between">
                          <div className="text-sm text-muted-foreground">Last accessed: {course.lastAccessed}</div>
                          <Link href={`/courses/${course.id}`}>
                            <Button variant="outline" size="sm">
                              Continue
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="completed" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {completedCourses.map((course) => (
                    <Card key={course.id} className="overflow-hidden">
                      <div className="aspect-video w-full bg-muted relative">
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10">
                          <BookOpen className="h-10 w-10 text-primary" />
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle>{course.title}</CardTitle>
                        <CardDescription>{course.instructor}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span>Completed</span>
                            <span className="font-medium">100%</span>
                          </div>
                          <Progress value={100} className="h-2" />
                        </div>
                        <div className="flex justify-between">
                          <div className="text-sm text-muted-foreground">Completed on: {course.completedDate}</div>
                          <Link href={`/courses/${course.id}`}>
                            <Button variant="outline" size="sm">
                              Review
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="wishlist" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {wishlistCourses.map((course) => (
                    <Card key={course.id} className="overflow-hidden">
                      <div className="aspect-video w-full bg-muted relative">
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10">
                          <BookOpen className="h-10 w-10 text-primary" />
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle>{course.title}</CardTitle>
                        <CardDescription>{course.instructor}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="line-clamp-2 text-sm text-muted-foreground">{course.description}</p>
                        <div className="flex justify-between">
                          <div className="text-sm font-medium">{course.price === 0 ? "Free" : `$${course.price}`}</div>
                          <Link href={`/courses/${course.id}`}>
                            <Button variant="outline" size="sm">
                              Enroll Now
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Weekly Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] w-full bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
                    Activity Chart Placeholder
                  </div>
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Upcoming Deadlines</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {deadlines.map((deadline, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="rounded-full p-2 bg-primary/10 text-primary">
                          <Clock className="h-4 w-4" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">{deadline.title}</p>
                          <p className="text-sm text-muted-foreground">{deadline.course}</p>
                          <p className="text-xs text-muted-foreground">Due: {deadline.dueDate}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

const inProgressCourses = [
  {
    id: "1",
    title: "Introduction to Web Development",
    instructor: "Sarah Johnson",
    progress: 45,
    lastAccessed: "Today",
  },
  {
    id: "2",
    title: "Data Science Fundamentals",
    instructor: "Michael Chen",
    progress: 20,
    lastAccessed: "Yesterday",
  },
]

const completedCourses = [
  {
    id: "3",
    title: "Digital Marketing Essentials",
    instructor: "Emma Rodriguez",
    completedDate: "April 15, 2024",
  },
]

const wishlistCourses = [
  {
    id: "4",
    title: "Advanced JavaScript Programming",
    instructor: "David Kim",
    description:
      "Take your JavaScript skills to the next level with advanced concepts like closures, prototypes, and async programming.",
    price: 69.99,
  },
  {
    id: "5",
    title: "UI/UX Design Principles",
    instructor: "Sophia Lee",
    description:
      "Learn the fundamental principles of user interface and user experience design to create intuitive digital products.",
    price: 54.99,
  },
]

const deadlines = [
  {
    title: "Final Project Submission",
    course: "Introduction to Web Development",
    dueDate: "May 25, 2024",
  },
  {
    title: "Quiz 2",
    course: "Data Science Fundamentals",
    dueDate: "May 28, 2024",
  },
  {
    title: "Assignment 3",
    course: "Introduction to Web Development",
    dueDate: "June 2, 2024",
  },
]
