"use client";

import { ShieldCheck, MessageSquareText, RefreshCw, Clock } from "lucide-react";

const BADGES = [
  {
    icon: ShieldCheck,
    title: "Data rahasia",
    description: "File & identitas tidak dibagikan.",
  },
  {
    icon: MessageSquareText,
    title: "Siap dibahas",
    description: "Interpretasi yang bisa kamu jelaskan.",
  },
  {
    icon: RefreshCw,
    title: "Revisi terukur",
    description: "Sesuai brief & paket disepakati.",
  },
  {
    icon: Clock,
    title: "Deadline jelas",
    description: "Estimasi dikonfirmasi sebelum mulai.",
  },
];

export default function TrustBadges() {
  return (
    <section className="px-6 pb-4">
      <div className="max-w-6xl mx-auto ui-card p-5 md:p-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {BADGES.map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.title} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-brand-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-0.5">
                    {b.title}
                  </p>
                  <p className="text-xs text-text-muted leading-snug">
                    {b.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
