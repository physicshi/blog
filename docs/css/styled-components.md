---
sidebar_position: 5
---

首先要清楚的是 web 和 CSS 最初是为文档而设计的，CSS 作为对这些文档样式进行设置的解决方案，本质上是一个用于布局和定义样式的语言，它非常容易理解和上手，但是精通很难，因为 CSS 的属性互不正交，大量的依赖与耦合难以记忆，规则非常庞杂。

单纯使用原生的 CSS 去写样式的话，通常会遇到三个问题：

- CSS 没有变量、函数这些概念，也没有模块机制，导致书写效率以及代码的维护性都不高。注意，CSS 的 `@import` 机制并不算真正的模块机制，因为 `@import` 只是在一个 CSS 文件里面引入另一个 CSS 文件，并且只有执行到 `@import` 语句的时候才会触发浏览器下载被引入的 CSS 文件。这会对网页加载速度产生不利影响。

- 复用性低：CSS 缺少抽象的机制，选择器很容易出现重复，不利于维护和复用。

- 全局污染：CSS 选择器的作用域是全局的，如果两个选择器名称相同，后定义的选择器会覆盖前定义的选择器。此外，不同种类的选择器，例如 ID 选择器、类选择器、元素选择器等的权重也不一样，这很容易引起样式相互覆盖或冲突。虽然可以通过差异化类命名的方式来避免全局冲突，但这又会导致类命名的复杂度上升。

为了解决 CSS 存在的这些不足之处，前端社区出现了很多种解决方案。例如，Saas 或者 Less。Sass 和 Less 都属于 CSS 预处理器，即在 CSS 的基础上进行了扩展，增加了一些编程的特性，并且将 CSS 作为目标生成文件。具体来说，Sass / Less 增加了规则、变量、混入、选择器、继承等特性，还引入了模块系统。因此，相比与 CSS，Sass / Less 更像是一门编程语言，可以提升写 CSS 的效率，代码更易于组织和维护。Sass / Less 文件最终都会被编译为 CSS 文件，这样才能被浏览器正常识别。然而，Sass / Less 更多地解决的是上述不足的第一点以及第二点，即通过引入编程语言特性和模块机制提升编写效率，提高可维护性。

CSS Modules 方案以及 styled-components 方案是社区中比较著名的解决方案，可以较好地解决 CSS 的上述问题。这两者解决问题采用的是两种不同的思路：CSS Modules 是通过工程化的方法，加入了局部作用域和模块机制来解决命名冲突的问题。CSS Modules 通常会配合 Sass 或者 Less 一起使用。styld-components 是一种 CSS-in-JS 的优秀实践，通过 JS 来声明、抽象样式来提高组件的可维护性，在组件加载时动态地加载样式，并且动态地生成类名避免命名冲突和全局污染。

## styled-components

> styled-components 最基本的理念就是通过移除样式与组件之间的对应关系来强制执行最佳实践。回想一下使用过的任何样式方法，样式片段与 HTML 之间总是有一个对应关系（通过 class）：
>
> 比如在标准 CSS 中，这会是一个类名（或者也许是一个 ID ）。在 React 的 styles in JavaScript 库中，这是通过一个变量设置一个类或给 style 属性传递一个 JavaScript 对象。
>
> 通常我们对每个类只想使用一次，所以可以直接移除这种对应关系。通过这种方式，我们还强制了容器组件与展示性组件的分离，而且我们也确保了开发者只能构建小型而单一的组件（实际上写的每一个 styled-components 就是一个展示性组件）。

:::tip

分离容器组件与展示性组件

在 React 中，某些组件可能具有 state 。试着分离处理数据、逻辑（比如数据格式化）的组件与处理样式的组件。通过分离这两者，追溯代码中的变化将会简便很多

如果后端 API 格式改变了，你所要做的只是进入你的容器组件，确保在新数据格式下渲染与之前相同的展示性组件，这样一切都会运行完好

另一方面，如果 APP 的视觉设计或用户体验需要更改，你所要做的只是进入你的展示性组件并确保他们自身能正确显示。由于这些组件并不关注它们在何时何处被渲染，你也没有改变渲染哪个组件，一切都会运行完好

