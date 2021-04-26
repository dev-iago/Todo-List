import { getCustomRepository } from 'typeorm'
import { UsersRepository } from "../repositories/UsersRepository"

class UsersService {
  async create(email: string){
    const usersRepository = getCustomRepository(UsersRepository);


    // Select * from users where email = "email" limit 1;
    const userAlreadyExists = await usersRepository.findOne({
      email
    })

    if(userAlreadyExists){
      throw new Error("User already exists!")
    }
  
    const users = usersRepository.create({
      email,
    })
  
    await usersRepository.save(users);

    return users;
  }

  async listUsers(email: string){
    const usersRepository = getCustomRepository(UsersRepository);

    const list = await usersRepository.findOneOrFail({
      email
    })
  
    return list;
  }
}

export { UsersService }