import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class IncrementOnePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    // metadata: body, query, param, custom
    return value + 1;
  }
}