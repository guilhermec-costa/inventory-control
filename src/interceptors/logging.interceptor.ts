import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, tap } from "rxjs";

@Injectable()
export class LoggingInterceptor implements NestInterceptor<any> {
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    console.log("Before route handler")
    const now = Date.now();

    // route handler is triggred here
    return next.handle()
      // pointcut. Where afterwards logic is inserted
      // tap: RxJS operator
      .pipe(tap(() => console.log(`After... ${Date.now() - now}ms`)))
    ; // returns an observable
  }

}