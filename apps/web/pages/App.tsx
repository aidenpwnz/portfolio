import { c } from "@aidenpwnz/components";
import "../styles/App.css";

const App = () => {
  return (
    <main className='h-screen bg-ebony-clay text-white snap-mandatory snap-y overflow-y-scroll z-0 overflow-x-hidden'>
      {/* Header */}
      <c.Header />
      {/* Hero */}
      <section id='hero' className='snap-start'>
        <c.Hero />
      </section>
      {/* About */}
      <section id='about' className='snap-center'>
        <c.About />
      </section>
      {/* Experiences */}
      <section id='experience' className='snap-center'>
        <c.Experience />
      </section>
      {/* Skills */}
      <section id='skills' className='snap-start'>
        <c.Skills />
      </section>
    </main>
  );
};

export default App;
