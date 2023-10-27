import { Button, Card, CardBody, CardHeader, Input, Textarea } from '@nextui-org/react'
import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className="relative z-10 flex justify-center items-center flex-col max-w-7xl mx-auto sm:px-20 px-6">
            <h1 className="md:text-4xl text-3xl font-bold md:leading-[69px]">
                Contact
            </h1>
            <p className="md:text-xl max-w-[600px] text-center text-md mb-8">
            Feel free to reach out to me for any questions or opportunities!
            </p>
            <Card className='w-full max-w-xl'>
                <CardBody className='flex gap-4'>
                <CardHeader className='font-semibold text-xl'>
                Email Me 🚀
                </CardHeader>
                    <Input type="email" variant={'bordered'} label="Your Email"/>
                    <Input type="text" variant={'bordered'} label="Your Name"/>
                    <Input type="text" variant={'bordered'} label="Subject"/>
                    <Textarea variant={'bordered'} label="Message" placeholder='Enter your message'/>
                    <Button className='py-6 font-bold' color='primary'>Send</Button>
                </CardBody>
            </Card>
    </div>
  )
}

export default Contact