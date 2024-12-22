import { Reflector } from "@nestjs/core";

export const Cacheable = Reflector.createDecorator<string>();