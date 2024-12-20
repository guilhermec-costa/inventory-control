import { Inject, Injectable, Scope } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDTO } from './dto/product.dto';
import { CreateProductResponseDTO } from './dto/create-product-response.dto';
import { HttpService } from '../http/http.service';
import { ClientA } from 'src/http/clients/ClientA';
import { ClientB } from 'src/http/clients/ClientB';

@Injectable({
  scope: Scope.DEFAULT 
})
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @Inject("HTTP_OPTIONS_A")
    private readonly httpService: HttpService<ClientA>
  ) {}

  public async test(): Promise<void> {
    await this.httpService.get("test-route");
  }

  public async findAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  public async findOne(id: number): Promise<Product|undefined> {
    return await this.productRepository.findOne({
      where: { id }
    });
  }

  public async register(createBody: CreateProductDTO): Promise<CreateProductResponseDTO> {
    let product: Product = new Product(createBody);
    let createdProduct = await this.productRepository.save(product);

    return new CreateProductResponseDTO(createdProduct);
  }
}
