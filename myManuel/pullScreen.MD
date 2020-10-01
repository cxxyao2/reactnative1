# iOS Pull Screen
  <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("item is", item.title)}
            renderRightActions={() => 
            <ListItemDeleteAction 
            onPress={() => handleDelete(item)}
          />
        }
        ItemSeparatorComponent={ListItemSeparator }
        refreshing={refreshing}
        onRefresh={() => {
          setMessages(
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/mosh.jpg"),
            },
            {
              id: 3,
              title: "T3",
              description: "D3",
              image: require("../assets/mosh.jpg"),
            }
          );

          在android 模拟器上没有生效。 屏幕下拉刷新
          