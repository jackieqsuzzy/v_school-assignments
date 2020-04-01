
var employees = []

function Employee(name, job, title, salary, status = "full-time"){
    this.name = name
    this.job = job
    this.title = title
    this.status = status
    this.printEmplyeeForm = function (){
        return this.name + " is and employee at " + this.job
    }
}
var newP = new Employee ("Haley", "Target", "Cashier","$10/hr", "part-time")
console.log(newP)
newP.status = "part-time"

var newP2 = new Employee ("Dave", "Smiths", "Stocker", "$9/hr", "full-time")

var newP3 = new Employee ("Jessica", "Salon", "Hair Dresser", "$20/hr", "full-time")


employees.push(newP, newP2, newP3)




