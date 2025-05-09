import FeaturedProjectsSection from "../components/FeaturedProjects/FeaturedProjectsSection";
import Footer from "../components/Footer/Footer";
import BlogSection from "../components/FromTheBlog/BlogSection";
import MeSection from "../components/Me/MeSection";

export default function Home() {
  return (
    <main>
      <MeSection />
      <BlogSection />
      <FeaturedProjectsSection />
      <div
        className="mt-8"
        style={{ borderTop: "1px solid var(--color-divider)" }}
      >
        <div className="mt-8 mb-8">
          <Footer />
        </div>
      </div>
    </main>
  );
}
