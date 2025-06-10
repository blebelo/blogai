'use client'
import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input, Typography } from 'antd';
import { useStyles } from "./style";


const SignUp: React.FC = () => {

    const {styles} = useStyles()

    type FieldType = {
        email: string,
        name: string,
        age: number,
        password: string,
        confirmPassword: string

    }

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (

        <div className={styles.Container}>
            <Form
                name="basic"
                className={styles.Form}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Typography className={styles.Typography}>Sign Up</Typography>
                <div className={styles.FormItems}>
                    <label>Name</label>

                    <Form.Item<FieldType>
                        name="name"
                        rules={[{ required: true, message: 'Please input your name' }]}
                    >
                        <Input className={styles.Input}/>
                    </Form.Item>

                    <label>Email</label>
                    <Form.Item<FieldType>
                        name="email"
                        rules={[{ required: true, message: 'Please input your email' }]}
                    >
                        <Input  className={styles.Input}/>
                    </Form.Item>

                    <label>Age</label>
                    <Form.Item<FieldType>
                        name="age"
                        rules={[{ required: true, message: 'Please input your age' }]}
                    >
                        <Input className={styles.Input}/>
                    </Form.Item>


                    <label>Password</label>
                    <Form.Item<FieldType>
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password className={styles.Input}/>
                    </Form.Item>
                    
                    <label>Confirm Password</label>
                    <Form.Item<FieldType>
                        name="confirmPassword"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password className={styles.Input}/>
                    </Form.Item>
                </div>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className={styles.Submit}>
                        Sign Up
                    </Button>
                </Form.Item>
            </Form>
        </div>


    )
}

export default SignUp;