通过区分这两种类型的组件，你就不需要同时进行多个不相关联的更改，这避免了意外错误。

```jsx
//展示组件
class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { todos } = this.props;
    return (
      <div>
        <ul>
          {todos.map((item, index) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

//容器组件
class TodoListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.fetchData = this.fetchData.bind(this);
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    fetch("/api/todos").then((data) => {
      this.setState({
        todos: data,
      });
    });
  }
  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}
```

:::

### 基本用法

> styled.h1 调用后会返回一个 React 组件。 styled-components 会自动生成一个附加到这个 React 组件的名称哈希化后的 class（默认以 sc- 开头），并且把定义的样式与这个 class 相关联。

```shell
npm install --save styled-components
# ts 依赖
npm install @types/styled-components -D
```

```js
// style.js
import styled from "styled-components";
export const Container = styled.h1`
  color: red;
`;
```

```jsx
import { Container } from "./style";

export default function App() {
  return <Container>Hello CodeSandbox</Container>;
}
```

> 如上所示，创建一个具有样式的容器组件或者创建一个具有逻辑的展示性组件是不可能的。我们创建的是许多小型组件并将他们组合到大型容器中，而且由于没有可见的类，我们不可能多次使用他们。
>
> 从根本上来讲，通过使用 styled-components ，我们必须去构建一个良好的组件系统——没别的可能。他强制我们使用最佳实践——不需要特别的代码架构审查。

运行后：

