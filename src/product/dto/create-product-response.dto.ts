export class CreateProductResponseDTO {
  name: string;

  constructor(pCreateProduct: Partial<CreateProductResponseDTO>) {
    Object.assign(this, pCreateProduct);
  }
}