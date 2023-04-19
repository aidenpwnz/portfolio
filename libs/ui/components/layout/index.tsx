export const PageLayout: React.FC<{ children: React.ReactNode }> = (props) => (
  <div className="w-screen h-full bg-ebony-clay text-white snap-mandatory snap snap-y overflow-y-scroll z-0">
    {props.children}
  </div>
);
