// components/AboutSection.tsx
export default function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
    >
      <h2 className="text-lg font-semibold tracking-tight mb-2">
        About me
      </h2>
      <p className="text-sm text-slate-300 leading-relaxed">
        I&apos;m a Computer Science Technology student at Champlain College
        Saint-Lambert, with a strong focus on full stack development. I enjoy
        shipping real projects that connect a solid backend with a clean,
        responsive UI.
      </p>
    </section>
  );
}
