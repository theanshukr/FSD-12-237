# EventLoop


JS is Synchronous and single threaded 
bydefault

## there can be async behavious
- with BrowseAPI-
setTimeout,setinterval,setImediate,nextTrick

- with promises
- with eventHandlers
a function executed immediately after it must be executed after the while it has some status it has during the status
at final it may rsolve 

## callback
- call back function is that pass as argument or the parameter to another functions 
## modern java script divided into two categories 
- common js(cjs)
priority-nexttrick,promise,setimmediate,settimeout
- module.js(,.js)->follow modular approach->import
priority(promise,nexttick,setimmediate/settimeout
)
## fs module directly communicate with os rather than browser
the coomon operation of file or folder are 
1. file->writeFile,readFile,appendFile
2. folder->mkdir,md,readdir,,rmdir
3. File method->stack,lstack,rstack
## all function are promise so it must be call with await each



# CRUD Project
assume we are making a cart related project 
1. user can add any product (id,name,price,qty) into cart
2. user can see all the items of cart
3. user can remove itm from cart
4. user can also update quantity of product
5. all the items should be stored after temination of project