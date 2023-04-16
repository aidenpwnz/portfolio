const Header = (props: {
  children: React.ReactElement | React.ReactElement[];
}) => {
  return <>{props.children}</>;
};

const Content = (props: {
  children: React.ReactElement | React.ReactElement[];
}) => {
  return <>{props.children}</>;
};

const Footer = (props: {
  children: React.ReactElement | React.ReactElement[];
}) => {
  return <>{props.children}</>;
};

export const PageLayout = ({
  children,
}: {
  children: Array<React.ReactElement>;
}) => {
  const header = children.find((el) => el.type === Header);
  const content = children.find((el) => el.type === Content);
  const footer = children.find((el) => el.type === Footer);

  return (
    <div className="h-fit w-screen min-h-screen">
      <head>
        <title>Luca's Portfolio</title>
      </head>
      <header className="w-screen">
        {header ? header.props.children : null}
      </header>
      <main className="w-screen">
        {content ? content.props.children : null}
      </main>
      <footer className="w-screen">
        {footer ? footer.props.children : null}
      </footer>
    </div>
  );
};

PageLayout.Header = Header;
PageLayout.Content = Content;
PageLayout.Footer = Footer;

// export default Layout;
