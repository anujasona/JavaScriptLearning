// Get the Day name by passing day number
// 1 - Monday
// 2 - Tuesday
// 3 - Wednesday
// 7 - Sunday
var dayNumber = 4;
switch (dayNumber) {
  case 1:
    console.log(`Today is Monday`);
    console.log(`Monday is the start day of the week`);
    break;
  case 2:
    console.log(`Today is Tuesday`);
    break;
  case 3:
    console.log(`Today is thursday`);
    break;
  case 4:
    console.log(`Today is Wednesday`);
    break;
  case 5:
    console.log(`Today is Friday`);
    break;
  case 6:
    console.log(`Today is Saturday`);
    break;
  case 7:
    console.log(`Today is Sunday`);
    console.log(`Sunday is the weekly off day`);
    break;
  default:
    console.log(`Not valid value provided`);
    break;
}

console.log(`After switch case statement`);





// Get the Day name by passing day number
// 1 - Monday
// 2 - Tuesday
// 3 - Wednesday
// 7 - Sunday

var dayNumber = 9;
switch (dayNumber) {
  case 1:
    console.log(`Today is Monday`);
    console.log(`Monday is the start day of the week`);
    break;
  case 2:
    console.log(`Today is Tuesday`);
    break;
  case 3:
    console.log(`Today is Thursday`);
    break;
  case 4:
    console.log(`Today is Wednesday`);
    break;
  case 5:
    console.log(`Today is Friday`);
    break;
  case 6:
    console.log(`Today is Saturday`);
    break;
  case 7:
    console.log(`Today is Sunday`);
    console.log(`Sunday is the weekly off day`);
    break;
  default:
    console.log(`Not valid value provided`);
    break;
}

console.log(`After switch case statement`);



console.log(`__________________________________________________________\n`);
function monthOfYear(monthNumber) {
  switch (monthNumber) {
    case 1:
      console.log(`January`);
      break;
    case 2:
      console.log(`February`);
      break;
    case 3:
      console.log(`march`);
      break;

    case 4:
      console.log(`April`);
      break;

    case 5:
      console.log(`May`);
      break;

    case 6:
      console.log(`June`);
      break;

    case 7:
      console.log(`July`);
      break;

    case 8:
      console.log(`August`);
      break;

    case 9:
      console.log(`September`);
      break;
    case 10:
      console.log(`October`);
      break;

    case 11:
      console.log(`November`);
      break;

    case 12:
      console.log(`December`);
      break;

    default:
      console.log(`${monthNumber} : Default Value Provided`);
      break;
  }
}
monthOfYear();
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);