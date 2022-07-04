---
sidebar_position: 2
---

> 这里跳过下载安装

从 hello world 出发：

```go
// hello-world.go

// 这个源码文件属于main包。main包是每个Go应用程序都包含的包，有且只有一个
package main
// 导入名为“fmt”的包，一旦某个包被导入，它必须被使用
import "fmt"
// Go程序的 "入口" 函数——main()，有且只有一个，必须声明在main包中
func main(){
    fmt.Println("Hello World!")
}
```

在命令行：

```shell
go build hello-world.go

./hello-world
```

控制台输出：

```
Hello World!
```

- go build 是编译 go 源码，生成可执行文件，在编译过程中，除了自己写的代码外，如果使用了第三方的包，这些包会被一同编译。当我们执行 go build 命令，会搜索当前目录下的 go 源码并完成编译。只编译某个 go 源码文件或包，可在 go build 命令后添加文件或包名。就像我们上面的例子
- go run 是直接运行 go 源码，**不在当前目录下生成任何可执行的文件**。本质上，go run 只是将编译后生成的可执行文件放到临时目录中执行，工作目录仍然为当前目录。注意：go run 命令同样会执行编译操作；go run 不适用于包的执行
- go install 命令的作用和 go build 类似，都是将源码编译为可执行的文件，区别在于：

  - go install 命令在编译源码后，会**将可执行文件或库文件安装到约定的目录下，生成的可执行文件使用包名来命名**
  - 默认情况下，go install 命令会将可执行文件安装到 `GOPATH\bin` 目录下，依赖的三方包会被安装到 `GOPATH\bin` 目录下

- go get 命令的作用是获取源码包，这一操作包含两个步骤，分别是下载源码和执行 go install 命令进行安装。使用时，仅需将源码仓库地址追加到 go get 后即可（访问 `pkg.go.dev/`，搜索包名，在包详情页可以找到仓库地址）
  - `go get github.com/xx/xx`
  - 若要指定所获取源码包的版本，可以通过添加“@版本号”的方式执行。如：`go get github.com/xx/xx@x.y.z`

## 变量的声明和赋值

声明就是对内存发出的"占位"指令，用来存放数据。并且 go 属于静态语言，数据类型在编译时确定。

```go
var name type
```

- var 是声明变量的关键字
- name 变量名
- type 变量的数据类型

```go
//声明一个名为number的变量，类型为int（整数类型）
var number int
//为number赋值
number = 100

// 或者
var number int = 100
```

变量还存在一种非常精简的声明与赋值：

```go
//变量声明
number := 100
```

:::caution
`:=` 是声明和赋值，若 number 是已经声明过的变量，则无法使用 `:=` 的方式赋值
:::

## 常量的声明和赋值

```go
const name type = value
```

> 与变量不同，声明常量时，必须为其赋值

## 类型推断

由于 number 的值为 100，Go 语言会推断出它的类型为整数型。同理，PI 也会被推断为浮点数型。

```go
//变量声明
var number = 100
//常量声明
const PI = 3.14
```

## 批量声明/赋值

方便的对多个变量和常量进行声明和赋值：

```go
//变量
var (
        //声明+赋值
        number int = 100
        //声明+赋值（类型推断）
        text = "Hello"
        //只声明
        name string
)
//常量
const (
        // PI 声明+赋值
        PI float64 = 3.14
        // WIDTH 声明+赋值（类型推断）
        WIDTH  = 5
        // HEIGHT 声明+赋值（类型推断）
        HEIGHT = 10
)
```

## 基本数据类型

- 整数 int 系列
- 浮点数 float 系列
- 复数 complex 系列
- 布尔型（bool）
- 字符串型(string)

## 类型转换

类型转换有两个要注意的地方

- 只能进行相同类别的转换，如将 int32 转换为 int64 （都是数值类型）。不同类别的转换将引发编译时错误，如将 bool 转换为 string

- 若将取值范围较大的类型转换为取值范围较小的类型，且实际值超过取值范围较小的类型时，将发生精度丢失的情况

```go
//声明float32型变量exampleFloat32并赋值
var exampleFloat32 float32 = 150.25
//将exampleFloat32转换为float64类型，并将结果赋值给exampleFloat64
exampleFloat64 := float64(exampleFloat32)
//输出exampleFloat64的类型和值
fmt.Println(reflect.TypeOf(exampleFloat64), exampleFloat64) // float64 150.25
//将exampleFloat32转换为int32类型，exampleInt32
exampleInt32 := int32(exampleFloat32)
//输出exampleInt32的类型和值
fmt.Println(reflect.TypeOf(exampleInt32), exampleInt32) // int32 150
```

