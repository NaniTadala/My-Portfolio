import React from "react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import Image from "next/image";
import { skills } from "@/data/constants";

export default function SkillCard() {
    return (
        <div className="relative z-10 flex justify-center flex-wrap gap-12 w-full max-w-7xl mx-auto sm:px-20 px-6 pb-10">
            {skills.map((card) => (
                <Card key={card.title} className="w-[420px]">
                    <CardHeader className="flex gap-3 justify-center">
                        <div className="flex flex-col text-xl font-bold">
                            <p className="text-md">{card.title}</p>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <div className="flex gap-5 flex-wrap justify-center">
                            {card.skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="border border-primary rounded-lg py-2 px-4 flex gap-1"
                                >
                                    <Image
                                        width={18}
                                        height={18}
                                        alt={skill.name}
                                        src={skill.image}
                                    />
                                    {skill.name}
                                </div>
                            ))}
                        </div>
                    </CardBody>
                </Card>
            ))}
        </div>
    );
}
