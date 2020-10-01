// use multi styles at the same time. the later overwrite the older..
<View style={[style1, styles.container]}> </View>

const style1 = { backgroundColor: "orange};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center'
}
});
