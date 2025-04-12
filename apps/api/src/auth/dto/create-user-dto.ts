import { IsEmail, IsString, Matches, MinLength } from 'class-validator'

export class CreateUserDto {
  @IsString()
  name: string

  @IsString()
  @IsEmail()
  email: string

  @IsString()
  @MinLength(10)
  @Matches(/[!@#$%^&*(),.?":{}|<>]/, {
    message: 'A senha deve conter ao menos um caractere especial',
  })
  password: string
}
