import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import * as React from "react";
import { useEffect } from "react";
import { Form, Input, message } from "antd";
const FormItem = Form.Item;
import "antd/dist/antd.css";
const App: React.FC<any> = (props) => {

  const [form] = Form.useForm();


  return (
    <Form form={form}>
      <FormItem
        label="Number Field"
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 12 }}
      >
        <Form.Item name="username" rules={[{ required: true }]} getValueFromEvent={(e: React.FormEvent<HTMLInputElement>) => {
          const convertedValue = Number(e.currentTarget.value);
          const arrNumber = (e.currentTarget.value + "").split("");
          const prevValue = arrNumber.slice(0, arrNumber.length - 1).join("");
          if (isNaN(convertedValue)) {
            return Number(form.getFieldValue("testNumber")) || prevValue || 0;
          } else {
            return convertedValue;
          }
        }}>
          <Input />
        </Form.Item>

      </FormItem>
    </Form>
  );
};


export default App;
