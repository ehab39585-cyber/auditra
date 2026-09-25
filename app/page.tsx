const whatsappUrl = "https://wa.me/966510611949";
const email = "mahmoudgooda160@gmail.com";

const services = [
  {
    number: "01",
    title: "مسك وإدارة الحسابات",
    description:
      "تسجيل وتنظيم العمليات المالية اليومية، ومتابعة الإيرادات والمصروفات والمبيعات والمشتريات والحسابات المختلفة.",
  },
  {
    number: "02",
    title: "التقارير والقوائم المالية",
    description:
      "إعداد تقارير مالية دورية والقوائم المالية التي تساعد الإدارة على متابعة الأداء واتخاذ القرارات.",
  },
  {
    number: "03",
    title: "إعداد ومتابعة الإقرارات الضريبية",
    description:
      "تنظيم البيانات والحسابات اللازمة لدعم إعداد ومتابعة الإقرارات الضريبية والزكوية وفق المتطلبات ذات العلاقة.",
  },
  {
    number: "04",
    title: "ضريبة القيمة المضافة VAT",
    description:
      "المساعدة في تنظيم البيانات الضريبية وإعداد ومتابعة متطلبات ضريبة القيمة المضافة وفق الأنظمة المعمول بها.",
  },
  {
    number: "05",
    title: "إعداد التقارير الشهرية وتحليل النتائج",
    description:
      "إعداد تقارير شهرية تساعدك على فهم نتائج أعمالك ومتابعة الأداء المالي واتخاذ قرارات أفضل.",
  },
  {
    number: "06",
    title: "مراجعة الحسابات واكتشاف الأخطاء",
    description:
      "مراجعة الحسابات وتحديد الأخطاء والملاحظات ونقاط التحسين، مع تقديم توصيات عملية للإدارة.",
  },
  {
    number: "07",
    title: "المحاسب عن بُعد",
    description:
      "احصل على خدمات محاسبية مستمرة دون الحاجة إلى توظيف فريق محاسبي كامل داخل منشأتك.",
  },
  {
    number: "08",
    title: "المدير المالي عن بُعد – CFO",
    description:
      "خبرة مالية وإدارية تساعدك في التخطيط، تحليل الأداء، إدارة السيولة، ووضع الخطط المالية.",
  },
  {
    number: "09",
    title: "إعداد الميزانيات والخطط المالية",
    description:
      "إعداد ومتابعة الميزانيات التقديرية ومتابعة المصروفات والإيرادات والتدفقات النقدية.",
  },
  {
    number: "10",
    title: "متابعة التدفقات النقدية",
    description:
      "متابعة حركة الإيرادات والمصروفات والتدفقات النقدية لمساعدتك على فهم السيولة وإدارة أموالك بشكل أفضل.",
  },
];

const sectors = [
  "المطاعم والكافيهات",
  "الشركات الصغيرة والمتوسطة",
  "المتاجر",
  "العيادات",
  "الصالونات ومراكز العناية",
  "الأندية والمنشآت الرياضية",
  "الشركات متعددة الفروع",
  "رواد الأعمال والمنشآت الناشئة",
];

const restaurantItems = [
  "مبيعات الفروع",
  "تكلفة المواد",
  "تكلفة العمالة",
  "المصروفات التشغيلية",
  "الموردين والمشتريات",
  "النقدية والبنوك",
  "ربحية كل فرع",
  "هامش الربح",
  "نقطة التعادل",
  "الأداء الشهري",
];

const workSteps = [
  {
    number: "01",
    title: "جمع البيانات",
    description: "نبدأ بفهم نشاطك والبيانات المالية المتوفرة لديك.",
  },
  {
    number: "02",
    title: "تنظيم الحسابات",
    description:
      "نعمل على تنظيم وتسجيل العمليات المالية بطريقة واضحة ومنهجية.",
  },
  {
    number: "03",
    title: "إعداد التقارير",
    description: "نقدم تقارير مالية دورية توضح نتائج أعمالك.",
  },
  {
    number: "04",
    title: "التحليل",
    description:
      "لا نكتفي بالأرقام، بل نحلل النتائج ونحدد أهم الملاحظات.",
  },
  {
    number: "05",
    title: "التوصيات",
    description:
      "نقدم توصيات عملية تساعدك على تحسين الأداء واتخاذ قرارات أفضل.",
  },
];

