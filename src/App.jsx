import { ArrowUpRight, FileText, GraduationCap, Play } from "lucide-react";

import uinLogo from "../Assests/uin.png";
import geminiAcademyLogo from "../Assests/gemini-academy.svg";
import googleForEduLogo from "../Assests/Google_for_Education_logo.svg";
import websisLogo from "../Assests/websis.png";

const LINKS = [
  {
    id: "student-register",
    title: "Pendaftaran & Ujian Mahasiswa",
    description: "Portal resmi peserta mahasiswa (mahasiswa.kmk.id)",
    href: "https://mahasiswa.kmk.id",
    icon: GraduationCap,
    cardClasses:
      "border-blue-600/25 hover:border-blue-600 hover:bg-blue-50/60",
    iconClasses: "bg-blue-600/10 text-blue-600",
    arrowClasses:
      "bg-slate-100 text-slate-500 group-hover:bg-blue-600 group-hover:text-white",
  },
  {
    id: "video-guide",
    title: "Panduan Video (YouTube)",
    description: "Playlist tutorial langkah demi langkah untuk mahasiswa",
    href: "https://www.youtube.com/playlist?list=PLCd0MLd1ge1E",
    icon: Play,
    cardClasses:
      "border-red-600/20 hover:border-red-600 hover:bg-red-50/50",
    iconClasses: "bg-red-600/10 text-red-600",
    arrowClasses:
      "bg-slate-100 text-slate-500 group-hover:bg-red-600 group-hover:text-white",
  },
  {
    id: "pdf-guide",
    title: "Panduan PDF",
    description: "Dokumen panduan tertulis resmi peserta mahasiswa",
    href: "https://drive.google.com/file/d/15N7pjEPTvCZhcQJSztFXZ-DNegQC7PLu/view?usp=drive_link",
    icon: FileText,
    cardClasses:
      "border-emerald-800/25 hover:border-emerald-800 hover:bg-emerald-50/60",
    iconClasses: "bg-emerald-800/10 text-emerald-800",
    arrowClasses:
      "bg-slate-100 text-slate-500 group-hover:bg-emerald-800 group-hover:text-white",
  },
];

function LinkItem({ item }) {
  const Icon = item.icon;

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex min-h-[68px] w-full items-center gap-3.5 rounded-2xl border-[1.5px] bg-white px-3.5 py-3 text-left shadow-xs transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md active:scale-[0.985] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${item.cardClasses}`}
    >
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${item.iconClasses}`}
      >
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>

      <span className="min-w-0 flex-1">
        <span className="block text-[15px] font-bold leading-snug text-slate-900">
          {item.title}
        </span>
        <span className="mt-0.5 block text-xs font-medium text-slate-500">
          {item.description}
        </span>
      </span>

      <span
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-all duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${item.arrowClasses}`}
        aria-hidden="true"
      >
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </a>
  );
}

export default function App() {
  return (
    <div className="relative min-h-dvh overflow-x-hidden">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-28 -left-24 h-80 w-80 rounded-full bg-emerald-500/30 blur-3xl" />
        <div className="absolute top-1/5 -right-28 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl" />
        <div className="absolute -bottom-24 left-1/5 h-64 w-64 rounded-full bg-amber-400/20 blur-3xl" />
      </div>

      <main className="relative z-10 flex min-h-dvh items-center justify-center px-3.5 py-5 sm:px-6 sm:py-8">
        <section
          aria-label="Portal Link Gemini Academy Mahasiswa UIN Malang"
          className="w-full max-w-[460px] overflow-hidden rounded-3xl border border-white/80 bg-white/95 px-4 pb-6 shadow-[0_18px_45px_-16px_rgba(15,23,42,0.14),0_4px_12px_-2px_rgba(15,23,42,0.05)] backdrop-blur-md sm:px-5"
        >
          {/* Top brand gradient bar */}
          <div
            className="-mx-4 mb-5 h-1.5 bg-gradient-to-r from-[#00572d] via-[#d49b27] to-[#1a73e8] sm:-mx-5"
            aria-hidden="true"
          />

          {/* Header & Primary Logos */}
          <header className="mb-5 text-center">
            <div className="mb-3.5 inline-flex max-w-full items-center justify-center gap-3 rounded-2xl border border-slate-900/10 bg-white px-4 py-2.5 shadow-xs sm:gap-3.5">
              <img
                src={uinLogo}
                alt="Logo UIN Maulana Malik Ibrahim Malang"
                className="h-10 w-auto object-contain sm:h-12"
              />
              <span
                className="h-8 w-px shrink-0 bg-slate-900/15"
                aria-hidden="true"
              />
              <img
                src={geminiAcademyLogo}
                alt="Logo Gemini Academy"
                className="h-9 w-auto object-contain sm:h-10"
              />
            </div>

            <div className="mb-2.5 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-3 py-1 text-xs font-bold tracking-wide text-blue-700">
                <span
                  className="h-2 w-2 rounded-full bg-blue-600 ring-3 ring-blue-500/20"
                  aria-hidden="true"
                />
                Portal Khusus Mahasiswa
              </span>
            </div>

            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
              Gemini Academy
            </h1>
            <p className="mt-1 text-[15px] font-semibold leading-snug text-slate-600">
              UIN Maulana Malik Ibrahim Malang
              <span className="mt-0.5 block text-[13.5px] font-medium text-slate-500">
                Program Pelatihan &amp; Sertifikasi Mahasiswa
              </span>
            </p>
          </header>

          {/* Main Links */}
          <nav className="flex flex-col gap-3" aria-label="Daftar Tautan Mahasiswa">
            {LINKS.map((item) => (
              <LinkItem key={item.id} item={item} />
            ))}
          </nav>

          {/* Partner Logos Footer */}
          <footer className="mt-6 border-t border-slate-900/10 pt-4 text-center">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-slate-500">
              Kolaborasi &amp; Dukungan
            </p>

            <div className="grid grid-cols-2 items-center gap-2.5">
              <div className="flex h-14 items-center justify-center rounded-xl border border-slate-900/10 bg-white px-3.5 py-2.5">
                <img
                  src={googleForEduLogo}
                  alt="Logo Google for Education"
                  loading="lazy"
                  className="max-h-8 w-auto max-w-full object-contain"
                />
              </div>

              {/* websis.png is white-on-transparent, so dark slate background ensures crisp contrast */}
              <div className="flex h-14 items-center justify-center rounded-xl border border-slate-800 bg-slate-800 px-3.5 py-2.5">
                <img
                  src={websisLogo}
                  alt="Logo Websis for Edu"
                  loading="lazy"
                  className="max-h-7 w-auto max-w-full object-contain"
                />
              </div>
            </div>

            <p className="mt-3.5 text-xs font-medium text-slate-500">
              UIN Maulana Malik Ibrahim Malang &bull; Gemini Academy
            </p>
          </footer>
        </section>
      </main>
    </div>
  );
}
