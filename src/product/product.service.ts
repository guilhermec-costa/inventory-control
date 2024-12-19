import { Injectable } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable({})
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  public async findAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  public async findOne(id: number): Promise<Product|undefined> {
    return await this.productRepository.findOne({
      where: { id }
    });
  }
}
