import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { map, Observable } from "rxjs";

export class ExcludeNullInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    console.log("Transforming null values into empty strings")

    return next.handle()
      .pipe(map((obj: {[k: string]: string}) => {
        for(const k in obj) {
          if(obj[k] === null) obj[k] = "";
        }

        return obj;
      }));
  }

}