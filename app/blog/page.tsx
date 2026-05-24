import { FadeIn } from "@/components/custom/ui/FadeIn";
import { Footer } from "@/components/custom/ui/Footer";
import { GhostButton } from "@/components/custom/ui/Buttons";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogPage() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-background">
      <div className="max-w-5xl mx-auto w-full px-6 py-24 flex-1">
        <FadeIn>
          <Link href="/" className="inline-block mb-12">
            <GhostButton className="!py-3 !px-6 flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" /> Back to Portfolio
            </GhostButton>
          </Link>
          
          <h1 className="text-5xl sm:text-7xl font-black mb-6">Blog & Socials</h1>
          <p className="text-xl text-muted-foreground mb-16">
            A collection of my recent thoughts, articles, and posts from across the web.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeIn delay={0.2}>
            <div className="p-8 rounded-[30px] bg-secondary/20 border border-border h-[400px] flex items-center justify-center">
              <p className="text-muted-foreground text-center">
                LinkedIn Embed Placeholder<br/>
                <span className="text-sm">(Replace with your iframe snippet)</span>
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <div className="p-8 rounded-[30px] bg-secondary/20 border border-border h-[400px] flex items-center justify-center">
              <p className="text-muted-foreground text-center">
                X (Twitter) Embed Placeholder<br/>
                <span className="text-sm">(Replace with your iframe snippet)</span>
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
