import express from "express";
const app=express();
const students=[
    {
        id: 1,
        name: "Yasmin",
        city: "Tanta",
    },
    {
        id: 2,
        name: "Yara",
        city: "Tanta",
    }

]
const studentsfun=(request,response)=>{
    let output="<ul>";
    for(let i=0;i<students.length;i++){
        const student=students[i];
        output+="<li>"+student.name+"</li>";
    }
    output+="<ul>";
    response.send();
};
app.get('/students',studentsfun);

app.listen(5000);