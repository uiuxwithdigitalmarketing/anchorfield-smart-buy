import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import heroBg from "@/assets/hero-blog.jpg";
import { CtaBlock } from "@/components/cta-block";

const POSTS: Record<string, { tag: string; date: string; title: string; read: string; body: string[] }> = {
  "melbourne-volatility": {
    tag: "Market Report", date: "Q1 · 2026", read: "8 min",
    title: "The Melbourne Volatility Index: what buyers should ignore.",
    body: [
      "Every quarter, our research desk assembles a composite index of Melbourne residential volatility — pulling from auction clearance rates, median movements, vendor discounting, and days on market.",
      "The purpose is not to predict prices. It is to separate meaningful market movement from noise designed to sell news, not property. Most of what buyers read is the latter.",
      "In this report, we outline the three signals that genuinely matter to a buyer's decision framework, and the seven that do not — no matter how prominently they appear in weekend headlines.",
      "The most consequential finding: buyers who acted on 'market bottom' calls in the last 18 months systematically overpaid relative to buyers who ignored macro sentiment entirely and focused on suburb-level fundamentals.",
    ],
  },
  "yield-vs-growth": {
    tag: "Investment", date: "Feb · 2026", read: "6 min",
    title: "Yield vs. growth: choosing the right portfolio thesis.",
    body: [
      "The perennial investor question — do I buy for yield or for growth? — is asked with such frequency that most buyers assume it has a universal answer. It does not.",
      "The correct answer depends almost entirely on where you are in your capital timeline, what your leverage tolerance is, and how you want to redeploy equity over the next decade.",
      "This piece walks through the four common investor profiles we see and the portfolio thesis best suited to each. It also outlines the specific asset characteristics that align to each thesis — because thesis without execution is theatre.",
    ],
  },
  "auction-psychology": {
    tag: "First Home", date: "Jan · 2026", read: "5 min",
    title: "Auction psychology 101: how to hold your nerve.",
    body: [
      "The auction floor is an engineered environment. Every element — the countdown, the auctioneer's cadence, the visible presence of other bidders — is designed to shift you from analytical thinking to emotional response.",
      "Understanding the design is the first step to not being its subject. In this short guide we outline the four psychological pressures every buyer faces and the counter-tactics that neutralise each.",
      "The single most important tactic, however, cannot be learned in five minutes: setting an unconditional ceiling before auction day, and having a genuine willingness to walk away at that number. Everything else is secondary.",
    ],
  },
};

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = POSTS[params.slug];
    if (!post) return { post: null };
    return { post };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData?.post) return { meta: [{ title: "Insight not found" }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: `${loaderData.post.title} — Anchorfield` },
        { name: "description", content: loaderData.post.body[0].slice(0, 155) },
        { property: "og:title", content: loaderData.post.title },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  if (!post) {
    return (
      <div className="min-h-dvh pt-40 container-editorial">
        <div className="text-eyebrow mb-4">404</div>
        <h1 className="font-display italic text-6xl mb-6">Insight not found.</h1>
        <Link to="/blog" className="link-underline text-eyebrow">Back to insights</Link>
      </div>
    );
  }
  return (
    <>
      <PageHero backgroundImage={heroBg}
        eyebrow={`${post.tag} — ${post.date}`}
        chapter={`${post.read} READ`}
        title={<span>{post.title}</span>}
      />
      <article className="pb-24">
        <div className="container-editorial max-w-3xl">
          {post.body.map((p: string, i: number) => (
            <p key={i} className={`text-paper/80 leading-relaxed mb-6 ${i === 0 ? "text-xl md:text-2xl font-display italic text-paper" : "text-lg"}`}>
              {p}
            </p>
          ))}
          <div className="mt-16 pt-8 border-t border-white/10">
            <Link to="/blog" className="link-underline text-eyebrow">← All insights</Link>
          </div>
        </div>
      </article>
      <CtaBlock />
    </>
  );
}
