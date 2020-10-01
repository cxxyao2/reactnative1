<TouchableWithoutFeedback onPress={() => console.log("image touched")}>
<Image
blurRadius={2}
fadeDuration={1000}
resizeMode="contain"
source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
/>
</TouchableWithoutFeedback>

resizeMode="contain" 保证图片完整显示，不被裁剪

<Card
title="Red jacket"
subTitle="\$100"
image={require("./app/assets/jacket.jpg")}
/>

Card 的定义文件中， image 是未知类型，不能直接调用，要在使用 Card 的文件中 require
return (
<View style={styles.card}>
<Image source={image} />
<AppText>{title} </AppText>
<AppText>{subTitle}</AppText>
</View>


Image = react native component
  <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>