<View
style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          shadowColor: "grey",
          shadowOffset: { width: 10, height: 10 },
          shadowOpacity: 0.5, // 0 nul ;1 dark
          elevation: 20,
        }} ></View>

      shadowColor这几个属性在android上不生效，只能用elevation搞一个很淡的阴影
