import { Controller, HttpCode, HttpException, HttpStatus, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signup")
  @HttpCode(201)
  public signup() {
  }
}
