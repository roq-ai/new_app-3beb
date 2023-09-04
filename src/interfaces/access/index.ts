import { DocumentInterface } from 'interfaces/document';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AccessInterface {
  id?: string;
  access_type: string;
  document_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  document?: DocumentInterface;
  user?: UserInterface;
  _count?: {};
}

export interface AccessGetQueryInterface extends GetQueryInterface {
  id?: string;
  access_type?: string;
  document_id?: string;
  user_id?: string;
}
