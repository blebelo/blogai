'use client'
import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input, Typography } from 'antd';
import { useStyles } from "./style";
import { IUser } from "@/providers/authProvider/context";
import { useUserActions } from "@/providers/authProvider";


const SignUp: React.FC = () => {

    const {styles} = useStyles()
    const {createUser} = useUserActions();

    const onFinish: FormProps<IUser>['onFinish'] = (values) => {
        console.log('Success:', values);
        const user: IUser = {
            email: values.email,
            name: values.name,
            age: values.age,
            password: values.password
        }
        createUser(user);
    };

    const onFinishFailed: FormProps<IUser>['onFinishFailed'] = (errorInfo) => {
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

                    <Form.Item<IUser>
                        name="name"
                        rules={[{ required: true, message: 'Please input your name' }]}
                    >
                        <Input className={styles.Input}/>
                    </Form.Item>

                    <label>Email</label>
                    <Form.Item<IUser>
                        name="email"
                        rules={[{ required: true, message: 'Please input your email' }]}
                    >
                        <Input  className={styles.Input}/>
                    </Form.Item>

                    <label>Age</label>
                    <Form.Item<IUser>
                        name="age"
                        rules={[{ required: true, message: 'Please input your age' }]}
                    >
                        <Input className={styles.Input}/>
                    </Form.Item>


                    <label>Password</label>
                    <Form.Item<IUser>
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password className={styles.Input}/>
                    </Form.Item>
                    
                    <label>Confirm Password</label>
                    <Form.Item<IUser>
                        name="password"
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