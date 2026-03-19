export default function Process() {
  return (
    <div className="min-h-screen py-24 md:py-32 flex flex-col gap-24 animate-in fade-in duration-1000">
      <section className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-serif mb-8">Process Notes</h1>
        <p className="text-xl text-muted font-light max-w-2xl leading-relaxed">
          An ongoing journal documenting the making of Kief. Photoshoots, brand identity, social content, and behind the scenes.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-32 border-l border-foreground/10 pl-8 md:pl-16">
        <article className="relative">
          <div className="absolute -left-[33px] md:-left-[65px] top-2 w-4 h-4 rounded-full bg-accent-brown" />
          <p className="text-accent-brown uppercase tracking-widest text-sm mb-4">Phase 01</p>
          <h2 className="text-3xl font-serif mb-6">Material Gathering</h2>
          <div className="aspect-video bg-neutral-900 rounded-[2px] mb-8" />
          <p className="text-muted font-light max-w-2xl leading-relaxed">
            Sourcing hemp required deep dives into fabric mills and understanding the difference between woven weights. The intention was to find a fabric that could replace traditional heavyweight cotton while remaining breathable.
          </p>
        </article>

        <article className="relative">
          <div className="absolute -left-[33px] md:-left-[65px] top-2 w-4 h-4 rounded-full bg-accent-green" />
          <p className="text-accent-green uppercase tracking-widest text-sm mb-4">Phase 02</p>
          <h2 className="text-3xl font-serif mb-6">Identity Formulation</h2>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="aspect-square bg-neutral-900 rounded-[2px]" />
            <div className="aspect-square bg-neutral-900 rounded-[2px]" />
          </div>
          <p className="text-muted font-light max-w-2xl leading-relaxed">
            The brand system relies on subtle colors—deep greens and earth browns—set against complete darkness, allowing the texture to speak instead of the color.
          </p>
        </article>
      </section>
    </div>
  );
}