## 指针类型

- 获取变量的内存地址 —— `&`
- 获取某个地址对应的值 —— `*`

```go
// 变量（整数型变量）声明和赋值
var exampleNumberA int = 10
//获取变量的地址，并赋值给变量变量（变量的类型是指针类型） *int
// var exampleNumberA *int
// exampleNumberA = &exampleNumberA
exampleNumberA := &exampleNumberA
//输出 exampleNumberA 的值（将输出内存地址）
fmt.Println(exampleNumberA)
//获取变量（指针变量）表示的实际数据值，并赋值给 exampleNumberAValue 变量（整数型变量）
exampleNumberAValue := *变量
//输出变量Value变量（整数型变量）的值
fmt.Println(exampleNumberAValue)
```

还可以使用 `new()` 函数直接创建指针变量，就是**在内存中创建指定数据类型的没有变量名的指针变量**：

```go
new(type)
```

type 是所在地址存放的数据类型

```go
//使用 new() 函数创建名为 exampleNumberAPtr 指针类型变量，表示int64型值
exampleNumberAPtr := new(int64)
//修改 exampleNumberAPtr 表示的实际数据值
*exampleNumberAPtr = 100
//获取 exampleNumberAPtr 表示的实际数据值
fmt.Println(*exampleNumberAPtr) // 100
```

## 数组、切片、集合

### 数组

go 要求数组中所有元素均为相同的类型，声明数组的方式：

```go
var array_name [quantity]Type
```

- var 关键字用于声明变量
- array_name 表示数组名
- quantity 表示数组元素个数
- Type 表示元素类型

赋值：

```go
array_name[index] = Value
```

```go
var resultArray [4]int
resultArray[2] = 5

[2 3 5 7]
```

### 切片

切片是**存放不定元素个数的数据结构**

切片的声明为：

```go
var slice_name []Type
```

和数组的区别是去掉了元素个数。

切片的赋值（扩充）：

```go
slice_name = append(slice_name, value)

[2 3 5 7 11 13 17 19 23 29]
```

`slice_name` 表示已声明的切片变量名，`value` 表示具体的数据值

`append()` 函数本身并不会改变原有切片，只是将切片扩容后的结果作为函数返回值。因此，需要将扩容后的结果再次赋值给 slice_name

### 集合

集合：键-值对的数据集，注意**键不允许重复**。

声明集合的方式：

```go
// var用于声明变量；map_name 表示集合的变量名；key_type 表示键的类型；value_type 表示值的类型
var map_name = make(map[key_type]value_type)
```

注意：集合要求**所有键均为相同的类型，所有值均为相同类型**

```go
var studentInfos = make(map[string]string)
studentInfos["001"] = "lilei"
// 若对一个已经存在数据的“键”再次赋值，原有的数据将被覆盖
studentInfos["001"] = "hanmeimei"

map[0001:王小红 0002:李小明 0003:张三丰 0004:孙小贝 0005:何明明]
```

:::tip
我们可以用 `len(variable)` 拿到 数组、切片或者集合的 "长度"，即元素数量

for-range 键值循环，可以遍历数组、切片、字符串、map 及通道（channel）：

```go
for index, value := range variable {
    // 循环体
}
```

需要要注意的是，val 始终为集合中对应索引的值拷贝，因此它一般只具有只读性质，对它所做的任何修改都不会影响到集合中原有的值。一个字符串是 Unicode 编码的字符（或称之为 rune ）集合，因此也可以用它来迭代字符串（只不过输出的 val 是 rune 类型）。
:::

## 函数

```go
func function_name([params_list])([return_values_list]){
    // 函数体
}

func test(value string) string{
    return value
}

// 递归
func main() {
   fmt.Println(calcFactorial(5))
}

// 声明了返回值的 name 和 type
func calcFactorial(n int) (result int) {
   if n > 0 {
      result = n * calcFactorial(n-1)
      return result
   }
   return 1
}
```

### 值传递和引用传递

直接传递一个变量名到另一个函数中，属于值传递。按照 Go 代码的执行策略，发生值传递时，将在另一个函数中自动生成一个值的副本。

引用传递在函数间传递的是指针，指针就是内存地址。

```go
func main() {
   var resultSlice []int
   findPrimeNumber(&resultSlice, 10)
   fmt.Println(resultSlice, reflect.TypeOf(&resultSlice), &resultSlice) // [2 3 5 7] *[]int &[2 3 5 7]
}

func findPrimeNumber(result *[]int, max int) {
   for i := 2; i < max; i++ {
      //假定i为素数
      flag := true
      for j := 2; j < i; j++ {
         if i%j == 0 {
            //当i能被某个整数整除时，不是素数
            flag = false
         }
      }
      //如果依旧为true，则i为素数
      if flag {
         //将素数存放到result数组中
         *result = append(*result, i)
      }
   }
}
```

