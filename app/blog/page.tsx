import { FadeIn } from "@/components/custom/ui/FadeIn";
import { Footer } from "@/components/custom/ui/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Script from "next/script";
import { leetcode_username } from "@/constants";

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
    html: `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Rebuilt major parts of <a href="https://t.co/vJsUcBHaTp">https://t.co/vJsUcBHaTp</a> after a long break <br>Now powered with:<br>• Redis Pub/Sub scaling<br>• Gemini AI vector generation<br>• Prompt compression for lower latency<br>• Solana wallet auth + premium payments<br>Big thanks to <a href="https://twitter.com/uk_2149?ref_src=twsrc%5Etfw">@uk_2149</a> for contributing <a href="https://twitter.com/hashtag/buildinpublic?src=hash&amp;ref_src=twsrc%5Etfw">#buildinpublic</a> <a href="https://t.co/waQhh4GPzv">pic.twitter.com/waQhh4GPzv</a></p>&mdash; Rudra (@${leetcode_username}) <a href="https://twitter.com/${leetcode_username}/status/2058200310112514147?ref_src=twsrc%5Etfw">May 23, 2026</a></blockquote>`,
  }
];

export default function BlogPage() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-[#e8ebe6] dark:bg-[#0e0f0c] transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-12 py-24 flex-1">
        <FadeIn>
          <Link href="/" className="inline-flex mb-16">
            <div className="group inline-flex h-12 items-center justify-center gap-2 rounded-[24px] border-2 border-[#0e0f0c]/10 dark:border-white/10 bg-transparent px-6 text-[14px] font-bold text-[#0e0f0c] dark:text-white transition-all hover:bg-[#0e0f0c] hover:text-white dark:hover:bg-white dark:hover:text-[#0e0f0c] cursor-pointer active:scale-95">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> 
              Back to Portfolio
            </div>
          </Link>
          
          <h1 className="text-5xl sm:text-7xl font-black mb-6 tracking-tight text-[#0e0f0c] dark:text-white">Blog & Socials</h1>
          <p className="text-xl text-[#454745] dark:text-[#868685] font-medium max-w-2xl mb-20 leading-relaxed tracking-tight">
            A collection of my recent thoughts, articles, and posts from across the web.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {socialPosts.map((post, index) => (
            <FadeIn key={post.id} delay={0.2 + index * 0.1}>
              <div className="p-4 sm:p-6 rounded-[24px] bg-white dark:bg-[#121311] border border-[#0e0f0c]/5 dark:border-white/5 shadow-sm hover:shadow-xl hover:border-[#054d28]/40 dark:hover:border-[#9fe870]/40 min-h-[400px] flex items-center justify-center overflow-hidden relative transition-all duration-300 group">
                <div className="absolute inset-0 flex items-center justify-center -z-10 text-[#868685] text-sm text-center px-6 font-medium">
                  <div>
                    Loading post...<br />
                    <span className="text-[12px] opacity-70 mt-2 block">(If this remains blank, check your ad-blocker or Brave Shields)</span>
                  </div>
                </div>
                {post.type === "twitter" && post.html ? (
                  <div 
                    className="w-full h-full flex justify-center items-center overflow-hidden [&_.twitter-tweet]:!mx-auto z-10 bg-white/50 dark:bg-black/50 backdrop-blur-sm rounded-[16px] p-2"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                  />
                ) : (
                  <iframe
                    src={post.url}
                    height="100%"
                    width="100%"
                    className="w-full h-full min-h-[400px] rounded-[16px] z-10 bg-white/50 dark:bg-black/50 backdrop-blur-sm border-0"
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
              <div className="p-8 rounded-[24px] bg-white dark:bg-[#121311] border border-[#0e0f0c]/5 dark:border-white/5 h-[400px] flex items-center justify-center shadow-sm">
                <p className="text-[#868685] text-center font-bold">
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
