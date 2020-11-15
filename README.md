

# Back-end : Anywhere Fitness
heroku link coming soon------

- Required Login credentials are as follows:
    |--------------------------------|
    |  # For Instructor              |  
    |--------------------------------|    
    |        username:kasi1          |
    |        password:123            |
    |--------------------------------|

    |--------------------------------|
    |  # For Client                  |  
    |--------------------------------|    
    |        username:client1        |
    |        password:client1        |
    |--------------------------------|

ENDPOINTS
-----------------------------------------------------------------------------------------------------
METHOD                ROUTE                                  return
-----------------------------------------------------------------------------------------------------
POST    |       /api/clients/register                      | Returns newUser                         |
POST    |       /api/clients/login                         | Returns welcome {username}/ 404 message |
GET     |       /api/classes                               | Returns all  classes                    |
GET     |       /api/classes/:id                           | Returns classes by id                   |
GET     |       /api/instructor                            | Returns all instructors                 |
GET     |       /api/instructor/:instructorId/classes      | Returns classes with instructorsId      |
POST    |       /api/instructor/:instructorsId/classes     |                                         |
PUT     |       /api/instructor/:instructorId/classes/:id  |  update selected class id               |
DELETE  |       /api/instructor/:instructorId/classes/:id  |  delete selected class id               | 
------------------------------------------------------------------------------------------------------


