# React Datella

一个移动端友好的 React 日期范围选择器组件。

## ✨ 特性

- 移动端优化的交互体验
- 支持日期范围选择
- 自定义月份和星期名称
- 支持禁用未来日期
- 支持默认值设置

## 安装

```bash
npm install react-datella
```

## 使用示例

```jsx
import { DateRangePicker } from 'react-mobile-date-range-picker';
import 'react-mobile-date-range-picker/dist/index.css';

function App() {
  const [visible, setVisible] = useState(false);
  const [dateRange, setDateRange] = useState([null, null]);

  return (
    <DateRangePicker
      visible={visible}
      onClose={() => setVisible(false)}
      onConfirm={(range) => {
        setDateRange(range);
        setVisible(false);
      }}
      defaultValue={dateRange}
    />
  );
}
```
