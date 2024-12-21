import React, { useState } from 'react'
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

const CheckOutPage = () => {
    const [show, setShow] = useState(false);
    const [activeTab, setActiveTab] = useState("visa");

    // tab change
    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    }

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

  return (
    <div className='modalCard'>
        <Button variant='primary' className='py-2' onClick={handleShow}>Proceed to Checkout</Button>

        <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        className='modal fade'
        centered
        >
            <div className='modal-dialog'>
                <h5 className='px-3 mb-3'>Select Your Payment Method</h5>
                <div className='modal-content'>
                    <div className='modal-boby'>
                        <div className="tabs mt-3">
                            <ul>
                                <li><a href="#visa"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    </div>
  )
}

export default CheckOutPage
