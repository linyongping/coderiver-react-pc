import React, { PureComponent } from 'react';
import { Form, Input, DatePicker, InputNumber } from 'antd';

const { RangePicker } = DatePicker;

enum inputType {
  INPUT,
  SELECT,
  DATE_PICKER,
  RANGE_PICKER,
  INPUT_NUMBER,
}

type fieldProps = {
  id: string | number;
  label: string | React.ReactNode;
  type?: inputType;
  component?: React.ReactNode;
  required?: boolean;
  initialValue?: any;
  rules?: object;
  formItemConfig?: object;
};

const renderFormItem = (getFieldDecrator, field: fieldProps) => {
  const {
    id,
    label,
    type,
    component,
    required,
    rules,
    initialValue,
    formItemConfig,
    ...rest
  } = field;

  const decorator = getFieldDecrator(id, { initialValue });
  let child = null;
  switch (type) {
    case inputType.DATE_PICKER:
      child = decorator(<RangePicker {...rest} />);
      break;
    case inputType.INPUT:
      child = decorator(<Input {...rest} />);
      break;
    case inputType.INPUT_NUMBER:
      child = decorator(<InputNumber {...rest} />);
      break;
    case undefined && component:
      child = React.cloneElement(component);
      break;
    default:
  }

  return (
    <Form.Item label={label} {...formItemConfig}>
      {child}
    </Form.Item>
  );
};

class CreateForm extends PureComponent {
  render() {
    const {
      formFields = [],
      form: { getFieldDecrator },
      ...restProps
    } = this.props;

    const formChildren = formFields.map(item => renderFormItem(getFieldDecrator, item));

    return <Form {...restProps}>{formChildren} </Form>;
  }
}

export default Form.create()(CreateForm);
