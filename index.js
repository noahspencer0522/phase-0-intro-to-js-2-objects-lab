function updateEmployeeWithKeyAndValue(employee, key, value){
    return {...employee, ...{[key]:value}}
}
const employee = {}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return {...employee, ...{[key]:value}}

}

function deleteFromEmployeeByKey(employee, key){
    return {...employee, ...{[key]:value}}
    
}

const value = [key.delete]

function destructivelyDeleteFromEmployeeByKey(employee, key){
    employee[key] = value
    return {...employee, ...{[key]:value}}
}