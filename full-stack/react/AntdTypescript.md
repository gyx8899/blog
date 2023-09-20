# Antd typescript

## Demos

```tsx
import type { InputRef } from 'antd';
import type { FieldData } from 'rc-field-form/lib/interface';

const Index: React.FC = () => {

  const inputRef = useRef<InputRef>(null);

  const handleFieldsChange = (changedFields: FieldData[], allFields: FieldData[]) => {
    // ......
  }

  return (
    <Form
        onFieldsChange={handleFieldsChange}
        form={form}
      >
    </Form>
  )
}

```

```tsx


