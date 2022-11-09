'use strict'

class AuthController
{

  async login({request, response, auth})
  {
    const {email, password} = request.only(['nombre','email', 'password'])
    const token = await auth.attempt(email,password)

    return response.ok(token);

  }

}

module.exports = AuthController
