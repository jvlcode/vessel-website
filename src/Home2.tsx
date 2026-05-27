import { useEffect, useState } from "react"

export default function OffshoreCorporateHomepage() {
    return (
        <div className="bg-[#F4F7F9] text-[#041225] overflow-hidden">
            <Navbar />

            {/* HERO */}
            <section className="relative min-h-screen overflow-hidden bg-[#031B15]">
                {/* Background */}
                <div className="absolute inset-0">
                    <picture>
                        <source
                            media="(max-width:768px)"
                            srcSet={`${import.meta.env.BASE_URL}vessel.webp`}
                        />

                    <img
  src={`${import.meta.env.BASE_URL}vessel.webp`}
  alt="Offshore Vessel"
  className="w-full h-full object-cover scale-105"
/>

                    </picture>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#031B15]/95 via-[#031B15]/70 to-[#031B15]/30" />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#02150F] via-transparent to-transparent" />
                </div>

                {/* Grid Overlay */}
                <div
                    className="
            absolute inset-0 opacity-[0.05]
            [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            [background-size:90px_90px]
          "
                />

                {/* Glow */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-400/10 blur-[140px] rounded-full" />

                <div className="relative z-10 min-h-screen flex items-center">
                    <div className="max-w-7xl mx-auto px-6 w-full">
                        <div className="grid lg:grid-cols-12 gap-16 items-center">
                            {/* LEFT */}
                            <div className="lg:col-span-7">
                                <div className="flex items-center gap-4 mb-10">
                                    <span className="w-14 h-[1px] bg-emerald-400"></span>

                                    <span className="text-white/70 uppercase tracking-[0.35em] text-sm font-semibold">
                                        Integrated Wind Solutions
                                    </span>
                                </div>

                                <h1 className="text-white font-black leading-[0.9] tracking-tight text-6xl md:text-7xl xl:text-[100px]">
                                    Offshore
                                    <br />

                                    <span className="text-emerald-400">
                                        Marine Energy
                                    </span>

                                    <br />
                                    Infrastructure
                                </h1>

                                <p className="mt-10 text-xl text-slate-200 leading-relaxed max-w-2xl">
                                    Engineering advanced offshore vessel operations,
                                    renewable marine infrastructure, and sustainable
                                    energy solutions for the future.
                                </p>

                                <div className="mt-14 flex flex-col sm:flex-row gap-5">
                                    <button
                                        className="
                      bg-emerald-500 hover:bg-emerald-400
                      transition-all duration-300

                      text-white font-semibold

                      rounded-xl
                      px-8 py-5

                      shadow-2xl shadow-emerald-500/20
                    "
                                    >
                                        Explore Fleet
                                    </button>

                                    <button
                                        className="
                      border border-white/15
                      bg-white/5 backdrop-blur-xl

                      hover:bg-white/10

                      transition-all duration-300

                      text-white font-semibold

                      rounded-xl
                      px-8 py-5
                    "
                                    >
                                        View Services
                                    </button>
                                </div>
                            </div>

                            {/* RIGHT PANEL */}
                            <div className="lg:col-span-5">
                                <div
                                    className="
                    rounded-[36px]

                    border border-white/10
                    bg-white/[0.04]

                    backdrop-blur-xl

                    overflow-hidden
                  "
                                >
                                    <div className="h-2 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500" />

                                    <div className="p-10">
                                        <div className="space-y-10">
                                            {[
                                                ["500+", "Employees"],
                                                ["120+", "Operational Vessels"],
                                                ["35+", "Years Experience"],
                                                ["80+", "Global Projects"],
                                            ].map(([value, label]) => (
                                                <div
                                                    key={label}
                                                    className="
                            border-b border-white/10
                            pb-8

                            last:border-0
                            last:pb-0
                          "
                                                >
                                                    <div className="text-5xl font-black text-emerald-400 mb-3">
                                                        {value}
                                                    </div>

                                                    <div className="text-white/70 uppercase tracking-[0.25em] text-sm">
                                                        {label}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-12 pt-10 border-t border-white/10">
                                            <div className="text-white text-lg font-semibold">
                                                Global Offshore Operations
                                            </div>

                                            <div className="text-slate-400 mt-3 leading-relaxed">
                                                Sustainable engineering and marine
                                                infrastructure support across worldwide
                                                offshore regions.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Strip */}
                        <div
                            className="
                mt-24

                grid grid-cols-2 lg:grid-cols-4

                rounded-[30px]

                border border-white/10
                bg-white/[0.04]

                backdrop-blur-xl

                overflow-hidden
              "
                        >
                            {[
                                ["24/7", "Operations"],
                                ["35+", "Countries"],
                                ["Marine", "Infrastructure"],
                                ["Global", "Engineering"],
                            ].map(([value, label]) => (
                                <div
                                    key={label}
                                    className="
                    py-10 text-center

                    border-r border-white/10
                    last:border-r-0
                  "
                                >
                                    <div className="text-4xl font-black text-white">
                                        {value}
                                    </div>

                                    <div className="mt-3 text-emerald-300 uppercase tracking-[0.25em] text-sm font-semibold">
                                        {label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ACTIVITIES */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Header */}
                    <div className="max-w-3xl mb-24">
                        <div className="text-emerald-600 uppercase tracking-[0.3em] text-sm font-semibold mb-6">
                            Activities
                        </div>

                        <h2 className="text-5xl md:text-6xl font-black leading-[1.02] tracking-tight text-[#041225]">
                            Our Core Offshore
                            <br />
                            Operations
                        </h2>
                    </div>

                    {/* Rows */}
                    <div className="space-y-10">
                        {[
                            {
                                title: "Offshore Operations",
                                desc:
                                    "Advanced offshore wind and marine engineering operations supporting renewable energy infrastructure worldwide.",
                                image:
                                    "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1974&auto=format&fit=crop",
                            },

                            {
                                title: "Environmental Solutions",
                                desc:
                                    "Environmental restoration and sustainable offshore engineering operations across global marine projects.",
                                image:
                                    "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=2070&auto=format&fit=crop",
                            },

                            {
                                title: "Dredging Operations",
                                desc:
                                    "Large-scale dredging and coastal infrastructure development with advanced vessel technologies.",
                                image:
                                    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1974&auto=format&fit=crop",
                            },

                            {
                                title: "Marine Infrastructure",
                                desc:
                                    "Engineering marine infrastructure systems for sustainable offshore operations and energy projects.",
                                image:
                                    "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070&auto=format&fit=crop",
                            },
                        ].map((item, index) => (
                            <div
                                key={item.title}
                                className="
                  group relative overflow-hidden

                  rounded-[36px]

                  border border-slate-200
                  bg-[#F8FAFC]

                  hover:shadow-2xl
                  hover:-translate-y-1

                  transition-all duration-500
                "
                            >
                                <div
                                    className={`
                    grid lg:grid-cols-12 min-h-[380px]

                    ${index % 2 !== 0
                                            ? "lg:[&>*:first-child]:order-2"
                                            : ""
                                        }
                  `}
                                >
                                    {/* IMAGE */}
                                    <div className="lg:col-span-5 relative overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="
                        absolute inset-0 w-full h-full object-cover

                        scale-100 group-hover:scale-110
                        transition-transform duration-[6000ms] ease-out
                      "
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-r from-[#041225]/10 to-[#041225]/70" />
                                    </div>

                                    {/* CONTENT */}
                                    <div className="lg:col-span-7 flex flex-col justify-between p-10 md:p-14">
                                        <div>
                                            <div className="text-slate-200 text-7xl font-black">
                                                0{index + 1}
                                            </div>

                                            <h3 className="mt-6 text-4xl md:text-5xl font-black text-[#041225] leading-[1.05]">
                                                {item.title}
                                            </h3>

                                            <p className="mt-8 text-slate-600 text-lg leading-relaxed max-w-2xl">
                                                {item.desc}
                                            </p>
                                        </div>

                                        {/* Bottom */}
                                        <div className="mt-10 flex items-center justify-between">
                                            <div className="flex gap-3">
                                                {[
                                                    "Marine",
                                                    "Offshore",
                                                    "Global",
                                                ].map((tag) => (
                                                    <div
                                                        key={tag}
                                                        className="
                              px-4 py-2 rounded-full

                              bg-slate-100

                              text-xs uppercase tracking-[0.2em]
                              text-slate-600 font-semibold
                            "
                                                    >
                                                        {tag}
                                                    </div>
                                                ))}
                                            </div>

                                            <button
                                                className="
                          w-14 h-14 rounded-full

                          border border-slate-200

                          flex items-center justify-center

                          group-hover:bg-emerald-500
                          group-hover:border-emerald-500

                          transition-all duration-300
                        "
                                            >
                                                <span
                                                    className="
                            text-[#041225]

                            group-hover:text-white
                            group-hover:translate-x-1

                            transition-all duration-300
                          "
                                                >
                                                    →
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SERVICES */}
            <section className="py-32 bg-[#041225] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[140px] rounded-full" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-24">
                        <div className="max-w-3xl">
                            <div className="text-emerald-300 uppercase tracking-[0.3em] text-sm font-semibold mb-6">
                                Services
                            </div>

                            <h2 className="text-5xl md:text-6xl font-black leading-[1.02] tracking-tight text-white">
                                Marine Infrastructure
                                <br />
                                & Vessel Engineering
                            </h2>
                        </div>

                        <p className="max-w-xl text-slate-300 text-lg leading-relaxed">
                            Delivering advanced offshore vessel operations,
                            renewable energy support, dredging solutions,
                            and global marine infrastructure systems.
                        </p>
                    </div>

                    {/* Editorial Layout */}
                    <div className="grid lg:grid-cols-12 gap-8">
                        {/* BIG CARD */}
                        <div
                            className="
                lg:col-span-7

                group relative overflow-hidden

                rounded-[40px]

                min-h-[650px]
              "
                        >
                            <img
                                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2070&auto=format&fit=crop"
                                alt="Marine"
                                className="
                  absolute inset-0 w-full h-full object-cover

                  scale-100 group-hover:scale-110
                  transition-transform duration-[7000ms] ease-out
                "
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#041225] via-[#041225]/20 to-transparent" />

                            <div className="relative z-10 h-full flex flex-col justify-end p-12">
                                <div className="text-emerald-300 uppercase tracking-[0.25em] text-sm font-semibold mb-6">
                                    Offshore Engineering
                                </div>

                                <h3 className="text-5xl font-black text-white leading-[1.02] max-w-2xl">
                                    Renewable Marine Infrastructure Solutions
                                </h3>

                                <p className="mt-8 text-slate-300 text-lg leading-relaxed max-w-2xl">
                                    Sustainable offshore engineering operations
                                    supporting renewable energy and marine logistics.
                                </p>
                            </div>
                        </div>

                        {/* SIDE CARDS */}
                        <div className="lg:col-span-5 flex flex-col gap-8">
                            {[1, 2].map((item) => (
                                <div
                                    key={item}
                                    className="
                    group

                    rounded-[36px]

                    border border-white/10
                    bg-white/[0.04]

                    backdrop-blur-xl

                    p-10

                    hover:border-emerald-400/30

                    transition-all duration-500

                    min-h-[310px]
                  "
                                >
                                    <div className="text-emerald-300 uppercase tracking-[0.25em] text-sm font-semibold mb-6">
                                        Global Operations
                                    </div>

                                    <h3 className="text-4xl font-black text-white leading-[1.05]">
                                        Offshore Logistics &
                                        Marine Systems
                                    </h3>

                                    <p className="mt-8 text-slate-300 text-lg leading-relaxed">
                                        Advanced vessel logistics and infrastructure
                                        engineering support for worldwide marine projects.
                                    </p>

                                    <button
                                        className="
                      mt-10

                      text-white font-semibold

                      hover:text-emerald-300

                      transition-colors duration-300
                    "
                                    >
                                        Explore Service →
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* JOBS SECTION */}
            <section className="py-32 bg-emerald-500 overflow-hidden">
                <div className="max-w-[1600px] mx-auto pl-6 lg:pl-20">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 mb-20 pr-6 lg:pr-20">
                        <h2
                            className="
          text-5xl md:text-6xl
          font-black
          uppercase
          tracking-tight
          text-white
        "
                        >
                            Latest Jobs
                        </h2>

                        <button
                            className="
          border border-white/40

          hover:bg-white
          hover:text-[#041225]

          transition-all duration-300

          text-white
          font-semibold
          uppercase
          text-sm

          rounded-md

          px-10 py-4

          w-fit
        "
                        >
                            All Jobs
                        </button>
                    </div>

                    {/* Scroll Area */}
                    <div className="overflow-x-auto jobs-scroll pb-10">
                        <div className="flex gap-8 min-w-max pr-20">
                            {[
                                {
                                    title: "QHSE Officer",
                                    desc:
                                        "Creating a safe and healthy work environment while supporting offshore operations across global marine projects.",
                                    tags: [
                                        {
                                            icon: "🌊",
                                            label: "Offshore",
                                        },
                                        {
                                            icon: "🦺",
                                            label: "QHSE",
                                        },
                                        {
                                            icon: "🌍",
                                            label: "Worldwide",
                                        },
                                    ],
                                },

                                {
                                    title: "Mechanical Technical Expert",
                                    desc:
                                        "Responsible for fleet optimization and technical integrity across marine vessel engineering systems.",
                                    tags: [
                                        {
                                            icon: "⚙️",
                                            label: "Technical",
                                        },
                                        {
                                            icon: "🚢",
                                            label: "Fleet",
                                        },
                                        {
                                            icon: "🇧🇪",
                                            label: "Belgium",
                                        },
                                    ],
                                },

                                {
                                    title: "Allround QHSE Engineer",
                                    desc:
                                        "Collaborating with international offshore teams to maintain sustainable marine operational standards.",
                                    tags: [
                                        {
                                            icon: "🦺",
                                            label: "QHSE",
                                        },
                                        {
                                            icon: "🌍",
                                            label: "Global",
                                        },
                                        {
                                            icon: "⚓",
                                            label: "Marine",
                                        },
                                    ],
                                },

                                {
                                    title: "Hydrographic Surveyor",
                                    desc:
                                        "Supporting dredging and offshore engineering operations through worldwide hydrographic surveys.",
                                    tags: [
                                        {
                                            icon: "📍",
                                            label: "Survey",
                                        },
                                        {
                                            icon: "🌊",
                                            label: "Offshore",
                                        },
                                        {
                                            icon: "🌍",
                                            label: "Worldwide",
                                        },
                                    ],
                                },
                            ].map((job) => (
                                <div
                                    key={job.title}
                                    className="
              group

              w-[360px]
              min-h-[520px]

              bg-[#F3F4F6]

              rounded-md

              px-8 py-10

              flex flex-col

              hover:-translate-y-2
              hover:shadow-2xl

              transition-all duration-500
            "
                                >
                                    {/* Title */}
                                    <h3
                                        className="
                text-[#041225]

                text-3xl
                font-black

                leading-tight

                text-center
              "
                                    >
                                        {job.title}
                                    </h3>

                                    {/* Description */}
                                    <p
                                        className="
                mt-10

                text-slate-700
                text-lg
                leading-relaxed

                text-center
              "
                                    >
                                        {job.desc}
                                    </p>

                                    {/* Icons */}
                                    <div className="grid grid-cols-3 gap-5 mt-14">
                                        {job.tags.map((item) => (
                                            <div
                                                key={item.label}
                                                className="
                    flex flex-col items-center
                    text-center
                  "
                                            >
                                                {/* Icon */}
                                                <div
                                                    className="
                      text-5xl

                      group-hover:scale-110
                      transition-transform duration-300
                    "
                                                >
                                                    {item.icon}
                                                </div>

                                                {/* Label */}
                                                <div
                                                    className="
                      mt-5

                      text-[#041225]

                      text-xs
                      font-black

                      uppercase
                      tracking-[0.2em]
                    "
                                                >
                                                    {item.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Spacer */}
                                    <div className="flex-1" />

                                    {/* Button */}
                                    <button
                                        className="
                mt-14

                border border-[#041225]

                hover:bg-[#041225]
                hover:text-white

                transition-all duration-300

                text-[#041225]
                font-semibold

                uppercase
                text-sm

                rounded-md

                py-4
              "
                                    >
                                        See Details
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="flex justify-end gap-5 pr-6 lg:pr-20 mt-10">
                        <button
                            className="
          w-14 h-14

          border border-white/30

          rounded-full

          flex items-center justify-center

          text-white text-2xl

          hover:bg-white
          hover:text-[#041225]

          transition-all duration-300
        "
                        >
                            ←
                        </button>

                        <button
                            className="
          w-14 h-14

          border border-white/30

          rounded-full

          flex items-center justify-center

          text-white text-2xl

          hover:bg-white
          hover:text-[#041225]

          transition-all duration-300
        "
                        >
                            →
                        </button>
                    </div>
                </div>
            </section>

            {/* CONTACT */}
            <section className="py-32 bg-[#F8FAFC]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20">
                        {/* LEFT */}
                        <div>
                            <div className="text-emerald-600 uppercase tracking-[0.3em] text-sm font-semibold mb-6">
                                Contact
                            </div>

                            <h2 className="text-5xl md:text-6xl font-black leading-[1.02] tracking-tight text-[#041225]">
                                Let’s Build Offshore
                                Infrastructure Together
                            </h2>

                            <p className="mt-10 text-slate-600 text-lg leading-relaxed max-w-2xl">
                                Reach out to discuss offshore engineering,
                                vessel operations, marine infrastructure,
                                or renewable energy projects.
                            </p>
                        </div>

                        {/* RIGHT */}
                        <div className="grid gap-6">
                            {[
                                ["Head Office", "Chennai, India"],
                                ["Email Address", "hello@tecnico.com"],
                                ["Phone Number", "+91 98765 43210"],
                            ].map(([title, value]) => (
                                <div
                                    key={title}
                                    className="
                    rounded-[32px]

                    border border-slate-200
                    bg-white

                    p-10
                  "
                                >
                                    <div className="text-slate-500 uppercase tracking-[0.25em] text-sm font-semibold mb-5">
                                        {title}
                                    </div>

                                    <div className="text-3xl font-black text-[#041225]">
                                        {value}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-[#041225] text-white py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
                        <div>
                            <h2 className="text-4xl font-black">
                                Tecnico
                            </h2>

                            <p className="mt-4 text-slate-400">
                                Sustainable Offshore Infrastructure
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-8 text-slate-300">
                            {[
                                "Home",
                                "Activities",
                                "Services",
                                "Careers",
                                "Contact",
                            ].map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="hover:text-emerald-300 transition-colors"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > window.innerHeight * 0.8)
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-500

        ${scrolled
                    ? "bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-lg"
                    : "bg-transparent"
                }
      `}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="h-24 flex items-center justify-between">
                    {/* Logo */}
                    <h1
                        className={`
              text-3xl font-black tracking-tight transition-colors duration-500

              ${scrolled
                                ? "text-[#041225]"
                                : "text-white"
                            }
            `}
                    >
                        Tecnico
                    </h1>

                    {/* Nav */}
                    <nav className="hidden md:flex items-center gap-12">
                        {[
                            "Home",
                            "Activities",
                            "Services",
                            "Careers",
                            "Contact",
                        ].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className={`
                  text-sm font-semibold tracking-wide transition-all duration-300

                  ${scrolled
                                        ? "text-slate-700 hover:text-emerald-600"
                                        : "text-white/90 hover:text-emerald-300"
                                    }
                `}
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    {/* CTA */}
                    <button
                        className={`
              px-6 py-3 rounded-full text-sm font-semibold transition-all duration-500

              ${scrolled
                                ? "bg-emerald-500 hover:bg-emerald-400 text-white"
                                : "bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20"
                            }
            `}
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </header>
    )
}