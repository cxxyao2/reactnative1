    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 150,
          height: 80,
        }}
      ></View>
    </SafeAreaView>

);
}

width: 150 是基于 DIPs 概念的。
density-independent pixels ( DIPs)

physical pixels = DIPs \* Scale Factor

比如
Iphone. Model 4,4s
Points 320*480 （ 320, 480 是基于 abstract units)
Scale Factor 2x. ( = every point contains 2 pixels)
Pixels 640 * 960

在 ios 中，window 和 screen 一样 size; 对 android, window < screen
console.log(Diments.get("window"))

console.log(Diments.get("screen"))
