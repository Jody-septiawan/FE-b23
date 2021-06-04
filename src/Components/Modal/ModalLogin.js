import {useState, useContext} from 'react'

import { Modal, Button, Form, Alert } from 'react-bootstrap'

import { UserContext } from '../../context/userContext'

import userData from '../../FakeData/User'

function ModalLogin(props) {
    const { show, handleClose } = props;

    const [message, setMessage] = useState('')
    const [data, setData] = useState({
        username: '',
        password: ''
    })

    const [state, dispatch] = useContext(UserContext)

    const {username,password} = data

    const handleOnChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }


    const handleOnSubmit = (e) => {
        e.preventDefault()

        let dataLogin = false

        dataLogin = userData.find(
            (user) => user.username === username
        )

        if(dataLogin){
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: dataLogin
            })
            setMessage('')
            handleClose()
        }else{
            setMessage('Email tidak ditemukan')
        }

        setData({
            username: '',
            password: ''
        })
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>

                <Modal.Header>
                <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                <Form onSubmit={handleOnSubmit}>
                    { message &&
                        <Alert variant="danger" className="py-1">
                            {message}
                        </Alert>
                    }
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control required onChange={handleOnChange} name="username" value={username} type="text" placeholder="Username" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDesc">
                        <Form.Control required onChange={handleOnChange} name="password" value={password} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
                </Modal.Body>

            </Modal>
        </>
    )
}

export default ModalLogin
