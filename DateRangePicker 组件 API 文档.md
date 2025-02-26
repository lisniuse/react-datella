DateRangePicker 组件 API 文档

基本用法

```jsx
import DateRangePicker from './DateRangePicker';

function App() {
  const [selectedDates, setSelectedDates] = useState([]);
  const [pickerVisible, setPickerVisible] = useState(false);

  return (
    <DateRangePicker
      visible={pickerVisible}
      onClose={() => setPickerVisible(false)}
      onConfirm={(range) => {
        setSelectedDates(range);
        setPickerVisible(false);
      }}
      defaultValue={selectedDates}
      />
  );
}
```

## <font style="color:rgb(64, 64, 64);">Props</font>
| **属性名** | **类型** | **默认值** | **描述** |
| --- | --- | --- | --- |
| <font style="color:rgb(64, 64, 64);">visible</font> | <font style="color:rgb(64, 64, 64);">boolean</font> | **<font style="color:rgb(64, 64, 64);">必填</font>** | <font style="color:rgb(64, 64, 64);">控制日期选择器的显示/隐藏状态</font> |
| <font style="color:rgb(64, 64, 64);">onClose</font> | <font style="color:rgb(64, 64, 64);">function</font> | **<font style="color:rgb(64, 64, 64);">必填</font>** | <font style="color:rgb(64, 64, 64);">当点击取消按钮或关闭选择器时触发的回调函数</font> |
| <font style="color:rgb(64, 64, 64);">onConfirm</font> | <font style="color:rgb(64, 64, 64);">function</font> | **<font style="color:rgb(64, 64, 64);">必填</font>** | <font style="color:rgb(64, 64, 64);">当选择有效日期范围并点击确认按钮时触发的回调函数，参数为排序后的日期数组</font> |
| <font style="color:rgb(64, 64, 64);">defaultValue</font> | <font style="color:rgb(64, 64, 64);">Date[]</font> | <font style="color:rgb(64, 64, 64);">[]</font> | <font style="color:rgb(64, 64, 64);">默认选中的日期范围数组（需包含两个 Date 对象）</font> |
| <font style="color:rgb(64, 64, 64);">monthNames</font> | <font style="color:rgb(64, 64, 64);">string[]</font> | <font style="color:rgb(64, 64, 64);">['January', 'February', ..., 'December']</font> | <font style="color:rgb(64, 64, 64);">自定义月份名称数组（长度必须为12）</font> |
| <font style="color:rgb(64, 64, 64);">weekDays</font> | <font style="color:rgb(64, 64, 64);">string[]</font> | <font style="color:rgb(64, 64, 64);">['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']</font> | <font style="color:rgb(64, 64, 64);">自定义星期缩写数组（长度必须为7）</font> |
| <font style="color:rgb(64, 64, 64);">cancelText</font> | <font style="color:rgb(64, 64, 64);">string</font> | <font style="color:rgb(64, 64, 64);">'Cancel'</font> | <font style="color:rgb(64, 64, 64);">取消按钮显示文本</font> |
| <font style="color:rgb(64, 64, 64);">confirmText</font> | <font style="color:rgb(64, 64, 64);">string</font> | <font style="color:rgb(64, 64, 64);">'Confirm'</font> | <font style="color:rgb(64, 64, 64);">确认按钮显示文本</font> |


## <font style="color:rgb(64, 64, 64);">功能特性</font>
1. **<font style="color:rgb(64, 64, 64);">日期范围选择</font>**<font style="color:rgb(64, 64, 64);">：</font>
    - <font style="color:rgb(64, 64, 64);">支持通过点击选择开始和结束日期</font>
    - <font style="color:rgb(64, 64, 64);">自动按时间顺序排列选择的日期</font>
    - <font style="color:rgb(64, 64, 64);">可视化显示选择范围（中间日期高亮）</font>
2. **<font style="color:rgb(64, 64, 64);">交互控制</font>**<font style="color:rgb(64, 64, 64);">：</font>
    - <font style="color:rgb(64, 64, 64);">未来日期自动禁用（不可选择）</font>
    - <font style="color:rgb(64, 64, 64);">下个月按钮在包含未来日期时自动禁用</font>
    - <font style="color:rgb(64, 64, 64);">确认按钮在选择无效范围时禁用</font>
3. **<font style="color:rgb(64, 64, 64);">自定义配置</font>**<font style="color:rgb(64, 64, 64);">：</font>
    - <font style="color:rgb(64, 64, 64);">支持多语言月份/星期显示</font>
    - <font style="color:rgb(64, 64, 64);">可自定义按钮文案</font>
    - <font style="color:rgb(64, 64, 64);">可通过 CSS 类名自定义样式</font>

