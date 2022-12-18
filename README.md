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

# step - 1

```javascript
const getData = function(){
   const xhr = new XMLHttpRequest(); 
}
getData();



```
# step - 2 open()

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

# step - 5 (newtwork e data show korbe)

![Screenshot 2022-12-18 112131](https://user-images.githubusercontent.com/48369328/208282873-c5ffd48b-210a-447b-ad49-2963b83137e6.png)

# step - 6 (console e data এ data show করার জন্যে onload event use করতে হবে  )

```javascript

const getData = function(){
   const xhr = new XMLHttpRequest();
   xhr.open('GET','https://jsonplaceholder.typicode.com/posts');
   xhr.onload = function(){
      let data = xhr.response;
      console.log(data);
   };
   xhr.send();  
}
getData();

```

onload event এর মদ্যে data process করব । 
data টা xhr.response property এর মদ্যে তকবে 
data =xhr.response 
console.log(data);
এর ফলে data console এ show করবে 

# step-7(json format to javascript object format) JSON.parse()
![Screenshot 2022-12-18 115612](https://user-images.githubusercontent.com/48369328/208283858-50d67b3a-3e7e-4b7d-8865-54a43dbd0132.png)

```javascript
const getData = function(){
   const xhr = new XMLHttpRequest();
   xhr.open('GET','https://jsonplaceholder.typicode.com/posts');
   xhr.onload = function(){
      let data = xhr.response;
      console.log(JSON.parse(data));
   };
   xhr.send();  
}
getData();
```


![image](https://user-images.githubusercontent.com/48369328/208284027-38bf2aa4-4f18-4e62-a8e5-455adec55dd3.png)

# step -10 onerror

```javascript
const getData = function(){
   const xhr = new XMLHttpRequest();
   xhr.open('GET','https://jsonplaceholder.typicode.como/posts');
   xhr.onload = function(){
      let data = xhr.response;
      console.log(JSON.parse(data));
   };
   xhr.onerror = function(){
      console.log('error is here');
   }
   xhr.send();  
}
getData();

```
 onerror event will find the error
 i change here  https://jsonplaceholder.typicode.com/posts to https://jsonplaceholder.typicode.como/posts
 
 onerror event will find the error
 
![Screenshot 2022-12-18 130106](https://user-images.githubusercontent.com/48369328/208285720-b3236e1d-b3ac-4315-94a8-c5de99a7ab90.png)


এভাবে request make করতে হয় XMLHttpRequest() এর মদ্যমে  

# কিভাবে multiple request করা হয় 

```javascript
const makeRequest = function(method,url){
   const xhr = new XMLHttpRequest();
   xhr.open(method,url);
   xhr.onload = function(){
      let data = xhr.response;
      console.log(JSON.parse(data));
   };
   xhr.onerror = function(){
      console.log('error is here');
   }
   xhr.send();  
}


const getData = function(){
   makeRequest('GET','https://jsonplaceholder.typicode.com/posts');
}
getData();
```

# কিভাবে post request করা হয় 
method হবে post 
url হবে
1. title body userid দিতে হবে 
2. open() এবং send() function এর মাজে etRequestHeader('Content-type','application/json') দিতে হবে 
3. data কে JSON.stringify(data1) করতে হবে 
4. send(JSON.stringify(data1)) 

```javascript
const makeRequest = function(method,url,data1){
   const xhr = new XMLHttpRequest();
   xhr.open(method,url);
   xhr.setRequestHeader('Content-type','application/json');
   xhr.onload = function(){
      let data = xhr.response;
      console.log(JSON.parse(data));
   };
   xhr.onerror = function(){
      console.log('error is here');
   }
   xhr.send(JSON.stringify(data1));  
}


const getData = function(){
   makeRequest('GET','https://jsonplaceholder.typicode.com/posts');
}
const postData = function(){
   makeRequest('POST','https://jsonplaceholder.typicode.com/posts',{
      title: 'foo',
      body: 'bar',
      userId: 1,
   });
}
postData();
```


![Screenshot 2022-12-18 194550](https://user-images.githubusercontent.com/48369328/208301801-5b915eff-9a86-4658-aa7d-61130cb99d00.png)

# কিভাবে update request করা হয় 
```javascript 
const makeRequest = function(method,url,data1){
   const xhr = new XMLHttpRequest();
   xhr.open(method,url);
   xhr.setRequestHeader('Content-type','application/json');
   xhr.onload = function(){
      let data = xhr.response;
      console.log(JSON.parse(data));
   };
   xhr.onerror = function(){
      console.log('error is here');
   }
   xhr.send(JSON.stringify(data1));  
}


const getData = function(){
   makeRequest('GET','https://jsonplaceholder.typicode.com/posts');
}
const postData = function(){
   makeRequest('POST','https://jsonplaceholder.typicode.com/posts',{
      title: 'foo',
      body: 'bar',
      userId: 1,
   });
}
const updateData = function(){
   makeRequest('PUT','https://jsonplaceholder.typicode.com/posts/1',{
      id:1,
      title: 'foota',
      body: 'barto',
      userId: 1,
   });
}

updateData();
```

![Screenshot 2022-12-18 200449](https://user-images.githubusercontent.com/48369328/208302832-aff3d07e-38d6-4e49-993d-4b963fac74f6.png)
