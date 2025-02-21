import Sidebar from "./sidebar";

const Layout = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    return (
        <div className="h-auto w-2/3 rounded-2xl bg-white shadow-lg p-4 flex">
            <Sidebar />
            {children}
        </div>
    )
}

export default Layout