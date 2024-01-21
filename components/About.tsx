import React from "react";
import Image from "next/image";
import { Button, Link } from "@nextui-org/react";
import { HeroBg } from "../utils/HeroBg";
import HeroBgAnimation from "../utils/HeroBgAnimation/index";
import { Bio } from "../data/constants";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
    return (
        <div className="relative z-10 flex justify-center items-center flex-col max-w-7xl mx-auto sm:px-20 px-6 pb-10">
            <div className="flex lg:flex-row flex-col-reverse lg:justify-between gap-8 w-full justify-center items-center py-12 lg:py-24">
                <div className="max-w-xl w-full text-center md:text-left md:order-1">
                    <h1 className="md:text-5xl text-4xl font-bold md:leading-[69px]">
                        Hi, I am <br /> {Bio.name}
                    </h1>
                    <br />
                    <h3 className="md:text-4xl text-xl font-semibold">
                        I am a{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                            <Typewriter words={Bio.roles} loop={0}/>
                        </span>
                    </h3>
                    <br />
                    <p className="md:text-xl text-lg mb-8">{Bio.description}</p>

                    <Button
                        as={Link}
                        className="py-7 px-12"
                        color="primary"
                        href={Bio.resume}
                        target="_blank"
                        variant="shadow"
                    >
                        Check Resume
                    </Button>
                </div>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <Image
                    width={400}
                    height={400}
                    src="/profilepicture.jpg"
                    alt="profile-picture"
                    className="sm:w-96 sm:h-96 w-72 h-72 border-2 border-[#7828c8] rounded-full md:order-2 mx-auto md:mx-0 z-10"
                />
            </div>
        </div>
    );
};

export default About;
