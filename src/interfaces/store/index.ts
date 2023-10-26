import { ProductInterface } from 'interfaces/product';
import { SupplierInterface } from 'interfaces/supplier';
import { GetQueryInterface } from 'interfaces';

export interface StoreInterface {
  id?: string;
  name: string;
  location: string;
  opening_hours: string;
  closing_hours: string;
  supplier_id: string;
  created_at?: any;
  updated_at?: any;
  product?: ProductInterface[];
  supplier?: SupplierInterface;
  _count?: {
    product?: number;
  };
}

export interface StoreGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  location?: string;
  opening_hours?: string;
  closing_hours?: string;
  supplier_id?: string;
}
