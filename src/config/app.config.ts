interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Team Member', 'Collaborator'],
  tenantName: 'Company',
  applicationName: 'New_App',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage Companies',
    'Invite or remove Team Members and Collaborators to/from the Company',
    'View list of all Team Members and Collaborators in the Company',
    'View list of all Companies',
  ],
};
