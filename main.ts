import inquirer from "inquirer"
import chalk from "chalk";

let todos= [];
let condition = true;
console.log( chalk.bgGreenBright.bold("welcome to my todos list"))


while(condition)
{
let todoQuestions= await inquirer.prompt(
    [
        {
         name:"firstQuestion",
         type:"input",
         message:chalk.bgBlue("what would you like to add in you todos?")
    },

{
    name:"secondQuestion",
    type:"confirm",
    message:"would you like to add more in your todos?",
    default:"true"
},
]
)
if (todoQuestions.firstQuestion !== ""){

    todos.push(todoQuestions.firstQuestion);
console.log(todos);
condition = todoQuestions.secondQuestion;
}
let addtask = await inquirer.prompt(
    {
        name: "deleteany",
        type:"confirm",
        message:chalk.bgRedBright("delete any from todos list?"),
        default :false
    }
)
if ( addtask.deleteany === true){
     
    let addtask2 = await inquirer.prompt(
        {
            name:"select",
            type:"list",
            message:("please select you want to delete from todo list?"),
            choices:todos
        }
    )

    if ( addtask.deleteany == true){
        for ( let i=0 ; i< todos.length; i++){
            if (addtask2.select == todos[i]){
                todos.splice(i, 1)
            }
        }
    }
}





// the loop is running on the based of this variable condition


}

console.log(chalk.bgBlueBright.bold ("MY TODOS LIST IS READY"))
let count=1;
// for of loop
for ( let val of todos){
    console.log( chalk.green.bold (`list ${count} : ${val}`))
    count++;
    
}