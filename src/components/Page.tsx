import React from 'react';
import { Heading, Form, Workbench, Paragraph } from '@contentful/forma-36-react-components';
import { PageExtensionSDK } from 'contentful-ui-extensions-sdk';
import { css } from 'emotion';

interface PageProps {
  sdk: PageExtensionSDK;
}

const Page = (props: PageProps) => {
  return (
    <Workbench className={css({ margin: '80px'})}>
      <Form className={css({ margin:'0px auto'}, {'border':'1px solid red'}, {'height':'max-content'}, {'padding':'20px'})}>
        <Heading>Hi!</Heading>
        <Paragraph>This is feriha app page.. dsadsa</Paragraph>
      </Form>
    </Workbench>
  );
};

export default Page;
