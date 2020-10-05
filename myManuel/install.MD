
1, 获取屏幕等环境变量
npm i  expo-constants

2, handle screen swipe 
expo install react-native-gesture-handler

3, form
npm i formik@2.1.4

4 , validaton form
npm i yup

5, expo-image-picker 
select image from a cellphone,
expo install expo-image-picker

6, expo install expo-permissions
image,location...permission

7, expo install expo-location

8,reactnavigation.org navigation
npm install @react-navigation/native

expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

3 types of navigators: stack/tab/drawer
npm install @react-navigation/stack
npm install @react-navigation/bottom-tabs

4, ApiSauce: Axios + standardized errors + request response transforms + 
npm i apisauce

5, react native debugger, --3 in 1,,including chrome,redux

6, progress bar :
github.com/oblador/react-native-progessbar
npm install react-native-progress --save

Android emulator errors:
1,System UI isn"t  responding.  close app or wait?
answer: android manager-cold start- delete data----etc.

6, expo install lottie-react-native
 animation


7, offline process , detecting network status ,
expo install @react-native-community/netinfo
default: only once
import NetInfo from "@react-native-community/netinfo";
NetInfo.fetch().then((netInfo) => console.log(netInfo))

8, caching,
asyncstorage:  not encrypted, au maximum 6M, 
securestore: developed by expo group. 2m
SQlite: can use queries.

9, moment, 
npm i moment


10, react-native-expo-image-cache for image cache + progressive loading.

npm i react-native-expo-image-cache
expo install expo-blur

others:
1, Context: https://reactjs.org/docs/context.html
2, hooks: https://reactjs.org/docs/hooks-intro.html
3,reactnative: https://reactnative.dev/docs/textinput#textcontenttype 
4,lottiefiles.com
animaion icons .

