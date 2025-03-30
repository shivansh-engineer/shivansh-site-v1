import { Mail, Linkedin } from "lucide-react";

export default function HomePage() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-40 py-10">
      {/* Sidebar */}
      <aside className="lg:col-span-1 space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Shivansh Chaudhary</h1>
          <p className="text-sm text-gray-600 mt-1">
            Artificial Intelligence Leader & Entrepreneur
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold font-medium text-gray-700 uppercase tracking-wide mb-1">About Me</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            As Senior Director of Product at Salesforce AI, I lead the strategy and development
            of trusted, agentic AI systems. Previously, I was the founding CTO at Fabric, a mixed
            reality startup, and led product management at AWS, launching AI/ML services like
            machine learning-based content moderation and redaction.
            <br /><br />
            I also teach AI/ML courses at the University of Washington and am passionate about
            CrossFit and dogs.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <a
            href="mailto:engineer.shivansh@gmail.com"
            className="inline-flex items-center bg-black text-white px-4 py-2 text-sm rounded hover:bg-gray-800"
          >
            <Mail className="mr-2 h-4 w-4" /> Contact Me
          </a>
          <a
            href="https://www.linkedin.com/in/shivanshchaudhary/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border border-black px-4 py-2 text-sm rounded hover:bg-gray-100"
          >
            <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <section className="lg:col-span-3 space-y-10">
        <GridSection title="Professional Experience">
          <Card title="Senior Director of Product, Salesforce AI [Current]" description="Leading the vision and execution of Agentforce — Trusted AI Agents" link="https://www.salesforce.com/form/agentforce/demo/?d=7013y0000020HCRAA2" />
          <Card title="Founding CTO, Fabric" description="Built a Geospatial Augmented Reality platform for Live Events" link="https://fabric.space" />
          <Card title="Head of Product, AWS AI" description="Developed ML-based content moderation solutions at scale." link="https://aws.amazon.com/rekognition/content-moderation/" />
          <Card title="Product Lead, AWS Outposts" description="Launched AWS Outposts for hybrid cloud environments." link="https://aws.amazon.com/outposts/" />
          <Card title="Sr. Product Manager, Amazon Business" description="All Things Amazon, but for B2B" link="https://business.amazon.com" />
          <Card title="Staff Software Engineer, National Instruments" description="Launched Flagship Vector Signal Transceivers." link="https://www.ni.com/en-us/shop/category/vector-signal-transceivers.html" />
        </GridSection>

        <GridSection title="Publications & IP">
          <Card title="Architecting a Multi-GHz Real-Time RF Streaming System" description="Published in IEEE Xplore" link="https://ieeexplore.ieee.org/document/8230956" />
          <Card title="Addressing the Challenges of Testing Multi-Channel Phase-Coherent Systems" description="Published in Microwave Journal" />
          <Card title="Design of a Modularized Radar Test System" description="Published in Microwave Journal" link="https://www.microwavejournal.com/articles/28303-design-of-a-state-of-the-art-modularized-radar-test-system" />
          <Card title="Characterization for Multi-Channel Phase-Coherent Systems" description="Published in IEEE Instrumentation & Measurement Journal" link="https://www.researchgate.net/publication/305923015_Characterization_and_calibration_techniques_for_multi-channel_phase-coherent_systems" />
          <Card title="Check the Specifications When Selecting a Signal Generator" description="Published in Microwaves & RF" link="https://www.mwrf.com/technologies/test-measurement-generators/article/21846791/check-the-specs-when-selecting-a-signal-generator?" />
          <Card title="More Hz for More Bits" description="Published in High Frequency Electronics" link="http://highfrequencyelectronics.com/index.php?option=com_content&view=article&id=1484:more-hz-for-more-bits-solving-the-wireless-throughput-challenge-with-more-bandwidth&catid=140:2016-07-july-articles&Itemid=189" />
        </GridSection>

        {/* Full-width for single-item Education section */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold border-b pb-2 text-gray-800">Education</h2>
          <div className="border rounded-lg p-4 shadow-sm bg-white">
            <h3 className="text-base font-semibold text-gray-900">
              Bachelor of Technology, Electrical Engineering
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Indian Institute of Technology Jodhpur · President’s Gold Medal
            </p>
          </div>
        </section>

        <GridSection title="Awards">
          <Card title="Young Alumnus Award" description="IIT Jodhpur · 2025" />
          <Card title="Unsung Hero Award" description="Amazon · 2019" />
          <Card title="IEEE Best Speaker Award" description="IMS Conference · 2016" />
          <Card title="IEEE Peterson Award" description="IEEE Autotest Conference · 2015" />
          <Card title="President’s Gold Medal" description="IIT Jodhpur · 2013" />
          <Card title="GSD Award – Research" description="National Instruments · 2012" />
          <Card title="GSD Award – Overall Winner" description="National Instruments · 2012" />
        </GridSection>
      </section>
    </main>
  );
}

// Grid Section
function GridSection({ title, children }) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold border-b pb-2 text-gray-800">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{children}</div>
    </section>
  );
}

// Card Component
function Card({ title, description, link }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm transition hover:shadow-md bg-white h-full flex flex-col justify-between">
      <div>
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
        {description && <p className="text-sm text-gray-600 mt-1">{description}</p>}
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 text-sm mt-3 hover:underline"
        >
          Read more
        </a>
      )}
    </div>
  );
}
