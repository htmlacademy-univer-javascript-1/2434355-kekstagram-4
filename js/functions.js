function checkStringLength (string, length) {
  return string.length >= length;
}

checkStringLength('проверяемая строка', 20);
checkStringLength('проверяемая строка', 18);
checkStringLength('проверяемая строка', 10);

function isPalindrome (string) {
  string.replaceAll(' ');
  const upperString = string.toUpperCase();
  const length = string.length;
  for (let index = 0; index < length / 2; index++) {
    if (upperString[index] !== upperString[length - index - 1]) {
      return false;
    }

    return true;
  }
}

isPalindrome('топот');
isPalindrome('ДовОд');
isPalindrome('Кекс');
isPalindrome('Лёша на полке клопа нашёл ');

function printNumber(string) {
  let newNumber = '';
  for (let index = 0; index <= string.length; index++) {
    if (!parseInt(string[index], 10).isNan()) {
      newNumber += string[index];
    }
  }

  return newNumber;
}

printNumber('2023 год');
printNumber('ECMAScript 2022');
printNumber('1 кефир, 0.5 батона');
printNumber('агент 007');
printNumber('а я томат');

const toMinutesConversion = function(clockTime) {
  const hoursAndMinutes = clockTime.split(':');
  const hours = parseInt(hoursAndMinutes[0], 10);
  const minutes = parseInt(hoursAndMinutes[1], 10);
  const timeInMinutes = hours * 60 + minutes;
  return timeInMinutes;
};

const isMeetingOnTime = function(startWorkingDay, endWorkingDay, startMeeting, durationOfMeeting) {
  const startOfDay = toMinutesConversion(startWorkingDay);
  const endOfDay = toMinutesConversion(endWorkingDay);
  const startOfMeeting = toMinutesConversion(startMeeting);

  return (startOfMeeting >= startOfDay && (startOfMeeting + durationOfMeeting) <= endOfDay);
};

isMeetingOnTime('08:00', '17:30', '14:00', 90);
