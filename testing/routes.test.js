import supertest from 'supertest'
import { app } from '../server'







// describe("POST /users", () => {
//     describe("given an username ", () => {

//         test("should respond with a 200 status code", async () => {
//             const response = await request(app).post("/users").send({
//                 username: "username",
                
//             })
//             expect(response.statusCode).toBe(200)
//         })
//         test("should specify json in the content type header", async () => {
//             const response = await request(app).post("/users").send({
//                 username: "username",
                
//             })
//             expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
//         })
//         test("response has userId", async () => {
//             const response = await request(app).post("/users").send({
//                 username: "username",
                
//             })
//             expect(response.body.userId).toBeDefined()
//         })
//     })
// }); 



//         // test("should specify json in the content type header", async () => {
//         //     const response = await request(app).post("/users").send({
//         //         title: "title",
                
//         //     })
//         //     expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
//         // })
//         // test("response has userId", async () => {
//         //     const response = await request(app).post("/users").send({
//         //         title: "title",
                
//         //     })
//         //     expect(response.body.userId).toBeDefined()
//         // })
//     })
// });

// describe('Users', () => {
//   it('GET /users', () => {
//     // request.get(`users?access-token=${TOKEN}`).end((err, res) => {
//     //   expect(res.body.data).to.not.be.empty;
//     //   done();
//     // });

//     return request.get(`users?access-token=${TOKEN}`).then((res) => {
//       expect(res.body.data).to.not.be.empty;
//     });
//   });

//   it('GET /users/:id', () => {
//     return request.get(`users/1?access-token=${TOKEN}`).then((res) => {
//       expect(res.body.data.id).to.be.eq(1);
//     });
//   });

//   it('GET /users with query params', () => {
//     const url = `users?access-token=${TOKEN}&page=5&gender=Female&status=Active`;

//     return request.get(url).then((res) => {
//       expect(res.body.data).to.not.be.empty;
//       res.body.data.forEach((data) => {
//         expect(data.gender).to.eq('Female');
//         expect(data.status).to.eq('Active');
//       });
//     });
//   });

//   it('POST /users', () => {
//     const data = {
//       email: `test-${Math.floor(Math.random() * 9999)}@mail.ca`,
//       name: 'Test name',
//       gender: 'Male',
//       status: 'Inactive',
//     };

//     return request
//       .post('users')
//       .set('Authorization', `Bearer ${TOKEN}`)
//       .send(data)
//       .then((res) => {
//         expect(res.body.data).to.deep.include(data);
//       });
//   });
// });


describe("Books", () => {
    describe("get book's route", () => {
        describe("if the book does not exist", () => {
            it("should return error 404", async () => {
                const book_id = "23"
                await supertest(app).get(`/api/books/${book_id}`).expect(404);
            })
        })
    })
});


