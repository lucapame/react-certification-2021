const mockedUser = {
  id: '123',
  name: 'Luis Carlos ',
  avatarUrl:
    'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
};

export default async function loginApi(loginData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (loginData.username === 'luca' && loginData.password === '123') {
        return resolve(mockedUser);
      }
      return reject(new Error('Username or password invalid'));
    }, 500);
  });
}