### 匿名函数

匿名函数的定义和普通函数类似，只不过没有函数名，可以将匿名函数赋值给变量，便于在函数间传递，从而实现回调机制。

```go
func main() {
   // 定义匿名函数
   exampleVal := func(text string) {
      fmt.Println(text)
   }
   exampleVal("通过变量调用匿名函数")
}

func main() {
   // 定义匿名函数
   func(text string) {
      fmt.Println(text)
   }("定义时就调用")
}
```

### 闭包

闭包 = 函数+自由变量

```go
func createPlayer(name string, career string, gender string) func() (string, string, string, int, int) {
   var hp = 0
   var mp = 0
   if career == "战士" {
      hp = 150
      mp = 100
   } else if career == "法师" {
      hp = 100
      mp = 200
   }
   // 闭包
   return func() (string, string, string, int, int) {
      return name, career, gender, hp, mp
   }
}
```

## 结构体

结构体是由一系列具有相同类型或不同类型的数据构成的数据集合（可以是基本数据类型，也可以是其它结构体）。

```go
// 结构体的定义
type StructName struct {
   // 属性字段 （不允许重复）
}

type Player struct {
   // 角色名
   name string
   // 职业
   career string
   // 性别
   gender string
}

// 结构体的声明和初始化
playerA := Player{
   name:   "111",
   career: "00",
   gender: "男",
}

fmt.Println(playerA) // {111 00 男}

// 可以一次性地赋值所有字段，也可以只赋值部分字段，甚至不赋值
playerA := Player{
   name:   "111",
   gender: "男",
}

playerA := Player{}
```

Go 语言提供了更简洁的方式，但是要注意顺序并且要一次性赋值：

```go
playerA := Player{
    "111",
    "00",
    "男",
}
```

改变结构体内属性值的方法很简单：

```go
变量名.属性名=值

// 如果我们想单独获取playerA变量的某个属性值
fmt.Println(playerA.name)
```

### 匿名结构体

同样允许全部赋值，也允许部分赋值

```go
wishingTree := struct {
   height   float64
   width    float64
   treeType string
}{
   height:   22.5 * 100,
   width:    50,
   treeType: "banyan"}

fmt.Println(wishingTree) // {2250 50 banyan}
```

### 结构体方法

```go
func (接收器变量 接收器类型) 方法名(参数列表) (返回参数) {
    函数体
}

// 举例
type Dog struct {
   Breed  string
   Age    int
   Weight float64
   Gender int
}

func NewDog(breed string, age int, weight float64, gender string) *Dog {
   genderValue := 0
   if gender == "公" {
      genderValue = 0
   } else if gender == "母" {
      genderValue = 1
   }
   return &Dog{
      Breed:  breed,
      Age:    age,
      Weight: weight,
      Gender: genderValue,
   }
}

func main() {
   fatShibaInu := NewDog("Shiba Inu", 2, 12.0, "公")
   weakShibaInu := NewDog("Shiba Inu", 2, 7.0, "公")
   fmt.Println(fatShibaInu) // &{Shiba Inu 2 12 0}
   fmt.Println(weakShibaInu) // &{Shiba Inu 2 7 0}
}

func (d *Dog) GetGender() string {
   if d.Gender == 0 {
      return "公"
   } else if d.Gender == 1 {
      return "母"
   }
   return ""
}

// 定义方法
func (d *Dog) GetGender() string {
   if d.Gender == 0 {
      return "公"
   } else if d.Gender == 1 {
      return "母"
   }
   return ""
}

fmt.Println(fatShibaInu.GetGender()) // 公
```

### 组合

组合是有点类似继承的概念，Go 语言中的组合，是通过结构体的嵌套来实现的

```go
type Animal struct {
   Name   string
   Age    int
   Gender string
}

type Dog struct {
   Color        string
   CommonAnimal Animal
}

func NewDog(name string, age int, gender string, color string) *Dog {
   return &Dog{
      Color: color,
      CommonAnimal: Animal{
         Name:   name,
         Age:    age,
         Gender: gender,
      },
   }
}

func (d *Dog) Bark() {
   fmt.Println("汪汪汪！")
}

func main() {
   dog := *NewDog("小狗", 2, "公", "黄色")
   fmt.Println(dog) // {黄色 {小狗 2 公}}
   dog.Bark() // 汪汪汪！
}
```

