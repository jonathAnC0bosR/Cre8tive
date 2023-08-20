// 'use client';

import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';

// export default function ServicesButton({ userId, skillId }) {
export default function ServicesButton() {
  const [openModal, setOpenModal] = useState("");
  const [email, setEmail] = useState("");
  const props = { openModal, setOpenModal, email, setEmail };
  const [isProcessing, setIsProcessing] = useState(false);

  const handleButtonClick = () => {
    setIsProcessing(true);

    props.setOpenModal('form-elements');

    // You can use a timeout to simulate the modal loading delay or your actual modal loading logic
    setTimeout(() => {
      props.setOpenModal('form-elements');
      setIsProcessing(false);
    }, 1000); // 1 second delay for demonstration
  };

  return (
    <>
      <Button
        color="pink"
        pill
        onClick={handleButtonClick}
      >
        {isProcessing ? <AiOutlineLoading className="h-6 w-6 animate-spin" /> : 'Negotiate'}
      </Button>

      <Modal
        show={props.openModal === 'form-elements'}
        size="md"
        popup
        onClose={() => props.setOpenModal(undefined)}
        className="w-2/3 flex fixed justify-center align-middle "
      >
        <div className="">
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6 justify-self-center">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Your email" />
                </div>
                <TextInput id="email" placeholder="name@company.com" required />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Your password" />
                </div>
                <TextInput id="password" type="password" required />
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember">Remember me</Label>
                </div>
                <a href="/modal" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                  Lost Password?
                </a>
              </div>
              <div className="w-full">
                <Button>Log in to your account</Button>
              </div>
              <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?&nbsp;
                <a href="/modal" className="text-cyan-700 hover:underline dark:text-cyan-500">
                  Create account
                </a>
              </div>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </>
  )
}


