import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable, of } from "rxjs";
import { Cacheable } from "src/decorators/cache-key.decorator";

@Injectable()
export class CacheInterceptor implements NestInterceptor {
  constructor(private reflector: Reflector) {}

  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    const key: string = this.reflector.get(Cacheable, context.getHandler());
    const cacheValue = internalCache[key];

    if(cacheValue) return of(cacheValue);

    return next.handle();
  }

}

const internalCache = {
  "some-key": "cached value",
  "some-other-key": "some other cached value"
}