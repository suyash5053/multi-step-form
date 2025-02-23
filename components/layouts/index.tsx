import Sidebar from "./sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full md:h-[638px] w-full md:w-[864px] md:rounded-2xl md:bg-white md:shadow-lg md:flex md:p-4">
      <div className="h-[172px] md:h-full w-full md:flex">
        <Sidebar />
        <div className="hidden md:w-2/3 md:block">{children}</div>
        <div className="absolute top-24 mt-1 md:hidden h-[calc(100vh-6.25rem)] w-full md:2/3">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
