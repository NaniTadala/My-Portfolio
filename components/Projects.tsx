import React from "react";
import {
    Tabs,
    Tab,
    Card,
    CardBody,
    CardHeader,
    Chip,
    Button,
    Link,
} from "@nextui-org/react";
import { projectsTab, projectsCard } from "@/data/constants";
import Image from "next/image";

const Projects = () => {
    return (
        <div className="relative z-10 flex justify-center items-center flex-col max-w-7xl mx-auto sm:px-20 px-6">
            <h1 className="md:text-4xl text-3xl font-bold md:leading-[69px]">
                Projects
            </h1>
            <p className="md:text-xl max-w-[600px] text-center text-md mb-8">
                I have worked on a wide range of projects. From web apps to
                android apps. Here are some of my projects.
            </p>
            <div className="flex w-full flex-col">
                <Tabs
                    className="m-auto"
                    aria-label="Dynamic tabs"
                    items={projectsTab}
                >
                    {(item) => (
                        <Tab key={item.id} title={item.label}>
                            <div className="flex flex-wrap justify-center gap-7 pb-10 mt-8">
                                {projectsCard.map((project) => (
                                    <Card
                                        key={project.id}
                                        className="py-4 max-w-[22rem] w-full"
                                    >
                                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                            <Image
                                                alt={project.title}
                                                className="object-cover rounded-xl"
                                                src={project.image}
                                                width={320}
                                                height={300}
                                            />
                                        </CardHeader>

                                        <CardBody className="overflow-visible py-2 justify-evenly">
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map(
                                                    (tag, index) => (
                                                        <Chip
                                                            key={index}
                                                            size="sm"
                                                        >
                                                            {tag}
                                                        </Chip>
                                                    )
                                                )}
                                            </div>
                                            <h4 className="font-bold text-large">
                                                {project.title}
                                            </h4>
                                            <p className="text-tiny uppercase font-bold">
                                                {project.date}
                                            </p>
                                            <small className="text-default-500">
                                                {project.description}
                                            </small>
                                            <Button
                                                as={Link}
                                                className="font-semibold"
                                                color="primary"
                                                variant="flat"
                                                target="_blank"
                                                href={project.github}
                                            >
                                                View Code {"</>"}
                                            </Button>
                                        </CardBody>
                                    </Card>
                                ))}
                            </div>
                        </Tab>
                    )}
                </Tabs>
            </div>
        </div>
    );
};

export default Projects;
