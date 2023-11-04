export const createUserData = () => {
  const uniq = Date.now()
  return {
    "name": "Pavel",
    "email": `prudzko+test-${uniq}@gmail.com`,
    "password": "P123",
    "title": "Mr",
    "birth_date": "01",
    "birth_month": "January",
    "birth_year": "1999",
    "firstname": "Paw",
    "lastname": "Rud",
    "company": "Company",
    "address1": "54/58 Street St",
    "address2": "Apt 30",
    "country": "Poland",
    "zipcode": "12345",
    "state": "Mazovian",
    "city": "Warsaw",
    "mobile_number": "777" + uniq,
  }
}