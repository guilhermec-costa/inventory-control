import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { UserService } from "src/user/user.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private readonly userService: UserService
  ) {}

  canActivate(ctx: ExecutionContext): boolean | Promise<boolean> {
    this.userService.test();
    const req = ctx.switchToHttp().getRequest();
    return validateRequest(req);
  }
}

function validateRequest(req: any): boolean | Promise<boolean> {
  return true;
}