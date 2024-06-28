
const Dashoard = () => {
    return (
        <div className="pt-20">
            <h2>This is The DashBoard Page;</h2>
            {/* Drawer */}
            <div className="">
                <div className="drawer drawer-end">
                    <h2>Need to updata Drawar</h2>
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label>
                    </div>
                    <div className="drawer-side mt-16">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                            {/* Sidebar content here */}
                            <li><a href="/"></a>Home</li>
                            <div className="divider"></div>
                            <li><a>Admin Home</a></li>
                            <li><a>User Home</a></li>
                            <li><a>My Cart</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashoard;