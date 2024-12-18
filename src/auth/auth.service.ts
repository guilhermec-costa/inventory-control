import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {

  public signin(): string {
    return "signed in"
  }

  public signup(): string {
    return "signed up"
  }
}