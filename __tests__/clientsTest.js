// const supertest =require("supertest")
// const clients =require("../index")



//   test(" clients register", ()=>{
//     const res = await supertest(clients) 
//     .post("/api/clients/register")
//     .send({
//         fullname:"kasi one",
//         username:"kasi", 
//         password:"del1"
//     })
//     expect(res.status).toBe(201);
//     expect(res.type).toBe("application/json")
//   })

//   test("clients register err", ()=>{
//     const res = await supertest(clients) 
//     .post("/api/clients/login")
//     expect(res.statusCode).toBe(409)
//     expect(res.body.message).toBe("Username is already taken")
//     expect(res.type).toBe("application/json")
//   })
    
//   test("clients login ", ()=>{
//     const res = await supertest(clients) 
//     .post("/api/clients/login")
//     .send({
//         username:"kasi", 
//         password:"del1"
//     })
//     expect(res.type).toBe("application/json")
//     expect(res.body.message).toBe(`Welcome ${client.username}!`)
//   })
//   test("clients login err ", ()=>{
//     const res = await supertest(clients) 
//     .post("/api/clients/login")
//     .send({
//         username:"kasi", 
//         password:"del1"
//     })
//     expect(res.statusCode).toBe(401)
//     expect(res.type).toBe("application/json")
//     expect(res.body.message).toBe("Invalid Credentials")
//   })


