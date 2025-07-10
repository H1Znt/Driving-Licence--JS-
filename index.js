function driver(data) {
  const [firstName, middleName, surname, dob, gender] = data;

  // 1–5: Первые 5 символов фамилии, дополненные 9
  const surnameCode = (surname.toUpperCase().padEnd(5, '9')).slice(0, 5);

  // Парсим дату
  const [day, monthStr, yearStr] = dob.split('-');
  const year = parseInt(yearStr);
  const dayNum = day.padStart(2, '0');

  // Таблица месяцев
  const months = {
    jan: '01', feb: '02', mar: '03', apr: '04', may: '05', jun: '06',
    jul: '07', aug: '08', sep: '09', oct: '10', nov: '11', dec: '12'
  };

  const monthNum = months[monthStr.slice(0,3).toLowerCase()];

  // 6: Первая цифра года
  const decadeDigit = yearStr[2];

  // 7–8: Месяц, увеличенный на 50 для женщин
  let monthCode = parseInt(monthNum, 10);
  if (gender.toUpperCase() === 'F') {
    monthCode += 50;
  }
  const monthCodeStr = monthCode.toString().padStart(2, '0');

  // 9–10: День
  const dayCode = dayNum;

  // 11: Последняя цифра года
  const yearDigit = yearStr[3];

  // 12–13: Инициалы
  const initials = firstName[0].toUpperCase() + (middleName ? middleName[0].toUpperCase() : '9');

  // 14: всегда 9
  const arbitraryDigit = '9';

  // 15–16: всегда AA
  const checkDigits = 'AA';

  return (
    surnameCode +
    decadeDigit +
    monthCodeStr +
    dayCode +
    yearDigit +
    initials +
    arbitraryDigit +
    checkDigits
  );
}