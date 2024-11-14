export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-0 md:py-0 h-screen">
      <div className="inline-block w-full h-full text-center">
        {children}
      </div>
    </section>
  );
}
