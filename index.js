function findMatching (drivers, name) {
    return drivers.filter(names => names.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, name) {
    return drivers.filter(driver => driver.substring(0, name.length) === name)
}

function matchName(driverObj, names) {
    return driverObj.filter(driver => driver["name"] === names)
}