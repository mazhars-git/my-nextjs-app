import Sidebar from "@/components/shared/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <header>Navbar</header>
      <Sidebar />
      {children}
      <footer>Footer</footer>
    </div>
  );
};

export default DashboardLayout;
