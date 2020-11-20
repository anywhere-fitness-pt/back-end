

# Back-end : Anywhere Fitness
heroku link coming soon------


# method & endpoint
____________________________________________________
|post | /api/clients/register 

/creates new client/
____________________________________________________
|post | /api/clients/login

 |returns welcome{username} or 404 errr|
____________________________________________________
|GET | /api/clients/classes  

|clint can find class list
____________________________________________________
|POST | /api/clients/:client_id/classes/signUp/:class_id

clint can sign up for class
____________________________________________________

|GET | /api/clients/:id/classes 

|clients can look up classes by  Id|

____________________________________________________
____________________________________________________

|POST | /api/instructor/ragister


|creates a new insttructor|

____________________________________________________

|Post | /api/instructor/login

|returns welcome{username} or err message|

____________________________________________________


|GET | /api/instructor/:id/classes" 

|Returns instructorsId classes |

____________________________________________________

|POST |  /api/instructor/:instructorId/classes 

instructor can add classes
____________________________________________________

|PUT |  /api/instructor/:instructorId/classes/:id 

|instructor can update classes|
____________________________________________________

|DELETE |  /api/instructor/:instructorId/classes/:id 

|instructor can remove classes |
____________________________________________________





