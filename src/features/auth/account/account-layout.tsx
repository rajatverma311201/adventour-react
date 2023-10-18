import { cn } from "@/lib/utils";
import { NavLink, Outlet } from "react-router-dom";

export const AccountLayout = () => {
    return (
        <div className="flex flex-1 items-stretch">
            <div className="w-64 bg-secondary">
                <nav className=" pt-10">
                    <ul className="flex flex-col items-stretch gap-5 px-5 pr-7 text-lg font-medium">
                        <NavLinkItem to="/account/personal-info">
                            Personal Info
                        </NavLinkItem>

                        <NavLinkItem to="/account/change-password">
                            Password
                        </NavLinkItem>
                        <NavLinkItem to="/account/my-reviews">
                            My Reviews
                        </NavLinkItem>
                        <NavLinkItem to="/account/my-bookings">
                            My Bookings
                        </NavLinkItem>
                    </ul>
                </nav>
            </div>
            <div className="flex-1 py-10">
                <Outlet />
            </div>
        </div>
    );
};

interface NavLinkItemProps {
    children: React.ReactNode;
    to: string;
}

const NavLinkItem: React.FC<NavLinkItemProps> = ({ children, to }) => {
    return (
        <li className="flex flex-col items-stretch">
            <NavLink
                to={to}
                className={({ isActive }) =>
                    cn(
                        "parent w-full rounded-md px-5 py-3 transition-all duration-300",
                        isActive
                            ? "translate-x-2 bg-primary text-primary-foreground"
                            : " relative  before:absolute before:left-0 before:top-1/2 before:h-0 before:w-1 before:-translate-y-1/2 before:bg-primary before:transition-all before:duration-300 hover:translate-x-2 before:hover:h-3/4",
                    )
                }
            >
                {children}
            </NavLink>
        </li>
    );
};
