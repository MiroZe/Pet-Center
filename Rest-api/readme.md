# REST-api for Angular course in SoftUni

## Getting started
Let's make our first API request to the REST-api!

In the example below, we're trying to get information about the REST-api:

```https://localhost:3000/api/test```

Here is the response we get:

```
{
    "name": "rest-api",
    "version": "1.0.0",
    "description": "REST-api for back-end of Angular course workshop in SoftUni",
    "main": "index.js",
}
```

If your response looks slightly different don't panic. This is probably because more data has been added to the API since I made this documentation.

## Base URL
The Base URL is the root URL for all of the API, if you ever make a request to the API and you get back a 404 NOT FOUND response then check the Base URL first.

The Base URL for the API is:

```https://localhost:3000/api```

The documentation below assumes you are prepending the Base URL to the endpoints in order to make requests.

## Authentication
This API isn't open API. Authentication is required to store and get data. You can use the connected REACT-app to make registration and sign in. This also means that I've limited what you can do. If you find a mistake, then just write an issue.

# Endpoints: Users

* ```/users/register``` -- signing up;
* ```/users/login``` -- signing in;
* ```/users/logout``` -- logging out;

## Register User
Signs up user and returns the registered data as json.

### URL --> ```/users/register```

### Method --> ```POST```

### Body -->

```
{
    "name":"John Doe",
    "email":"john@email.com",
    "username":"Johny",
    "password":"12345",
    "rePassword":"12345",
    "location" : "Sofia",
    "tel": "12345"
}
```

Required:
```username``` : [string] -- Teh username of the person is required.

```email``` : [string] -- The email of the person is required and must be unique;

```location``` : [string] -- The username of the person is required.

```password``` : [string] -- The password of the person is required and must be unique, also there is a minimum length of 5 chars, allowed are latin letters and numbers;

Not Required

```tel``` : [string] -- Optional;

### Success Response:

Code: 200

Content: 
``` 
{
    
    "favorites": [],
    "_id": "5f1875690916010017964978",
    "name": "John Doe",
    "email": "john@email.com",
    "username": "Johny",
    
}
```

### Error Response:

Code: 409 CONFLICT

Content: 
```
{
    "message": "This email/username is already registered!"
}
```

## Login User
Signs in user and returns the registered data as json.

### URL --> ```/users/login```

### Method --> ```POST```

### Body -->

```
{
    "email":"johny@mail.com",
    "password":"12345"
}
```

Required:

```username``` : [string] -- The username of the person 

```password``` : [string] -- The password of the person 

### Success Response:

Code: 200

Content: 
``` 
{
    
    "_id": "5f1875690916010017964978",
    "username": "John Doe",
    "email": "john@email.com",
    "location": "Sofia",
    "tel?" :1111
   
}
```

### Error Response:

Code: 401 Unauthorized

Content: 
```
{ 
    "message": "Wrong username or password"
}
```

## Logout User
Logout user.

### URL --> ```/users/logout```

### Method --> ```POST```

### Success Response:

Code: 401 Unauthorized

Content: 
``` 
{ 
    "message": "Logged out!"
}
```

# Endpoints: pets

* ```/pets```
* ```/pets/:petId```

## Get Pets
Returns all themes as json.

### URL --> ```/pets```

### Method --> ```GET```

### Success Response:

Code: 200

Content: 
``` 
[
    {
        
        "_id": "5f858dd2d895ad23602db9d4",
        "type": "cat/dog",
        breed : "Some breed",
        name: "Pet`s name",
        gender: "male/female",
        age: "pet`s age",
        location: "Some place",
        tel: "telephone number",
        email: "email fo pet`s owner",
        description: "some description" 

        

        
        "__v": 0
    }
]
```

### Error Response:

Code: 500 Internal Server Error

Content: 
```
{
    message: "Something went wrong!"
}
```

## Post Theme
Creates new Theme with the first post of the author and returns the theme as json.

### URL --> ```/pets```

### Method --> ```POST```

### Body -->

```
{
    "type": "cat/dog",
        breed : "Some breed",
        name: "Pet`s name",
        gender: "male/female",
        age: "pet`s age",
        location: "Some place",
        tel: "telephone number",
        email: "email fo pet`s owner",
        description: "some description" 
}
```




### Error Response:

Code: 500 Internal Server Error

Content: 
```
{
    message: "Something went wrong!"
}
```

## Details of  Pets
Get details of a pet.

### URL --> ```/pets/:petsId```

### Method --> ```GET```


### Success Response:

Code: 200

Content: 
``` 

{
    "type": "cat/dog",
        breed : "Some breed",
        name: "Pet`s name",
        gender: "male/female",
        age: "pet`s age",
        location: "Some place",
        tel: "telephone number",
        email: "email fo pet`s owner",
        description: "some description" 
}

```

### Error Response:

Code: 500 Internal Server Error

Content: 
```
{
    message: "Something went wrong!"
}
```


## Edit Pet
Edit Pet if the user is the author of the post and returns the changed post.

### URL --> ```/pets/:petId

### Method --> ```PUT```


### Success Response:

Code: 200

Content: 
``` 
{
    "type": "cat/dog",
        breed : "Some breed",
        name: "Pet`s name",
        gender: "male/female",
        age: "pet`s age",
        location: "Some place",
        tel: "telephone number",
        email: "email fo pet`s owner",
        description: "some description" 
}

### Error Response:

Code: 401 Unauthorized

Content: 
```
{
    message: "Not allowed!"
}
```

Code: 500 Internal Server Error

Content: 
```
{
    message: "Something went wrong!"
}
```

## Delete Pet
Deletes Poet if the user is the author of the post and returns the deleted post.

### URL --> ```/pets/:petId```

### Method --> ```DELETE```

### Success Response:

Code: 200

Content: 
``` 
{
 
}
```

### Error Response:

Code: 401 Unauthorized

Content: 
```
{
    message: "Not allowed!"
}
```

Code: 500 Internal Server Error

Content: 
```
{
    message: "Something went wrong!"
}
```





<!-- users
.post /register - register new user
.post /login - login user
.post /logout - logout user

.get /profile - get user info
.post /profile - post user info
.put /profile - edit user info




<!-- http://localhost:3000/api/users/register --  {"name":"SomeName","email":"some@email.com","username":"someUsername","password":"12345","rePassword":"12345"} -->

