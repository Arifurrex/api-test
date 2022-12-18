# api-calling

frontend এ আমরা designe করে থাকি আর backend/সার্ভার  এ আমরা বিভিন্ন রকম লজিক লিখে থাকি আর এই লজিক গলো দিয়ে আমরা database
গুলো হ্যান্ডেল করে থাকি 

suppose আপনি frontend এ কাজ করছেন আর আপনার data লাগবে । তাহলে data গুলো আপনি কিভাবে পাবেন । আমরা জানি data গুলো database এ রয়েছে আর database কে handle করছে মূলত সার্ভার । এর মানে frontend থেকে server এ call দিতে হবে data পাওয়ার জন্যে । 
সেটা হতে পারে database থেকে data পাওয়ার জন্যে 
হতে পারে database এ data update করতে 
অথবা frontend থেকে নুতন data send করতে চাইছি 
কিংবা data delete করতে চাইছি 


এই বিভিন্ন ধরনের request আমরা frontend থেকে server এ send করতে চাইছি । সেই জন্যে আমার একটা লিংক লাগবে । সেই লিংক টা হচ্ছে api 

server যখন তৈরি করা হয় তখন এই api গুলো তৈরি করা হয় । এই জন্যে যাতে frontend থেকে server এর মধে connection এর জন্যে এই api গুলো তৈরি করা হয় 


তাহলে api গলো হল একটা link  বা url যার মদ্যমে ফ্রন্টএন্ড এর সাতে বককেন্ড এর relation করতে পরি এবং বিভিন্ন ধরণে request সেন্ড করতে পারি 
সেই request হতে পারে get ,put,fetch ,update ,patch,delete,post 

APIs, short for Application Programming Interfaces, সফ্টওয়্যার থেকে সফ্টওয়্যার ইন্টারফেস। Meaning, তারা বিভিন্ন অ্যাপ্লিকেশনকে একে অপরের সাথে কথা বলার এবং তথ্য বা কার্যকারিতা বিনিময় করার অনুমতি দেয়।

## javascript থেকে 4 টা উপায়ে api call করতে পরি 
1. XMLHttpRequest
2. fetch
3. axios
4. jquery

# XMLHttpRequest 
is one old request .

```console
console.log(window)
```
![Screenshot 2022-12-17 004140](https://user-images.githubusercontent.com/48369328/208167456-4ae0f5a6-f1e5-450d-9169-9e0959615e5b.png)


```javascript
const getData = function(){
   const xhr = new XMLHttpRequest();
   //i will get every property and method and event from creating new object of XMLHttpRequest
   console.log(xhr);  
}
getData();

```

![Screenshot 2022-12-17 115030](https://user-images.githubusercontent.com/48369328/208227578-1a1336ec-6568-4276-86d4-2d2aa5794eaa.png)

###  i will get every property and method and event from creating new object of XMLHttpRequest
 1. event - onload(), onerror()
 2. property- response, responseType ,
 3. function -  open() ,send() ,setRequestHeader()

#step - 1

```javascript
const getData = function(){
   const xhr = new XMLHttpRequest(); 
}
getData();



```
#step - 2 open()

```javascript

const getData = function(){
   const xhr = new XMLHttpRequest();
   xhr.open('GET','URL')  
}
getData();

```
xmlHttpRequest() object এর open() method call করব । open() method 2 টা argument receive করবে । 

#step - 3 set fake api in open() 

[fake api link](https://jsonplaceholder.typicode.com/guide/)


```javascript
const getData = function(){
   const xhr = new XMLHttpRequest();
   xhr.open('GET','https://jsonplaceholder.typicode.com/posts/1')  
}
getData();

```

#step - 4 send()

```javascript
const getData = function(){
   const xhr = new XMLHttpRequest();
   xhr.open('GET','https://jsonplaceholder.typicode.com/posts/1');
   xhr.send();  
}
getData();
```
