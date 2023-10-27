import React from "react";
import { Card, CardHeader, CardBody, Divider, Image } from "@nextui-org/react";
import { educationDetails } from "@/data/constants";

const Education = () => {
    return (
        <div className="relative z-10 flex justify-center items-center flex-col max-w-7xl mx-auto sm:px-20 px-6">
            <h1 className="md:text-4xl text-3xl font-bold md:leading-[69px]">
                Education
            </h1>
            <p className="md:text-xl max-w-[600px] text-center text-md mb-8">
                My education has been a journey of self-discovery and growth. My
                educational details are as follows.
            </p>
            <div className="relative z-10 flex justify-center flex-wrap w-full max-w-7xl mx-auto sm:px-20 px-6 pb-10">
                {educationDetails.map((education, index) => (
                    <div key={education.id} className="flex gap-5">
                        <div className="flex flex-col items-center">
                            <span className="flex align-baseline border-2 p-1 rounded-[50%] my-3 bg-transparent border-primary"></span>
                            <span className="bg-primary border border-primary h-full w-[1px]"></span>
                        </div>
                        <div
                            className={`${
                                index !== educationDetails.length - 1
                                    ? "pb-12"
                                    : ""
                            }`}
                        >
                            <Card className="max-w-2xl w-full">
                                <CardBody>
                                    <div className="flex items-center gap-2">
                                        <Image
                                            src={education.image}
                                            width={60}
                                            height={60}
                                            alt={education.college}
                                        />

                                        <div>
                                            <h1 className="font-bold text-lg">
                                                {education.college}
                                            </h1>
                                            <h3>{education.course}</h3>
                                            <p className="text-tiny uppercase">
                                                {education.timeline}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <h4 className="mb-2 text-md">
                                            <span className="font-semibold">
                                                Grade
                                            </span>
                                            : {education.grade}
                                        </h4>
                                        <p className="text-sm text-default-500">
                                            {education.desc}
                                        </p>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;
