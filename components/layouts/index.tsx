import Sidebar from "./sidebar";

const Layout = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    return (
        <div className="h-2/3 w-3/5 rounded-2xl bg-white shadow-lg flex p-4">
            <div className="flex h-full w-full rounded-2xl">
                <Sidebar /> 
                <div className="w-2/3">
                  {children}
                </div>
                
            </div>
        </div>
    )
}

export default Layout