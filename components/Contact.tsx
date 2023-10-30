import { Button, Card, CardBody, CardHeader, Input, Textarea } from '@nextui-org/react'
import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.sendForm('service_bbs0h8v', 'template_c4iwrgq', form.current!, 'Dg3P8DmLZb6yyNN-K')
      .then((result) => {
          toast.success("Email sent successfully")
      }, (error) => {
          toast.error("Error sending email")
      });
  };

  return (
    <div id='contact' className="relative z-10 flex justify-center items-center flex-col max-w-7xl mx-auto sm:px-20 px-6">
            <h1 className="md:text-4xl text-3xl font-bold md:leading-[69px]">
                Contact
            </h1>
            <p className="md:text-xl max-w-[600px] text-center text-md mb-8">
            Feel free to reach out to me for any questions or opportunities!
            </p>
            <Card className='w-full max-w-2xl'>
                <CardBody className='flex gap-4'>
                <CardHeader className='font-semibold text-xl'>
                Email Me 🚀
                </CardHeader>
                <form className='flex flex-col gap-4' ref={form} onSubmit={sendEmail}>
                    <Input type="email" name="user_email" variant={'bordered'} label="Your Email"/>
                    <Input type="text" name="user_name" variant={'bordered'} label="Your Name"/>
                    <Input type="text" variant={'bordered'} label="Subject"/>
                    <Textarea name="message" variant={'bordered'} label="Message" placeholder='Enter your message'/>
                    <Button type='submit' className='py-6 font-bold' color='primary'>Send</Button>
                    </form>
                </CardBody>
            </Card>
    </div>
  )
}


export default Contact