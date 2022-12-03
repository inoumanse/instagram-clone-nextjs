import React from "react";
import Image from "next/image";

const Header = () => {
    return(
        <div className="shadow-sm border-b bg-white top-0 fixed w-full">
            <Image src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                    layout="fill" objectFit="contain"/>
        </div>
    )
}

export default Header