const questions = [
  "كم حققت من إيرادات؟",
  "كم أنفقت؟",
  "هل تحقق ربحًا فعليًا؟",
  "أين تذهب أموالك؟",
  "ما هي أكثر المصروفات تأثيرًا؟",
  "كيف يتحسن أداء منشأتك من شهر إلى آخر؟",
];

function ArrowIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.87 11.87 0 0 0 12.08 0C5.5 0 .15 5.35.15 11.93c0 2.1.55 4.15 1.6 5.96L.05 24l6.25-1.64a11.9 11.9 0 0 0 5.78 1.47h.01c6.58 0 11.93-5.35 11.93-11.93 0-3.18-1.24-6.17-3.5-8.42Zm-8.44 18.3h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.71.97.99-3.62-.23-.37a9.86 9.86 0 0 1-1.51-5.24C2.22 6.48 6.64 2.06 12.08 2.06c2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.44-4.42 9.83-9.88 9.83Zm5.4-7.37c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.21 5.09 4.5.71.31 1.26.5 1.69.64.71.23 1.35.2 1.86.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#f5f2eb] text-[#102a43]"
    >
      {/* ================= HEADER ================= */}
      <header className="absolute left-0 right-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex h-24 items-center justify-between border-b border-white/20">
            {/* Brand */}
            <a href="#home" className="group">
              <div className="leading-tight">
                <div className="text-lg font-bold tracking-wide text-white">
                  أوديترا
                </div>

                <div className="mt-1 text-[10px] tracking-[0.18em] text-[#d6b477]">
                  Auditra
                </div>

                <div className="mt-1 text-[9px] text-white/55">
                  للمحاسبة والخدمات المالية
                </div>
              </div>
            </a>

            {/* Navigation */}
            <nav className="hidden items-center gap-8 lg:flex">
              <a
                href="#home"
                className="text-sm text-white/90 transition hover:text-[#d6b477]"
              >
                الرئيسية
              </a>

              <a
                href="#services"
                className="text-sm text-white/80 transition hover:text-[#d6b477]"
              >
                خدماتنا
              </a>

              <a
                href="#about"
                className="text-sm text-white/80 transition hover:text-[#d6b477]"
              >
                لماذا أوديترا؟
              </a>

              <a
                href="#work"
                className="text-sm text-white/80 transition hover:text-[#d6b477]"
              >
                كيف نعمل؟
              </a>

              <a
                href="#sectors"
                className="text-sm text-white/80 transition hover:text-[#d6b477]"
              >
                القطاعات
              </a>

              <a
                href="#contact"
                className="text-sm text-white/80 transition hover:text-[#d6b477]"
              >
                تواصل معنا
              </a>
            </nav>

            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              dir="ltr"
              style={{ unicodeBidi: "isolate" }}
              className="hidden items-center gap-2 rounded-full border border-[#d6b477]/70 px-5 py-2.5 text-sm text-[#d6b477] transition hover:bg-[#d6b477] hover:text-[#102a43] sm:flex"
            >
              <WhatsAppIcon />
              +966 510 6119 49
            </a>
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative min-h-[800px] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(16,42,67,.98) 0%, rgba(16,42,67,.91) 42%, rgba(16,42,67,.38) 100%), url('/فثسف.jpeg')",
        }}
      >
        <div className="absolute -right-32 top-40 h-96 w-96 rounded-full bg-[#d6b477]/10 blur-3xl" />

        <div className="relative mx-auto flex min-h-[800px] max-w-7xl items-center px-6 pt-32 lg:px-10">
          <div className="max-w-4xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-12 bg-[#d6b477]" />

              <span className="text-sm tracking-[0.2em] text-[#d6b477]">
                Auditra
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-bold leading-[1.25] text-white sm:text-6xl lg:text-7xl">
              محاسبتك
              <span className="text-[#d6b477]"> تحت السيطرة </span>
              وأرقامك في الصورة.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-9 text-white/75">
              في أوديترا نقدم حلولًا محاسبية ومالية متكاملة للمنشآت الصغيرة
              والمتوسطة في المملكة العربية السعودية، تساعد أصحاب الأعمال على
              معرفة نتائج أعمالهم، تنظيم حساباتهم، ومتابعة الأداء المالي بشكل
              مستمر.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-8 text-white/60">
              نحن لا نقدم مجرد تسجيل للقيود والفواتير، بل نساعدك على فهم أرقام
              منشأتك واتخاذ قرارات مالية أفضل.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#d6b477] px-7 py-4 font-semibold text-[#102a43] transition hover:bg-[#e4c78e]"
              >
                اكتشف خدماتنا
                <ArrowIcon />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-4 font-semibold text-white transition hover:border-[#d6b477] hover:text-[#d6b477]"
              >
                <WhatsAppIcon />
                تحدث معنا
              </a>
            </div>

            <div className="mt-16 flex flex-wrap gap-10 border-t border-white/15 pt-7">
              <div>
                <div className="text-2xl font-bold text-[#d6b477]">
                  10+
                </div>
                <div className="mt-1 text-sm text-white/55">
                  خدمات مالية ومحاسبية
                </div>
              </div>

              <div>
                <div className="text-2xl font-bold text-[#d6b477]">
                  08
                </div>
                <div className="mt-1 text-sm text-white/55">
                  قطاعات نخدمها
                </div>
              </div>

              <div>
                <div className="text-2xl font-bold text-[#d6b477]">
                  VAT & ZATCA
                </div>
                <div className="mt-1 text-sm text-white/55">
                  حلول ضريبية وزكوية
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#0b2034]/60 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-xs text-white/50 lg:px-10">
            <span>
              خدمات محاسبية ومالية تساعدك على إدارة أعمالك بثقة
            </span>

            <span>المملكة العربية السعودية</span>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="relative overflow-hidden bg-[#102a43] py-24 lg:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2000&q=85')",
          }}
        />

        <div className="absolute inset-0 bg-[#102a43]/90" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.5fr] lg:items-center lg:px-10">
          <div>
            <span className="text-sm font-semibold tracking-[0.15em] text-[#d6b477]">
              أوديترا
            </span>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-white lg:text-5xl">
              شريكك المالي
              <br />
              <span className="text-[#d6b477]">في كل خطوة</span>
            </h2>

            <p className="mt-5 text-sm tracking-[0.15em] text-white/45">
              Auditra – Accounting & Financial Services
            </p>
          </div>

          <div>
            <p className="text-lg leading-9 text-white/75">
              في أوديترا نعمل على تحويل البيانات المالية إلى معلومات واضحة
              تساعدك في إدارة نشاطك واتخاذ قرارات مالية أفضل.
            </p>

            <p className="mt-5 text-lg leading-9 text-white/60">
              نساعدك على تنظيم حسابات منشأتك، متابعة النتائج، وتحليل الأداء
              المالي بشكل مستمر، من مسك الحسابات والتقارير المالية إلى الضرائب
              والزكاة والخدمات المالية عن بُعد.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#d6b477]/60 px-6 py-3 text-sm font-semibold text-[#d6b477] transition hover:bg-[#d6b477] hover:text-[#102a43]"
            >
              تواصل معنا
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section
        id="services"
        className="relative overflow-hidden bg-[#102a43] py-24 lg:py-32"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=2000&q=85')",
          }}
        />

        <div className="absolute inset-0 bg-[#f5f2eb]/95" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <span className="text-sm font-semibold tracking-[0.15em] text-[#b28a4a]">
                خدماتنا
              </span>

              <h2 className="mt-4 text-4xl font-bold text-[#102a43] lg:text-5xl">
                ماذا نقدم؟
              </h2>
            </div>

            <p className="max-w-lg leading-8 text-[#526477]">
              خدمات محاسبية ومالية متكاملة تساعدك على تنظيم حساباتك وفهم نتائج
              أعمالك وإدارة نشاطك بثقة.
            </p>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.number}
                className="group rounded-3xl border border-[#ded8cc]/80 bg-white/90 p-7 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:bg-[#102a43]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#b28a4a] transition group-hover:text-[#d6b477]">
                    {service.number}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ded8cc] text-[#102a43] transition group-hover:border-[#d6b477] group-hover:text-[#d6b477]">
                    <ArrowIcon />
                  </span>
                </div>

                <h3 className="mt-10 text-xl font-bold leading-8 text-[#102a43] transition group-hover:text-white">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#718096] transition group-hover:text-white/60">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="overflow-hidden bg-[#102a43]">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div
            className="min-h-[560px] bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(rgba(16,42,67,.15), rgba(16,42,67,.15)), url('/فثسف.jpeg')",
            }}
          />

          <div className="flex items-center px-6 py-20 lg:px-16 lg:py-28">
            <div>
              <span className="text-sm font-semibold tracking-[0.15em] text-[#d6b477]">
                لماذا أوديترا؟
              </span>

              <h2 className="mt-5 text-4xl font-bold leading-tight text-white lg:text-5xl">
                لأنك تحتاج إلى
                <br />
                أكثر من <span className="text-[#d6b477]">محاسب</span>
              </h2>

              <p className="mt-7 text-base leading-9 text-white/65">
                نعمل معك على تحويل البيانات المالية إلى معلومات تساعدك في إدارة
                نشاطك. نراجع الأرقام، نوضح نقاط القوة والضعف، ونقدم لك توصيات
                عملية تساعدك على تحسين الأداء المالي وتقليل الهدر.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "حسابات منشأتك محدثة ومنظمة باستمرار",
                  "معرفة الإيرادات وحجم المصروفات بدقة",
                  "تحديد ربحيتك الفعلية وأين تذهب أموالك",
                  "تقارير دورية تساعدك على متابعة الأداء",
                  "توصيات عملية لتحسين الأداء واتخاذ القرار",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-white/80"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#d6b477] text-[#102a43]">
                      <CheckIcon />
                    </span>

                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINANCIAL QUESTIONS ================= */}
      <section className="relative overflow-hidden bg-[#f5f2eb] py-24 lg:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=2000&q=85')",
          }}
        />

        <div className="absolute inset-0 bg-[#f5f2eb]/85" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold tracking-[0.15em] text-[#b28a4a]">
              خبرة محاسبية + متابعة مستمرة
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-[#102a43] lg:text-5xl">
              أرقامك ليست مجرد أرقام
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-9 text-[#526477]">
              نحرص على أن تكون حسابات منشأتك محدثة ومنظمة، مع تقارير دورية
              تساعدك على معرفة الصورة المالية الحقيقية لنشاطك.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {questions.map((question, index) => (
              <div
                key={question}
                className="group rounded-2xl border border-[#ded8cc] bg-white/90 p-7 transition duration-300 hover:-translate-y-1 hover:bg-[#102a43]"
              >
                <span className="text-sm font-semibold text-[#b28a4a] group-hover:text-[#d6b477]">
                  0{index + 1}
                </span>

                <h3 className="mt-5 text-xl font-bold text-[#102a43] group-hover:text-white">
                  {question}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= RESTAURANTS ================= */}
      <section className="relative overflow-hidden bg-[#102a43] py-24 lg:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(16,42,67,.85), rgba(16,42,67,.94)), url('/فثسف.jpeg')",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div>
              <span className="text-sm font-semibold tracking-[0.15em] text-[#d6b477]">
                قطاع المطاعم والكافيهات
              </span>

              <h2 className="mt-5 text-4xl font-bold leading-tight text-white lg:text-5xl">
                أوديترا
                <br />
                <span className="text-[#d6b477]">
                  للمطاعم والكافيهات
                </span>
              </h2>

              <p className="mt-7 text-lg leading-9 text-white/65">
                نعرف أن المطاعم والكافيهات تحتاج إلى متابعة دقيقة للأرقام بسبب
                تعدد الفروع وكثرة العمليات اليومية.
              </p>

              <p className="mt-5 text-base leading-8 text-white/55">
                لذلك نقدم حلولًا تساعدك على متابعة التفاصيل المالية والتشغيلية
                التي تؤثر مباشرة على ربحية نشاطك.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {restaurantItems.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md transition hover:border-[#d6b477]/50 hover:bg-white/15"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#d6b477] text-sm font-bold text-[#102a43]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm font-semibold text-white/85">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 rounded-3xl border border-[#d6b477]/30 bg-[#0b2034]/70 p-8 text-center backdrop-blur-md lg:p-12">
            <p className="text-2xl font-bold leading-10 text-white lg:text-3xl">
              هدفنا أن تعرف ربحية نشاطك الحقيقية،
              <span className="text-[#d6b477]">
                {" "}
                وليس فقط حجم مبيعاتك.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ================= HOW WE WORK ================= */}
      <section
        id="work"
        className="relative overflow-hidden bg-[#f5f2eb] py-24 lg:py-32"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=85')",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <span className="text-sm font-semibold tracking-[0.15em] text-[#b28a4a]">
                طريقة العمل
              </span>

              <h2 className="mt-4 text-4xl font-bold text-[#102a43] lg:text-5xl">
                كيف نعمل؟
              </h2>
            </div>

            <p className="max-w-lg leading-8 text-[#526477]">
              نعمل وفق خطوات واضحة تبدأ بفهم نشاطك وتنتهي بتوصيات عملية تساعدك
              على تحسين الأداء.
            </p>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {workSteps.map((step) => (
              <div
                key={step.number}
                className="group rounded-3xl border border-[#ded8cc] bg-white/90 p-7 transition duration-300 hover:-translate-y-2 hover:bg-[#102a43]"
              >
                <span className="text-3xl font-bold text-[#b28a4a] transition group-hover:text-[#d6b477]">
                  {step.number}
                </span>

                <h3 className="mt-10 text-xl font-bold text-[#102a43] group-hover:text-white">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#718096] group-hover:text-white/60">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTORS ================= */}
      <section
        id="sectors"
        className="relative overflow-hidden bg-[#102a43] py-24 lg:py-32"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85')",
          }}
        />

        <div className="absolute inset-0 bg-[#102a43]/90" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <span className="text-sm font-semibold tracking-[0.15em] text-[#d6b477]">
                القطاعات
              </span>

              <h2 className="mt-4 text-4xl font-bold leading-tight text-white lg:text-5xl">
                لمن تناسب
                <br />
                <span className="text-[#d6b477]">
                  خدمات أوديترا؟
                </span>
              </h2>

              <p className="mt-6 max-w-md leading-8 text-white/60">
                خدماتنا مناسبة للمنشآت التي تحتاج إلى تنظيم حساباتها وفهم
                ربحيتها ومتابعة أدائها المالي.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {sectors.map((sector, index) => (
                <div
                  key={sector}
                  className="group flex min-h-[140px] items-end justify-between rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#d6b477]/50 hover:bg-white/15"
                >
                  <div>
                    <span className="text-xs text-[#d6b477]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-3 text-lg font-bold text-white">
                      {sector}
                    </h3>
                  </div>

                  <span className="text-[#d6b477]">
                    <ArrowIcon />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CFO ================= */}
      <section className="relative overflow-hidden bg-[#0b2034] py-24 lg:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('/فثسف.jpeg')",
          }}
        />

        <div className="absolute inset-0 bg-[#0b2034]/60" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-4xl">
            <span className="text-sm font-semibold tracking-[0.15em] text-[#d6b477]">
              خدمات مالية مستمرة بتكلفة مناسبة
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-white lg:text-6xl">
              لا تحتاج إلى
              <br />
              <span className="text-[#d6b477]">
                توظيف فريق مالي كامل
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-9 text-white/65">
              مع أوديترا يمكنك الحصول على خدمات محاسبية ومالية مستمرة بتكلفة
              مناسبة، مع إمكانية الاستفادة من خبرات محاسبية ومالية دون تحمل
              تكلفة فريق كامل داخل المنشأة.
            </p>

            <p className="mt-5 text-xl font-semibold text-white">
              أنت تدير نشاطك… ونحن نهتم بأرقامك.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#d6b477] px-7 py-4 font-semibold text-[#102a43] transition hover:bg-[#e4c78e]"
            >
              تحدث معنا الآن
              <WhatsAppIcon />
            </a>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section
        id="contact"
        className="relative overflow-hidden bg-[#d6b477]"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage: "url('/فثسف.jpeg')",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
            <div>
              <span className="text-sm font-semibold tracking-[0.15em] text-[#102a43]/70">
                تواصل معنا
              </span>

              <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-[#102a43] lg:text-5xl">
                أرقام أوضح، قرارات أفضل، ونمو مستدام.
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-[#102a43]/70">
                هل تريد معرفة الوضع المالي الحقيقي لمنشأتك؟ تواصل معنا اليوم
                للحصول على استشارة أولية ومعرفة الحل المناسب لنشاطك.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                dir="ltr"
                style={{ unicodeBidi: "isolate" }}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#102a43] px-8 py-4 font-semibold text-white transition hover:bg-[#173b5d]"
              >
                <WhatsAppIcon />
                <span>+966 510 6119 49</span>
              </a>

              <a
                href={`mailto:${email}`}
                dir="ltr"
                style={{ unicodeBidi: "isolate" }}
                className="inline-flex items-center justify-center rounded-full border border-[#102a43]/30 px-8 py-4 text-sm font-semibold text-[#102a43] transition hover:bg-[#102a43] hover:text-white"
              >
                {email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#081a2b] text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
          <div className="grid gap-12 md:grid-cols-3">
            {/* Brand */}
            <div>
              <div>
                <div className="text-xl font-bold">أوديترا</div>

                <div className="mt-1 text-xs tracking-[0.12em] text-[#d6b477]">
                  Auditra
                </div>

                <div className="mt-1 text-[10px] text-white/45">
                  للمحاسبة والخدمات المالية
                </div>
              </div>

              <p className="mt-6 max-w-sm text-sm leading-7 text-white/45">
                خدمات محاسبية ومالية تساعدك على إدارة أعمالك بثقة، وفهم أرقامك
                واتخاذ قرارات مالية أفضل.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-semibold text-[#d6b477]">
                روابط سريعة
              </h3>

              <div className="mt-5 space-y-3 text-sm text-white/55">
                <a
                  className="block transition hover:text-white"
                  href="#home"
                >
                  الرئيسية
                </a>

                <a
                  className="block transition hover:text-white"
                  href="#services"
                >
                  خدماتنا
                </a>

                <a
                  className="block transition hover:text-white"
                  href="#about"
                >
                  لماذا أوديترا؟
                </a>

                <a
                  className="block transition hover:text-white"
                  href="#work"
                >
                  كيف نعمل؟
                </a>

                <a
                  className="block transition hover:text-white"
                  href="#sectors"
                >
                  القطاعات
                </a>

                <a
                  className="block transition hover:text-white"
                  href="#contact"
                >
                  تواصل معنا
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-[#d6b477]">
                تواصل معنا
              </h3>

              <div className="mt-5 space-y-4 text-sm text-white/55">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  dir="ltr"
                  style={{ unicodeBidi: "isolate" }}
                  className="flex items-center gap-2 transition hover:text-white"
                >
                  <WhatsAppIcon />
                  <span>+966 510 6119 49</span>
                </a>

                <a
                  href={`mailto:${email}`}
                  dir="ltr"
                  style={{ unicodeBidi: "isolate" }}
                  className="block transition hover:text-white"
                >
                  {email}
                </a>

                <div>المملكة العربية السعودية</div>
              </div>
            </div>
          </div>

          <div className="mt-14 border-t border-white/10 pt-6 text-center text-xs text-white/35">
            © {new Date().getFullYear()} Auditra — Accounting & Financial
            Services
          </div>
        </div>
      </footer>
    </main>
  );
}