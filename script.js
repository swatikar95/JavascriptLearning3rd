// Function constructor
/*
var john={
    name: 'John',
    yearOfBirth: 1890,
    job: 'teacher'
}

 var Person = function(name,yearOfBirth,job){
     this.name = name
     this.yearOfBirth = yearOfBirth
     this.job = job
     
 }

Person.prototype.calculateAge = function(){
    console.log(2016-this.yearOfBirth)
    
}

Person.prototype.lastName = 'Smith'

 var john = new Person('John',1890,'teacher')
 var mike = new Person('Mike',1990,'teacher')

 john.calculateAge()
 mike.calculateAge()

 console.log(john.lastName)
 console.log(mike.lastName)
 */

// difference between object.create and constructor
// 1st one builds an object that inherits directly from the passed argument
// nd one inherits from contructor's prototype property

//  Object.create
/*
var personProto = {
    calculateAge: function(){
        console.log(2016-this.yearOfBirth)
    }
}

// 1st method
var john = Object.create(personProto)
john.name = 'John'
john.yearOfBirth = 1990
john.job = 'teacher'

// 2nd method
var jane = Object.create(personProto,
    {
        name: {value: 'Jane'},
        yearOfBirth: {value:1992},
        job: {value: 'designer'}
    })
*/

// Primitives
/*
var a = 23
var b = a
a = 46
console.log(a)
console.log(b)
// Objects
var obj1 = {
    name: 'John',
    age: 30
}
var obj2 = obj1
obj1.age = 36
console.log(obj1.age)
console.log(obj2.age) 

// Function
var age = 27
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
}

function change(a,b){
    a = 30
    b.city = 'NewYork'
}
change(age,obj)
// primitive will remain same but city will change
console.log(age)
console.log(obj.city)
*/

// Lecture: Passing functions as arguments
/*
var years = [1990,1991,1992,2010]

function arrayCalc(arr,fn){
    var arrRes = []
    for(var i= 0;i<arr.length;i++){
        arrRes.push(fn(arr[i]))
    }
    return arrRes
}
function calculateAge(el){
    return 2020-el
}
function isFullAge(el){
    return el>=18 
}
function maxHeartRate(el){
    if(el>=18 && el<=81){
    return Math.round(286.9-0.67*el)
    }else{
        return -1
    }
}
// we didnot call calculateAge function,arrayCalc will call it
// this is called callback function
var ages=arrayCalc(years,calculateAge)
var fulAges = arrayCalc(ages,isFullAge)
var heartRate = arrayCalc(ages,maxHeartRate)
console.log(ages)
console.log(fulAges)
console.log(heartRate)
*/

// Lecture: Functions returning functions
/* 
function interviewQuestions(job){
    if(job === 'designer'){
        return function(name){
            console.log(name+',can you explain the UX?')
        }
    }else if(job === 'teacher'){
        return function(name){
            console.log('What sub do you teach '+name+'?')
        }
    }else{
        return function(name){
            console.log('Hello '+name)
        }
    }
}
// 1st method
var teacherQuestion = interviewQuestions( 'teacher')
teacherQuestion('John')

var designrQuestion = interviewQuestions('designer')
designrQuestion('Mike')

// 2nd method
interviewQuestions('teacher')('Mark')
*/

// Lecture: Immidietly Invoked Function Expressions
// this is a private function
// it is wrapped with 1st bracket to indicate that it is a func expression, not declaration
/* (function (){
//     var score = Math.random()*10
//     console.log(score>=5)
// })()

// console.log(score)

(function (goodLuck){
    var score = Math.random()*10
    console.log(score>=5-goodLuck)
})(5)
*/

// Lecture: Closure

function retirement(retirementAge){
    var a=' years left until retirement.'
    return function(yearOfBirth){
        var age=2016-yearOfBirth
        console.log((retirementAge-age)+a)
    }
}

var retirementUS = retirement(66)
retirementUS(1990)
var retirementIndia = retirement(60)
retirementIndia(1990)
var retirementGrmany = retirement(64)
retirementGrmany(1990)
// or
// retirement(66)(1987)

// Challange
/*
function interviewQuestions(job){
    
    return function(name){
        
    if(job === 'designer'){
       
            console.log(name+',can you explain the UX?')
        }
    else if(job === 'teacher'){
        
            console.log('What sub do you teach '+name+'?')
        }
    else{
        
            console.log('Hello '+name)
        
    }
}
}
interviewQuestions('teacher')('John')
*/

// Lecture: Bind,call and apply
var john = {
    name: 'John',
    age: 28,
    job: 'teacher',
    presentation: function(style,timeOfDay){
        if(style === 'formal'){
            console.log('Good '+timeOfDay+',Ladies and gentleman.I\'m '+this.name+',I\'m a '+this.job+'.I\'m '+this.age+' years old')
        }else if(style === 'friendly'){
            console.log('Good '+timeOfDay+',Ladies and gentleman.I\'m '+this.name+',I\'m a '+this.job+'.I\'m '+this.age+' years old')
        }
    }

}
var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}
john.presentation('formal','morning')
// method borrowing
john.presentation.call(emily,'friendly','afternoon')

// john.presentation.apply(emily,['friendly','afternoon'])

var johnFriendly = john.presentation.bind(john,'friendly')
johnFriendly('morning')

var years = [1990,1991,1992,2010]

function arrayCalc(arr,fn){
    var arrRes = []
    for(var i= 0;i<arr.length;i++){
        arrRes.push(fn(arr[i]))
    }
    return arrRes
}
function calculateAge(el){
    return 2020-el
}
function isFullAge(limit,el){
    return el>=limit
}

var ages = arrayCalc(years,calculateAge)
var fullJapan = arrayCalc(ages,isFullAge.bind(this,20))
console.log(ages)
console.log(fullJapan)

 

