import { c, PageLayout } from "@aidenpwnz/components";
import { typo } from "@aidenpwnz/typography";
import "../styles/App.css";

const App = () => {
  return (
    <PageLayout>
      <PageLayout.Header>
        <typo.h1>this is a Header</typo.h1>
      </PageLayout.Header>

      <PageLayout.Content>
        {/* Hero */}
        <section>
          <c.CounterButton />
          <typo.h1>this is a Content</typo.h1>
        </section>
        {/* About */}
        <section></section>
        {/* Skills */}
        <section></section>
        {/* Experiences */}
        <section></section>
      </PageLayout.Content>

      <PageLayout.Footer>
        {/* Contact Me */}
        <section></section>
        <typo.h1>this is a Footer</typo.h1>
      </PageLayout.Footer>
    </PageLayout>
  );
};

export default App;
