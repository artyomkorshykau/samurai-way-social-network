import React from 'react';
import {Alert, Button, Checkbox, Form, Input} from 'antd';
import {InjectedFormProps, reduxForm} from "redux-form";
import {DataForm} from "./login";

type LoginFormProps = {
    captchaUrl: string | null
    onSubmit: (formValue: DataForm) => void
}

const LoginForm = ({
                       onSubmit
                   }: InjectedFormProps<DataForm, LoginFormProps> & LoginFormProps) => {

    const onFinish = (value: any) => {
        <Alert message="Success" type="success" showIcon/>
        onSubmit(value)
    };

    const onFinishFailed = () => {
        <Alert message="Warning" type="warning" showIcon closable/>
    };

    return <Form
        labelCol={{span: 8}}
        wrapperCol={{span: 16}}
        style={{maxWidth: 600}}
        initialValues={{remember: true}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
    >
        <Form.Item<DataForm>
            name="email"
            rules={[{required: true, message: 'Please input your username!'}]}
        >
            <Input placeholder={'Email'}/>
        </Form.Item>

        <Form.Item<DataForm>
            name="password"
            rules={[{required: true, message: 'Please input your password!'}]}
        >
            <Input.Password placeholder={'Password'}/>
        </Form.Item>

        <Form.Item<DataForm>
            name="rememberMe"
            valuePropName="checked"
            wrapperCol={{offset: 0, span: 16}}
        >
            <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{offset: 0, span: 16}}>
            <Button type="primary" htmlType="submit">
                Sign in
            </Button>
        </Form.Item>
    </Form>
};

export const LoginReduxForm = reduxForm<DataForm, LoginFormProps>({form: 'login'})(LoginForm)