export default function HomePage() {
  return (
    <div className="flex flex-col items-center py-8">
      {/* Tagline */}
      <h1 className="text-5xl font-extrabold text-blue-700 mt-4 mb-12 text-center">
        A Robust Strategy for our Growing Companies
      </h1>

      {/* Hero Image Section */}
      <section className="w-full bg-gray-100 p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Our Vision</h2>
        {/* Placeholder for Hero Image */}
        <div className="w-full h-96 bg-gray-300 flex items-center justify-center text-gray-500 rounded-lg overflow-hidden">
          {/*
            IMPORTANT: For an actual image, place it in the 'public' folder.
            Example: If your image is at /var/www/hci/public/hero-main.jpg
            You would use:
            <img src="/hero-main.jpg" alt="Hero Section Image" className="w-full h-full object-cover" />
            Or for better optimization:
            import Image from 'next/image';
            <Image src="/hero-main.jpg" alt="Hero Section Image" layout="fill" objectFit="cover" />
          */}
          <p>Placeholder for Hero Image (e.g., a large banner)</p>
        </div>
        <p className="mt-6 text-center text-lg text-gray-700">
          Driving innovation and growth through strategic foresight and dynamic execution.
        </p>
      </section>

      {/* Carousel Images Section */}
      <section className="w-full bg-white p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Our Work in Pictures</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {/* Placeholders for Carousel Images */}
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
              <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-500 rounded-lg">
                {/*
                  For actual images:
                  <img src={`/carousel-img-${i}.jpg`} alt={`Carousel Image ${i}`} className="w-full h-full object-cover rounded-lg" />
                */}
                Image {i}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-lg text-gray-700">
          A glimpse into our diverse portfolio and impactful projects.
        </p>
      </section>

      {/* Who We Are - Single Column Layout */}
      <section className="w-full bg-gray-100 p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Who We Are</h2>
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed">
            We are a dynamic, forward-thinking corporation, driven by innovation and united in our pursuit of transformative growth across diverse sectors. Our commitment to excellence shapes industries and builds a sustainable future.
          </p>
        </div>
      </section>

      {/* Two-Column Layout (Collapses to single on small screens) */}
      <section className="w-full bg-white p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Our Principles</h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Column 1 */}
          <div className="w-full md:w-1/2 text-center p-4 bg-gray-50 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-blue-600 mb-3">Innovation</h3>
            <p className="text-gray-700">
              We constantly strive for groundbreaking solutions and embrace new technologies to stay ahead in a rapidly evolving world.
            </p>
          </div>
          {/* Column 2 */}
          <div className="w-full md:w-1/2 text-center p-4 bg-gray-50 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-blue-600 mb-3">Integrity</h3>
            <p className="text-gray-700">
              Our operations are built on a foundation of honesty, transparency, and ethical practices, earning trust with every interaction.
            </p>
          </div>
        </div>
      </section>

      {/* Three Rows of Three-Column Layout (Collapses to single on small screens) */}
      <section className="w-full bg-gray-100 p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Our Core Strengths</h2>

        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="p-4 bg-white rounded-lg shadow-sm text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Strategic Investment</h3>
            <p className="text-gray-700 text-sm">Targeted investments for maximum returns and sustainable growth.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Operational Excellence</h3>
            <p className="text-gray-700 text-sm">Streamlined processes ensuring efficiency and superior performance.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Digital Transformation</h3>
            <p className="text-gray-700 text-sm">Leveraging technology to revolutionize business models.</p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="p-4 bg-white rounded-lg shadow-sm text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Market Leadership</h3>
            <p className="text-gray-700 text-sm">Setting industry standards through visionary leadership.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Client-Centric Approach</h3>
            <p className="text-gray-700 text-sm">Building lasting relationships through tailored solutions and support.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Talent Development</h3>
            <p className="text-gray-700 text-sm">Nurturing skilled professionals for future challenges.</p>
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-4 bg-white rounded-lg shadow-sm text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Sustainable Practices</h3>
            <p className="text-gray-700 text-sm">Committed to eco-friendly operations and community welfare.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Global Reach</h3>
            <p className="text-gray-700 text-sm">Expanding our footprint and impact across international markets.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Adaptability</h3>
            <p className="text-gray-700 text-sm">Agile responses to market shifts ensure continuous relevance.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
