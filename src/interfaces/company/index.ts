import { DocumentInterface } from 'interfaces/document';
import { InvitationInterface } from 'interfaces/invitation';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  document?: DocumentInterface[];
  invitation?: InvitationInterface[];
  user?: UserInterface;
  _count?: {
    document?: number;
    invitation?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
