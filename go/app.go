package main

import(
    "fmt"
    "time"
)

var current = time.Now()
var deadline = time.Date(2016, time.November, 8, 0, 0, 0, 0, time.UTC)

func main() {
    tillElection := deadline.Sub(current)
    toNanoseconds := tillElection.Nanoseconds()
    hours := toNanoseconds/3600000000000
    remainder := toNanoseconds%3600000000000
    minutes := remainder/60000000000
    remainder = remainder%60000000000
    seconds := remainder/1000000000
    days := hours/24
    hoursLeft := hours%24

    fmt.Printf("\nHow long until the election?\n\n%v Days %v Hours %v Minutes %v Seconds\n\n", days, hoursLeft, minutes, seconds)
}
