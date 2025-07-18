import ContactAtom from "../components/Molecules/ContactAtom";
import Footer from "../components/Footer/Footer";
export default function Contact() {
  return (
    <section className="flex-1 gap-6 text-[var(--color-primary-txt)] mt-12">
      <h1 className="text-[var(--color-green)] filter saturate-125 brightness-115 text-[25px] font-[500]">
        Get in Touch!
      </h1>

      <div className="mt-6">
        <ContactAtom />
      </div>

      {/* Updated Image */}
      <img
        src="/0.png"
        alt='Illustration of a person holding a phone and a t-shirt that reads "Hi"'
        className="object-cover object-center max-w-64 mx-auto mt-12"
        style={{
          filter: "drop-shadow(2px 4px 6px rgba(255, 255, 255, 0.85))",
        }}
      />

      <div className="mt-7">
        <div className="h-[1px] bg-[var(--color-divider)] mb-7"></div>
        <div className="mb-7">
          <Footer />
        </div>
      </div>
    </section>
  );
}
