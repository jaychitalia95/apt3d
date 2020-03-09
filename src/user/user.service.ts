import { Injectable } from '@nestjs/common';
import { User } from './user.entity'
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

    async createUser(newUser: User) {
        return await this.userRepository.insert(newUser);
    }
}
