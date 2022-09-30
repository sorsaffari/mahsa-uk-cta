export const PageLayout = ({ children }) => {
  return (
    <main>
      <nav>
        <div>nav</div>
      </nav>
      <div>{children}</div>
    </main>
  );
};
