import { Controller, Get, Param, Post, Body, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, EditUserDto, UserNamePasswordDto } from './users.dto';

@Controller('users')
export class UsersController {
	constructor(private readonly userService: UsersService) {}

    @Get()
    async getAllUsers() {
		return this.userService.getAllUsers();
    }

    @Get('login')
    async getUserId(@Body() userNamePasswordDto: UserNamePasswordDto) {
        return this.userService.getUserId(userNamePasswordDto);
    }

    @Get(':userId')
    async getUserById(@Param('userId') userId: number) {
        return this.userService.getUserById(userId);
    }

    @Get('money/:userId')
    async getMoneyById(@Param('userId') userId: number) {
        return this.userService.getMoneyById(userId);
    }

    @Get('interestedCategories/:userId')
    async getInterestedCategoriesById(@Param('userId') userId: number) {
        return this.userService.getInterestedCategoriesById(userId);
    }

    @Post()
    async createNewUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.createNewUser(createUserDto);
    }

    @Patch(':userId')
    async editUser(@Param('userId') userId:number, @Body() editUserDto: EditUserDto) {
        editUserDto.userId=Number(userId);
        return this.userService.editUser(editUserDto);
    }
}
