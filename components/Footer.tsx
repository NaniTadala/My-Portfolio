import React from "react";
import Image from "next/image";

const Footer = () => {
    return (
        <div className="relative z-10 flex gap-4 justify-center items-center flex-col max-w-7xl mx-auto sm:px-20 px-6">
            <h1 className="md:text-xl text-lg font-semibold text-primary">
                Narayana Swamy
            </h1>
            <div className="flex gap-5 items-center">
                <Image
                    width={25}
                    height={25}
                    alt="twitter"
                    src="/socials/twitter.svg"
                />
                <Image
                    width={25}
                    height={25}
                    alt="likedin"
                    src="/socials/linkedin.svg"
                />
            </div>
            <small className="text-default-500">
                © 2023 Narayana Swamy. All rights reserved.
            </small>
        </div>
    );
};

export default Footer;
