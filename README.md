

# Back-end : Anywhere Fitness
heroku link coming soon------

# credentials 
   

   |  Client login| |
|:-------|:--------------|
|username|_client1_|
|password|_client1_|
| Instructor login |
  |username|_kasi1_|
  |password|_123_|
    
# api endpoint

# method & endpoint
____________________________________________________
|post | api/clients/ragister 

/returns new client/
____________________________________________________
|post | api/clients/login

 |returns welcome{username} or 404 errr|
____________________________________________________
|GET | /api/classes  

|Returns all  classes
____________________________________________________

|GET | /api/classes/:id 

|Returns classes by id|

____________________________________________________

|GET | /api/instructor 

|Returns all instructor|

____________________________________________________

|GET |  /api/instructor/:instructorId/classes 

|Returns classes with instructorsId|

____________________________________________________

|POST |  /api/instructor/:instructorId/classes 

____________________________________________________

|PUT |  /api/instructor/:instructorId/classes/:id 

|update selected class|
____________________________________________________

|DELETE |  /api/instructor/:instructorId/classes/:id 

|remove selected class |
____________________________________________________





