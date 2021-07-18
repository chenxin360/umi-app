export default {
  'GET /api/users': {users: [1, 2]},
  '/api/users/1': {id: 1},
  'POST /api/users/create': (req: any, res: { setHeader: (arg0: string, arg1: string) => void; end: (arg0: string) => void; }) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('ok');
  }
}
