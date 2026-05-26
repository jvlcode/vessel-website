import { useEffect, useState } from "react"

export default function OffshoreCorporateHomepage() {
    return (
        <div className="bg-white text-slate-900 overflow-hidden">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-screen overflow-hidden">
                {/* Background Visual */}
                <div className="absolute inset-0">
                    <picture>
                        <source media="(max-width:768px)" srcSet="/vessel-mobile.webp" />

                        <img
                            src="/vessel.webp"
                            alt="Offshore Vessel"
                            className="w-full h-full object-cover scale-105"
                        />
                    </picture>

                    {/* Dark cinematic overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#041225]/90 via-[#041225]/65 to-[#041225]/40" />

                    {/* Extra atmospheric overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-[#02152d]/60" />
                </div>

                {/* Top blur glow */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full" />

                {/* Content */}
                <div className="relative z-10 min-h-screen flex items-center">
                    <div className="max-w-7xl mx-auto px-6 w-full">
                        <div className="max-w-3xl">
                            {/* Small Label */}
                            <div className="mb-8">
                                <span className="inline-flex items-center gap-3 text-white/80 text-sm tracking-[0.3em] uppercase">
                                    <span className="w-12 h-[1px] bg-cyan-400" />
                                    Integrated Wind Solutions
                                </span>
                            </div>

                            {/* Heading */}
                            <h1 className="text-white font-black leading-[0.95] tracking-tight text-5xl md:text-7xl xl:text-[92px]">
                                Offshore
                                <br />

                                <span className="text-cyan-400">
                                    Marine Energy
                                </span>

                                <br />
                                Infrastructure
                            </h1>

                            {/* Description */}
                            <p className="mt-8 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
                                Engineering advanced offshore vessel operations,
                                renewable marine infrastructure, and sustainable
                                energy solutions for the future.
                            </p>

                            {/* CTA Buttons */}
                            <div className="mt-12 flex flex-col sm:flex-row gap-5">
                                <button className="group relative overflow-hidden bg-cyan-500 hover:bg-cyan-400 transition-all px-8 py-5 rounded-xl font-semibold text-white shadow-2xl shadow-cyan-500/30">
                                    <span className="relative z-10">
                                        Explore Fleet
                                    </span>

                                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </button>

                                <button className="border border-white/20 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all px-8 py-5 rounded-xl font-semibold text-white">
                                    View Services
                                </button>
                            </div>


                        </div>
                    </div>
                </div>

                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#020817] to-transparent" />
            </section>

            {/* Activities Section */}
            <section className="py-28 bg-slate-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Heading */}
                    <div className="text-center mb-20">
                        <p className="text-cyan-600 font-semibold uppercase tracking-[0.25em] mb-4">
                            Activities
                        </p>

                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                            Our Core Operations
                        </h2>

                        <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                            Delivering innovative offshore solutions with a focus on
                            sustainability, technology, and engineering excellence.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Offshore",
                                desc: "Advanced offshore wind and marine engineering solutions.",
                                image:
                                    "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1974&auto=format&fit=crop",
                            },
                            {
                                title: "Environment",
                                desc: "Environmental restoration and sustainability projects.",
                                image:
                                    "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=2070&auto=format&fit=crop",
                            },
                            {
                                title: "Dredging",
                                desc: "High-capacity dredging operations for coastal development.",
                                image:
                                    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1974&auto=format&fit=crop",
                            },
                            {
                                title: "Infrastructure",
                                desc: "Marine infrastructure projects engineered for scale.",
                                image:
                                    "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070&auto=format&fit=crop",
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="
            group relative overflow-hidden
            rounded-3xl h-[460px]
            cursor-pointer
          "
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="
                absolute inset-0 w-full h-full object-cover
                scale-100 group-hover:scale-110
                transition-transform duration-[5000ms] ease-out
              "
                                    />
                                </div>

                                {/* Gradient Overlay */}
                                <div
                                    className="
              absolute inset-0
              bg-gradient-to-t
              from-[#020817]
              via-[#020817]/40
              to-transparent
            "
                                />

                                {/* Animated Cyan Glow */}
                                <div
                                    className="
              absolute inset-0
              bg-cyan-500/0
              group-hover:bg-cyan-500/10
              transition-all duration-700
            "
                                />

                                {/* Blur Glow */}
                                <div
                                    className="
              absolute -bottom-20 -right-20
              w-56 h-56 rounded-full
              bg-cyan-400/0 blur-[90px]
              group-hover:bg-cyan-400/30
              transition-all duration-1000
            "
                                />

                                {/* Content */}
                                <div
                                    className="
              absolute inset-0 p-8
              flex flex-col justify-end
              text-white
            "
                                >
                                    {/* Floating Tag */}
                                    <div className="overflow-hidden mb-5">
                                        <div
                                            className="
                  translate-y-8 opacity-0
                  group-hover:translate-y-0
                  group-hover:opacity-100
                  transition-all duration-700

                  text-sm uppercase
                  tracking-[0.3em]
                  text-cyan-300

                  flex items-center gap-3
                "
                                        >
                                            <span className="w-10 h-[1px] bg-cyan-300"></span>
                                            Marine Solutions
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className="
                text-3xl font-black mb-4 leading-tight

                transform
                group-hover:scale-110
                group-hover:-translate-y-2

                origin-left
                transition-all duration-500
              "
                                    >
                                        {item.title}
                                    </h3>

                                    {/* Description */}
                                    <p
                                        className="
                text-slate-200 leading-relaxed

                opacity-80
                group-hover:opacity-100

                transform
                translate-y-3
                group-hover:translate-y-0

                transition-all duration-700
              "
                                    >
                                        {item.desc}
                                    </p>

                                    {/* Animated Line */}
                                    <div
                                        className="
                mt-8 h-[2px]
                bg-white/20 rounded-full overflow-hidden
              "
                                    >
                                        <div
                                            className="
                  h-full w-0
                  bg-cyan-400

                  group-hover:w-full
                  transition-all duration-700
                "
                                        />
                                    </div>

                                    {/* CTA */}
                                    <div
                                        className="
                mt-6 flex items-center gap-3
                text-cyan-300 font-semibold

                opacity-0
                translate-y-5

                group-hover:opacity-100
                group-hover:translate-y-0

                transition-all duration-500
              "
                                    >
                                        Explore More

                                        <span
                                            className="
                  group-hover:translate-x-2
                  transition-transform duration-300
                "
                                        >
                                            →
                                        </span>
                                    </div>
                                </div>

                                {/* Border */}
                                <div
                                    className="
              absolute inset-0 rounded-3xl
              border border-white/10

              group-hover:border-cyan-400/40
              transition-all duration-700
            "
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-28 bg-[#071A2E] text-white relative overflow-hidden">
                <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full -top-40 -left-40"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="text-cyan-400 font-semibold uppercase tracking-[0.25em] mb-5">
                                About Us
                            </p>

                            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-8">
                                Engineering Excellence Across Global Marine Projects
                            </h2>

                            <p className="text-slate-300 text-lg leading-relaxed">
                                We combine innovation, sustainability, and operational
                                excellence to deliver world-class offshore and environmental
                                infrastructure solutions.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { number: '500+', label: 'Employees' },
                                { number: '120+', label: 'Vessels' },
                                { number: '35+', label: 'Years Experience' },
                                { number: '80+', label: 'Global Projects' },
                            ].map((stat) => (
                                <div
                                    key={stat.label}
                                    className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 text-center"
                                >
                                    <h3 className="text-5xl font-black text-cyan-400 mb-4">
                                        {stat.number}
                                    </h3>
                                    <p className="text-slate-300 text-lg">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

          {/* Marine Services Section */}
<section className="relative py-32 bg-white overflow-hidden">
  {/* Soft Background Glow */}
  <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-100 blur-[140px] rounded-full" />

  <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-100 blur-[120px] rounded-full" />

  <div className="relative z-10 max-w-7xl mx-auto px-6">
    {/* Header */}
    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-24">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-3 text-cyan-600 text-sm uppercase tracking-[0.3em] mb-6">
          <span className="w-12 h-[1px] bg-cyan-500"></span>
          Marine Expertise
        </div>

        <h2 className="text-5xl md:text-6xl font-black text-[#041225] leading-[1.02] tracking-tight">
          Offshore & Marine
          <br />

          <span className="text-cyan-600">
            Service Operations
          </span>
        </h2>
      </div>

      <button
        className="
          group

          border border-slate-200
          bg-white

          hover:bg-cyan-500
          hover:border-cyan-500

          transition-all duration-300

          rounded-full px-8 py-4

          text-[#041225]
          hover:text-white

          font-semibold
          shadow-lg

          w-fit
        "
      >
        <span className="flex items-center gap-3">
          Explore Services

          <span
            className="
              group-hover:translate-x-1
              transition-transform duration-300
            "
          >
            →
          </span>
        </span>
      </button>
    </div>

    {/* Services Grid */}
    <div className="grid lg:grid-cols-3 gap-8">
      {[
        {
          title: "Offshore Wind Energy",
          desc:
            "Supporting global renewable energy projects through advanced offshore vessel operations and engineering services.",
          image:
            "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2070&auto=format&fit=crop",
          number: "01",
        },

        {
          title: "Marine Infrastructure",
          desc:
            "Engineering sustainable offshore and coastal infrastructure solutions for modern marine developments.",
          image:
            "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070&auto=format&fit=crop",
          number: "02",
        },

        {
          title: "Dredging Operations",
          desc:
            "High-capacity dredging and marine logistics operations supporting worldwide offshore projects.",
          image:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1974&auto=format&fit=crop",
          number: "03",
        },
      ].map((service) => (
        <div
          key={service.title}
          className="
            group relative overflow-hidden

            rounded-[34px]

            border border-slate-200
            bg-white

            hover:-translate-y-2
            hover:shadow-2xl
            hover:border-cyan-200

            transition-all duration-500
          "
        >
          {/* Image */}
          <div className="relative h-[380px] overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="
                absolute inset-0 w-full h-full object-cover

                scale-100 group-hover:scale-110
                transition-transform duration-[6000ms] ease-out
              "
            />

            {/* Overlay */}
            <div
              className="
                absolute inset-0

                bg-gradient-to-t
                from-[#041225]
                via-[#041225]/30
                to-transparent
              "
            />

            {/* Number */}
            <div
              className="
                absolute top-8 left-8

                text-white/20
                text-7xl font-black
              "
            >
              {service.number}
            </div>

            {/* Floating Badge */}
            <div
              className="
                absolute top-8 right-8

                rounded-full

                border border-white/20
                bg-white/10 backdrop-blur-xl

                px-5 py-3

                text-white text-xs
                uppercase tracking-[0.25em]
                font-semibold
              "
            >
              Offshore
            </div>

            {/* Bottom Title */}
            <div className="absolute bottom-0 left-0 p-8">
              <h3
                className="
                  text-4xl font-black text-white
                  leading-[1.05]

                  max-w-xs

                  group-hover:text-cyan-300
                  transition-colors duration-300
                "
              >
                {service.title}
              </h3>
            </div>
          </div>

          {/* Bottom Content */}
          <div className="p-8">
            <p className="text-slate-600 text-lg leading-relaxed">
              {service.desc}
            </p>

            {/* Bottom Row */}
            <div className="mt-10 flex items-center justify-between">
              {/* Tags */}
              <div className="flex gap-3">
                {["Marine", "Global"].map((tag) => (
                  <div
                    key={tag}
                    className="
                      rounded-full

                      bg-slate-100

                      px-4 py-2

                      text-xs uppercase tracking-[0.2em]
                      text-slate-600 font-semibold
                    "
                  >
                    {tag}
                  </div>
                ))}
              </div>

              {/* Arrow Button */}
              <div
                className="
                  w-14 h-14 rounded-full

                  border border-slate-200
                  bg-white

                  flex items-center justify-center

                  group-hover:bg-cyan-500
                  group-hover:border-cyan-500

                  transition-all duration-300
                "
              >
                <span
                  className="
                    text-[#041225]
                    text-lg

                    group-hover:text-white
                    group-hover:translate-x-1

                    transition-all duration-300
                  "
                >
                  →
                </span>
              </div>
            </div>
          </div>

          {/* Hover Glow */}
          <div
            className="
              absolute -bottom-20 -right-20

              w-52 h-52 rounded-full
              bg-cyan-200/0

              blur-[100px]

              group-hover:bg-cyan-200/50

              transition-all duration-700
            "
          />
        </div>
      ))}
    </div>
  </div>
</section>
            {/* Jobs Section */}
            <section className="relative py-32 bg-[#041225] overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />

                <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-emerald-400/10 blur-[140px] rounded-full" />

                {/* Grid Overlay */}
                <div
                    className="
      absolute inset-0 opacity-[0.03]
      [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
      [background-size:90px_90px]
    "
                />

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    {/* Top Header */}
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-3 text-cyan-300 text-sm uppercase tracking-[0.3em] mb-6">
                                <span className="w-12 h-[1px] bg-cyan-300"></span>
                                Careers
                            </div>

                            <h2 className="text-5xl md:text-6xl font-black text-white leading-[1.05] tracking-tight">
                                Latest Opportunities
                            </h2>

                            <p className="mt-8 text-slate-300 text-lg leading-relaxed max-w-2xl">
                                Join our global offshore engineering team and help build
                                sustainable marine infrastructure solutions for the future.
                            </p>
                        </div>

                        {/* Button */}
                        <button
                            className="
          group

          border border-white/10
          bg-white/[0.04]
          backdrop-blur-xl

          hover:bg-cyan-500
          hover:border-cyan-500

          transition-all duration-300

          rounded-full
          px-8 py-4

          text-white font-semibold

          w-fit
        "
                        >
                            <span className="flex items-center gap-3">
                                View All Jobs

                                <span
                                    className="
              group-hover:translate-x-1
              transition-transform duration-300
            "
                                >
                                    →
                                </span>
                            </span>
                        </button>
                    </div>

                    {/* Jobs Slider Area */}
                    <div className="overflow-x-auto scrollbar-hide pb-6  jobs-scroll">
                        <div className="flex gap-8 min-w-max">
                            {[
                                {
                                    title: "QHSE Officer",
                                    desc:
                                        "Creating a safe and healthy offshore work environment while supporting operational excellence across global marine operations.",
                                    icons: [
                                        { icon: "🌊", label: "Offshore" },
                                        { icon: "🦺", label: "QHSE" },
                                        { icon: "🌍", label: "Worldwide" },
                                    ],
                                },

                                {
                                    title: "Technical Expert",
                                    desc:
                                        "Responsible for fleet optimization and technical integrity across offshore vessel operations and infrastructure systems.",
                                    icons: [
                                        { icon: "⚙️", label: "Technical" },
                                        { icon: "🚢", label: "Fleet" },
                                        { icon: "🇧🇪", label: "Belgium" },
                                    ],
                                },

                                {
                                    title: "Marine Engineer",
                                    desc:
                                        "Collaborating with international engineering teams on sustainable offshore energy and marine infrastructure projects.",
                                    icons: [
                                        { icon: "🌐", label: "Global" },
                                        { icon: "🏗️", label: "Projects" },
                                        { icon: "⚓", label: "Marine" },
                                    ],
                                },

                                {
                                    title: "Hydraulic Specialist",
                                    desc:
                                        "Working on advanced hydraulic systems for dredging operations and large-scale offshore engineering projects.",
                                    icons: [
                                        { icon: "💧", label: "Hydraulic" },
                                        { icon: "🚧", label: "Dredging" },
                                        { icon: "🌊", label: "Offshore" },
                                    ],
                                },
                            ].map((job) => (
                                <div
                                    key={job.title}
                                    className="
              group relative

              w-[400px]
              min-h-[560px]

              rounded-[34px]

              border border-white/10
              bg-white/[0.04]
              backdrop-blur-2xl

              overflow-hidden

              hover:-translate-y-3
              hover:border-cyan-400/30

              transition-all duration-500
            "
                                >
                                    {/* Top Animated Border */}
                                    <div
                                        className="
                absolute top-0 left-0
                h-[3px] w-0

                bg-cyan-400

                group-hover:w-full
                transition-all duration-700
              "
                                    />

                                    {/* Glow */}
                                    <div
                                        className="
                absolute -bottom-24 -right-24

                w-52 h-52 rounded-full
                bg-cyan-400/0

                blur-[100px]

                group-hover:bg-cyan-400/20

                transition-all duration-700
              "
                                    />

                                    {/* Content */}
                                    <div className="relative z-10 p-10 flex flex-col h-full">
                                        {/* Small Label */}
                                        <div className="text-cyan-300 text-sm uppercase tracking-[0.25em] mb-6">
                                            Global Careers
                                        </div>

                                        {/* Title */}
                                        <h3
                                            className="
                  text-3xl font-black text-white
                  leading-tight mb-8

                  group-hover:text-cyan-300
                  transition-colors duration-300
                "
                                        >
                                            {job.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-slate-300 leading-relaxed text-lg">
                                            {job.desc}
                                        </p>

                                        {/* Icon Features */}
                                        <div className="grid grid-cols-3 gap-4 mt-10">
                                            {job.icons.map((item) => (
                                                <div
                                                    key={item.label}
                                                    className="
                      flex flex-col items-center
                      text-center

                      rounded-2xl

                      border border-white/10
                      bg-white/[0.03]

                      py-5 px-3

                      group-hover:border-cyan-400/20
                      group-hover:bg-cyan-500/5

                      transition-all duration-300
                    "
                                                >
                                                    {/* Icon */}
                                                    <div
                                                        className="
                        w-14 h-14 rounded-2xl

                        bg-white/[0.04]
                        border border-white/10

                        flex items-center justify-center

                        text-2xl

                        mb-4

                        group-hover:scale-110
                        transition-transform duration-300
                      "
                                                    >
                                                        {item.icon}
                                                    </div>

                                                    {/* Label */}
                                                    <div
                                                        className="
                        text-xs uppercase tracking-[0.2em]
                        text-slate-300 font-semibold
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
                                        <div className="mt-14">
                                            <button
                                                className="
                    group/button

                    w-full

                    border border-white/10
                    bg-white/[0.03]

                    hover:bg-cyan-500
                    hover:border-cyan-500

                    transition-all duration-300

                    rounded-2xl

                    py-4 px-6

                    text-white font-semibold
                  "
                                            >
                                                <span className="flex items-center justify-center gap-3">
                                                    See Details

                                                    <span
                                                        className="
                        group-hover/button:translate-x-1
                        transition-transform duration-300
                      "
                                                    >
                                                        →
                                                    </span>
                                                </span>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Border Glow */}
                                    <div
                                        className="
                absolute inset-0 rounded-[34px]
                border border-cyan-400/0

                group-hover:border-cyan-400/10

                transition-all duration-500
                pointer-events-none
              "
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="flex items-center justify-end gap-5 mt-14">
                        <button
                            className="
          w-14 h-14 rounded-full

          border border-white/10
          bg-white/[0.03]

          text-white

          hover:bg-white
          hover:text-[#041225]

          transition-all duration-300

          flex items-center justify-center
        "
                        >
                            ←
                        </button>

                        <button
                            className="
          w-14 h-14 rounded-full

          bg-cyan-500
          hover:bg-cyan-400

          text-white

          transition-all duration-300

          flex items-center justify-center
        "
                        >
                            →
                        </button>
                    </div>
                </div>
            </section>
            {/* Contact Section */}
            <section className="py-28 bg-white border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Top Heading */}
                    <div className="max-w-3xl mb-20">
                        <p className="text-cyan-600 font-semibold uppercase tracking-[0.25em] mb-5">
                            Contact Us
                        </p>

                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-8">
                            Let’s Discuss Your Offshore Project
                        </h2>

                        <p className="text-slate-600 text-lg leading-relaxed">
                            We work with global partners across offshore engineering,
                            marine infrastructure, environmental operations, and
                            sustainable energy solutions.
                        </p>
                    </div>

                    {/* Contact Grid */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Head Office",
                                value: "Chennai, India",
                                desc: "Global offshore operations and engineering support.",
                            },
                            {
                                title: "Email Address",
                                value: "hello@Tecnico.com",
                                desc: "Reach our team for project discussions and inquiries.",
                            },
                            {
                                title: "Phone Number",
                                value: "+91 98765 43210",
                                desc: "Available Monday to Friday during business hours.",
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="
            group
            rounded-3xl
            border border-slate-200
            bg-slate-50

            hover:border-cyan-500/30
            hover:shadow-xl

            transition-all duration-500

            p-10
          "
                            >
                                {/* Top Line */}
                                <div
                                    className="
              w-14 h-[2px]
              bg-cyan-500

              mb-8

              group-hover:w-24
              transition-all duration-500
            "
                                />

                                {/* Title */}
                                <div className="text-sm uppercase tracking-[0.25em] text-slate-500 font-semibold mb-5">
                                    {item.title}
                                </div>

                                {/* Value */}
                                <h3 className="text-2xl font-black text-slate-900 mb-5 leading-snug">
                                    {item.value}
                                </h3>

                                {/* Description */}
                                <p className="text-slate-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div
                        className="
        mt-20
        rounded-[32px]

        bg-[#041225]
        overflow-hidden

        px-8 md:px-14
        py-12

        flex flex-col lg:flex-row
        lg:items-center
        lg:justify-between
        gap-10
      "
                    >
                        <div>
                            <div className="text-cyan-300 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
                                Global Marine Solutions
                            </div>

                            <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                                Ready To Start Your Next Project?
                            </h3>
                        </div>

                        <button
                            className="
          w-fit
          bg-cyan-500 hover:bg-cyan-400
          transition-all duration-300

          text-white font-semibold

          rounded-full
          px-8 py-4

          shadow-xl shadow-cyan-500/20
        "
                        >
                            Contact Our Team
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#071A2E] text-white py-14 border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h2 className="text-3xl font-black">Tecnico</h2>
                        <p className="text-slate-400 mt-3">
                            Sustainable Offshore Infrastructure
                        </p>
                    </div>

                    <div className="flex items-center gap-8 text-slate-300">
                        <a href="#" className="hover:text-cyan-400 transition-colors">
                            Home
                        </a>
                        <a href="#" className="hover:text-cyan-400 transition-colors">
                            About
                        </a>
                        <a href="#" className="hover:text-cyan-400 transition-colors">
                            Services
                        </a>
                        <a href="#" className="hover:text-cyan-400 transition-colors">
                            Contact
                        </a>
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
                <div className="flex items-center justify-between h-24">
                    {/* Logo */}
                    <div>
                        <h1
                            className={`
                text-3xl font-black tracking-tight transition-colors duration-500
                ${scrolled ? "text-slate-900" : "text-white"}
              `}
                        >
                            Tecnico
                        </h1>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center gap-12">
                        {[
                            "Home",
                            "Activities",
                            "About",
                            "Services",
                            "Contact",
                        ].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className={`
                  relative text-sm font-semibold tracking-wide transition-all duration-300
                  ${scrolled
                                        ? "text-slate-700 hover:text-cyan-600"
                                        : "text-white/90 hover:text-cyan-300"
                                    }
                `}
                            >
                                {item}

                                <span
                                    className={`
                    absolute left-0 -bottom-2 h-[2px] w-0 transition-all duration-300
                    ${scrolled
                                            ? "bg-cyan-600"
                                            : "bg-cyan-300"
                                        }
                    group-hover:w-full
                  `}
                                />
                            </a>
                        ))}
                    </nav>

                    {/* CTA */}
                    <button
                        className={`
              px-6 py-3 rounded-full text-sm font-semibold transition-all duration-500
              ${scrolled
                                ? "bg-cyan-500 hover:bg-cyan-400 text-white shadow-lg shadow-cyan-500/20"
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
