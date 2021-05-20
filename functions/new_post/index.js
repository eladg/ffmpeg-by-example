// modern JS style - encouraged
export async function handler(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: `Hello world ${Math.floor(Math.random() * 10)}` })
  };
}
