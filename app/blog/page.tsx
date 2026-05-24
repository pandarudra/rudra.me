import { FadeIn } from "@/components/custom/ui/FadeIn";
import { Footer } from "@/components/custom/ui/Footer";
import { GhostButton } from "@/components/custom/ui/Buttons";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Script from "next/script";

const socialPosts = [
  {
    id: 1,
    url: "https://www.linkedin.com/embed/feed/update/urn:li:share:7463963667857051649?collapsed=1",
    type: "linkedin",
  },
  {
    id: 2,
    url: "https://www.linkedin.com/embed/feed/update/urn:li:share:7416903037002158080?collapsed=1",
    type: "linkedin",
  },
  {
    id: 3,
    url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7365992100057841666?collapsed=1",
    type: "linkedin",
  },
  {
    id: 4,
    url: "https://www.linkedin.com/embed/feed/update/urn:li:share:7230833354135191552?collapsed=1",
    type: "linkedin",
  },
  {
    id: 5,
    type: "twitter",
    html: `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Rebuilt major parts of <a href="https://t.co/vJsUcBHaTp">https://t.co/vJsUcBHaTp</a> after a long break <br>Now powered with:<br>• Redis Pub/Sub scaling<br>• Gemini AI vector generation<br>• Prompt compression for lower latency<br>• Solana wallet auth + premium payments<br>Big thanks to <a href="https://twitter.com/uk_2149?ref_src=twsrc%5Etfw">@uk_2149</a> for contributing <a href="https://twitter.com/hashtag/buildinpublic?src=hash&amp;ref_src=twsrc%5Etfw">#buildinpublic</a> <a href="https://t.co/waQhh4GPzv">pic.twitter.com/waQhh4GPzv</a></p>&mdash; Rudra (@rudra_826) <a href="https://twitter.com/rudra_826/status/2058200310112514147?ref_src=twsrc%5Etfw">May 23, 2026</a></blockquote>`,
  }
];

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
          {socialPosts.map((post, index) => (
            <FadeIn key={post.id} delay={0.2 + index * 0.1}>
              <div className="p-4 sm:p-8 rounded-[30px] bg-secondary/20 border border-border min-h-[400px] flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center -z-10 text-muted-foreground text-sm text-center px-4">
                  Loading post...<br />
                  (If this remains blank, your browser's ad-blocker or Brave Shields is blocking the embed on localhost. Turn Shields down for localhost to view.)
                </div>
                {post.type === "twitter" && post.html ? (
                  <div 
                    className="w-full flex justify-center overflow-hidden [&_.twitter-tweet]:!mx-auto z-10 bg-background/50 backdrop-blur-sm rounded-xl p-2"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                  />
                ) : (
                  <iframe
                    src={post.url}
                    height="415"
                    width="100%"
                    className="w-full rounded-xl z-10 bg-background/50 backdrop-blur-sm"
                    frameBorder="0"
                    allowFullScreen
                    title="Social Embedded post"
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                  />
                )}
              </div>
            </FadeIn>
          ))}
          
          {socialPosts.length === 0 && (
            <FadeIn delay={0.2}>
              <div className="p-8 rounded-[30px] bg-secondary/20 border border-border h-[400px] flex items-center justify-center">
                <p className="text-muted-foreground text-center">
                  No posts added yet.
                </p>
              </div>
            </FadeIn>
          )}
        </div>
      </div>
      
      <Footer />
      <Script src="https://platform.twitter.com/widgets.js" strategy="lazyOnload" />
    </main>
  );
}
