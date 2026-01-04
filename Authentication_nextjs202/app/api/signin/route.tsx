import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";



export async function POST(req:NextRequest){
        // ideally we should check the username and password in the db and only if it is right the 
        // we should return the jwt  after signin in a user 
        const body = await req.json();

         const username = body.username;
         const password = body.password;

         // check into the db can this user exist into the db ??
          
         const userId =1;
          const token = jwt.sign({
             userId
          },"SECRET");

          return NextResponse.json({
             token
          })
}

// this is the process of node js 

// userRouter.post("/signin", async function (req, res) {

//     const email = req.body.email;
//     const password = req.body.password;

//     try {
//         const user = await userModel.findOne({
//             email
//         })

//         if (!user) {
//             res.status(403).json({
//                 message: " your emailid and password incorrect!!😒"
//             })
//         }
//         const passwordmatch = await bcrypt.compare(password, user.password);
//         console.log(user);

//         if (passwordmatch) {
//             const token = jwt.sign({
//                 id: user._id.toString()
//             }, JWT_SECRET_USER)

//             res.json({
//                 token
//             })
//             console.log(token);
//         }
//         else {
//             res.json({
//                 message: "invalid login details !!"
//             })
//         }
//     }
//     catch (error) {
//         console.log("Invalid details Please try again later", error.messgae);
//         res.status(403).json({
//             messsage: "Your login details are invalid"
//         })
//     }
// })
 