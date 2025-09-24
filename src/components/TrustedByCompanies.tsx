import { Marquee } from "@/components/ui/marquee"

// Simple array of company logos - just add/remove items here!
const companyLogos = [
  {
    name: "Company 1",
    src: "/logos/tailwindcss.svg", // Add your logo files to public/logos/
    alt: "Company 1 Logo"
  },
  {
    name: "Company 2", 
    src: "/logos/nextjs.svg",
    alt: "Company 2 Logo"
  },
  {
    name: "Company 3",
    src: "/logos/framer.svg", 
    alt: "Company 3 Logo"
  },
  {
    name: "Company 4",
    src: "/logos/aws.svg",
    alt: "Company 4 Logo"
  }
];

export default function TrustedByCompanies() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Companies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of companies that trust our platform to power their success
          </p>
        </div>
        
        <Marquee pauseOnHover={true} speed={25}>
          {companyLogos.map((logo, index) => (
            <div
              key={index}
              className="relative h-full w-fit mx-[4rem] flex items-center justify-start opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <img 
                src={logo.src} 
                alt={logo.alt}
                className="h-8 w-auto max-w-[140px] object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
