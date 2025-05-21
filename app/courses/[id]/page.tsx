import Link from "next/link"
import { ArrowLeft, BookOpen, Clock, FileText, Play, Star, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the course data based on the ID
  const course = courses.find((c) => c.id === params.id)

  if (!course) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Course Not Found</h1>
          <p className="text-muted-foreground">The course you're looking for doesn't exist or has been removed.</p>
          <Link href="/courses">
            <Button>Browse Courses</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <Link href="/courses" className="inline-flex items-center text-sm font-medium text-primary mb-6">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Courses
            </Link>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{course.title}</h1>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 text-muted-foreground" />
                    <span className="ml-2 text-sm text-muted-foreground">(128 reviews)</span>
                  </div>
                </div>
                <p className="text-muted-foreground md:text-lg">{course.description}</p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Instructor: {course.instructor}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Duration: {course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Lessons: {course.lessons.length}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-2">
                    <Play className="h-4 w-4" />
                    Start Learning
                  </Button>
                  <Button variant="outline" size="lg">
                    Add to Wishlist
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-primary" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-16 w-16 rounded-full bg-background/80 hover:bg-background/90"
                    >
                      <Play className="h-8 w-8" />
                      <span className="sr-only">Play preview</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="content" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="content">Course Content</TabsTrigger>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="content" className="mt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Course Progress</h3>
                    <span className="text-sm text-muted-foreground">0% Complete</span>
                  </div>
                  <Progress value={0} className="h-2" />
                  <div className="space-y-4 mt-6">
                    {course.lessons.map((lesson, index) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                                {index + 1}
                              </div>
                              <div>
                                <h4 className="font-medium">{lesson.title}</h4>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <Clock className="h-3.5 w-3.5" />
                                  <span>{lesson.duration}</span>
                                </div>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm" className="gap-1">
                              <Play className="h-4 w-4" />
                              Start
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="overview" className="mt-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">About This Course</h3>
                  <p className="text-muted-foreground">{course.longDescription}</p>
                  <h3 className="text-lg font-semibold mt-6">What You'll Learn</h3>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {course.learningOutcomes.map((outcome, index) => (
                      <li key={index} className="flex items-center gap-2">
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
                          className="h-5 w-5 text-primary"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                  <h3 className="text-lg font-semibold mt-6">Requirements</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {course.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Student Reviews</h3>
                    <Button>Write a Review</Button>
                  </div>
                  <div className="grid gap-6">
                    {reviews.map((review, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center font-medium">
                            {review.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-medium">{review.name}</div>
                            <div className="flex items-center">
                              {Array(5)
                                .fill(null)
                                .map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < review.rating ? "fill-primary text-primary" : "text-muted-foreground"
                                    }`}
                                  />
                                ))}
                              <span className="ml-2 text-xs text-muted-foreground">{review.date}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
    </div>
  )
}

const courses = [
  {
    id: "1",
    title: "Introduction to Web Development",
    instructor: "Sarah Johnson",
    description:
      "Learn the fundamentals of web development including HTML, CSS, and JavaScript. Build responsive websites from scratch.",
    longDescription:
      "This comprehensive course will take you from a complete beginner to being able to create your own responsive websites. You'll learn HTML for structure, CSS for styling, and JavaScript for interactivity. By the end of this course, you'll have built several real-world projects that you can add to your portfolio.",
    duration: "10 hours",
    price: 49.99,
    learningOutcomes: [
      "Understand HTML structure and semantics",
      "Create responsive layouts with CSS",
      "Implement interactivity with JavaScript",
      "Build and deploy a complete website",
      "Optimize websites for different devices",
      "Understand web accessibility principles",
    ],
    requirements: [
      "No prior programming experience required",
      "Basic computer skills",
      "A computer with internet access",
    ],
    lessons: [
      { title: "Introduction to HTML", duration: "45 min" },
      { title: "HTML Elements and Structure", duration: "1 hr" },
      { title: "Introduction to CSS", duration: "45 min" },
      { title: "CSS Box Model and Layout", duration: "1 hr" },
      { title: "Responsive Design with CSS", duration: "1.5 hr" },
      { title: "Introduction to JavaScript", duration: "1 hr" },
      { title: "JavaScript DOM Manipulation", duration: "1.5 hr" },
      { title: "Building a Landing Page Project", duration: "2 hr" },
      { title: "Final Project: Portfolio Website", duration: "2.5 hr" },
    ],
  },
]

const reviews = [
  {
    name: "Alex Thompson",
    rating: 5,
    date: "2 months ago",
    comment:
      "This course was exactly what I needed to start my web development journey. The instructor explains concepts clearly and the projects were engaging and practical.",
  },
  {
    name: "Jamie Lee",
    rating: 4,
    date: "3 months ago",
    comment:
      "Great content and well-structured lessons. I would have liked more advanced JavaScript examples, but overall it was very helpful for beginners.",
  },
  {
    name: "Taylor Morgan",
    rating: 5,
    date: "1 month ago",
    comment:
      "I've tried several web development courses, and this one stands out for its clarity and practical approach. Highly recommended!",
  },
]
