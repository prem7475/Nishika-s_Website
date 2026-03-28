import { motion } from "framer-motion";
import { profile } from "../../data/siteContent";
import ContactForm from "../ui/ContactForm";
import SectionHeading from "../ui/SectionHeading";

export default function ContactSection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-28" id="contact">
      <div className="container-x grid gap-10 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="CONTACT"
            title="Let’s build something awesome"
            subtitle="If you want to know more about my work, collaborate on a project, or just talk - get in touch." 
          />

          <motion.div
            className="mt-10 space-y-5 text-sm leading-relaxed text-white/70"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p>
              Prefer direct? Email me at{" "}
              <a
                href={`mailto:${profile.email}`}
                className="text-gold-200/90 hover:text-gold-200"
                data-cursor="hover"
              >
                {profile.email}
              </a>
              .
            </p>
            {profile.phone ? (
              <p>
                Call me at{" "}
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="text-gold-200/90 hover:text-gold-200"
                  data-cursor="hover"
                >
                  {profile.phone}
                </a>
                .
              </p>
            ) : null}
            {profile.linkedin ? (
              <p>
                LinkedIn:{" "}
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gold-200/90 hover:text-gold-200"
                  data-cursor="hover"
                >
                  View profile
                </a>
                .
              </p>
            ) : null}
            {profile.github ? (
              <p>
                GitHub:{" "}
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gold-200/90 hover:text-gold-200"
                  data-cursor="hover"
                >
                  View profile
                </a>
                .
              </p>
            ) : null}

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="text-xs tracking-[0.26em] text-white/45">
                WHAT I CAN HELP WITH
              </div>
              <ul className="mt-4 space-y-3">
                {[
                  "Responsive websites",
                  "Clean UI/UX",
                  "Performance-focused builds",
                  "Reliable communication",
                ].map((x) => (
                    <li key={x} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold-400/80" />
                      <span className="text-white/75">{x}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
