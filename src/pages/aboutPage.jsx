export default function AboutPage() {
  return (
    <div className="w-full min-h-[calc(100vh-100px)] bg-primary">
      
      {/* Hero Section */}
      <div className="w-full bg-accent text-primary">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
            About Us
          </h1>
          <p className="mt-3 text-primary/90 max-w-2xl">
            Learn more about i-Computers and what we stand for.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">

        {/* Reusable section style */}
        {[
          {
            title: "Who We Are",
            content: (
              <p>
                i-Computers is a Sri Lanka–based computer solutions provider offering
                high-quality laptops, desktops, accessories, and professional repair
                services. We focus on reliability, affordability, and long-term
                customer satisfaction.
              </p>
            ),
          },
          {
            title: "Our Mission",
            content: (
              <p>
                Our mission is to make technology accessible and affordable for
                everyone by delivering trusted products, expert support, and
                transparent service at every stage.
              </p>
            ),
          },
          {
            title: "Our Vision",
            content: (
              <p>
                We aim to become a leading and trusted technology partner in Sri Lanka
                by continuously improving service quality and embracing innovation.
              </p>
            ),
          },
        ].map((section, index) => (
          <section
            key={index}
            className="bg-[#F7F4EC] rounded-2xl p-7 border border-secondary/10 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <h2 className="text-2xl font-bold text-secondary tracking-wide">
              {section.title}
            </h2>
            <p className="mt-4 text-secondary/80 leading-relaxed">
              {section.content}
            </p>
          </section>
        ))}

        {/* Why choose us */}
        <section className="bg-[#F7F4EC] rounded-2xl p-7 border border-secondary/10 shadow-md hover:shadow-lg transition-all duration-300">
          <h2 className="text-2xl font-bold text-secondary tracking-wide">
            Why Choose Us?
          </h2>
          <ul className="mt-5 space-y-2 text-secondary/80 list-disc list-inside leading-relaxed">
            <li>High-quality genuine products</li>
            <li>Affordable and transparent pricing</li>
            <li>Professional repair & technical support</li>
            <li>Customer-first service approach</li>
            <li>Fast and secure online ordering</li>
          </ul>
        </section>

      </div>
    </div>
  );
}