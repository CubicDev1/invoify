// Import necessary dependencies
import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/assets/img/invoify-logo.svg";
import { Card } from "@/components/ui/card";
import { DevDebug, LanguageSelector, ThemeSwitcher } from "@/app/components";

// Define the BaseNavbar component
const BaseNavbar = () => {
    // You can keep the useMemo usage, or remove it if not necessary for other logic
    const devEnv = useMemo(() => {
        return process.env.NODE_ENV === "development";
    }, []);

    return (
        <header className="lg:container z-[99]">
            <nav>
                <Card className="flex flex-wrap justify-between items-center px-5 gap-5">
                    {/* Logo section */}
                    <Link href={"/"}>
                        <Image
                            src={Logo}
                            alt="PixelBill"
                            width={190}
                            height={100}
                            loading="eager"
                        />
                    </Link>

                    {/* DevDebug component will always render now */}
                    <DevDebug />
                    
                    {/* Language selector and theme switcher components */}
                    <LanguageSelector />
                    <ThemeSwitcher />
                </Card>
            </nav>
        </header>
    );
};

export default BaseNavbar;
