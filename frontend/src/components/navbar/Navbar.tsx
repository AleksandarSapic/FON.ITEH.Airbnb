import Container from "../Container.tsx";
import Logo from "./Logo.tsx";
import Search from "./Search.tsx";
import UserMenu from "./UserMenu.tsx";

const Navbar = () => {
    return (
        <div className={"fixed w-full bg-white z-10 shadow-sm"}>
            <div className={"py-4 border-b-[1px]"}>
                <Container>
                    <div className={"flex flex-row items-center justify-between gap-3 md:gap-0"}>
                        <Logo/>
                        <Search/>
                        <UserMenu/>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Navbar;