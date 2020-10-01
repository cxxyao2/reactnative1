# react-native 中的 flex

默认 items 是垂直排列, verticals 是 primary axis,
horison 是 second axis
一般 justifyContent 是安排 primary
alignitem 是安排 second axis,

# View 来说，flexDirection 是 row 还是 column 非常重要

row, 那么,horison 就是 primary axis/ main axis,
column,那么 vertical 就是 就是 primary axis/ main axis,
justifyContent 是跟随 flexDirection 属性的。
style={{
backgroundColor: "#fff",
flex: 1,
flexDirection: "row",
justifyContent: "center"

# multiline

如果 container 中有多个 items,需要换行，
style={{
backgroundColor: "#fff",
flex: 1,
flexDirection: "row",
justifyContent: "center"
alignItems: "center",
flexWrap: "wrap",
此时 alignItem 的效果就变了，是决定沿着 secondary axis 中每行的表现，而不是全屏。

# alignContent

在多行（wrap)的情况下，如果需要把整个 container 的内容放 screen 的 center，需要使用这个属性
alignContent="center"

# item

flexBasis: 在 primary axis 上的尺寸，相当于 width 或者 height
flex: 1
flexShrink: 1
alignSelf
