import { c, PageLayout } from "@aidenpwnz/components";
import "../styles/App.css";

const App = () => {
  return (
    <main className="h-screen bg-ebony-clay text-white snap-mandatory snap-y overflow-y-scroll z-0">
      {/* Header */}
      <c.Header />
      {/* Hero */}
      <section id="hero" className="snap-start">
        <c.Hero />
      </section>
      {/* About */}
      <section id="about" className="snap-center">
        <c.About />
      </section>
      {/* Skills */}
      {/* Experiences */}
    </main>
  );
};

export default App;
