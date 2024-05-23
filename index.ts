#! /usr/bin/env node

import inquirer from "inquirer"

let user_ans = await inquirer.prompt({
    type: "input",
    name: "words",
    message: "Please enter you sentence"
})

let word_count = user_ans.words.trim().split(" ").length

console.log(`Your sentense has ${word_count} words.`);