```go
package main

import (
    "fmt"
)

type A struct {
}

func (*A) Hello(name string) {
    fmt.Println("hello " + name + ", i am a")
}

type B struct {
    *A
}

func main() {
    name := "Lee"
    a := A{}
    a.Hello(name) //hello Lee, i am a
    // b := B{&A{}}， b在赋值的时候，值语义里需要创建一个A类型的指针，赋值给B中的匿名变量
    b := B{&A{}}
    b.Hello(name) //hello Lee, i am a
}
```

## 接口

```go
// ImageDownloader 图片加载接口
type ImageDownloader interface {
	// FetchImage 获取图片，需要传入图片地址，方法返回图片数据
	FetchImage(url string) string
}

type fileCache struct {
}

func (f *fileCache) FetchImage(url string) string {
	return "从本地缓存中获取图片：" + url
}

//定义从网络下载图片的结构体
type netFetch struct {
}

//FetchImage接口实现
func (n *netFetch) FetchImage(url string) string {
	return "从网络下载图片：" + url
}

func main() {
	//从本地缓存中获取数据
	var imageLoader ImageDownloader
    // 接口赋值
	imageLoader = new(fileCache)
	data := imageLoader.FetchImage("https://www.example.com/a.png")
	fmt.Println(data)
	if data == "" {
		// 当本地缓存中没有数据时，从网络下载
		var imageLoader2 ImageDownloader
		imageLoader2 = new(netFetch)
		data2 := imageLoader2.FetchImage("https://www.example.com/a.png")
		fmt.Println(data2)
	}
}

```

接口赋值可以参考：[接口赋值](https://cloud.tencent.com/developer/article/1482676)

- 一般用结构体的指针传入。因为如果用结构体实例，可能会导致“结构体没有实现接口中某个方法”的错误

### 范型

go 中的范型用空接口来实现：

```go
interface{}
```

空接口能接纳所有类型的数据，因此可以将任何类型的数据赋值给它的变量

```go
func main() {
   dataOutput("Hello") // Hello string
   dataOutput(123) // 123 int
   dataOutput(true) // true bool
}

func dataOutput(data interface{}) {
   fmt.Println(data, reflect.TypeOf(data))
}
```

> 获取数据类型的函数是 `reflect.TypeOf(i interface{})`。这个函数所需的参数类型也是空接口类型，即泛型。

### 动态类型

变量除了有静态类型外（变量声明中的类型），接口变量还有动态类型。就是在当前接口类型变量中设置的一种类型的值。

在程序执行的过程当中，接口类型的变量具有相同的静态类型，但是其动态类型会随着其实现的接口不同，而其值也会随之改变。

```go

type I interface {
    walk()
}

type A struct{}

func (a A) walk() {}

type B struct{}

func (b B) walk() {}

func main() {
    var i I
    i = A{}  // i 的动态类型是 A 静态类型都是 I
    // %T	输出值的类型
    fmt.Printf("%T\n", i.(A)) // main.A
    i = B{}  // i 的动态类型是 B 静态类型都是 I
    fmt.Printf("%T\n", i.(B)) // main.B
}
```

### 类型断言

Go 语言中，用来判断某个数据是否属于某种类型的方法被称为“类型断言”

```go
value, ok := x.(T)
```

x 表示一个接口的类型，T 表示一个具体的类型（也可为接口类型）

该断言表达式会返回 x 的值（也就是 value）和一个布尔值（也就是 ok），可根据该布尔值判断 x 是否为 T 类型：

- 如果 T 是具体某个类型，类型断言会检查 x 的动态类型是否等于具体类型 T。如果检查成功，类型断言返回的结果是 x 的动态值，其类型是 T。
- 如果 T 是接口类型，类型断言会检查 x 的动态类型是否满足 T。如果检查成功，x 的动态值不会被提取，返回值是一个类型为 T 的接口值。
- 无论 T 是什么类型，如果 x 是 nil 接口值，类型断言都会失败。

> T 是具体类型检查成功就返回 x ；接口类型检查成功就返回 T

举例：

```go
package main
import (
    "fmt"
)
func main() {
    var x interface{}
    x = 10
    value, ok := x.(int)
    fmt.Print(value, ",", ok) // 10,true
}


package main
import (
    "fmt"
)
func main() {
    var a int
    a = 10
    getType(a)
}
func getType(a interface{}) {
    switch a.(type) {
    case int:
        fmt.Println("the type of a is int") // the type of a is int
    case string:
        fmt.Println("the type of a is string")
    case float64:
        fmt.Println("the type of a is float")
    default:
        fmt.Println("unknown type")
    }
}
```
