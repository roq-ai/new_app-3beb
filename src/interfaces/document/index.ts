import { AccessInterface } from 'interfaces/access';
import { CompanyInterface } from 'interfaces/company';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface DocumentInterface {
  id?: string;
  title: string;
  content?: string;
  company_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  access?: AccessInterface[];
  company?: CompanyInterface;
  user?: UserInterface;
  _count?: {
    access?: number;
  };
}

export interface DocumentGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  content?: string;
  company_id?: string;
  user_id?: string;
}