## <font style="color:rgb(64, 64, 64);">注意事项</font>
1. **<font style="color:rgb(64, 64, 64);">日期处理</font>**<font style="color:rgb(64, 64, 64);">：</font>
    - <font style="color:rgb(64, 64, 64);">传入的日期对象会被复制以防止引用问题</font>
    - <font style="color:rgb(64, 64, 64);">当只选择一个日期时，确认按钮保持禁用状态</font>
    - <font style="color:rgb(64, 64, 64);">选择相同开始结束日期时会自动重置</font>
2. **<font style="color:rgb(64, 64, 64);">样式依赖</font>**<font style="color:rgb(64, 64, 64);">：</font>
    - <font style="color:rgb(64, 64, 64);">需要引入配套的 index.scss 样式文件</font>
    - <font style="color:rgb(64, 64, 64);">日期单元格尺寸通过 CSS 控制（默认 40px × 40px）</font>
    - <font style="color:rgb(64, 64, 64);">使用 classNames 管理动态类名</font>
3. **<font style="color:rgb(64, 64, 64);">浏览器兼容</font>**<font style="color:rgb(64, 64, 64);">：</font>
    - <font style="color:rgb(64, 64, 64);">依赖现代浏览器日期对象</font>
    - <font style="color:rgb(64, 64, 64);">使用 ES6+ 语法，建议配合 Babel 使用</font>

## <font style="color:rgb(64, 64, 64);">回调函数参数说明</font>
### <font style="color:rgb(64, 64, 64);">onConfirm(range: Date[])</font>
<font style="color:rgb(64, 64, 64);">返回按时间排序后的日期数组：</font>

```json
// 示例返回值
[
  new Date('2024-03-01'),  // 开始日期
  new Date('2024-03-15')   // 结束日期
]
```

### <font style="color:rgb(64, 64, 64);">onClose()</font>
<font style="color:rgb(64, 64, 64);">无参数，仅作为关闭弹窗的触发器</font>

## <font style="color:rgb(64, 64, 64);">键盘导航支持</font>
+ <font style="color:rgb(64, 64, 64);">← → 方向键切换月份（当选择器可见时）</font>
+ <font style="color:rgb(64, 64, 64);">Enter 键确认选择</font>
+ <font style="color:rgb(64, 64, 64);">Esc 键关闭选择器</font>

## <font style="color:rgb(64, 64, 64);">样式类名说明</font>
| **类名** | **描述** |
| --- | --- |
| <font style="color:rgb(64, 64, 64);">date-range-picker-overlay</font> | <font style="color:rgb(64, 64, 64);">外层遮罩容器</font> |
| <font style="color:rgb(64, 64, 64);">date-range-picker</font> | <font style="color:rgb(64, 64, 64);">主容器</font> |
| <font style="color:rgb(64, 64, 64);">header</font> | <font style="color:rgb(64, 64, 64);">头部（月份显示+导航按钮）</font> |
| <font style="color:rgb(64, 64, 64);">weekdays</font> | <font style="color:rgb(64, 64, 64);">星期行</font> |
| <font style="color:rgb(64, 64, 64);">days</font> | <font style="color:rgb(64, 64, 64);">日期网格容器</font> |
| <font style="color:rgb(64, 64, 64);">day</font> | <font style="color:rgb(64, 64, 64);">单个日期单元格</font> |
| <font style="color:rgb(64, 64, 64);">other-month</font> | <font style="color:rgb(64, 64, 64);">非当前月日期</font> |
| <font style="color:rgb(64, 64, 64);">selected</font> | <font style="color:rgb(64, 64, 64);">已选中日期</font> |
| <font style="color:rgb(64, 64, 64);">start-date</font> | <font style="color:rgb(64, 64, 64);">范围开始日期</font> |
| <font style="color:rgb(64, 64, 64);">end-date</font> | <font style="color:rgb(64, 64, 64);">范围结束日期</font> |
| <font style="color:rgb(64, 64, 64);">in-range</font> | <font style="color:rgb(64, 64, 64);">处于选择范围内的日期</font> |
| <font style="color:rgb(64, 64, 64);">disabled</font> | <font style="color:rgb(64, 64, 64);">禁用状态日期</font> |
| <font style="color:rgb(64, 64, 64);">footer</font> | <font style="color:rgb(64, 64, 64);">底部按钮容器</font> |


