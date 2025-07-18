import MyBlogs from "../components/MyBlogs/MyBlogs";
import Footer from "../components/Footer/Footer";

export default function Blog() {
  return (
    <section>
      <div className="mt-16">
        <MyBlogs />
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
