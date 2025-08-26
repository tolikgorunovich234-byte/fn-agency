// src/App.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// -----------------------------
// FN AGENCY — WTF Funnel Landing (Hardcore Edition)
// -----------------------------

export default function WTFunnelLanding() {
  const [quizOpen, setQuizOpen] = useState(false);
  const [cowardOpen, setCowardOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({ budget: "", speed: "", spice: "" });

  const startQuiz = () => {
    setQuizOpen(true);
    setStep(0);
    setAnswers({ budget: "", speed: "", spice: "" });
  };

  const closeQuiz = () => setQuizOpen(false);

  const steps = [
    { q: "Какой дневной бюджет на тесты тебя не ебёт?", options: [{ v: "$50–100", label: "$50–100" },{ v: "$150–200", label: "$150–200" },{ v: "$300+", label: "$300+" }], key: "budget" },
    { q: "Через сколько дней тебе нахуй нужны заявки?", options: [{ v: "3–5 дней", label: "3–5 дней" },{ v: "7 дней", label: "7 дней" },{ v: "14 дней", label: "14 дней" }], key: "speed" },
    { q: "Сколько пиздеца выдержит твой бренд?", options: [{ v: "Чуть-чуть, аккуратно", label: "Чуть-чуть, аккуратно" },{ v: "По-жёстче, но без бана", label: "По-жёстче, но без бана" },{ v: "Ебанём как надо", label: "Ебанём как надо" }], key: "spice" },
  ];

  const heroBadge = (
    <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs tracking-wide uppercase">
      <span className="font-medium">FN Agency</span>
      <span className="opacity-60">•</span>
      <span className="opacity-80">WTF Funnel</span>
    </div>
  );

  return (
    <div className="min-h-screen w-full bg-white text-black">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.06),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.06),transparent_40%)]" />
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded bg-black" />
            <span className="text-sm font-semibold tracking-wider uppercase">FN AGENCY</span>
          </div>
          <nav className="hidden gap-6 md:flex text-sm">
            <a href="#inside" className="opacity-80 hover:opacity-100">Что внутри</a>
            <a href="#process" className="opacity-80 hover:opacity-100">Процесс</a>
            <a href="#faq" className="opacity-80 hover:opacity-100">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="text-xs uppercase tracking-wider opacity-60 hover:opacity-100">ru / eng</button>
            <a href="#lead" className="rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-black hover:text-white">
              Связаться
            </a>
          </div>
        </div>
      </header>

      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="mb-6">{heroBadge}</div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 80, damping: 16 }} className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
            НЕСТАНДАРТНЫЙ МАРКЕТИНГ
            <br /> КОТОРЫЙ ВЫБЬЕТ ХУЙНЮ ИЗ ЛЕНТЫ
          </motion.h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed opacity-80">
            Мы ебашим креатив, который нахуй сносит крышу. Забудь про скучную корпоративщину — здесь только мясо, мемы и связки, которые реально приносят бабки.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button onClick={startQuiz} className="rounded-full bg-black px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white hover:opacity-90">
              Запустить ебанутую воронку
            </button>
            <button onClick={() => setCowardOpen(true)} className="rounded-full border px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-black hover:text-white">
              Я ссыкую
            </button>
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider opacity-70">
              <s className="opacity-50">$3000</s>
              <span className="font-semibold">от $1500</span>
              <span>• старт за 7 ебучих дней</span>
            </div>
          </div>

          <div className="mt-6 text-xs uppercase tracking-wider opacity-60">
            Работает в любом канале: Meta, TikTok, YouTube, VK, Яндекс — где угодно, похуй.
          </div>
        </div>
      </section>

      <section className="border-y bg-black text-white">
        <div className="mx-auto max-w-6xl px-4 py-3 text-[11px] uppercase tracking-wider">
          ⚡ Предупреждение: этот ебаный маркетинг вызывает зависимость. Вход только для самых отбитых.
        </div>
      </section>
    </div>
  );
}
