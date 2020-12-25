import React, { useState } from 'react';
import { 
  TextInput,
  Card,
  DisplayText,
  Paragraph,
  SectionHeading,
  FieldGroup,
  Typography,
  Select,
  Option
} from '@contentful/forma-36-react-components';
import { EditorExtensionSDK} from 'contentful-ui-extensions-sdk';

interface EditorProps {
  sdk: EditorExtensionSDK;
}


const Entry = (props: EditorProps) => {
  
  const [
    type,
    setType
  ] = useState(props.sdk.entry.fields.type.getValue());
  
  const [
    category,
    setCategory
  ] = useState(props.sdk.entry.fields.category.getValue());
  
  const [
    title,
    setTitle
  ] = useState(props.sdk.entry.fields.title.getValue());
  
  const [
    link,
    setLink
  ] = useState(props.sdk.entry.fields.link.getValue());
    
  const [
    status,
    setStatus
  ] = useState(props.sdk.entry.fields.status.getValue() === "yes");
  
  const containerStyle = {
    'margin': '1.5rem auto',
    'width': '100%',
    'max-width': '768px'
  };
  
  const onTypeChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value);
    props.sdk.entry.fields.type.setValue(event.target.value);
  };

  const onCategoryChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
    props.sdk.entry.fields.category.setValue(event.target.value);
  };

  const onTitleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    props.sdk.entry.fields.title.setValue(event.target.value);
  };

  const onLinkChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLink(event.target.value)
    props.sdk.entry.fields.link.setValue(event.target.value);
  };

  const onStatusChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const status = event.target.value === 'yes';
    setStatus(status);
    props.sdk.entry.fields.status.setValue(status);
  };


  return <div style={containerStyle}>
  <Card>
  <Typography>
    <DisplayText>Menu Item</DisplayText>
    <Paragraph>Type field is conditional</Paragraph>
  </Typography>
  <FieldGroup row={false}>
    <SectionHeading>Type</SectionHeading>
    <Select
      id="type"
      name="type"
      width="large"
      onChange={onTypeChangeHandler}
      value={type}
    >
      <Option value="Category">Category</Option>
      <Option value="Custom Link">Custom Link</Option>
    </Select>
  </FieldGroup>
  {(type === "Category" || !props.sdk.entry.fields.category.getValue()) && (
  <FieldGroup row={false}>
    <SectionHeading>Category</SectionHeading>
    <TextInput onChange={onCategoryChangeHandler} value={category} />
  </FieldGroup>
  )}
  {type === "Custom Link" && (
  <FieldGroup row={false}>
    <SectionHeading>Title</SectionHeading>
    <TextInput onChange={onTitleChangeHandler} value={title} />  
    <SectionHeading>Custom Link</SectionHeading>
    <TextInput onChange={onLinkChangeHandler} value={link} />
  </FieldGroup>
  )}
  <FieldGroup row={false}>
    <SectionHeading>Status</SectionHeading>
    <Select
      id="status"
      name="status"
      width="large"
      onChange={onStatusChangeHandler}
      value={status ? "yes" : "no"}
    >
      <Option value="yes">Enabled</Option>
      <Option value="no">Disabled</Option>
    </Select>
  </FieldGroup>
  </Card>
</div>
};

export default Entry;
