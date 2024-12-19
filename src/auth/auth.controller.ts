import { Controller, HttpCode, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Request } from "express";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {
    console.log("AuthController initialized"); // Log para garantir que está carregando
  }

  @Post("signup")
  @HttpCode(201)
  public signup(): string {
    return this.authService.signup();
  }
}
