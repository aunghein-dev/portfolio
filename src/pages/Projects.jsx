import MyProjects from "../components/MyProjects/MyProjects";
import Footer from "../components/Footer/Footer";
export default function Projects() {
  return (
    <section>
      <div className="mt-18">
        <MyProjects />
      </div>

      <div className="mt-7">
        <div className="h-[1px] bg-[var(--color-divider)] mb-7"></div>
        <div className="mb-7">
          <Footer />
        </div>
      </div>
    </section>
  );
}
