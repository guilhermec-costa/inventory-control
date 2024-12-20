import { IsNotEmpty, IsString } from "class-validator";

export class CreateProductDTO {

  @IsString({
    message: "Name is not a valid text"
  })
  @IsNotEmpty({
    message: "Name can not be empty"
  })
  name: string

  constructor(pProductDTO: Partial<CreateProductDTO>) {
    Object.assign(this, pProductDTO);
  }
}