const mapping: Record<string, string> = {
  accesses: 'access',
  companies: 'company',
  documents: 'document',
  invitations: 'invitation',
  roles: 'role',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
