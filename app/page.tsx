import Image from "next/image";

import { site } from "@/content/site";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function Arrow() {
  return <span aria-hidden="true">{"\u2197"}</span>;
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <header className="section-heading">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
    </header>
  );
}

export default function Home() {
  const resumeHref = `${basePath}/${site.resume.fileName}`;
  const portraitHref = `${basePath}/${site.profile.photo.fileName}`;

  return (
    <>
      <a className="skip-link" href="#about">Skip to content</a>
      <div className="page-texture" aria-hidden="true" />

      <main className="site-shell">
        <aside className="profile-panel" id="top">
          <div>
            <a className="monogram" href="#top" aria-label="Jingting Su, home">
              JS<span>RN</span>
            </a>

            <div className="profile-copy">
              <p className="location">{site.profile.location}</p>
              <div className="identity-row">
                <h1>{site.profile.name}<span>, {site.profile.credential}</span></h1>
                <div className="profile-photo">
                  <Image
                    src={portraitHref}
                    alt={site.profile.photo.alt}
                    width={1382}
                    height={1148}
                    priority
                  />
                </div>
              </div>
              <h2>{site.profile.role}</h2>
              <p className="headline">{site.profile.headline}</p>
              <div className="trust-strip" aria-label="Professional qualifications">
                {site.profile.trustSignals.map((signal) => (
                  <span key={signal}>{signal}</span>
                ))}
              </div>
              <div className="hero-actions">
                <a className="primary-action" href={resumeHref} target="_blank" rel="noreferrer">
                  {site.resume.label} <Arrow />
                </a>
                <a href={site.contact.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn <Arrow />
                </a>
              </div>
            </div>

            <nav className="section-nav" aria-label="Portfolio sections">
              <a href="#about"><span />About</a>
              <a href="#experience"><span />Experience</a>
              <a href="#practice"><span />Practice</a>
              <a href="#credentials"><span />Credentials</a>
              <a href="#contact"><span />Contact</a>
            </nav>
          </div>

          <div className="profile-footer">
            <p className="availability"><i />{site.profile.availability}</p>
            <div className="profile-links">
              <a href={`mailto:${site.contact.email}`}>Email <Arrow /></a>
            </div>
          </div>

        </aside>

        <div className="content-panel">
          <section className="content-section about-section" id="about">
            <SectionHeading eyebrow="Professional profile" title={site.profile.heroTitle} />
            <div className="about-copy">
              {site.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="metric-grid" aria-label="Practice highlights">
              {site.metrics.map((metric) => (
                <div key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section" id="experience">
            <SectionHeading eyebrow="Experience" title="Community practice, coordinated across settings." />
            <div className="experience-list">
              {site.experience.map((experience) => (
                <article className="experience-card" key={`${experience.organization}-${experience.role}`}>
                  <div className="experience-meta">
                    <p>{experience.period}</p>
                    <span>{experience.location}</span>
                  </div>
                  <div className="experience-detail">
                    <h3>{experience.role}</h3>
                    <h4>{experience.organization}</h4>
                    <p>{experience.summary}</p>
                    <ul>
                      {experience.highlights.map((highlight) => (
                        <li key={highlight.label}>
                          <strong>{highlight.label}</strong>
                          <span>{highlight.detail}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="tag-list">
                      {experience.focus.map((focus) => <span key={focus}>{focus}</span>)}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <a className="resume-link" href={resumeHref} target="_blank" rel="noreferrer">
              View full resume <Arrow />
            </a>
          </section>

          <section className="content-section capabilities-section">
            <SectionHeading eyebrow="Clinical capabilities" title="A broad community-care toolkit." />
            <div className="capability-grid">
              {site.capabilities.map((capability, index) => (
                <div key={capability}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{capability}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section practice-section" id="practice">
            <SectionHeading eyebrow="Approach to care" title="Clear judgment. Human communication." />
            <div className="practice-grid">
              {site.practice.map((principle) => (
                <article key={principle.number}>
                  <span>{principle.number}</span>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="content-section credentials-section" id="credentials">
            <SectionHeading eyebrow="Credentials" title="Registered, prepared, and community-ready." />
            <div className="credential-groups">
              <article>
                <p>Registration</p>
                <ul>{site.credentials.registration.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
              <article>
                <p>Education</p>
                <ul>{site.credentials.education.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
              <article>
                <p>Additional</p>
                <ul>{site.credentials.additional.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            </div>
          </section>

          <section className="contact-section" id="contact">
            <p className="contact-kicker">Start a conversation</p>
            <h2>Looking for a nurse who can connect the whole care journey?</h2>
            <p>
              I’m interested in community, primary care, care coordination,
              and geriatric nursing opportunities across the GTA.
            </p>
            <div className="contact-links">
              <a href={`mailto:${site.contact.email}`}>{site.contact.email} <Arrow /></a>
              <a href={site.contact.linkedin} target="_blank" rel="noreferrer">
                LinkedIn <Arrow />
              </a>
            </div>
          </section>

          <footer>
            <span>Jingting Su, RN · GTA, Ontario</span>
            <a href="#top">Back to top ↑</a>
          </footer>
        </div>
      </main>
    </>
  );
}
