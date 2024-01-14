#NEW REPO OLD FILES CURRUPTED


# STUDENT REPORT MANAGEMENT SYSTEM

**INTRO**

**Hello , I am Harsh Bharti , 2022UGEE016,  an UG student of EE department**

 *This student report management system was a full challenge. It was tough to build from scratch, without any help in 24 hours. In this challenge, I was introduced to many new concepts. Although I have made full stack website before , this was challenging . I had to read documentation of few library that i was already filmier  with , in great depth. I thank the organizers to give me opportunity to take part in this contest, now let us explore my full-stack app.*

**GETTING-STARTED**


- to get started paste your mongoDB link in the mentioned section in the code.
- Ignore the environment variable, it has not been fully implemented , in the next version , I will add all environment specific variables to .env
- add the available port to the port section , to setup a local host.
- run `npm install` -> To install all the dependencies (try to delete the node_modules , it has been upload by mistake).
- run `npm run dev` -> to start the project locally

_STACK USED :-_

- EXPRESS (BACKEND)
- EJS (SERVER SIDE RENDERING)
- JAVASCRIPT / NODE.JS
- MONGODB (DATA STORAGE)

_LIBRERY USED :-_

- body-parser
- connect-flash
- connect-mongodb-session
- dotenv
- ejs
- express
- express-session
- http-errors
- mongoose
- morgan 
- multer
- nodemon


Note :- Special thanks to STACK-OVERFLOW Website to help in debugging the code

Link :- [https://stackoverflow.com/](url)



**EXPLAINATION**


 ###  HOME-PAGE  
![Screenshot (2751)](https://github.com/HarshBharti2601/Web_Team_Hackthon/assets/155822945/b09dd00a-2584-4263-a04f-95f7e690b92d)

_Home page is simple and can be used to display about the institute's policies_

###  LOGIN-PAGE
![Screenshot (2752)](https://github.com/HarshBharti2601/Web_Team_Hackthon/assets/155822945/9dbd5b80-e181-459f-af4a-9d4176412b15)

**A LOT IS GOING ON HERE:-**

- It will only allow the Institute added teachers to login to my website , there is not backdoor entry.
- I have used mongoDB to store the data of teachers.
- It is a fully functional loginPage
- the library I have used to talk to my database is _MONGOOSE_ 
- I have intentionally added no logic to add user via code. The data can only be _hard-coded_  into the database by the owner of the database. This is done for security reasons.


![Screenshot (2760)](https://github.com/HarshBharti2601/Web_Team_Hackthon/assets/155822945/d0a92ec3-cb51-4337-8070-ddc628e5526e)

- When user login, a session is created and a cookie is sent both to the browser and to the database , to keep the record of session

![Screenshot (2762)](https://github.com/HarshBharti2601/Web_Team_Hackthon/assets/155822945/40482c46-f3a7-4c30-86f9-c6c840d9354e)

![Screenshot (2761)](https://github.com/HarshBharti2601/Web_Team_Hackthon/assets/155822945/758d2009-4c42-4a26-b45e-14e2b530346e)

-This cookie keeps the record of authorized users and does not allow others to access the **Restricted  URLS**
- This feature is implemented using _EXPRESS-SESSION_ library and _CONNECT-MONGODB-SESSION_
-  Note:- Due to time constrains, schema validation was not added. Although I have planned to do it in the newer version using the _ZOD_ library


### DASHBOARD
_This is simple but very useful DASHBOARD_


![Screenshot (2753)](https://github.com/HarshBharti2601/Web_Team_Hackthon/assets/155822945/28f637bd-ff1e-41ab-9acd-cb40e53cd791)

**WORKING FEATURES:-**

**LOGOUT-BUTTON** 

- The Logout button is fully functional and uses _EXPRESS-SESSION_ library to delete cookie from the database, once it is clicked.
- If user tried to get back to the previous session, he/she will be re-directed to login page. 
- This is a very important safety feature.

**HOME BUTTON**  
- It redirects users to the dashboard form anywhere. 

**ADD-STUDENTS**
![Screenshot (2755)](https://github.com/HarshBharti2601/Web_Team_Hackthon/assets/155822945/4ee30c82-ecd1-4fb5-af6a-1ad608c4735f)

-It helps teachers to add students to the database.
`const subjectSchema = new mongoose.Schema({`
    `name: String,`
  `  marks: Number,`
`  });`

 ` const studentSchema = new mongoose.Schema({`
   ` name: String,`
 `   batch : String,`
    `registrationNumber: String, `
   ` semester : String,`
 `   subjects: [subjectSchema],`
 ` }); `

- It uses combined schema to store complete student data
- The data is saved into the database on clicking SUBMIT button
- You cannot add already existing user
![Screenshot (2763)](https://github.com/HarshBharti2601/Web_Team_Hackthon/assets/155822945/5571ba1b-7dc1-4654-bef1-9440c0b00b57)

**ADD-SUBJECT**

- It saves subject name and credit to the database. 

![Screenshot (2764)](https://github.com/HarshBharti2601/Web_Team_Hackthon/assets/155822945/11ae9746-97bd-4daf-b408-6acafaa96a33)

**ADD-MARKS**

- It takes advantage of the combined schema of studentSchema object mentioned above  and push marks directly to their data.
- To add marks to a student's profile we need to put in the correct reg-number, or the marks entry will be denied.
-  The data then is updated in the student mongoDB data collection
-  If Roll-Number does not match, it will refuse to add marks
![Screenshot (2757)](https://github.com/HarshBharti2601/Web_Team_Hackthon/assets/155822945/e0545ddd-9f46-425d-9445-77b48a1886f3)


**UPLODE-ASSIGNMENT**

- This was the new concept that I was introduced to in this contest, after googling I found about a library called  **multer** , I have used their online documentation to implement this feature. 
Resource :- [https://www.npmjs.com/package/multer](url)

![Screenshot (2758)](https://github.com/HarshBharti2601/Web_Team_Hackthon/assets/155822945/34f3e43d-517e-40dd-bccf-fe91556b71d4)

- This feature is fully functional, but I have not integrated this feature with database, this feature stores the uploaded data with a unique name on the local storage of server.

![Screenshot (2766)](https://github.com/HarshBharti2601/Web_Team_Hackthon/assets/155822945/83cfe994-78da-4131-bc72-3bb63d842e89)


**END :-**

- There are bugs which will be fixed in the Later Version 
- More Features will be added
- New safety features like JWT will be added.


_THANK YOU_ 
Harsh.




 





