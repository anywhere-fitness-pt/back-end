// const supertest =require("supertest")
// const instructors =require("../index")



//   test(" instructors register", ()=>{
//     const res = await supertest(instructors) 
//     .post("/api/instructor/register")
//     .send({
//         fullname:"kasi one",
//         username:"kasi", 
//         password:"del1"
//     })
//     expect(res.status).toBe(201);
//     expect(res.type).toBe("application/json")
//   })

//   test("instructors register err", ()=>{
//     const res = await supertest(instructors) 
//     .post("/api/instructor/login")
//     expect(res.statusCode).toBe(409)
//     expect(res.body.message).toBe("Username is already taken")
//     expect(res.type).toBe("application/json")
//   })
    
//   test("instructors login ", ()=>{
//     const res = await supertest(instructors) 
//     .post("/api/instructor/login")
//     .send({
//         username:"ins1", 
//         password:"123"
//     })
//     expect(res.type).toBe("application/json")
//     expect(res.body.message).toBe(`Welcome ${instroctor.username}!`)
//   })
//   test("instructors login err ", ()=>{
//     const res = await supertest(clients) 
//     .post("/api/instructor/login")
//     .send({
//         username:"ins1", 
//         password:"123"
//     })
//     expect(res.statusCode).toBe(401)
//     expect(res.type).toBe("application/json")
//     expect(res.body.message).toBe("Invalid Credentials")
//   })