![image](https://tva3.sinaimg.cn/large/008cOUgNly1h39ca4751wj30oi0kydsq.jpg)

:::caution
不同于 CSS Modules 是在编译时的方案，styled-components 的执行时机是在运行时，虽然它的开发团队采取了很多优化措施，但运行时的开销导致的影响是不可避免的。

styled-components 定义的组件一定要放在组件函数定义之外（对于 Class 类型的组件，不要放在 render 方法内 ）。因为在 react 组件的 render 方法中声明样式化的组件，会导致每次渲染都会创建一个新组件。 这意味着 React 将不得不在每个后续渲染中丢弃并重新计算 DOM 子树的那部分，而不是仅仅计算它们之间变化的差异，从而导致性能瓶颈和不可预测的行为。

即：

```js
// ❌ 绝对不要这样写
const Header = () => {
  const Title = styled.h1`
    font-size: 10px;
  `;

  return (
    <div>
      <Title />
    </div>
  );
};

// ✅应该要这样写
const Title = styled.h1`
  font-size: 10px;
`;

const Header = () => {
  return (
    <div>
      <Title />
    </div>
  );
};
```

:::

### styled-componnets 的动态样式

**styled-components 支持通过 props 实现动态样式**

下面例子展示了一个样式化的 Button 接收 primary 属性，并根据该属性调整背景颜色 background 以及 color。

```tsx
import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

interface IScButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
}

const ScWrapper = styled.div`
  margin-top: 12px;
`;

const ScButton = styled.button<IScButtonProps>`
  background: ${(props) => (props.primary ? "blue" : "white")};
  color: ${(props) => (props.primary ? "white" : "blue")};
  border: 2px solid palevioletred;
  border-radius: 3px;
  padding: 0.25em 1em;
`;

export default () => {
  return (
    <ScWrapper>
      <ScButton>Normal</ScButton>
      <ScButton primary>Primary</ScButton>
    </ScWrapper>
  );
};
```

### 扩展组件样式

`styled-components` 不仅能对原生的 `element` 进行样式定义，也能对组件的样式进行扩展。可以通过 **`styled()`** 创建一个继承另一个组件样式的新组件。例如，我们想要创建一个继承了上述 `ScButton` 的新组件 `ScExtendedButton`：

```jsx
const ScButton = styled.button`
  color: white;
  background-color: blue;
  border: 2px solid palevioletred;
  border-radius: 3px;
  padding: 0.25em 1em;
`;

// 创建一个继承 ScButton 的新组件 ScExtendedButton
const ScExtendedButton = styled(ScButton)`
  color: blue;
  background-color: white;
  margin-top: 1em;
`;
```

通过这种方式，`ScExtendedButton` 拥有跟 `ScButton` 相同的 `border`, `border-radius`, `padding` 属性，但是多了 `margin-top` 属性，并且覆盖了 `ScButton` 中的 `color`, `background-color` 属性。此外，如果我们想要创建一个继承 `ScButton` 的所有样式的 `a` 元素，可以使用 `as` 属性来制定最终渲染的内容（可以是原生的元素或者是自定义组件），例如：

```jsx
// 创建一个继承 ScButton 的新组件 ScExtendedButton，最终会渲染为 a 元素
const ScExtendedButton = styled(ScButton)`
    color: blue;
    background-color: white;
`;

const ReversedTextButton = (children, ...props) => <Button {...{
    children: children.spilit('').reverse().join(''),
    ...props
  }} />

export default () => {
    return (
        <ScExtendedButton as="a" href="#">
            Extends Link with Button styles
        </ScExtendedButton>
        {/* as 属性可以是自定义组件 */}
        <ScExtendedButton as="ReversedTextButton">
            Extends Component with Button styles
        </ScExtendedButton>
     )
}
```

> 实际上也可以扩展第三方组件库

### 对伪元素、伪选择器以及嵌套的支持

由于 `styled-components` 采用 `stylis` 作为预处理器，因此提供了对伪元素、伪选择器以及嵌套写法的支持（跟 Less 很类似）。其中，`&` 指向组件本身：

```jsx
const ScDiv = styled.div`
   color: blue;

  &:hover {
    color: red; // 被 hover 时的样式
  }

  & ~ & {
    background: tomato; // ScDiv 作为 ScDiv 的 sibling
  }

  & + & {
    background: lime; // 与 ScDiv 相邻的 ScDiv
  }

  &.something {
    background: orange; // 带有 class .something 的 ScDiv
  }

  .something-child & {
    border: 1px solid; // 不带有 & 时指向子元素，因此这里表示在带有 class .something-child 之内的 ScDiv
`;

render(
  <React.Fragment>
    <ScDiv>Hello world!</ScDiv>
    <ScDiv>How ya doing?</ScDiv>
    <ScDiv className="something">The sun is shining...</ScDiv>
    <ScDiv>Pretty nice day today.</ScDiv>
    <ScDiv>Don't you think?</ScDiv>
    <div className="something-else">
      <ScDiv>Splendid.</ScDiv>
    </div>
  </React.Fragment>
);
```

### 通过 `.attrs` 传递 `props`

`.attrs` 允许传递静态或动态的 `props`，或者第三方的 `props` 给组件。`attrs` 一般接收函数作为参数，并且该函数的参数是组件接收到的 `props`，函数的返回值将会与 `props` 做 `merge`，由此可以得到组件最终的 `props`。例如：

```jsx
const ScInput = styled.input.attrs((props) => ({
  // 定义静态的 prop
  type: "text",

  // 定义动态的 prop
  size: props.size || "1em",
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  /* 注意，最终组件的 props 是合并 attrs 返回值的 props 的结果 */
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

render(
  <div>
    <ScInput placeholder="A small text input" />
    <br />
    <ScInput placeholder="A bigger text input" size="2em" />
  </div>
);
```

注意，在对 `styled-componnets` 进行包装时，`.attrs` 的应用顺序是从最里面的样式化的组件到最外面的样式化的组件。因此外层的包装可以对内层的 `.attrs` 做覆盖。例如：

```jsx
const ScInputInner = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "1em",
}))`
  border: 2px solid palevioletred;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

// ScInputInner 的 attrs 将被先应用，然后是这个 ScInputOutter 的 attrs 被应用
const PasswordInput = styled(ScInputInner).attrs({
  // 这会覆盖 ScInputInner 的 type: text
  type: "password",
})`
  /* 同样，这会覆盖 ScInputInner 的 border*/
  border: 2px solid aqua;
`;
```
