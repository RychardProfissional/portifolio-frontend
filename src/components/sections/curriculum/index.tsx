'use client';

export default function CurriculumSection() {
  const pdfFile = '/pdfs/profile.pdf';

  return (
    <section className="py-10 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6">Curriculum</h2>

      <div className="w-full max-w-3xl h-[80vh] overflow-hidden bg-gray-100 p-0 rounded-xl shadow-md">
        <iframe
          src={pdfFile}
          title="Curriculum Vitae"
          className="w-full h-full border-none"
        />
      </div>
    </section>
  );
}