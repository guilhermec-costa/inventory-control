import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";

@Injectable()
export class AuthGuard implements CanActivate {


  canActivate(ctx: ExecutionContext): boolean | Promise<boolean> {
    return true;
  }
}

function validateRequest(req: any): boolean | Promise<boolean> {
  return true;
}