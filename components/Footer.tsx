import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brand-navy-deep text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-white/10 px-5 py-9 sm:px-8 md:flex-row md:items-center md:justify-between">
        <Image
          src="/brand/lockup-white-text-transparent.png"
          alt="Build AI From Here"
          width={1256}
          height={848}
          className="h-12 w-auto"
        />
        <div className="md:text-right">
          <p className="font-semibold">
            © 2026 AI Growth Community LLC. All rights reserved.
          </p>
          <p className="mt-1 text-sm text-white/58">
            No coding. No overwhelm. Just practical AI, one small win at a
            time.
          </p>
        </div>
      </div>
    </footer>
  );
}
