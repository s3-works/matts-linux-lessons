import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Terminal, 
  Code, 
  BookOpen, 
  Users, 
  CheckCircle, 
  Laptop, 
  ArrowRight,
  Shield,
  Zap,
  Heart,
  Star,
  MessageCircle
} from "lucide-react";
import heroImage from "@/assets/hero-linux.jpg";
import tutorIcon from "@/assets/tutor-icon.png";
import linuxPenguin from "@/assets/linux-penguin.png";

const Index = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Terminal className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-foreground">Linux Tutoring</span>
          </div>
          <Button onClick={scrollToContact} className="bg-primary hover:bg-primary/90">
            Book a Lesson
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Zap className="h-4 w-4" />
                Professional Linux Training
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Take Control of Your Computer
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Learn Linux Today!
              </h2>
              <p className="text-xl text-muted-foreground">
                Hands-on lessons to confidently migrate from Windows 10 to Linux. Master the terminal, file systems, and open-source computing with personalized guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={scrollToContact}
                  className="bg-primary hover:bg-primary/90 text-lg group"
                >
                  Book a Lesson
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-lg"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>
              <img 
                src={heroImage} 
                alt="Linux Terminal and Workspace"
                className="relative rounded-2xl shadow-2xl border border-border"
              />
              <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-4 shadow-lg">
                <img src={linuxPenguin} alt="Linux Penguin" className="h-20 w-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Meet Your Tutor</h2>
            <p className="text-xl text-muted-foreground">Professional, experienced, and passionate about Linux</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl"></div>
                <img 
                  src={tutorIcon} 
                  alt="Matthew - Linux Tutor"
                  className="relative rounded-full border-4 border-primary shadow-2xl h-64 w-64"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">Hi, I'm Matthew</h3>
              <p className="text-lg text-muted-foreground">
                As an experienced Linux tutor, I've helped countless students make the successful transition from Windows to Linux. My approach isn't just about teaching commands—it's about building genuine understanding and confidence.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Hands-On Methodology</h4>
                    <p className="text-muted-foreground">Learn by doing, not just watching. Every lesson is interactive and practical.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Curiosity-Driven Learning</h4>
                    <p className="text-muted-foreground">I encourage questions and exploration, helping you truly understand the "why" behind each concept.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Professional & Approachable</h4>
                    <p className="text-muted-foreground">Patient, understanding, and dedicated to your success—no question is too basic.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons & Methodology Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What You'll Learn</h2>
            <p className="text-xl text-muted-foreground">Comprehensive, practical Linux skills from the ground up</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-border hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="pt-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Terminal className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Linux Basics</h3>
                <p className="text-muted-foreground">
                  Master the terminal, understand file systems, navigate with confidence, and control your system like a pro.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="pt-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Laptop className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Migration Support</h3>
                <p className="text-muted-foreground">
                  Learn dual-boot setup, migrate your files safely, and transition smoothly from Windows 10 to Linux.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="pt-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Practical Skills</h3>
                <p className="text-muted-foreground">
                  Install applications, troubleshoot issues, customize your desktop, and become truly self-sufficient.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6 bg-card p-8 rounded-2xl border border-border">
            <div className="text-center space-y-2">
              <Shield className="h-10 w-10 text-primary mx-auto" />
              <h4 className="font-bold text-foreground">Master Linux</h4>
              <p className="text-sm text-muted-foreground">Complete control over your system</p>
            </div>
            <div className="text-center space-y-2">
              <Zap className="h-10 w-10 text-accent mx-auto" />
              <h4 className="font-bold text-foreground">Confident Migration</h4>
              <p className="text-sm text-muted-foreground">Smooth Windows-to-Linux transition</p>
            </div>
            <div className="text-center space-y-2">
              <BookOpen className="h-10 w-10 text-primary mx-auto" />
              <h4 className="font-bold text-foreground">Practical Skills</h4>
              <p className="text-sm text-muted-foreground">Real-world, hands-on learning</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Who Are These Lessons For?</h2>
            <p className="text-xl text-muted-foreground">Perfect for anyone ready to embrace open-source computing</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-border text-center hover:shadow-lg transition-all">
              <CardContent className="pt-6 space-y-3">
                <Users className="h-12 w-12 text-primary mx-auto" />
                <h3 className="font-bold text-foreground">Beginners</h3>
                <p className="text-sm text-muted-foreground">
                  Never used Linux? No problem. Start from scratch with patient, clear instruction.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border text-center hover:shadow-lg transition-all">
              <CardContent className="pt-6 space-y-3">
                <BookOpen className="h-12 w-12 text-accent mx-auto" />
                <h3 className="font-bold text-foreground">Students</h3>
                <p className="text-sm text-muted-foreground">
                  Build valuable tech skills for your education and future career.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border text-center hover:shadow-lg transition-all">
              <CardContent className="pt-6 space-y-3">
                <Laptop className="h-12 w-12 text-primary mx-auto" />
                <h3 className="font-bold text-foreground">Professionals</h3>
                <p className="text-sm text-muted-foreground">
                  Enhance your skillset with open-source expertise and system control.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border text-center hover:shadow-lg transition-all">
              <CardContent className="pt-6 space-y-3">
                <Heart className="h-12 w-12 text-accent mx-auto" />
                <h3 className="font-bold text-foreground">Enthusiasts</h3>
                <p className="text-sm text-muted-foreground">
                  Explore the freedom and power of Linux and open-source software.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground">Invest in yourself with personalized Linux training</p>
          </div>

          <Card className="border-2 border-primary relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-accent text-white px-6 py-2 rounded-bl-lg font-semibold">
              Best Value
            </div>
            <CardContent className="pt-12 pb-8 text-center space-y-6">
              <div>
                <div className="text-6xl font-bold text-primary mb-2">R150</div>
                <div className="text-2xl text-muted-foreground">per hour</div>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hands-on, personalized Linux lessons designed to save you time, money, and frustration. 
                Get real results with practical, interactive teaching.
              </p>

              <div className="space-y-3 pt-6">
                <div className="flex items-center justify-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">One-on-one personalized instruction</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Flexible scheduling to fit your life</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Practical, hands-on learning approach</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Ongoing support and guidance</span>
                </div>
              </div>

              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 mt-6 text-lg"
              >
                Book Your First Lesson
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Student Success Stories</h2>
            <p className="text-xl text-muted-foreground">Hear from students who've made the Linux journey</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border">
              <CardContent className="pt-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "Matthew made learning Linux so much easier than I expected. His patient, hands-on approach gave me the confidence to fully switch from Windows."
                </p>
                <div className="pt-2">
                  <p className="font-semibold text-foreground">Sarah M.</p>
                  <p className="text-sm text-muted-foreground">Student</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "I was nervous about the terminal, but Matthew's teaching style made everything click. Now I actually enjoy working in Linux!"
                </p>
                <div className="pt-2">
                  <p className="font-semibold text-foreground">James K.</p>
                  <p className="text-sm text-muted-foreground">Professional</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "Best investment I've made! Matthew's lessons were practical and relevant. I can now troubleshoot issues myself and feel in control of my computer."
                </p>
                <div className="pt-2">
                  <p className="font-semibold text-foreground">Priya N.</p>
                  <p className="text-sm text-muted-foreground">Enthusiast</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto max-w-4xl text-center text-white space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">Ready to Start Your Linux Journey?</h2>
          <p className="text-xl md:text-2xl opacity-90">
            Book your first lesson today and take the first step towards mastering Linux
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg group"
              onClick={() => window.open('https://wa.me/', '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Message on WhatsApp
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg"
              onClick={scrollToContact}
            >
              Learn More
            </Button>
          </div>

          <div className="pt-12 space-y-4 opacity-90">
            <p className="text-lg font-semibold">Matthew - Linux Tutor</p>
            <p className="text-base">Empowering students to confidently navigate the world of Linux</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-card border-t border-border">
        <div className="container mx-auto max-w-6xl text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Matthew Linux Tutoring. All rights reserved.</p>
          <p className="mt-2 text-sm">Helping students master Linux, one lesson at a time.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
