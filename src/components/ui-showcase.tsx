import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Skeleton } from "./ui/skeleton";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export function UIShowcase() {
  const [progress, setProgress] = useState(33);
  const [loading, setLoading] = useState(false);

  const handleProgressUpdate = () => {
    setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
  };

  const handleLoadingDemo = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-blue-900 dark:to-purple-900 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-5xl font-bold gradient-text">
            Enhanced UI Components
          </h1>
          <p className="text-xl text-muted-foreground animate-slide-up">
            Stunning animations and modern design patterns
          </p>
        </div>

        {/* Button Showcase */}
        <Card className="animate-float-gentle">
          <CardHeader>
            <CardTitle>Enhanced Buttons</CardTitle>
            <CardDescription>
              Interactive buttons with hover effects, scaling, and shimmer animations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button variant="default">Default Button</Button>
              <Button variant="gradient">Gradient Button</Button>
              <Button variant="glow">Glowing Button</Button>
              <Button variant="shimmer">Shimmer Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="ghost">Ghost Button</Button>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">🚀</Button>
            </div>
          </CardContent>
        </Card>

        {/* Badge Showcase */}
        <Card className="animate-bounce-gentle">
          <CardHeader>
            <CardTitle>Enhanced Badges</CardTitle>
            <CardDescription>
              Badges with hover scaling, glow effects, and gradient animations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Badge variant="default">Default</Badge>
              <Badge variant="gradient">Gradient</Badge>
              <Badge variant="glow">Glowing</Badge>
              <Badge variant="shimmer">Shimmer</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Input Showcase */}
        <Card>
          <CardHeader>
            <CardTitle>Enhanced Inputs</CardTitle>
            <CardDescription>
              Form inputs with focus animations, scaling, and glow effects
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Type something amazing..." />
            <Input placeholder="Email address" type="email" />
            <Input placeholder="Password" type="password" />
            <Input placeholder="Disabled input" disabled />
          </CardContent>
        </Card>

        {/* Progress Showcase */}
        <Card>
          <CardHeader>
            <CardTitle>Enhanced Progress</CardTitle>
            <CardDescription>
              Progress bars with gradient animations and shimmer effects
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Progress: {progress}%</span>
                <Button onClick={handleProgressUpdate} size="sm">
                  Update Progress
                </Button>
              </div>
              <Progress value={progress} />
            </div>
          </CardContent>
        </Card>

        {/* Skeleton Showcase */}
        <Card>
          <CardHeader>
            <CardTitle>Enhanced Skeletons</CardTitle>
            <CardDescription>
              Loading skeletons with shimmer animations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button onClick={handleLoadingDemo} disabled={loading}>
              {loading ? "Loading..." : "Demo Loading State"}
            </Button>
            {loading ? (
              <div className="space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <div className="flex space-x-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2 flex-1">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <p>Content loaded! Click the button above to see loading skeletons.</p>
                <div className="flex space-x-4">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                    👤
                  </div>
                  <div className="space-y-2 flex-1">
                    <p className="font-medium">John Doe</p>
                    <p className="text-sm text-muted-foreground">Software Developer</p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Dialog Showcase */}
        <Card>
          <CardHeader>
            <CardTitle>Enhanced Dialog</CardTitle>
            <CardDescription>
              Modal dialogs with backdrop blur and smooth animations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Enhanced Dialog</DialogTitle>
                  <DialogDescription>
                    This dialog features backdrop blur, smooth animations, and enhanced styling.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <Input placeholder="Enter your name" />
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline">Cancel</Button>
                    <Button>Save Changes</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        {/* Accordion Showcase */}
        <Card>
          <CardHeader>
            <CardTitle>Enhanced Accordion</CardTitle>
            <CardDescription>
              Collapsible content with smooth animations and hover effects
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What are these enhancements?</AccordionTrigger>
                <AccordionContent>
                  These UI components have been enhanced with modern animations, hover effects, 
                  gradient backgrounds, shimmer effects, and smooth transitions to create a 
                  more engaging user experience.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How do the animations work?</AccordionTrigger>
                <AccordionContent>
                  The animations use CSS transforms, transitions, and keyframe animations 
                  combined with Tailwind CSS classes. They include scaling, glowing, 
                  shimmer effects, and smooth state transitions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Are they accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes! All animations respect the user's motion preferences and include 
                  proper focus states, ARIA labels, and keyboard navigation support.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Card Grid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="stagger-{i}">
              <CardHeader>
                <CardTitle>Feature Card {i}</CardTitle>
                <CardDescription>
                  This card demonstrates the hover effects and animations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Hover over this card to see the lift effect, shadow changes, 
                  and subtle animations in action.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center py-8">
          <p className="text-muted-foreground">
            ✨ Enhanced UI Components with stunning animations and modern design
          </p>
        </div>
      </div>
    </div>
  );
}