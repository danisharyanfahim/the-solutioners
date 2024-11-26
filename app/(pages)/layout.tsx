import Footer from "../components/layout/footer/Footer";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="page"
      style={{
        paddingTop: "4rem",
      }}
    >
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
